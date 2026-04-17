import { motion } from "motion/react";
import { FileText, Shield, PieChart, Download, ArrowRight, CheckCircle2, Building2, Receipt } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import Seo from "../components/seo/Seo";
import { webPageSchema } from "../components/seo/schemas";

const principles = [
  {
    title: "Audited annually",
    desc: "Our financial statements are audited every year by an independent Chartered Accountant and filed with the Registrar under the Indian Trusts Act.",
    icon: Shield,
  },
  {
    title: "100% volunteer-run",
    desc: "No trustee or board member draws a salary. Your donation funds patient care and programs — not administration or fundraising overhead.",
    icon: CheckCircle2,
  },
  {
    title: "FCRA registered",
    desc: "AIBDF is registered under the Foreign Contribution (Regulation) Act, allowing us to receive and account for international donations transparently.",
    icon: Building2,
  },
  {
    title: "80G certified",
    desc: "Donations to AIBDF are eligible for deduction under Section 80G of the Income Tax Act, 1961. Certificates issued promptly on request.",
    icon: Receipt,
  },
];

const allocation = [
  { label: "Patient assistance & medicines", value: 62, color: "bg-brand-primary" },
  { label: "Awareness & medical education", value: 18, color: "bg-blue-500" },
  { label: "Community & events", value: 12, color: "bg-teal-500" },
  { label: "Administration & compliance", value: 8, color: "bg-slate-400" },
];

const reports = [
  { year: "2024–25", title: "Annual Report FY 2024–25", status: "Coming soon", url: "#" },
  { year: "2023–24", title: "Annual Report FY 2023–24", status: "Available on request", url: "/contact" },
  { year: "2022–23", title: "Annual Report FY 2022–23", status: "Available on request", url: "/contact" },
];

export default function Financials() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Transparency & Financials"
        description="AIBDF financials, fund allocation, 12A/80G/FCRA registrations, and annual reports. 100% volunteer-run. Audited yearly."
        keywords={["AIBDF financials", "80G NGO", "FCRA registered", "transparent charity India"]}
        jsonLd={webPageSchema({
          path: "/financials",
          name: "Transparency & Financials",
          description: "Financial disclosures, fund allocation, and annual reports.",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Financials", path: "/financials" }],
        })}
      />
      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          <div className="absolute top-40 -left-40 w-[40rem] h-[40rem] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <AnimatedHeading
              as="h1"
              text="*Transparency* & Financials"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
            >
              Trust is earned, not claimed. Here is where our money comes from, where it goes, and how we stay accountable to every donor.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary-soft text-brand-primary flex items-center justify-center mb-6">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Allocation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-10 md:p-16 mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <PieChart className="w-12 h-12 text-brand-primary mb-6" />
              <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Where your donation goes</p>
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">Fund allocation (illustrative)</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                The breakdown below reflects our typical annual allocation. Exact numbers vary year to year based on patient case-load and program activity. Full figures are published in our annual report.
              </p>
              <p className="text-sm text-slate-500 italic">
                Note: percentages are approximate and indicative. For audited figures, please refer to our annual report.
              </p>
            </div>
            <div className="space-y-5">
              {allocation.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                    <span className="text-2xl font-medium text-slate-900 tracking-tight">{item.value}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Annual reports */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Archive</p>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Annual reports</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((r, i) => (
              <motion.a
                key={r.year}
                href={r.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-brand-primary/30 hover:shadow-lg transition-all group"
              >
                <FileText className="w-10 h-10 text-brand-primary mb-6" />
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{r.year}</p>
                <h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight">{r.title}</h3>
                <p className="text-sm text-slate-600 mb-5 font-light">{r.status}</p>
                <span className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-4 transition-all">
                  {r.status === "Available on request" ? "Request copy" : "Download"} <Download className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Legal & registration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <Shield className="w-12 h-12 text-brand-primary mb-8" />
              <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">Legal & registration</h3>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                AIBDF is a registered charitable trust under Indian law, compliant with the relevant statutory requirements for operation, taxation, and foreign-contribution handling.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Legal structure", value: "Registered Charitable Trust (Indian Trusts Act)" },
                { label: "Tax exemption", value: "12A registered under Income Tax Act, 1961" },
                { label: "Donation tax benefit", value: "80G eligible — donors claim deduction on IT returns" },
                { label: "Foreign contributions", value: "FCRA registered" },
                { label: "Annual compliance", value: "Audited statements filed with Registrar" },
              ].map((row) => (
                <div key={row.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-3 border-b border-white/10">
                  <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider w-48 shrink-0">{row.label}</p>
                  <p className="text-slate-300 font-light">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Get docs CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary-soft rounded-[2rem] p-12 md:p-16 text-center"
        >
          <FileText className="w-12 h-12 text-brand-primary mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">Need specific documentation?</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-light">
            Need the 80G certificate for a specific donation, a copy of our registration, or financial details for a corporate giving programme? Contact us and we will send the documentation you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-btn font-semibold hover:bg-brand-primary-hover transition-colors shadow-btn"
          >
            Request documents <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
