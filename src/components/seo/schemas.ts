import { SITE_URL, SITE_NAME } from "./Seo";

const ORG_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["NGO", "MedicalOrganization"],
  "@id": ORG_ID,
  name: "Auto-Immune Blistering Disease Foundation",
  alternateName: "AIBDF",
  legalName: "Auto-Immune Blistering Disease Foundation",
  description:
    "AIBDF is a registered Indian charitable trust providing awareness, medical guidance, and financial support for people living with auto-immune blistering diseases such as pemphigus and pemphigoid.",
  url: SITE_URL,
  logo: "https://res.cloudinary.com/dtm0v42aw/image/upload/v1775735525/AIBDF_Logo_oo3vit.png",
  image: `${SITE_URL}/wp-images/about-topbanner.jpg`,
  founder: {
    "@type": "Person",
    name: "Ashok Suratwala",
  },
  foundingDate: "2020",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  medicalSpecialty: ["Dermatology", "Immunology"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9112006844",
      email: "info@aibdf.in",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi", "mr"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "502 Surad Apartment, 106/13 Erandwane",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411004",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/aibdf",
    "https://www.linkedin.com/company/aibdf",
  ],
  knowsAbout: [
    "Pemphigus Vulgaris",
    "Bullous Pemphigoid",
    "Dermatitis Herpetiformis",
    "Epidermolysis Bullosa Acquisita",
    "Auto-immune Blistering Diseases",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  breadcrumbs?: Array<{ name: string; path: string }>;
}) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${opts.path}#webpage`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
  if (opts.breadcrumbs && opts.breadcrumbs.length > 0) {
    base.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: opts.breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.path}`,
      })),
    };
  }
  return base;
}

export function articleSchema(opts: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  authorTitle?: string;
  reviewedBy?: string;
}) {
  const imageUrl = opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}`;
  const a: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": opts.reviewedBy ? "MedicalWebPage" : "Article",
    headline: opts.title,
    description: opts.description,
    image: [imageUrl],
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      "@type": "Organization",
      name: opts.author,
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${opts.slug}`,
    },
    inLanguage: "en-IN",
  };
  if (opts.reviewedBy) {
    a.lastReviewed = opts.dateModified ?? opts.datePublished;
    a.reviewedBy = { "@type": "Person", name: opts.reviewedBy };
    a.audience = { "@type": "Audience", audienceType: "Patient" };
  }
  return a;
}

export function eventSchema(opts: {
  slug: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  city: string;
  organizer: string;
  image: string;
  isPast: boolean;
}) {
  const imageUrl = opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: opts.name,
    description: opts.description,
    startDate: opts.startDate,
    endDate: opts.endDate ?? opts.startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: opts.isPast
      ? "https://schema.org/EventScheduled"
      : "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: opts.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: opts.city,
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: opts.organizer,
      url: SITE_URL,
    },
    image: [imageUrl],
    url: `${SITE_URL}/events/${opts.slug}`,
  };
}

export function physicianSchema(opts: {
  name: string;
  medicalSpecialty?: string;
  affiliation?: string;
  description?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: opts.name,
    medicalSpecialty: opts.medicalSpecialty ?? "Dermatology",
    affiliation: opts.affiliation
      ? { "@type": "Organization", name: opts.affiliation }
      : undefined,
    description: opts.description,
    image: opts.image?.startsWith("http") ? opts.image : opts.image ? `${SITE_URL}${opts.image}` : undefined,
  };
}

export function faqPageSchema(qa: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
