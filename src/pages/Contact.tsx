import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import Seo from "../components/seo/Seo";
import { organizationSchema, webPageSchema } from "../components/seo/schemas";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Contact AIBDF"
        description="Reach AIBDF's patient services, media, partnerships, or general enquiries team. Based in Pune, India. Responding within 2 working days."
        jsonLd={[
          organizationSchema,
          webPageSchema({
            path: "/contact",
            name: "Contact AIBDF",
            description: "Get in touch with AIBDF.",
            breadcrumbs: [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }],
          }),
        ]}
      />
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          <div className="absolute top-40 -left-40 w-[40rem] h-[40rem] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <AnimatedHeading 
              text="*Contact* Us"
              className="text-5xl md:text-7xl font-medium text-slate-900 mb-8 tracking-tight leading-tight"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10"
            >
              Have a question or want to collaborate? We are here to answer your questions. Please leave us a message and we will contact you as soon as possible.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info - Bento Style */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-primary rounded-[2rem] p-10 shadow-xl relative overflow-hidden group h-full flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150" />
              <h3 className="text-3xl font-medium text-white mb-10 tracking-tight relative z-10">Get in Touch</h3>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-start gap-5 group/item">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white group-hover/item:text-brand-primary transition-all text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 text-sm uppercase tracking-wider mb-2">Address</h4>
                    <p className="text-white text-lg leading-relaxed font-medium">
                      502, Surad Apartment<br />
                      106/13, Erandwana<br />
                      Pune-411004, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white group-hover/item:text-brand-primary transition-all text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 text-sm uppercase tracking-wider mb-2">Phone</h4>
                    <p className="text-white text-lg leading-relaxed font-medium">
                      <a href="tel:9112006844" className="hover:text-white/80 transition-colors block">+91 9112006844</a>
                      <a href="tel:9341800200" className="hover:text-white/80 transition-colors block">+91 9341800200</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover/item:bg-white group-hover/item:text-brand-primary transition-all text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/80 text-sm uppercase tracking-wider mb-2">Email</h4>
                    <p className="text-white text-lg leading-relaxed font-medium">
                      <a href="mailto:info@aibdf.in" className="hover:text-white/80 transition-colors">info@aibdf.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form - Bento Style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-[2rem] p-10 md:p-14 shadow-2xl border border-slate-100"
          >
            {isSubmitted ? (
              <div className="text-center py-16 h-full flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-4xl font-medium text-slate-900 mb-6 tracking-tight">Message Sent!</h2>
                <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto font-light">
                  Thank you for contacting AIBDF. We have received your message and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 bg-slate-100 text-slate-700 font-medium rounded-2xl hover:bg-slate-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-8 tracking-tight">Send us a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Your Name</label>
                    <input 
                      {...register("name")}
                      className="w-full px-6 py-4 text-lg border border-slate-200 bg-slate-50 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2 font-medium">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Email Address</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full px-6 py-4 text-lg border border-slate-200 bg-slate-50 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2 font-medium">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-6 py-4 text-lg border border-slate-200 bg-slate-50 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all"
                      placeholder="+91"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-2 font-medium">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Inquiry Type</label>
                    <select 
                      {...register("inquiryType")}
                      className="w-full px-6 py-4 text-lg border border-slate-200 bg-slate-50 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="general">General Inquiry</option>
                      <option value="medical_collaboration">Medical Collaboration</option>
                      <option value="donation">Donation Query</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="media">Media / Press</option>
                    </select>
                    {errors.inquiryType && <p className="text-red-500 text-sm mt-2 font-medium">{errors.inquiryType.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={5}
                    className="w-full px-6 py-4 text-lg border border-slate-200 bg-slate-50 rounded-2xl focus:border-brand-primary focus:bg-white outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-2 font-medium">{errors.message.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-brand-primary text-white text-lg font-medium rounded-2xl transition-all shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
