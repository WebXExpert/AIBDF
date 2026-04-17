import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finding AIBDF changed my journey entirely. The guidance I received helped me find the right specialist and finally get my condition under control. I felt supported every step of the way.",
    name: "Rahul M.",
    role: "Pemphigus Patient",
    initials: "R",
    color: "bg-blue-100 text-blue-700"
  },
  {
    quote: "As a caregiver, I was completely lost when my mother was diagnosed with Bullous Pemphigoid. The foundation not only helped with medical connections but provided the emotional support our family desperately needed.",
    name: "Sneha P.",
    role: "Family Member",
    initials: "S",
    color: "bg-rose-100 text-rose-700"
  },
  {
    quote: "The financial assistance provided by AIBDF was a lifesaver. The medications are incredibly expensive, and without their help, I wouldn't have been able to continue my treatment.",
    name: "Amit K.",
    role: "MMP Patient",
    initials: "A",
    color: "bg-teal-100 text-teal-700"
  },
  {
    quote: "Collaborating with AIBDF has allowed me to reach patients who otherwise wouldn't have access to specialized care. Their structured approach makes the treatment process smoother for both doctors and patients.",
    name: "Dr. Anjali Sharma",
    role: "Dermatologist",
    initials: "AS",
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    quote: "The awareness programs organized by the foundation are crucial. We are seeing patients coming in earlier for diagnosis, which significantly improves their prognosis.",
    name: "Dr. Vikram Deshmukh",
    role: "Senior Dermatologist",
    initials: "VD",
    color: "bg-purple-100 text-purple-700"
  },
  {
    quote: "I thought I was the only one suffering from this rare disease. Connecting with the AIBDF community gave me hope and showed me that a normal life is possible with the right treatment.",
    name: "Priya S.",
    role: "Patient",
    initials: "P",
    color: "bg-orange-100 text-orange-700"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wp-images/testimonial-topbanner.jpg" 
            alt="Testimonials" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight"
          >
            Stories of Hope
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Hear from the patients, families, and doctors who are part of the AIBDF community.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 flex flex-col h-full"
            >
              <div className="flex gap-1 text-yellow-400 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-current" />
                ))}
              </div>
              
              <div className="relative flex-grow mb-10">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-slate-100 -z-10" />
                <p className="text-slate-700 text-lg leading-relaxed relative z-10 font-light">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-5 mt-auto">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-medium text-xl ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-slate-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest mt-1">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
