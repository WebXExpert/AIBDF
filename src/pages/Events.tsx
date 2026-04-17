import { motion } from "motion/react";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import { events } from "../data/events";
import Seo from "../components/seo/Seo";
import { eventSchema, webPageSchema } from "../components/seo/schemas";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function formatDay(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit" });
}

function formatMonth(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { month: "short" }).toUpperCase();
}

const categoryColor: Record<string, string> = {
  Awareness: "bg-blue-500",
  Medical: "bg-teal-500",
  "Patient Support": "bg-rose-500",
  Fundraiser: "bg-amber-500",
};

export default function Events() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");
  const featured = upcoming[0];

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Events & Patient Meets"
        description="Awareness camps, patient support meets, and medical symposia organised by AIBDF across India. Find upcoming events and explore our archive of past events."
        keywords={["AIBDF events", "pemphigus awareness camp", "patient meet India", "blistering disease symposium"]}
        jsonLd={[
          webPageSchema({
            path: "/events",
            name: "AIBDF Events & Patient Meets",
            description: "Awareness camps, patient support meets, and medical symposia.",
            breadcrumbs: [{ name: "Home", path: "/" }, { name: "Events", path: "/events" }],
          }),
          ...events
            .filter((e) => e.status === "upcoming")
            .map((e) =>
              eventSchema({
                slug: e.slug,
                name: e.title,
                description: e.summary,
                startDate: e.date,
                endDate: e.endDate,
                location: e.location,
                city: e.city,
                organizer: e.organizer,
                image: e.image,
                isPast: false,
              })
            ),
        ]}
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
              text="*Events* & Patient Meets"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed"
            >
              Awareness camps, patient support meets, and medical symposia — bringing together patients, caregivers, and specialists across India and beyond.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Featured upcoming event */}
        {featured && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 mb-20 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[400px] lg:min-h-full">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${categoryColor[featured.category]}`}>
                    {featured.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-medium text-slate-900 leading-none">{formatDay(featured.date)}</div>
                    <div className="text-xs font-semibold text-brand-primary tracking-wider">{formatMonth(featured.date)}</div>
                  </div>
                  <div className="w-px h-10 bg-slate-200" />
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Featured</div>
                    <div className="text-sm text-slate-700 font-medium">Next event</div>
                  </div>
                </div>
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Upcoming</p>
                <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 tracking-tight">{featured.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">{featured.summary}</p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-brand-primary shrink-0" />
                    <span>{formatDate(featured.date)}{featured.endDate && featured.endDate !== featured.date ? ` – ${formatDate(featured.endDate)}` : ""}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                    <span>{featured.location}, {featured.city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Users className="w-5 h-5 text-brand-primary shrink-0" />
                    <span>{featured.organizer}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    to={`/events/${featured.slug}`}
                    className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-btn font-semibold hover:bg-brand-primary-hover transition-colors shadow-btn"
                  >
                    Event details <ArrowRight className="w-4 h-4" />
                  </Link>
                  {featured.registerUrl && (
                    <Link
                      to={featured.registerUrl}
                      className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-btn font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors"
                    >
                      Register
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Upcoming events grid */}
        {upcoming.length > 1 && (
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between flex-wrap gap-4 mb-12"
            >
              <div>
                <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Coming up</p>
                <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">More upcoming events</h2>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcoming.slice(1).map((event, i) => (
                <motion.article
                  key={event.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <Link to={`/events/${event.slug}`} className="block">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-5 left-5">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${categoryColor[event.category]}`}>
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-lg">
                        <div className="text-center">
                          <div className="text-xl font-medium text-slate-900 leading-none">{formatDay(event.date)}</div>
                          <div className="text-[10px] font-semibold text-brand-primary tracking-wider">{formatMonth(event.date)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight group-hover:text-brand-primary transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 font-light leading-relaxed mb-6 line-clamp-2">{event.summary}</p>
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{event.city}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Past events */}
        {past.length > 0 && (
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-sm font-medium text-brand-primary uppercase tracking-widest mb-3">Archive</p>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">Past events</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((event, i) => (
                <motion.article
                  key={event.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <Link to={`/events/${event.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(event.date)}
                      </div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2 tracking-tight group-hover:text-brand-primary transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-light line-clamp-2">{event.summary}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
