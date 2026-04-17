import { motion } from "motion/react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import { posts } from "../data/posts";
import Seo from "../components/seo/Seo";
import { webPageSchema } from "../components/seo/schemas";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const categoryColor: Record<string, string> = {
  Awareness: "bg-blue-500",
  Treatment: "bg-teal-500",
  "Living With": "bg-rose-500",
  Research: "bg-indigo-500",
};

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Insights & Patient Stories"
        description="Medically-reviewed articles on auto-immune blistering diseases — pemphigus, pemphigoid, early detection, treatment options, and life with chronic illness."
        keywords={["pemphigus blog", "pemphigoid", "autoimmune skin disease", "blistering disease awareness", "rituximab", "AIBDF articles"]}
        jsonLd={webPageSchema({
          path: "/blog",
          name: "AIBDF Blog — Insights & Patient Stories",
          description: "Medically-reviewed articles for patients, families, and clinicians.",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }],
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
              text="*Insights* & Patient Stories"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
            >
              Medically reviewed articles on auto-immune blistering diseases — early signs, treatment, day-to-day care, and research. Written for patients, families, and the clinicians who care for them.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Featured post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden mb-20"
        >
          <Link to={`/blog/${featured.slug}`} className="grid grid-cols-1 lg:grid-cols-5 group">
            <div className="lg:col-span-3 relative min-h-[400px] lg:min-h-[520px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${categoryColor[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 p-10 md:p-16 flex flex-col justify-center">
              <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-4">Latest article</p>
              <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight leading-tight group-hover:text-brand-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
                <span>{formatDate(featured.date)}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featured.readMinutes} min read</span>
              </div>
              <span className="inline-flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-4 transition-all w-fit">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.article>

        {/* Rest */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">All articles</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 group"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white ${categoryColor[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> {post.readMinutes} min
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-3 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
                    <p className="text-xs text-slate-500">{formatDate(post.date)}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Topics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-slate-50 rounded-[2rem] p-12 md:p-16"
        >
          <div className="max-w-3xl">
            <Tag className="w-10 h-10 text-brand-primary mb-6" />
            <h3 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">Topics we write about</h3>
            <p className="text-lg text-slate-600 font-light mb-8">
              Every article is reviewed by a member of our medical advisory board. Written in plain language, grounded in current evidence.
            </p>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set(posts.flatMap((p) => p.tags))).map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-5 py-2 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 hover:border-brand-primary hover:text-brand-primary transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
