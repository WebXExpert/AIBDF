import { motion } from "motion/react";
import { Stethoscope, MapPin, Building, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. A. Razzaque Ahmed",
    specialization: "Clinical Immunologist & Dermatologist",
    city: "USA",
    hospital: "Center for Blistering Diseases",
    experience: "30+ Years",
    image: "/wp-images/Dr.-Ahmed-570x380-1-po33mh20qt7thfkk29lc1buk5do1q8d7gxz2n8ust4.jpg"
  },
  {
    id: 2,
    name: "Prof. A. C. Inamadar",
    specialization: "Dermatologist and Venereologist",
    city: "Vijaypur",
    hospital: "BLDE",
    experience: "25+ Years",
    image: "/wp-images/inamdar.jpg"
  },
  {
    id: 3,
    name: "Prof. Takashi Hashimoto",
    specialization: "Specially-Appointed Professor",
    city: "Osaka",
    hospital: "Osaka Metropolitan University",
    experience: "20+ Years",
    image: "/wp-images/Takashi-Hashimoto.webp"
  },
  {
    id: 4,
    name: "Dr. Sharad Mutalik",
    specialization: "Renowned Dermatologist & Trustee",
    city: "Pune",
    hospital: "AIBDF",
    experience: "30+ Years",
    image: "/wp-images/photo.jpg"
  }
];

export default function Doctors() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wp-images/Autoimmune-image3.jpg" 
            alt="Medical Network" 
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
            Our Network of Experts
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Doctors experienced in autoimmune blistering diseases collaborate with AIBDF to provide specialized care.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {doctors.map((doctor, i) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="sm:w-2/5 h-72 sm:h-auto relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent sm:hidden" />
              </div>
              
              <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-medium text-slate-900 mb-2 tracking-tight">{doctor.name}</h2>
                  <p className="text-blue-600 font-medium text-lg mb-6">{doctor.specialization}</p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-slate-600 text-base font-light">
                      <Building className="w-5 h-5 mr-3 text-slate-400 flex-shrink-0" />
                      {doctor.hospital}
                    </div>
                    <div className="flex items-center text-slate-600 text-base font-light">
                      <MapPin className="w-5 h-5 mr-3 text-slate-400 flex-shrink-0" />
                      {doctor.city}
                    </div>
                    <div className="flex items-center text-slate-600 text-base font-light">
                      <Calendar className="w-5 h-5 mr-3 text-slate-400 flex-shrink-0" />
                      {doctor.experience} Experience
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/get-help"
                  className="inline-flex items-center justify-center w-full py-4 px-6 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 font-medium text-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  Request Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 rounded-[2rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
          </div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-700">
              <Stethoscope className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Are you a medical professional?</h3>
            <p className="text-slate-400 text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              If you specialize in autoimmune blistering diseases and would like to join our network to help patients in need, we would love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
            >
              Join Our Network
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
