import { chromium, devices } from "playwright";
import fs from "node:fs";

const BASE = "https://aibdf.digitaldadi.agency";
const PAGES = [
  { path: "/", name: "home" },
  { path: "/leadership", name: "leadership" },
  { path: "/events", name: "events" },
  { path: "/blog", name: "blog" },
  { path: "/blog/what-is-pemphigus-vulgaris", name: "blog-post" },
  { path: "/affiliations", name: "affiliations" },
  { path: "/impact", name: "impact" },
  { path: "/financials", name: "financials" },
  { path: "/media", name: "media" },
  { path: "/donate", name: "donate" },
  { path: "/get-help", name: "get-help" },
  { path: "/privacy", name: "privacy" },
];

const OUT_DIR = "/tmp/aibdf-mobile-audit";
fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  ...devices["iPhone 13"],
  locale: "en-IN",
});
const page = await context.newPage();

const report = [];
const consoleErrors = [];
page.on("pageerror", (err) => consoleErrors.push({ type: "pageerror", msg: String(err) }));
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push({ type: "console.error", msg: msg.text() });
});

for (const p of PAGES) {
  const url = BASE + p.path;
  const started = Date.now();
  const status = { path: p.path, url, errors: [], ok: true };
  try {
    const response = await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    status.httpStatus = response?.status();
    if (response?.status() !== 200) {
      status.ok = false;
      status.errors.push(`status ${response?.status()}`);
    }
    const title = await page.title();
    status.title = title;
    // Check body overflow
    const hasHorizScroll = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    status.horizontalScroll = hasHorizScroll;
    if (hasHorizScroll) {
      status.ok = false;
      status.errors.push("horizontal scroll overflow on mobile");
    }
    // Check main heading visible
    const h1Text = await page.locator("h1").first().textContent({ timeout: 3000 }).catch(() => null);
    status.h1 = h1Text?.trim().slice(0, 80) || "(no h1)";
    // Check nav toggle on mobile
    const mobileToggle = await page.locator("button[aria-label], .lg\\:hidden button").first().isVisible().catch(() => false);
    status.mobileMenuButton = mobileToggle;
    // Screenshot
    const shot = `${OUT_DIR}/${p.name}.png`;
    await page.screenshot({ path: shot, fullPage: true });
    status.screenshot = shot;
    status.ms = Date.now() - started;
  } catch (err) {
    status.ok = false;
    status.errors.push(String(err).slice(0, 200));
  }
  report.push(status);
  console.log(`${status.ok ? "✓" : "✗"} ${p.path} (${status.httpStatus ?? "?"}) — ${status.ms ?? 0}ms — h1: ${status.h1 ?? "?"}${status.horizontalScroll ? " — HORIZ-OVERFLOW" : ""}${status.errors.length ? " — " + status.errors.join(", ") : ""}`);
}

await browser.close();

// Summary
const pass = report.filter((r) => r.ok).length;
const fail = report.length - pass;
console.log(`\n----- MOBILE AUDIT COMPLETE -----`);
console.log(`Passed: ${pass}/${report.length}    Failed: ${fail}`);
if (consoleErrors.length) {
  console.log(`\nConsole errors captured (${consoleErrors.length}):`);
  consoleErrors.slice(0, 20).forEach((e) => console.log("  " + e.type + ": " + e.msg.slice(0, 180)));
}
fs.writeFileSync(`${OUT_DIR}/report.json`, JSON.stringify({ report, consoleErrors }, null, 2));
console.log(`\nScreenshots + report in ${OUT_DIR}/`);
