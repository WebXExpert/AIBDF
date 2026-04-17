export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  author: string;
  authorTitle: string;
  category: "Awareness" | "Treatment" | "Living With" | "Research";
  tags: string[];
  image: string;
  medicallyReviewedBy?: string;
  sections: Array<{ heading?: string; paragraphs: string[]; list?: string[] }>;
};

export const posts: Post[] = [
  {
    slug: "what-is-pemphigus-vulgaris",
    title: "What is Pemphigus Vulgaris? Early signs every patient should know",
    excerpt:
      "Pemphigus vulgaris is a rare but serious auto-immune blistering disease. Early recognition of its signs — painful oral sores, flaccid skin blisters, slow healing — dramatically changes outcomes.",
    date: "2026-03-12",
    readMinutes: 6,
    author: "AIBDF Editorial Team",
    authorTitle: "Reviewed by AIBDF Medical Advisory Board",
    category: "Awareness",
    tags: ["Pemphigus Vulgaris", "Early Detection", "Oral Sores"],
    image: "/wp-images/Autoimmune-image1.jpg",
    medicallyReviewedBy: "Prof. A. C. Inamadar, MD, FRCP (Edin)",
    sections: [
      {
        paragraphs: [
          "Pemphigus vulgaris (PV) is a rare auto-immune disease in which the body's own immune system mistakenly attacks the proteins that hold skin and mucous-membrane cells together. The result is fragile, painful blisters and erosions — often starting inside the mouth before they appear on the skin.",
          "PV is not contagious, not inherited in a simple way, and not caused by allergies. It is, however, serious: untreated PV can be life-threatening. The good news is that with modern treatment most patients achieve remission.",
        ],
      },
      {
        heading: "The early signs",
        paragraphs: [
          "In 50–70% of patients, the first sign is painful sores inside the mouth — usually the cheeks, gums, or palate — that won't heal. They are often mistaken for recurring ulcers, dental problems, or viral infection.",
          "Skin blisters typically follow weeks or months later. Unlike insect-bite blisters, PV blisters are flaccid (soft and floppy), rupture easily, and leave raw, slow-healing areas behind.",
        ],
        list: [
          "Mouth sores that persist for more than 3 weeks",
          "Blisters on the scalp, chest, back, or groin that break open quickly",
          "Painful erosions rather than classic fluid-filled domes",
          "A positive Nikolsky sign (gentle pressure causes the skin to slide or peel)",
        ],
      },
      {
        heading: "Why diagnosis is often delayed",
        paragraphs: [
          "Because PV is rare — roughly 1 to 5 cases per million people per year — most general practitioners and even some dermatologists may see only a handful of cases in their career. Oral lesions are frequently diagnosed as aphthous ulcers, candidiasis, or lichen planus first.",
          "The average diagnostic delay in India is 4 to 9 months. That delay matters: early diagnosis means less skin involvement, lower steroid exposure, and a faster path to remission.",
        ],
      },
      {
        heading: "What to do if you suspect PV",
        paragraphs: [
          "If you or a loved one has mouth sores that haven't healed in three weeks, or skin blisters that break open easily and leave raw areas, ask your doctor specifically about auto-immune blistering diseases.",
          "The definitive diagnosis requires a skin biopsy with direct immunofluorescence (DIF) — a test that most tertiary dermatology departments can perform. Serum tests for anti-desmoglein antibodies can support the diagnosis.",
          "AIBDF can connect you with experienced dermatologists and help navigate diagnosis, treatment costs, and long-term care. Our team has supported hundreds of patients through exactly this journey.",
        ],
      },
    ],
  },
  {
    slug: "living-with-bullous-pemphigoid",
    title: "Living with bullous pemphigoid: daily skin care that makes a difference",
    excerpt:
      "Bullous pemphigoid affects mostly older adults and requires patient daily care alongside medical treatment. Small routines can dramatically reduce discomfort and infection risk.",
    date: "2026-02-22",
    readMinutes: 7,
    author: "AIBDF Editorial Team",
    authorTitle: "Reviewed by AIBDF Medical Advisory Board",
    category: "Living With",
    tags: ["Bullous Pemphigoid", "Skin Care", "Daily Living"],
    image: "/wp-images/Autoimmune-image2.jpg",
    medicallyReviewedBy: "Dr. Sharad Mutalik, AIBDF Trustee & Dermatologist",
    sections: [
      {
        paragraphs: [
          "Bullous pemphigoid (BP) is the most common auto-immune blistering disease, typically appearing after age 60. Unlike pemphigus, BP blisters are tense and filled with clear fluid, often preceded by an intensely itchy, red, or hive-like rash that can last weeks before the first blister appears.",
          "Treatment is primarily medical — topical and systemic corticosteroids, sometimes with steroid-sparing agents or biologics. But daily skin care done at home is just as important for healing, comfort, and preventing secondary infection.",
        ],
      },
      {
        heading: "A gentle daily routine",
        paragraphs: [
          "The goal of daily care is simple: keep intact skin moisturised, keep open areas clean and protected, and avoid anything that causes friction or further damage.",
        ],
        list: [
          "Bathe in lukewarm (not hot) water with a soap-free, fragrance-free cleanser",
          "Pat skin dry — never rub — and apply a thick, fragrance-free moisturiser within 3 minutes of patting dry",
          "Cover open erosions with non-adherent dressings (e.g., petrolatum-impregnated gauze) rather than regular gauze",
          "Use cotton clothing, wash with hypoallergenic detergent, and avoid tight seams or rough fabrics",
          "Keep fingernails short to reduce scratching damage during itchy phases",
        ],
      },
      {
        heading: "When to call your doctor",
        paragraphs: [
          "Call your dermatologist promptly if you notice: rapidly spreading new blisters, yellow or green discharge from erosions (possible infection), fever, unusual fatigue, or any side effects from your medication (weight gain, mood changes, blood sugar spikes, vision changes).",
          "Regular follow-ups matter. BP is a chronic condition — the goal is to use the lowest effective dose of medication to keep it quiet, while minimising long-term side effects. That balance changes over time and needs periodic review.",
        ],
      },
      {
        heading: "You are not alone",
        paragraphs: [
          "BP can be isolating, especially for older adults already managing other health conditions. AIBDF runs caregiver support groups and connects patients with peers who have been through the same journey. Reach out — that conversation is free, confidential, and often the first step toward feeling in control again.",
        ],
      },
    ],
  },
  {
    slug: "financial-support-for-rare-disease-treatment",
    title: "How to access financial support for rare-disease treatment in India",
    excerpt:
      "Long-term auto-immune disease treatment is expensive. Here is a practical guide to navigating government schemes, charitable support, and AIBDF's patient assistance fund.",
    date: "2026-01-18",
    readMinutes: 8,
    author: "AIBDF Patient Services Team",
    authorTitle: "Based on our 2024–2025 patient case work",
    category: "Treatment",
    tags: ["Patient Support", "Financial Aid", "India"],
    image: "/wp-images/fin-help.png",
    sections: [
      {
        paragraphs: [
          "A year of treatment for pemphigus or pemphigoid in India can easily cross ₹2–4 lakhs for medicines alone, and more for severe cases that require biologics like rituximab. For most families, this is an impossible burden on top of the emotional toll. The encouraging news: multiple financial pathways exist. Most patients just don't know where to look.",
        ],
      },
      {
        heading: "1. Government schemes to explore first",
        paragraphs: [
          "India has several programs that can partly or fully cover treatment for rare auto-immune diseases, though access is uneven across states.",
        ],
        list: [
          "National Policy for Rare Diseases (NPRD) 2021 — up to ₹50 lakhs per patient at designated Centres of Excellence",
          "Pradhan Mantri Jan Arogya Yojana (Ayushman Bharat) — if you are eligible, covers inpatient care and some specialist consultations",
          "State-specific schemes — Mahatma Jyotiba Phule Jan Arogya Yojana (Maharashtra), CMCHIS (Tamil Nadu), and similar in Karnataka, Telangana, Kerala",
          "CGHS and ESIC — if you or a family member are covered through government or industrial employment",
        ],
      },
      {
        heading: "2. Charitable and industry support",
        paragraphs: [
          "Several pharmaceutical companies run patient access programs for expensive medicines like rituximab — sometimes providing the drug at cost or free for eligible patients. Hospital medical social work departments at Tata Memorial, AIIMS, JIPMER, and most major teaching hospitals can help you apply.",
          "Charitable foundations — HelpAge, ImpactGuru, Milaap campaigns, and AIBDF's own patient assistance fund — can bridge gaps that government schemes don't cover.",
        ],
      },
      {
        heading: "3. What AIBDF does",
        paragraphs: [
          "AIBDF maintains a dedicated patient assistance fund built from donor contributions. We prioritise patients who are newly diagnosed, below a household-income threshold, or facing acute out-of-pocket crisis during treatment. Grants typically cover: specific medicines not available locally, diagnostic biopsies and DIF testing, and travel to specialist centres.",
          "To apply: contact our patient services team via the Get Help page. We'll ask for basic medical records, a household-income declaration, and your treating doctor's contact — and respond within 5 working days.",
        ],
      },
      {
        heading: "Practical tips",
        paragraphs: [
          "Keep copies of every prescription, bill, and diagnostic report. Many schemes require the original documentation and some want the treating dermatologist's signature on specific forms.",
          "Apply to multiple sources in parallel — waiting for one scheme's decision can take weeks. Don't skip doses while you wait; talk to your doctor about bridging options.",
        ],
      },
    ],
  },
  {
    slug: "rituximab-and-biologics-what-patients-should-know",
    title: "Rituximab and biologics in blistering disease: what patients should know",
    excerpt:
      "Rituximab has transformed treatment for severe pemphigus. Here is an accessible overview of how it works, what to expect, and the questions to ask your dermatologist.",
    date: "2025-11-30",
    readMinutes: 9,
    author: "AIBDF Editorial Team",
    authorTitle: "Reviewed by AIBDF Medical Advisory Board",
    category: "Research",
    tags: ["Rituximab", "Biologics", "Treatment"],
    image: "/wp-images/Autoimmune-image3.jpg",
    medicallyReviewedBy: "Prof. Takashi Hashimoto, Osaka Metropolitan University",
    sections: [
      {
        paragraphs: [
          "For decades, high-dose corticosteroids were the backbone of pemphigus treatment — effective, but with a heavy side-effect burden over months and years. The arrival of rituximab, a monoclonal antibody that selectively depletes B-cells, has fundamentally changed that equation. In 2018 the U.S. FDA approved rituximab as first-line therapy for moderate-to-severe pemphigus vulgaris, a position now echoed in Indian and European guidelines.",
        ],
      },
      {
        heading: "How rituximab works — in plain language",
        paragraphs: [
          "In auto-immune blistering diseases, certain B-cells in your immune system produce the antibodies that damage the skin. Rituximab works by temporarily removing most of those B-cells. When the body rebuilds its B-cell population months later, the newly-produced cells often no longer carry the disease-causing programming.",
          "In practice this means: most patients receive 2 infusions separated by 2 weeks (or 4 weekly infusions), with follow-up doses every 6–12 months based on response.",
        ],
      },
      {
        heading: "What to expect during treatment",
        paragraphs: [
          "Infusions are given in a day-care setting, typically lasting 4–6 hours with a slow ramp-up. Pre-medication (paracetamol, antihistamine, and a small steroid dose) minimises infusion reactions. Most patients experience nothing more than tiredness or a mild headache.",
          "Response is not immediate. Visible improvement usually begins 4–8 weeks after the first infusion, and deepens over 6 months. Your dermatologist will likely taper your steroid dose in parallel as rituximab takes effect.",
        ],
      },
      {
        heading: "Risks and precautions",
        paragraphs: [
          "The main risk is infection, because B-cell depletion weakens one arm of your immune defence. Live vaccines should be avoided. Hepatitis B reactivation is a specific concern — everyone is screened before starting. Progressive multifocal leukoencephalopathy (PML) is a very rare but serious risk; any new neurological symptoms should be reported immediately.",
        ],
      },
      {
        heading: "Questions to ask your doctor",
        paragraphs: [
          "Treatment decisions are personal. These are good conversations to have:",
        ],
        list: [
          "Is rituximab appropriate for my disease severity, and what's the alternative?",
          "How will we monitor response — clinical signs, or serum antibody levels, or both?",
          "What pre-treatment screening do I need (Hepatitis B, TB, blood counts)?",
          "What is the expected timeline before we can reduce my steroid dose?",
          "What should I do if I develop fever or infection during treatment?",
          "What is the cost, and what financial-support pathways are available?",
        ],
      },
      {
        heading: "The bigger picture",
        paragraphs: [
          "Rituximab is not the only biologic on the horizon for blistering diseases. Research is active in newer B-cell targeted therapies, FcRn inhibitors, and targeted complement pathway drugs. Patients enrolled at academic centres may have access to clinical trials — worth asking about if your dermatologist is connected to one.",
        ],
      },
    ],
  },
];
