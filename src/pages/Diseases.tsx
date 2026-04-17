import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, ShieldAlert, Activity } from "lucide-react";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import Seo from "../components/seo/Seo";
import { webPageSchema } from "../components/seo/schemas";

const diseases = [
  {
    id: "pemphigus",
    name: "Pemphigus",
    shortDesc: "Pemphigus is a group of rare autoimmune diseases that cause blistering of the skin and mucous membranes (mouth, nose, throat, eyes, and genitals).",
    symptoms: ["Blisters on skin that easily rupture", "Painful blisters in mouth and throat", "Skin peeling"],
    img: "/wp-images/Autoimmune-topbanner.jpg",
    color: "bg-blue-500"
  },
  {
    id: "bullous-pemphigoid",
    name: "Bullous Pemphigoid",
    shortDesc: "Bullous pemphigoid is a rare skin condition that causes large, fluid-filled blisters. They develop on areas of skin that often flex — such as the lower abdomen, upper thighs or armpits.",
    symptoms: ["Large, tense blisters that don't easily rupture", "Severe itching", "Red rash or hives before blisters form"],
    img: "/wp-images/Autoimmune-image2.jpg",
    color: "bg-teal-500"
  }
];

export default function Diseases() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Auto-Immune Blistering Diseases"
        description="Plain-language patient guide to pemphigus, bullous pemphigoid, dermatitis herpetiformis, and related auto-immune blistering conditions — reviewed by AIBDF's medical advisory board."
        keywords={["pemphigus vulgaris", "bullous pemphigoid", "dermatitis herpetiformis", "rare skin disease", "autoimmune blistering"]}
        jsonLd={webPageSchema({
          path: "/diseases",
          name: "Auto-Immune Blistering Diseases",
          description: "Overview of auto-immune blistering diseases.",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Diseases", path: "/diseases" }],
        })}
      />
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          <div className="absolute top-40 -left-40 w-[40rem] h-[40rem] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <AnimatedHeading
              as="h1"
              text="Understanding *Auto-Immune* Blistering Diseases"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10"
            >
              Knowledge is the first step to recovery. Explore detailed information about the specific conditions we support, including symptoms, causes, and treatments.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {diseases.map((disease, i) => (
            <motion.div 
              key={disease.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="group bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={disease.img} 
                  alt={disease.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className={`w-12 h-1 mb-4 rounded-full ${disease.color}`} />
                  <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">{disease.name}</h2>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <p className="text-slate-600 mb-10 text-lg leading-relaxed">{disease.shortDesc}</p>
                
                <div className="mb-10 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-brand-primary" /> Key Symptoms
                  </h3>
                  <ul className="space-y-3">
                    {disease.symptoms.map((symptom, j) => (
                      <li key={j} className="flex items-start text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 mr-3 shrink-0"></div>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    to={`/diseases/${disease.id}`}
                    className="flex items-center justify-between w-full py-4 px-6 bg-slate-900 rounded-2xl text-white font-medium hover:bg-brand-primary transition-colors group/btn shadow-lg"
                  >
                    <span>Read Full Medical Guide</span>
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section - Bento Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-brand-primary rounded-[2rem] p-10 md:p-16 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <ShieldAlert className="w-12 h-12 text-white/80 mb-6" />
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Need Medical Guidance?</h2>
              <p className="text-white/90 text-lg font-light leading-relaxed">
                If you are experiencing symptoms or have been diagnosed with an auto-immune blistering disease, our network of specialists can help you navigate your treatment journey.
              </p>
            </div>
            <Link
              to="/get-help"
              className="shrink-0 inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-brand-primary bg-white rounded-2xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
            >
              Request Assistance
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
