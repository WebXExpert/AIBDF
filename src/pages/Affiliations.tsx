import { motion } from "motion/react";
import { Globe, HeartHandshake, BookOpen, ArrowRight, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import Seo from "../components/seo/Seo";
import { webPageSchema } from "../components/seo/schemas";

const partners = [
  {
    name: "International Pemphigus & Pemphigoid Foundation (IPPF)",
    short: "IPPF",
    country: "United States",
    focus: "Global patient advocacy & education",
    description:
      "The IPPF is the world's leading patient organization dedicated to pemphigus and pemphigoid. AIBDF is proud to partner with IPPF, joining a global community that pools patient stories, research updates, and best practices across continents.",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Center for Blistering Diseases (CBD)",
    short: "CBD",
    country: "Boston, USA",
    focus: "Clinical care & research",
    description:
      "Established in 1989 and led by Dr. A. Razzaque Ahmed, the Center for Blistering Diseases provides the highest quality of healthcare for patients with auto-immune blistering conditions. It is the only center of its kind in the United States. Our advisory partnership gives AIBDF patients access to world-class diagnostic and treatment expertise.",
    icon: HeartHandshake,
    color: "from-rose-500 to-rose-600",
  },
  {
    name: "Department of Dermatology, Osaka Metropolitan University",
    short: "Osaka Metro",
    country: "Osaka, Japan",
    focus: "Research collaboration",
    description:
      "Under the guidance of Prof. Takashi Hashimoto, Specially-Appointed Professor, AIBDF collaborates with the Department of Dermatology at Osaka Metropolitan University on clinical and basic research for autoimmune bullous diseases — bridging India and Japan's medical communities in this specialty.",
    icon: BookOpen,
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "BLDE (Deemed-to-be University), Vijayapura",
    short: "BLDE",
    country: "Karnataka, India",
    focus: "Medical education & training",
    description:
      "BLDE, where Prof. A. C. Inamadar serves as Pro Vice-Chancellor, is a long-standing academic partner. Together we organize CME programs for dermatologists and residents, helping reduce diagnostic delay for patients with rare blistering diseases.",
    icon: BookOpen,
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function Affiliations() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Global Partners & Affiliations"
        description="AIBDF's international affiliations — the IPPF (USA), Center for Blistering Diseases, Osaka Metropolitan University, and BLDE Deemed University — bring global expertise to Indian patients."
        keywords={["AIBDF affiliations", "IPPF India partner", "Osaka Metropolitan University dermatology", "Center for Blistering Diseases"]}
        jsonLd={webPageSchema({
          path: "/affiliations",
          name: "Global Partners & Affiliations",
          description: "International institutions partnering with AIBDF.",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Affiliations", path: "/affiliations" }],
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
              text="Global *Partners*, Local Impact"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
            >
              AIBDF is part of a global community of patient organizations, clinical centres, and research departments — all focused on improving outcomes for people with auto-immune blistering diseases.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Partners */}
        <div className="space-y-8 mb-24">
          {partners.map((partner, i) => (
            <motion.section
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className={`bg-gradient-to-br ${partner.color} p-10 md:p-12 text-white relative overflow-hidden lg:col-span-1`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20" />
                  <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
                    <partner.icon className="w-12 h-12 text-white/80 mb-6" />
                    <div>
                      <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">{partner.country}</p>
                      <p className="text-xs text-white/70 uppercase tracking-widest">{partner.focus}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 p-10 md:p-14 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 tracking-tight">{partner.name}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">{partner.description}</p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Why partnerships matter */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Handshake className="w-12 h-12 text-brand-primary mb-8" />
              <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">Why partnerships matter for rare diseases</h3>
            </div>
            <div className="lg:col-span-3 space-y-6 text-slate-300 text-lg font-light leading-relaxed">
              <p>
                Auto-immune blistering diseases affect only a small number of people worldwide — which means no single institution sees enough patients to understand the full clinical picture alone.
              </p>
              <p>
                Partnerships let us pool knowledge. When a patient in Pune presents with an unusual case, we can — within days — draw on case experience from Boston, Osaka, and Vijayapura. When Japanese researchers identify a new biomarker, Indian clinicians hear about it at the same time as their American colleagues.
              </p>
              <p>
                For patients, that shared knowledge translates directly into better diagnosis, access to emerging treatments, and the reassurance that their care is informed by the global state of the art.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Partner with us CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary-soft rounded-[2rem] p-12 md:p-16 text-center"
        >
          <Handshake className="w-12 h-12 text-brand-primary mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">Want to partner with us?</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-light">
            We welcome collaboration from hospitals, research institutions, patient organisations, and corporate partners who share our mission to improve care for people with rare auto-immune diseases.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-btn font-semibold hover:bg-brand-primary-hover transition-colors shadow-btn"
          >
            Explore a partnership <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
