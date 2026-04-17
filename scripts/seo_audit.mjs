import { chromium } from "playwright";

const BASE = "https://aibdf.digitaldadi.agency";
const PAGES = ["/", "/about", "/leadership", "/blog/what-is-pemphigus-vulgaris", "/events/awareness-camp-pune-2026", "/faq", "/donate", "/privacy"];

const browser = await chromium.launch();
const page = await browser.newPage();
const report = [];
for (const p of PAGES) {
  await page.goto(BASE + p, { waitUntil: "networkidle", timeout: 30000 });
  const data = await page.evaluate(() => {
    const meta = (sel) => document.querySelector(sel)?.getAttribute("content") || null;
    const link = (sel) => document.querySelector(sel)?.getAttribute("href") || null;
    const jsonLd = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((s) => {
      try { return JSON.parse(s.textContent); } catch { return null; }
    }).filter(Boolean);
    return {
      title: document.title,
      description: meta('meta[name="description"]'),
      canonical: link('link[rel="canonical"]'),
      ogTitle: meta('meta[property="og:title"]'),
      ogImage: meta('meta[property="og:image"]'),
      twitterCard: meta('meta[name="twitter:card"]'),
      robots: meta('meta[name="robots"]'),
      jsonLdCount: jsonLd.length,
      jsonLdTypes: jsonLd.map((d) => Array.isArray(d["@type"]) ? d["@type"].join("+") : d["@type"]).filter(Boolean),
      h1Count: document.querySelectorAll("h1").length,
    };
  });
  report.push({ path: p, ...data });
  console.log(`${p}`);
  console.log(`   title: ${data.title}`);
  console.log(`   desc: ${(data.description || "").slice(0, 90)}${(data.description || "").length > 90 ? "…" : ""}`);
  console.log(`   canonical: ${data.canonical}`);
  console.log(`   og:image: ${data.ogImage?.slice(0, 80) ?? "(missing)"}`);
  console.log(`   h1 count: ${data.h1Count}`);
  console.log(`   JSON-LD: ${data.jsonLdCount} schemas — ${data.jsonLdTypes.join(", ")}`);
}
await browser.close();

const fails = [];
for (const r of report) {
  if (!r.title || !r.title.includes("AIBDF")) fails.push(`${r.path}: title missing or not branded`);
  if (!r.description) fails.push(`${r.path}: no meta description`);
  if (!r.canonical) fails.push(`${r.path}: no canonical URL`);
  if (!r.ogTitle) fails.push(`${r.path}: no og:title`);
  if (!r.ogImage) fails.push(`${r.path}: no og:image`);
  if (!r.twitterCard) fails.push(`${r.path}: no twitter:card`);
  if (!r.robots) fails.push(`${r.path}: no robots meta`);
  if (r.h1Count !== 1) fails.push(`${r.path}: h1 count is ${r.h1Count} (should be 1)`);
  if (r.jsonLdCount === 0) fails.push(`${r.path}: no JSON-LD schemas`);
}
console.log(`\n${fails.length ? "✗" : "✓"} SEO Audit: ${fails.length} issues`);
for (const f of fails) console.log("  - " + f);
