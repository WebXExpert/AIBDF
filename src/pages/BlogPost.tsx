import { motion } from "motion/react";
import { ArrowLeft, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import Seo from "../components/seo/Seo";
import { articleSchema } from "../components/seo/schemas";

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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title={post.title}
        description={post.excerpt}
        image={post.image}
        type="article"
        publishedTime={new Date(post.date).toISOString()}
        author={post.author}
        keywords={post.tags}
        jsonLd={articleSchema({
          slug: post.slug,
          title: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: new Date(post.date).toISOString(),
          author: post.author,
          reviewedBy: post.medicallyReviewedBy,
        })}
      />
      {/* Hero */}
      <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute inset-0 overflow-hidden z-0 opacity-30 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${categoryColor[post.category]}`}>
              {post.category}
            </span>
            <span className="text-sm text-slate-500 flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readMinutes} min read
            </span>
            <span className="text-sm text-slate-500">{formatDate(post.date)}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight mb-8"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
          >
            {post.excerpt}
          </motion.p>
        </div>
      </div>

      {/* Feature image */}
      <div className="max-w-5xl mx-auto px-6 -mt-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Medical review banner */}
      {post.medicallyReviewedBy && (
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <div className="flex items-center gap-4 bg-brand-primary-soft rounded-2xl p-5">
            <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0" />
            <div>
              <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider">Medically reviewed</p>
              <p className="text-sm text-slate-700 font-medium">{post.medicallyReviewedBy}</p>
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6">
        {post.sections.map((section, i) => (
          <section key={i} className="mb-12">
            {section.heading && (
              <h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-6 tracking-tight">{section.heading}</h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-lg text-slate-700 leading-relaxed font-light mb-6">{p}</p>
            ))}
            {section.list && (
              <ul className="space-y-3 mb-6 border-l-4 border-brand-primary/30 pl-6 py-2">
                {section.list.map((item, j) => (
                  <li key={j} className="text-lg text-slate-700 leading-relaxed font-light">{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pt-8 border-t border-slate-100">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-xs font-medium text-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author */}
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-10 border border-slate-100">
          <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3">Author</p>
          <p className="text-xl font-medium text-slate-900 mb-1">{post.author}</p>
          <p className="text-sm text-slate-500">{post.authorTitle}</p>
        </div>
      </article>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 mt-16">
        <div className="bg-brand-primary rounded-[2rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">Need help navigating diagnosis or treatment?</h3>
            <p className="text-white/90 text-lg font-light mb-8 max-w-xl">
              AIBDF's patient services team is here for you. Free, confidential guidance on finding specialists, understanding treatment options, and accessing support.
            </p>
            <Link
              to="/get-help"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-btn font-semibold hover:bg-slate-50 transition-colors"
            >
              Get help <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-24">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-10 tracking-tight">More reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <p className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-white mb-3 ${categoryColor[p.category]}`}>
                    {p.category}
                  </p>
                  <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight group-hover:text-brand-primary transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500">{formatDate(p.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
