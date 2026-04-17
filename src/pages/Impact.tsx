import { motion } from "motion/react";
import { Users, HeartHandshake, Stethoscope, Globe, ArrowRight, Quote, TrendingUp, Activity, Building2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import Seo from "../components/seo/Seo";
import { webPageSchema } from "../components/seo/schemas";

const stats = [
  { value: "500+", label: "Patients supported", desc: "Across India since 2022 with diagnosis, treatment, and financial aid", icon: Users, color: "bg-rose-500" },
  { value: "100%", label: "Volunteer-run", desc: "Every rupee you donate goes directly to patient care and awareness programs", icon: HeartHandshake, color: "bg-teal-500" },
  { value: "25+", label: "Partner centres", desc: "Hospitals and dermatology departments across India and internationally", icon: Building2, color: "bg-blue-500" },
  { value: "3+", label: "Years of impact", desc: "Building a trusted community for patients, caregivers, and specialists", icon: TrendingUp, color: "bg-indigo-500" },
];

const pillars = [
  {
    title: "Earlier diagnosis",
    icon: Activity,
    desc: "We have reduced the average time-to-diagnosis for our referred patients by training frontline dermatologists, funding DIF testing where it was out of reach, and connecting suspected cases to our advisory board for second opinions.",
    metric: "Average diagnostic delay reduced from 9 to 3 months in our patient cohort",
  },
  {
    title: "Affordable treatment",
    icon: HeartHandshake,
    desc: "Long-term immunosuppressive therapy is financially devastating for most families. Our patient assistance fund has disbursed grants for medicines, biopsies, and rituximab infusions — bridging the gap between government schemes and what families actually need.",
    metric: "₹0 out-of-pocket for our most severely-affected patients during acute phases",
  },
  {
    title: "Specialist access",
    icon: Stethoscope,
    desc: "Only a handful of dermatologists in India have deep experience with rare blistering diseases. We connect patients to the right specialist fast — often within days of first contact — wherever they are in the country.",
    metric: "Specialist consultation within 7 days for 94% of our new patient requests",
  },
  {
    title: "Community & dignity",
    icon: Globe,
    desc: "Living with a rare, visible skin condition is isolating. Our patient meets, caregiver groups, and online community create spaces where patients are understood, not explained. That matters as much as any prescription.",
    metric: "200+ families in our active patient support network",
  },
];

export default function Impact() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Our Impact"
        description="How AIBDF's work translates into earlier diagnosis, affordable treatment, specialist access, and community for patients with rare auto-immune blistering diseases."
        keywords={["AIBDF impact", "rare disease NGO India", "pemphigus patient outcomes"]}
        jsonLd={webPageSchema({
          path: "/impact",
          name: "Our Impact",
          description: "AIBDF impact report — four pillars of patient outcomes.",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Impact", path: "/impact" }],
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
              text="Our *Impact*"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
            >
              Impact is more than numbers — it is a patient diagnosed earlier, a treatment that becomes affordable, a family that knows they are not alone.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-5xl font-medium text-slate-900 tracking-tight mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-3">{stat.label}</p>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">What changes because of AIBDF</p>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Four pillars of impact</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 rounded-[2rem] p-10 md:p-12 border border-slate-100"
              >
                <pillar.icon className="w-12 h-12 text-brand-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">{pillar.desc}</p>
                <div className="inline-block bg-white border-l-4 border-brand-primary px-5 py-3 rounded-r-xl text-sm text-slate-700 font-medium">
                  {pillar.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Patient story pullquote */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary rounded-[2rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="relative z-10 max-w-4xl">
            <Quote className="w-14 h-14 text-white/60 mb-8" />
            <p className="text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-10">
              "I spent eight months being told my mouth sores were stress. AIBDF connected me to a dermatologist within a week, helped me get the right diagnosis, and funded my first three months of medication. I'm in remission now. I don't know where my family would be without them."
            </p>
            <div className="pt-8 border-t border-white/20">
              <p className="font-medium text-lg">A patient from Maharashtra</p>
              <p className="text-white/70 text-sm">Diagnosed with pemphigus vulgaris, 2024</p>
            </div>
          </div>
        </motion.section>

        {/* Transparency / Financials link */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Link to="/financials" className="bg-white rounded-[2rem] p-10 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all group">
            <Award className="w-10 h-10 text-brand-primary mb-5" />
            <h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">Financial transparency</h3>
            <p className="text-slate-600 font-light mb-5">See how every rupee is used — with our audited annual reports and FCRA disclosures.</p>
            <span className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-4 transition-all">
              View financials <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link to="/donate" className="bg-slate-900 text-white rounded-[2rem] p-10 hover:shadow-2xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-3xl rounded-full -mr-20 -mt-20" />
            <div className="relative z-10">
              <HeartHandshake className="w-10 h-10 text-brand-primary mb-5" />
              <h3 className="text-2xl font-medium mb-3 tracking-tight">Help extend our impact</h3>
              <p className="text-slate-300 font-light mb-5">Every donation funds real diagnosis, real treatment, real lives. Join us.</p>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-4 transition-all">
                Donate now <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
