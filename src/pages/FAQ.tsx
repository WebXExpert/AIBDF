import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import Seo from "../components/seo/Seo";
import { faqPageSchema, webPageSchema } from "../components/seo/schemas";

const faqs = [
  {
    question: "What diseases does AIBDF support?",
    answer: "AIBDF primarily supports patients suffering from auto-immune blistering diseases, including Pemphigus (Vulgaris, Foliaceus), Bullous Pemphigoid, and Mucous Membrane Pemphigoid. If you have a related rare skin condition, please contact us to see if we can assist."
  },
  {
    question: "How can patients register for assistance?",
    answer: "Patients or their caregivers can register by visiting the 'Get Help' page on our website and filling out the Patient Registration Form. You will need to provide basic contact information, diagnosis details, and a brief overview of your financial situation."
  },
  {
    question: "How does the assistance process work?",
    answer: "Once you submit a registration form, our medical review team evaluates your case. We then connect you with a specialist doctor in our network. Based on the doctor's assessment and your financial need, we determine the level of treatment or financial support we can provide."
  },
  {
    question: "What kind of financial support is provided?",
    answer: "Financial support varies based on the patient's needs and available foundation funds. It can cover the cost of expensive medications (like Rituximab or immunosuppressants), diagnostic tests, or hospital admission fees for severe flare-ups."
  },
  {
    question: "How can doctors collaborate with AIBDF?",
    answer: "Dermatologists and specialists experienced in treating auto-immune blistering diseases can join our network by contacting us through the 'Contact' page. We refer patients to our network doctors and collaborate on treatment plans."
  },
  {
    question: "How can I donate to the foundation?",
    answer: "You can donate securely through our 'Donate' page using UPI, Net Banking, or Credit/Debit cards. Your donations directly fund patient treatments and awareness programs. All donations are eligible for tax exemption under section 80G."
  },
  {
    question: "Is AIBDF a registered NGO?",
    answer: "Yes, the Auto-Immune Blistering Disease Foundation is a fully registered non-profit organization based in Pune, India, dedicated to supporting patients nationwide."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen pb-24">
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about AIBDF — patient assistance, supported diseases, how we operate, tax benefits, and how to collaborate."
        jsonLd={[
          faqPageSchema(faqs.map((f) => ({ q: f.question, a: f.answer }))),
          webPageSchema({
            path: "/faq",
            name: "FAQ",
            description: "Frequently asked questions about AIBDF.",
            breadcrumbs: [{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }],
          }),
        ]}
      />
      {/* Header */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/wp-images/testimonial-topbanner.jpg" 
            alt="FAQ" 
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Find answers to common questions about our foundation, assistance programs, and how you can help.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-900 text-2xl pr-8 tracking-tight">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "w-8 h-8 text-slate-400 transition-transform duration-300 flex-shrink-0",
                    openIndex === i ? "rotate-180 text-blue-600" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "px-8 overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === i ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-slate-600 text-lg leading-relaxed pt-6 border-t border-slate-100 font-light">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
