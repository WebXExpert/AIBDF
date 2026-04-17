import { motion } from "motion/react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "./AnimatedHeading";
import Seo from "../seo/Seo";
import { webPageSchema } from "../seo/schemas";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

type Props = {
  title: string;
  highlightWord: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  contactEmail?: string;
};

export default function LegalLayout({ title, highlightWord, intro, lastUpdated, sections, contactEmail = "info@aibdf.in" }: Props) {
  const highlighted = title.replace(highlightWord, `*${highlightWord}*`);
  const path = `/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title={title}
        description={intro}
        jsonLd={webPageSchema({
          path,
          name: title,
          description: intro,
          breadcrumbs: [{ name: "Home", path: "/" }, { name: title, path }],
        })}
      />
      {/* Hero */}
      <div className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 overflow-hidden z-0 opacity-30 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary text-sm font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <AnimatedHeading
            text={highlighted}
            className="text-4xl md:text-6xl font-medium text-slate-900 mb-6 tracking-tight leading-tight"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 font-light leading-relaxed"
          >
            {intro}
          </motion.p>
          <p className="mt-6 text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6">
        {sections.map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-5 tracking-tight">{section.heading}</h2>
            {section.paragraphs?.map((p, j) => (
              <p key={j} className="text-lg text-slate-700 leading-relaxed font-light mb-5">{p}</p>
            ))}
            {section.list && (
              <ul className="space-y-3 mb-5 border-l-4 border-brand-primary/30 pl-6 py-2">
                {section.list.map((item, j) => (
                  <li key={j} className="text-lg text-slate-700 leading-relaxed font-light">{item}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-brand-primary-soft rounded-[2rem] p-10"
        >
          <Mail className="w-10 h-10 text-brand-primary mb-5" />
          <h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">Questions about this policy?</h3>
          <p className="text-slate-600 font-light mb-5">
            Write to us and we will respond within two working days.
          </p>
          <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-4 transition-all">
            {contactEmail}
          </a>
        </motion.section>
      </article>
    </div>
  );
}
