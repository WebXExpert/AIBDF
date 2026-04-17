import { motion } from "motion/react";
import { Calendar, MapPin, Users, ArrowLeft, ArrowRight, Clock, Share2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { events, type EventItem } from "../data/events";
import Seo from "../components/seo/Seo";
import { eventSchema } from "../components/seo/schemas";

function formatFullDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatTimeRange(start: string, end?: string) {
  const s = new Date(start);
  const sTime = s.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
  if (!end) return sTime;
  const e = new Date(end);
  const eTime = e.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
  return `${sTime} – ${eTime}`;
}

const categoryColor: Record<string, string> = {
  Awareness: "bg-blue-500",
  Medical: "bg-teal-500",
  "Patient Support": "bg-rose-500",
  Fundraiser: "bg-amber-500",
};

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = events.find((e) => e.slug === slug);

  if (!event) return <Navigate to="/events" replace />;

  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title={event.title}
        description={event.summary}
        image={event.image}
        type="article"
        jsonLd={eventSchema({
          slug: event.slug,
          name: event.title,
          description: event.summary,
          startDate: event.date,
          endDate: event.endDate,
          location: event.location,
          city: event.city,
          organizer: event.organizer,
          image: event.image,
          isPast: event.status === "past",
        })}
      />
      {/* Hero with image */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-28">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All events
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white ${categoryColor[event.category]}`}>
              {event.category}
            </span>
            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
              {event.status === "upcoming" ? "Upcoming" : "Past event"}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight max-w-4xl">
            {event.title}
          </h1>
        </div>
      </div>

      {/* Meta + Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Main content */}
            <div className="lg:col-span-2 p-10 md:p-16">
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-10">
                {event.summary}
              </p>
              <div className="prose prose-lg prose-slate max-w-none">
                {event.description.map((para, i) => (
                  <p key={i} className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    {para}
                  </p>
                ))}
              </div>

              {event.status === "upcoming" && event.registerUrl && (
                <div className="mt-12 pt-10 border-t border-slate-100">
                  <Link
                    to={event.registerUrl}
                    className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-btn font-semibold hover:bg-brand-primary-hover transition-colors shadow-btn"
                  >
                    Register for this event <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar meta */}
            <aside className="bg-slate-50 p-10 md:p-12 border-l border-slate-100">
              <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-widest mb-8">Event details</h3>

              <div className="space-y-8">
                <div>
                  <Calendar className="w-5 h-5 text-brand-primary mb-2" />
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Date</p>
                  <p className="text-slate-900 font-medium">{formatFullDate(event.date)}</p>
                  {event.endDate && new Date(event.endDate).toDateString() !== new Date(event.date).toDateString() && (
                    <p className="text-sm text-slate-500 mt-1">Ends {formatFullDate(event.endDate)}</p>
                  )}
                </div>
                <div>
                  <Clock className="w-5 h-5 text-brand-primary mb-2" />
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Time</p>
                  <p className="text-slate-900 font-medium">{formatTimeRange(event.date, event.endDate)} IST</p>
                </div>
                <div>
                  <MapPin className="w-5 h-5 text-brand-primary mb-2" />
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Venue</p>
                  <p className="text-slate-900 font-medium">{event.location}</p>
                  <p className="text-sm text-slate-500">{event.city}</p>
                </div>
                <div>
                  <Users className="w-5 h-5 text-brand-primary mb-2" />
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Organized by</p>
                  <p className="text-slate-900 font-medium">{event.organizer}</p>
                </div>
              </div>

              <button
                className="mt-10 w-full inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-5 py-3 rounded-xl font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors text-sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: event.title,
                      text: event.summary,
                      url: typeof window !== "undefined" ? window.location.href : "",
                    }).catch(() => {});
                  } else if (typeof window !== "undefined") {
                    navigator.clipboard?.writeText(window.location.href);
                  }
                }}
              >
                <Share2 className="w-4 h-4" /> Share event
              </button>
            </aside>
          </div>
        </motion.div>

        {/* Related events */}
        {related.length > 0 && (
          <section>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-10 tracking-tight">More events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((e: EventItem) => (
                <Link
                  key={e.slug}
                  to={`/events/${e.slug}`}
                  className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">{e.category}</p>
                    <h3 className="text-lg font-medium text-slate-900 mb-1 tracking-tight group-hover:text-brand-primary transition-colors line-clamp-2">
                      {e.title}
                    </h3>
                    <p className="text-sm text-slate-500">{formatFullDate(e.date)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
