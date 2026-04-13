import { motion } from "motion/react";
import { Users, HeartHandshake, Stethoscope, GraduationCap } from "lucide-react";

const programs = [
  {
    title: "Awareness Initiatives",
    icon: Users,
    color: "bg-blue-500",
    desc: "We conduct regular awareness campaigns in communities and through digital platforms to educate the public about the early signs of auto-immune blistering diseases. Early detection is crucial for effective treatment.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Patient Support Programs",
    icon: HeartHandshake,
    color: "bg-rose-500",
    desc: "Our core program focuses on providing direct assistance to patients. This includes financial aid for expensive medications, connecting patients with specialized doctors, and offering emotional support groups.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Medical Collaborations",
    icon: Stethoscope,
    color: "bg-teal-500",
    desc: "We partner with leading hospitals, research institutions, and medical professionals to improve treatment protocols. Our collaboration with institutions like Osaka Metropolitan University helps bring global expertise to local patients.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Educational Outreach",
    icon: GraduationCap,
    color: "bg-indigo-500",
    desc: "We organize seminars and workshops for general practitioners and dermatologists to help them better identify and diagnose these rare conditions, reducing the time it takes for patients to receive the correct diagnosis.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Programs() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt="Programs" 
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
            Our Programs & Initiatives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            AIBDF works across multiple fronts to support patients, educate the public, and advance medical understanding.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="space-y-16">
          {programs.map((program, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video group">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className={`w-20 h-20 rounded-2xl ${program.color} text-white flex items-center justify-center mb-8 shadow-lg`}>
                  <program.icon className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-medium text-slate-900 mb-6 tracking-tight">{program.title}</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  {program.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
