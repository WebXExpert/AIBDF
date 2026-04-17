// Generates sitemap.xml and llms.txt at build time.
// Run via: node scripts/generate-sitemap.mjs
// Called from package.json build script, after vite build writes to dist/.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE = "https://aibdf.digitaldadi.agency";
const today = new Date().toISOString().slice(0, 10);

async function loadTs(name) {
  // tsx required to import .ts modules at runtime; for simplicity we parse
  // the known data files manually via regex of exported arrays.
  const txt = fs.readFileSync(path.join(ROOT, "src", "data", name), "utf8");
  return txt;
}

function extractSlugs(fileContent) {
  const slugs = [];
  const re = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(fileContent)) !== null) {
    slugs.push(m[1]);
  }
  return slugs;
}

const eventsTs = await loadTs("events.ts");
const postsTs = await loadTs("posts.ts");
const eventSlugs = extractSlugs(eventsTs);
const postSlugs = extractSlugs(postsTs);

const diseaseSlugs = ["pemphigus", "bullous-pemphigoid", "dermatitis-herpetiformis", "mucous-membrane-pemphigoid", "epidermolysis-bullosa-acquisita"];

const staticRoutes = [
  { path: "/", priority: "1.0", freq: "weekly" },
  { path: "/about", priority: "0.9", freq: "monthly" },
  { path: "/leadership", priority: "0.8", freq: "monthly" },
  { path: "/affiliations", priority: "0.7", freq: "monthly" },
  { path: "/financials", priority: "0.7", freq: "quarterly" },
  { path: "/impact", priority: "0.8", freq: "monthly" },
  { path: "/diseases", priority: "0.9", freq: "monthly" },
  { path: "/doctors", priority: "0.8", freq: "monthly" },
  { path: "/programs", priority: "0.8", freq: "monthly" },
  { path: "/events", priority: "0.8", freq: "weekly" },
  { path: "/blog", priority: "0.9", freq: "weekly" },
  { path: "/media", priority: "0.6", freq: "monthly" },
  { path: "/testimonials", priority: "0.6", freq: "monthly" },
  { path: "/get-help", priority: "0.9", freq: "monthly" },
  { path: "/donate", priority: "0.9", freq: "monthly" },
  { path: "/volunteer", priority: "0.7", freq: "monthly" },
  { path: "/contact", priority: "0.7", freq: "yearly" },
  { path: "/faq", priority: "0.7", freq: "monthly" },
  { path: "/privacy", priority: "0.3", freq: "yearly" },
  { path: "/terms", priority: "0.3", freq: "yearly" },
  { path: "/refund-policy", priority: "0.3", freq: "yearly" },
];

const dynamicRoutes = [
  ...diseaseSlugs.map((s) => ({ path: `/diseases/${s}`, priority: "0.8", freq: "monthly" })),
  ...eventSlugs.map((s) => ({ path: `/events/${s}`, priority: "0.7", freq: "monthly" })),
  ...postSlugs.map((s) => ({ path: `/blog/${s}`, priority: "0.8", freq: "monthly" })),
];

const all = [...staticRoutes, ...dynamicRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml);
console.log(`✓ sitemap.xml written with ${all.length} URLs`);

// llms.txt — summary index for LLM crawlers
const llms = `# AIBDF — Auto-Immune Blistering Disease Foundation

> AIBDF is a registered Indian charitable trust (80G & FCRA certified) that supports people living with rare auto-immune blistering diseases — pemphigus vulgaris, bullous pemphigoid, dermatitis herpetiformis, and related conditions. We provide awareness, specialist referrals, patient financial assistance, and a caring community. Based in Pune, India; medical advisory board includes specialists in India, Japan, and the USA.

## About
- [About AIBDF](${SITE}/about): Founding story, mission, vision, and trustees.
- [Leadership & Advisory Board](${SITE}/leadership): Trustees and medical advisors.
- [Affiliations & Partners](${SITE}/affiliations): IPPF (USA), CBD, Osaka Metropolitan University, BLDE.
- [Impact](${SITE}/impact): Patient outcomes and program reach.
- [Financials & Transparency](${SITE}/financials): Fund allocation and annual reports.

## Conditions we cover
- [All diseases overview](${SITE}/diseases)
${diseaseSlugs.map((s) => `- [${s.replace(/-/g, " ")}](${SITE}/diseases/${s})`).join("\n")}

## For patients
- [Get Help](${SITE}/get-help): Patient registration and support.
- [Our Doctors](${SITE}/doctors): Specialist network.
- [Programs](${SITE}/programs): Four pillars of our work.
- [FAQ](${SITE}/faq): Common questions and answers.
- [Testimonials](${SITE}/testimonials): Patient stories.

## Events & Content
- [Events](${SITE}/events): Upcoming and past events.
- [Blog / Insights](${SITE}/blog): Medically-reviewed articles.
- [Media & Press](${SITE}/media): Press coverage, audio series, gallery.

## Get involved
- [Donate](${SITE}/donate): 80G-eligible contribution.
- [Volunteer](${SITE}/volunteer): Join our community of volunteers.
- [Contact](${SITE}/contact): All enquiries.

## Legal
- [Privacy Policy](${SITE}/privacy)
- [Terms of Use](${SITE}/terms)
- [Refund Policy](${SITE}/refund-policy)

## Canonical
- Site: ${SITE}
- Sitemap: ${SITE}/sitemap.xml
- Contact: info@aibdf.in | +91-9112006844
- Address: 502 Surad Apartment, 106/13 Erandwane, Pune 411004, India
`;

fs.writeFileSync(path.join(DIST, "llms.txt"), llms);
console.log(`✓ llms.txt written`);
