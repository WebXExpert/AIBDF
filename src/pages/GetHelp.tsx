import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FileText, CheckCircle2, AlertCircle, Upload } from "lucide-react";
import { useState } from "react";
import Seo from "../components/seo/Seo";
import { webPageSchema } from "../components/seo/schemas";
import { submitForm } from "../lib/submitForm";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  city: z.string().min(2, "City is required"),
  disease: z.string().min(1, "Please select a disease category"),
  diagnosisDate: z.string().min(1, "Diagnosis date is required"),
  hospital: z.string().min(2, "Hospital name is required"),
  doctor: z.string().min(2, "Treating doctor's name is required"),
  financialCondition: z.string().min(1, "Please describe your financial situation briefly"),
});

type FormData = z.infer<typeof formSchema>;

export default function GetHelp() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      await submitForm("help", data);
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please email info@aibdf.in.");
    }
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Get Help from AIBDF"
        description="Patients and caregivers can register for AIBDF's support — specialist referrals, financial assistance, and guidance for navigating auto-immune blistering disease care."
        jsonLd={webPageSchema({
          path: "/get-help",
          name: "Get Help",
          description: "Register for patient support.",
          breadcrumbs: [{ name: "Home", path: "/" }, { name: "Get Help", path: "/get-help" }],
        })}
      />
      {/* Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wp-images/small-banner.jpg" 
            alt="Patient Assistance" 
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
            Request Patient Assistance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            AIBDF helps patients access treatment guidance and support. Please fill out the form below to start the process.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8"
            >
              <h3 className="text-2xl font-medium text-slate-900 mb-6 tracking-tight">The Process</h3>
              <ul className="space-y-6">
                {[
                  "Submit patient details",
                  "Medical evaluation by our team",
                  "Support determination",
                  "Doctor coordination & treatment"
                ].map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-slate-700 text-lg font-light">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8"
            >
              <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Required Information</h3>
              <p className="text-base text-slate-600 mb-6 font-light">Please have the following ready before submitting your request:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-base text-slate-700 font-light">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Diagnosis details
                </li>
                <li className="flex items-center gap-3 text-base text-slate-700 font-light">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Medical reports
                </li>
                <li className="flex items-center gap-3 text-base text-slate-700 font-light">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Current treatment details
                </li>
                <li className="flex items-center gap-3 text-base text-slate-700 font-light">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Financial situation overview
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 md:p-14"
          >
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-medium text-slate-900 mb-4 tracking-tight">Request Submitted Successfully</h2>
                <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out to AIBDF. Our medical review team will assess your details and contact you within 48 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-medium text-lg hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-100">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-medium text-slate-900 tracking-tight">Patient Registration Form</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-base font-medium text-slate-700 mb-2">Patient Name</label>
                      <input 
                        {...register("name")}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                        placeholder="Full Name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-base font-medium text-slate-700 mb-2">Phone Number</label>
                      <input 
                        {...register("phone")}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                        placeholder="+91"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-base font-medium text-slate-700 mb-2">Email Address</label>
                      <input 
                        {...register("email")}
                        type="email"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                        placeholder="email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-base font-medium text-slate-700 mb-2">City</label>
                      <input 
                        {...register("city")}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                        placeholder="City of Residence"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city.message}</p>}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-8 mt-8">
                    <h3 className="text-2xl font-medium text-slate-900 mb-6 tracking-tight">Medical Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-base font-medium text-slate-700 mb-2">Disease Type</label>
                        <select 
                          {...register("disease")}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                        >
                          <option value="">Select Disease</option>
                          <option value="pemphigus">Pemphigus</option>
                          <option value="bullous_pemphigoid">Bullous Pemphigoid</option>
                          <option value="mmp">Mucous Membrane Pemphigoid</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                        {errors.disease && <p className="text-red-500 text-sm mt-2">{errors.disease.message}</p>}
                      </div>
                      <div>
                        <label className="block text-base font-medium text-slate-700 mb-2">Date of Diagnosis</label>
                        <input 
                          {...register("diagnosisDate")}
                          type="date"
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                        />
                        {errors.diagnosisDate && <p className="text-red-500 text-sm mt-2">{errors.diagnosisDate.message}</p>}
                      </div>
                      <div>
                        <label className="block text-base font-medium text-slate-700 mb-2">Treating Hospital</label>
                        <input 
                          {...register("hospital")}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                          placeholder="Hospital Name"
                        />
                        {errors.hospital && <p className="text-red-500 text-sm mt-2">{errors.hospital.message}</p>}
                      </div>
                      <div>
                        <label className="block text-base font-medium text-slate-700 mb-2">Treating Doctor</label>
                        <input 
                          {...register("doctor")}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-lg"
                          placeholder="Doctor's Name"
                        />
                        {errors.doctor && <p className="text-red-500 text-sm mt-2">{errors.doctor.message}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-8 mt-8">
                    <h3 className="text-2xl font-medium text-slate-900 mb-6 tracking-tight">Assistance Needed</h3>
                    <div>
                      <label className="block text-base font-medium text-slate-700 mb-2">Financial Condition & Support Required</label>
                      <textarea 
                        {...register("financialCondition")}
                        rows={5}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-lg"
                        placeholder="Please briefly describe your situation and the kind of support you are seeking..."
                      />
                      {errors.financialCondition && <p className="text-red-500 text-sm mt-2">{errors.financialCondition.message}</p>}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base text-blue-800 font-light leading-relaxed">
                      By submitting this form, you consent to AIBDF securely storing your information for the purpose of medical evaluation and assistance.
                    </p>
                  </div>

                  <input type="text" {...register("website" as never)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm font-medium">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-xl py-5 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Request...
                      </span>
                    ) : (
                      "Submit Request for Assistance"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
