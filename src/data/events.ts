export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO
  endDate?: string;
  location: string;
  city: string;
  organizer: string;
  category: "Awareness" | "Medical" | "Patient Support" | "Fundraiser";
  summary: string;
  description: string[];
  image: string;
  registerUrl?: string;
  status: "upcoming" | "past";
};

export const events: EventItem[] = [
  {
    slug: "awareness-camp-pune-2026",
    title: "Autoimmune Blistering Disease Awareness Camp — Pune",
    date: "2026-05-18T10:00:00+05:30",
    endDate: "2026-05-18T16:00:00+05:30",
    location: "Tilak Smarak Mandir, Sadashiv Peth",
    city: "Pune, Maharashtra",
    organizer: "AIBDF with BLDE Vijaypur",
    category: "Awareness",
    summary:
      "Free awareness and screening camp for early signs of pemphigus, pemphigoid, and related blistering diseases. Dermatologists on-site for consultation.",
    description: [
      "Auto-immune blistering diseases are rare and often misdiagnosed for months. Early detection changes outcomes dramatically.",
      "This free camp brings together senior dermatologists, patient coordinators, and caregivers for a day of screening, education, and community.",
      "Walk-ins welcome. Free entry. Limited seats for 1:1 consultation — register to reserve a slot.",
    ],
    image: "/wp-images/WhatsApp-Image-2023-03-01-at-12.48.11.jpeg",
    registerUrl: "/contact",
    status: "upcoming",
  },
  {
    slug: "patient-meet-mumbai-2026",
    title: "Annual Patient & Caregiver Meet",
    date: "2026-07-12T09:30:00+05:30",
    endDate: "2026-07-12T17:00:00+05:30",
    location: "Y.B. Chavan Auditorium",
    city: "Mumbai, Maharashtra",
    organizer: "AIBDF",
    category: "Patient Support",
    summary:
      "Annual gathering for patients and families. Talks by medical experts, peer support groups, and a dedicated session on navigating long-term treatment.",
    description: [
      "Living with a rare auto-immune blistering disease is isolating. Our annual meet creates a safe space for patients and caregivers to learn, share, and find support.",
      "Sessions include: steroid management and side effects, skin care routines, insurance and financial planning for long-term care, and emotional wellbeing.",
      "Open to all AIBDF-registered patients and caregivers. Lunch and refreshments provided by AIBDF volunteers.",
    ],
    image: "/wp-images/WhatsApp-Image-2025-07-11-at-10.49.02.jpeg",
    registerUrl: "/contact",
    status: "upcoming",
  },
  {
    slug: "medical-symposium-bengaluru-2026",
    title: "International Symposium on Blistering Diseases",
    date: "2026-11-07T09:00:00+05:30",
    endDate: "2026-11-08T18:00:00+05:30",
    location: "The Leela Palace Convention Centre",
    city: "Bengaluru, Karnataka",
    organizer: "AIBDF in association with Osaka Metropolitan University",
    category: "Medical",
    summary:
      "Two-day international symposium bringing together leading dermatologists and researchers to discuss advances in diagnosis, biologics, and emerging therapies.",
    description: [
      "Our flagship medical event for the year. Keynote lectures from Prof. Takashi Hashimoto, Dr. A. Razzaque Ahmed, and Prof. A. C. Inamadar.",
      "Focus areas: diagnostic biomarkers, role of rituximab and biologics, transition care, and research collaboration across India, Japan, and the United States.",
      "CME credits available. Registration open to dermatologists, residents, and allied health professionals.",
    ],
    image: "/wp-images/WhatsApp-Image-2023-07-11-at-10.48.39.jpeg",
    registerUrl: "/contact",
    status: "upcoming",
  },
  {
    slug: "pemphigus-awareness-day-2025",
    title: "World Pemphigus & Pemphigoid Awareness Day",
    date: "2025-10-16T10:00:00+05:30",
    location: "Online + Centres across India",
    city: "National",
    organizer: "AIBDF & IPPF",
    category: "Awareness",
    summary:
      "A nationwide digital awareness drive on World PV/PP Awareness Day with patient stories, expert AMA, and media outreach.",
    description: [
      "On 16 October 2025, AIBDF joined the International Pemphigus & Pemphigoid Foundation (IPPF) for a coordinated global awareness day.",
      "We published patient stories, hosted a live Ask-Me-Anything with our advisory board, and reached over 120,000 people across social media with educational content.",
    ],
    image: "/wp-images/WhatsApp-Image-2025-07-11-at-10.49.00.jpeg",
    status: "past",
  },
  {
    slug: "patient-meet-pune-2024",
    title: "Pune Regional Patient Meet 2024",
    date: "2024-12-15T10:00:00+05:30",
    location: "AIBDF Office, Erandwane",
    city: "Pune, Maharashtra",
    organizer: "AIBDF",
    category: "Patient Support",
    summary:
      "Regional meet for our Pune patient community — stories, skin-care workshop, and a free dermatology consultation clinic.",
    description: [
      "Our December 2024 Pune meet welcomed 80+ patients and family members for a day of community, learning, and care.",
      "Highlights: a skin-care practical workshop, small-group peer support sessions, and free consultations with our medical panel.",
    ],
    image: "/wp-images/WhatsApp-Image-2022-12-09-at-11.23.57-AM.jpeg",
    status: "past",
  },
  {
    slug: "dermatologists-training-2023",
    title: "CME for Dermatologists: Recognising Rare Blistering Diseases",
    date: "2023-07-11T09:00:00+05:30",
    location: "BLDE (Deemed-to-be) University",
    city: "Vijayapura, Karnataka",
    organizer: "AIBDF with BLDE",
    category: "Medical",
    summary:
      "A CME workshop designed to reduce diagnostic delay for pemphigus and pemphigoid by training frontline dermatologists and residents.",
    description: [
      "Most patients wait months — sometimes years — for the right diagnosis. In July 2023 we ran a focused CME with BLDE Vijayapura for 60+ dermatologists and residents.",
      "Topics included clinical presentation, direct immunofluorescence interpretation, and treatment algorithms. Follow-up mentorship offered to attendees.",
    ],
    image: "/wp-images/WhatsApp-Image-2023-07-11-at-10.48.40.jpeg",
    status: "past",
  },
];
