import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, AlertCircle, Activity, Stethoscope, Pill, Heart } from "lucide-react";

const diseaseData = {
  "pemphigus": {
    name: "Pemphigus",
    overview: "Pemphigus is a group of rare autoimmune diseases that cause blistering of the skin and mucous membranes (mouth, nose, throat, eyes, and genitals). In pemphigus, the immune system mistakenly attacks cells in the top layer of the skin (epidermis) and mucous membranes.",
    symptoms: [
      "Blisters on the skin that rupture easily",
      "Painful sores in the mouth or throat",
      "Blisters that may ooze, crust, or peel",
      "Difficulty eating or swallowing due to mouth sores"
    ],
    causes: "The exact cause is unknown. It occurs when the immune system produces antibodies that attack healthy cells in the skin and mucous membranes. It is not contagious.",
    diagnosis: [
      "Physical examination of the blisters",
      "Skin biopsy (examining a sample under a microscope)",
      "Blood tests to detect specific antibodies"
    ],
    treatment: [
      "Corticosteroids to reduce inflammation",
      "Immunosuppressant drugs to stop the immune system from attacking healthy tissue",
      "Biologic therapies (e.g., Rituximab)",
      "Wound care for ruptured blisters"
    ],
    living: "Patients are advised to avoid spicy or hard foods if they have mouth sores, practice good oral hygiene, minimize sun exposure, and gently care for their skin to prevent infection.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000"
  },
  "bullous-pemphigoid": {
    name: "Bullous Pemphigoid",
    overview: "Bullous pemphigoid is a rare skin condition that causes large, fluid-filled blisters. They develop on areas of skin that often flex — such as the lower abdomen, upper thighs or armpits. It is most common in older adults.",
    symptoms: [
      "Large, fluid-filled blisters that don't easily rupture",
      "Severe itching, often weeks or months before blisters appear",
      "Red, irritated skin around the blisters",
      "Small blisters or sores in the mouth (less common)"
    ],
    causes: "It's an autoimmune disorder where the immune system attacks a thin layer of tissue below the outer layer of skin. Certain medications, light therapy, or radiation can sometimes trigger it.",
    diagnosis: [
      "Clinical examination of the skin",
      "Skin biopsy",
      "Blood tests for specific antibodies"
    ],
    treatment: [
      "Topical or oral corticosteroids",
      "Immunosuppressants",
      "Anti-inflammatory medications"
    ],
    living: "Keep the skin clean and moisturized. Avoid activities that might rupture the blisters. Wear loose-fitting cotton clothing to minimize friction.",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=2000"
  },
  "mucous-membrane-pemphigoid": {
    name: "Mucous Membrane Pemphigoid",
    overview: "Mucous membrane pemphigoid (MMP) is a rare group of autoimmune disorders characterized by blistering lesions that primarily affect the various mucous membranes of the body, most commonly the mouth and eyes.",
    symptoms: [
      "Painful sores and blisters in the mouth",
      "Redness, irritation, and scarring in the eyes",
      "Blisters in the nose, throat, or genitals",
      "Hoarseness or difficulty swallowing"
    ],
    causes: "Like other pemphigoid diseases, it is caused by autoantibodies attacking the basement membrane zone of the mucous membranes. The trigger is generally unknown.",
    diagnosis: [
      "Biopsy of the affected mucous membrane",
      "Direct immunofluorescence (DIF) testing",
      "Ophthalmological examination if eyes are involved"
    ],
    treatment: [
      "Topical corticosteroids for localized disease",
      "Systemic corticosteroids and immunosuppressants for severe cases",
      "Dapsone or other anti-inflammatory drugs",
      "Specialized eye care to prevent scarring and vision loss"
    ],
    living: "Regular dental and eye check-ups are crucial. Eat a soft diet to avoid irritating mouth sores. Practice meticulous oral hygiene.",
    img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=2000"
  }
};

export default function DiseaseDetail() {
  const { id } = useParams<{ id: string }>();
  const disease = id ? diseaseData[id as keyof typeof diseaseData] : null;

  if (!disease) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Disease not found</h2>
          <Link to="/diseases" className="text-blue-600 hover:underline">Return to Diseases</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[500px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={disease.img} 
            alt={disease.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link to="/diseases" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to all diseases
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-medium text-white tracking-tight"
          >
            {disease.name}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-16">
          
          {/* Overview */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-50 p-10 md:p-12 rounded-[2rem] border border-slate-100"
          >
            <h2 className="text-3xl font-medium text-slate-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-blue-600" /> Overview
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              {disease.overview}
            </p>
          </motion.section>

          {/* Symptoms & Causes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200"
            >
              <h2 className="text-2xl font-medium text-slate-900 mb-8 flex items-center gap-3">
                <Activity className="w-6 h-6 text-rose-500" /> Symptoms
              </h2>
              <ul className="space-y-4">
                {disease.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-rose-400 rounded-full mt-2.5 flex-shrink-0"></span>
                    <span className="text-slate-600 text-lg">{symptom}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-200"
            >
              <h2 className="text-2xl font-medium text-slate-900 mb-8 flex items-center gap-3">
                <Stethoscope className="w-6 h-6 text-teal-500" /> Causes
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {disease.causes}
              </p>
            </motion.section>
          </div>

          {/* Diagnosis & Treatment */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-medium mb-8 flex items-center gap-3">
                  <Stethoscope className="w-8 h-8 text-blue-400" /> Diagnosis
                </h2>
                <ul className="space-y-5">
                  {disease.diagnosis.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-lg">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-medium mb-8 flex items-center gap-3">
                  <Pill className="w-8 h-8 text-blue-400" /> Treatment
                </h2>
                <ul className="space-y-5">
                  {disease.treatment.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-lg">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2.5 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Living Guidance */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-10 md:p-12 rounded-[2rem] border border-blue-100"
          >
            <h2 className="text-3xl font-medium text-slate-900 mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-blue-600" /> Living Guidance
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed font-light">
              {disease.living}
            </p>
          </motion.section>

          {/* CTA */}
          <div className="pt-16 pb-8 text-center">
            <h3 className="text-4xl font-medium text-slate-900 mb-6">Need help with {disease.name}?</h3>
            <p className="text-xl text-slate-600 mb-10 font-light">AIBDF can connect you with specialists and provide treatment assistance.</p>
            <Link
              to="/get-help"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
            >
              Request Patient Assistance
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
