import { motion } from "motion/react";
import { Target, Eye, Heart, Users, ShieldCheck, Stethoscope, ArrowRight } from "lucide-react";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import { organizationSchema, webPageSchema } from "../components/seo/schemas";

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="About AIBDF"
        description="The Auto-Immune Blistering Disease Foundation was founded by Mr. Ashok Suratwala in loving memory of his wife. Our story, mission, vision, and the trustees who steward AIBDF."
        keywords={["About AIBDF", "Ashok Suratwala", "pemphigus foundation India", "Jayshree Suratwala"]}
        jsonLd={[
          organizationSchema,
          webPageSchema({
            path: "/about",
            name: "About AIBDF",
            description: "AIBDF's founding story, mission, and trustees.",
            breadcrumbs: [{ name: "Home", path: "/" }, { name: "About", path: "/about" }],
          }),
        ]}
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
              text="About *AIBDF*"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10"
            >
              The Auto Immune Blistering Disease Foundation (AIBDF) is dedicated to improving awareness, access to treatment, and support for patients suffering from rare skin conditions. We are here to help humankind.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* Founder Story - Bento Style */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 mb-20 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-8 tracking-tight">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Auto-Immune Blistering Disease Foundation (AIBDF) was founded by <strong className="font-medium text-slate-900">Mr. Ashok Suratwala</strong> in loving memory of his wife, <strong className="font-medium text-slate-900">Jayshree Suratwala</strong>.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Witnessing firsthand the immense challenges, confusion, and lack of specialized care available for patients suffering from these rare conditions, Ashok established AIBDF to ensure no other family has to navigate this difficult journey alone.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-4 transition-all w-fit">
                Get in touch with us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative min-h-[400px] lg:min-h-full bg-slate-100">
              <img 
                src="/wp-images/about-topbanner.jpg" 
                alt="Community Support" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-10 lg:p-16">
                <Heart className="w-10 h-10 text-brand-primary mb-6" />
                <p className="text-2xl md:text-3xl font-medium text-white italic tracking-tight">"In memory of Jayshree Suratwala"</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-brand-primary text-white rounded-[2rem] p-10 md:p-16 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150" />
            <Target className="w-12 h-12 text-white/80 mb-8 relative z-10" />
            <h2 className="text-3xl font-medium mb-6 tracking-tight relative z-10">Our Mission</h2>
            <p className="text-white/90 leading-relaxed text-lg relative z-10">
              To increase the number of patients who reach AIBDF for medical guidance and assistance, ensuring they receive timely, accurate diagnosis and effective treatment. We strive to provide proper guidance and financial help.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 text-white rounded-[2rem] p-10 md:p-16 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-3xl rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150" />
            <Eye className="w-12 h-12 text-brand-primary mb-8 relative z-10" />
            <h2 className="text-3xl font-medium mb-6 tracking-tight relative z-10">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed text-lg relative z-10">
              A world where auto-immune blistering diseases are quickly recognized, widely understood, and accessible treatments are available to all patients regardless of their financial background.
            </p>
          </motion.section>
        </div>

        {/* Trustees / Board */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-slate-900 mb-4 tracking-tight">Our Trustees</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Guided by experienced professionals dedicated to improving outcomes for patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Sharad Mutalik", role: "Trustee & Medical Expert" },
              { name: "Mr. Ashok Suratwala", role: "Founder & Trustee" },
              { name: "Aniruddha A Bambawale", role: "Trustee" },
              { name: "Jayant K. Hemade", role: "Trustee" }
            ].map((trustee, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-brand-primary/30 transition-colors group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{trustee.name}</h3>
                <p className="text-sm text-brand-primary font-medium uppercase tracking-wider">{trustee.role}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
