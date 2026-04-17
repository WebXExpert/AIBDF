import { motion } from "motion/react";
import { PlayCircle, Newspaper, Mic, Camera, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import Seo from "../components/seo/Seo";
import { webPageSchema } from "../components/seo/schemas";

const audios = Array.from({ length: 14 }, (_, i) => `/wp-images/ABD-Foubdation-230523-${i + 1}.mp3`);

const gallery = [
  "/wp-images/WhatsApp-Image-2025-07-11-at-10.49.00.jpeg",
  "/wp-images/WhatsApp-Image-2025-07-11-at-10.49.01-1.jpeg",
  "/wp-images/WhatsApp-Image-2025-07-11-at-10.49.02.jpeg",
  "/wp-images/WhatsApp-Image-2025-07-11-at-10.49.03.jpeg",
  "/wp-images/WhatsApp-Image-2023-07-11-at-10.48.39.jpeg",
  "/wp-images/WhatsApp-Image-2023-03-01-at-12.48.11.jpeg",
  "/wp-images/WhatsApp-Image-2022-12-09-at-11.23.57-AM.jpeg",
  "/wp-images/WhatsApp-Image-2022-11-02-at-10.50.22-AM.jpeg",
];

export default function Media() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Media & Press"
        description="AIBDF press coverage, awareness campaigns, patient stories, and audio series. Media enquiries and brand kit available on request."
        keywords={["AIBDF press", "pemphigus awareness India", "patient stories", "media kit"]}
        jsonLd={webPageSchema({
          path: "/media",
          name: "Media & Press",
          description: "Press, photo gallery, and audio series from AIBDF.",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Media", path: "/media" }],
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
              text="*Media* & Press"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
            >
              Press coverage, awareness campaigns, patient voices, and podcast conversations — tracing AIBDF's journey of advocacy for rare blistering diseases.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Radio / Podcast series */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Audio series</p>
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">ABD Foundation — 23.05.23 series</h2>
              <p className="text-slate-500 mt-3 max-w-2xl font-light">Fourteen-part awareness series recorded for community radio — covering early signs, treatment journeys, caregiver experiences, and more.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audios.map((src, i) => (
              <div key={src} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-4 hover:border-brand-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-1">Episode {i + 1}</p>
                  <audio controls className="w-full h-8">
                    <source src={src} type="audio/mpeg" />
                    Your browser does not support audio playback.
                  </audio>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Photo gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">From the field</p>
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Photo gallery</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`relative overflow-hidden rounded-2xl bg-slate-100 ${i % 5 === 0 ? "row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"}`}
              >
                <img
                  src={src}
                  alt={`AIBDF gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Press CTA + Kit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-[2rem] p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-3xl rounded-full -mr-20 -mt-20" />
            <div className="relative z-10">
              <Newspaper className="w-12 h-12 text-brand-primary mb-6" />
              <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">Media enquiries</h3>
              <p className="text-slate-300 font-light leading-relaxed mb-8">
                Journalists, documentary makers, and researchers — we are happy to connect you with patients (with their consent), medical experts, and our programme leads.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-btn font-semibold hover:bg-brand-primary-hover transition-colors"
              >
                Contact our media desk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary-soft rounded-[2rem] p-10 md:p-12"
          >
            <Camera className="w-12 h-12 text-brand-primary mb-6" />
            <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 tracking-tight">Brand & media kit</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-8">
              High-resolution logos, spokesperson bios, fact sheets, and approved patient imagery — available on request for media use.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-btn font-semibold hover:bg-slate-50 transition-colors border border-slate-200"
            >
              Request media kit <Download className="w-4 h-4" />
            </Link>
          </motion.section>
        </div>

        {/* Featured coverage placeholder */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[2rem] p-12 md:p-16 border border-slate-100"
        >
          <PlayCircle className="w-12 h-12 text-brand-primary mb-6" />
          <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 tracking-tight">Video & print coverage</h3>
          <p className="text-slate-600 font-light leading-relaxed max-w-2xl mb-8">
            We are curating our archive of press clippings, interviews, and patient story films. If you have covered AIBDF's work and would like to be featured here, please get in touch.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-4 transition-all"
          >
            Submit coverage <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
