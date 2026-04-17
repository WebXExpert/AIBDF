import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Users, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(2, "City is required"),
  profession: z.string().min(2, "Profession/Skills are required"),
});

type FormData = z.infer<typeof formSchema>;

export default function Volunteer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Volunteer form submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wp-images/small-banner.jpg" 
            alt="Volunteer" 
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
            Become a Volunteer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Join our community of volunteers and help us spread awareness and support patients.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl border border-slate-100"
        >
          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-4xl font-medium text-slate-900 mb-6 tracking-tight">Thank You!</h2>
              <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto font-light">
                We appreciate your interest in volunteering with AIBDF. Our team will contact you soon to discuss how you can help.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-4 bg-slate-100 text-slate-700 font-medium rounded-full hover:bg-slate-200 transition-colors"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
                <h2 className="text-4xl font-medium text-slate-900 mb-4 tracking-tight">Volunteer Registration</h2>
                <p className="text-xl text-slate-600 font-light">Please fill out the form below to join our volunteer network.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-widest">Full Name</label>
                    <input 
                      {...register("name")}
                      className="w-full px-5 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-teal-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2 font-medium">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-widest">Email Address</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full px-5 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-teal-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-widest">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-5 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-teal-500 outline-none transition-colors"
                      placeholder="+91"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-2 font-medium">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-widest">City</label>
                    <input 
                      {...register("city")}
                      className="w-full px-5 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-teal-500 outline-none transition-colors"
                      placeholder="Your City"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-2 font-medium">{errors.city.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3 uppercase tracking-widest">Profession / Skills</label>
                  <textarea 
                    {...register("profession")}
                    rows={4}
                    className="w-full px-5 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-teal-500 outline-none transition-colors resize-none"
                    placeholder="e.g., Marketing, Web Development, Event Management, Healthcare..."
                  />
                  {errors.profession && <p className="text-red-500 text-sm mt-2 font-medium">{errors.profession.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-6 bg-teal-600 hover:bg-teal-700 text-white text-xl font-medium rounded-full transition-all shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Register as Volunteer"}
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
