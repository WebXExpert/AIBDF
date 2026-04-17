import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Stripe from "stripe";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

function buildTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function escapeHtml(v) {
  return String(v ?? "").replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function renderLines(data) {
  return Object.entries(data || {})
    .map(([k, v]) => `<p><strong>${escapeHtml(k)}:</strong> ${escapeHtml(v)}</p>`)
    .join("\n");
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json({ limit: "200kb" }));

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", smtp: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER) });
  });

  // Unified form endpoint. Accepts { formType: 'contact'|'volunteer'|'help'|'general', ...fields }
  // Sends an email to CONTACT_TO (default info@aibdf.in) with fields rendered.
  app.post("/api/contact", async (req, res) => {
    try {
      const { formType = "general", honeypot, ...data } = req.body || {};

      // Honeypot anti-bot: if bots fill the hidden field, drop silently with 200
      if (honeypot) return res.json({ ok: true });

      // Basic field validation
      const email = String(data.email || "").trim();
      const name = String(data.name || "").trim();
      if (!name || name.length < 2) return res.status(400).json({ error: "Name is required" });
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "Valid email required" });

      const transporter = buildTransporter();
      if (!transporter) {
        console.warn("[/api/contact] SMTP not configured — form payload NOT emailed:", { formType, ...data });
        return res.status(503).json({
          error: "Email service is not yet configured. Please reach us at info@aibdf.in or +91-9112006844.",
        });
      }

      const to = process.env.CONTACT_TO || "info@aibdf.in";
      const from = process.env.CONTACT_FROM || process.env.SMTP_USER;
      const subjectMap = {
        contact: "New Contact Enquiry — AIBDF",
        volunteer: "New Volunteer Application — AIBDF",
        help: "New Patient Help Request — AIBDF",
        general: "New Website Message — AIBDF",
      };
      const subject = subjectMap[formType] || subjectMap.general;

      await transporter.sendMail({
        to,
        from,
        replyTo: email,
        subject,
        text: JSON.stringify({ formType, ...data }, null, 2),
        html: `<h2>${escapeHtml(subject)}</h2>${renderLines({ formType, ...data })}<hr><p style="color:#888;font-size:12px">Sent automatically from aibdf.digitaldadi.agency</p>`,
      });

      res.json({ ok: true });
    } catch (err) {
      console.error("[/api/contact] failed:", err);
      res.status(500).json({ error: "Failed to send. Please email info@aibdf.in directly." });
    }
  });

  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { amount, currency = "inr", frequency = "one-time", donorDetails } = req.body;

      if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("STRIPE_SECRET_KEY is not configured");
      }

      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2026-03-25.dahlia",
      });

      const sessionConfig = {
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: currency,
              product_data: {
                name: "Donation to AIBDF",
                description: `Support for Auto-Immune Blistering Disease Foundation`,
              },
              unit_amount: Math.round(amount * 100), // Stripe expects amount in cents/paise
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.protocol}://${req.get("host")}/donate?success=true`,
        cancel_url: `${req.protocol}://${req.get("host")}/donate?canceled=true`,
        customer_email: donorDetails?.email,
      };

      const session = await stripe.checkout.sessions.create(sessionConfig);

      res.json({ id: session.id, url: session.url });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
