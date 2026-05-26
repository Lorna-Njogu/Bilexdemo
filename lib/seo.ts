import type { Metadata } from "next";

export const siteUrl = "https://bilexminerals.com";
export const siteName = "Bilex Minerals";

const ogImage = `${siteUrl}/opengraph-image.png`;
const twitterImage = `${siteUrl}/twitter-image.png`;
const languageAlternates = ["en", "en-US", "en-GB", "en-DE", "x-default"];

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  imageAlt?: string;
  keywords?: string[];
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

export const homeKeywords = [
  "gold assaying East Africa",
  "gold testing Kenya",
  "gold purity testing Africa",
  "gold assay laboratory Nairobi",
  "gold testing international buyers",
  "gold assaying services",
  "gold verification East Africa",
];

export const homeFaqs = [
  {
    question: "How long does a testing appointment take?",
    answer:
      "Timing is confirmed at booking and depends on the service and sample. Most appointments are completed within the session.",
  },
  {
    question: "How are results provided?",
    answer:
      "Results are reviewed in person at the appointment. A written service record is provided where required.",
  },
  {
    question: "Does Bilex also sell gold?",
    answer:
      "Yes. Gold sales are handled by private inquiry, separately from testing and assaying services.",
  },
  {
    question: "Does the test result affect payment?",
    answer: "No. Payment is for the service. The result has no bearing on the fee.",
  },
];

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

function getLanguageAlternates(path: string) {
  const url = absoluteUrl(path);

  return Object.fromEntries(
    languageAlternates.map((language) => [language, url]),
  );
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  imageAlt = "Bilex Minerals gold testing and assaying services",
  keywords,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const socialDescription = openGraphDescription ?? description;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description: socialDescription,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: "en_US",
      alternateLocale: ["en_GB", "en_KE"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle ?? title,
      description: twitterDescription ?? socialDescription,
      images: [twitterImage],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/bilex-logo.webp`,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  serviceType: ["Gold Testing", "Gold Assaying", "Gold Purity Testing"],
  areaServed: ["Kenya", "Tanzania", "East Africa"],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bilex Minerals EA",
  description:
    "Professional gold testing, assaying, purity review and private consultation in Nairobi, Kenya. Serving international traders, buyers and investors.",
  url: siteUrl,
  telephone: "+254735405910",
  email: "info@bilexminerals.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Off Mombasa Road",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "KE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    description: "By appointment only",
  },
  currenciesAccepted: "USD, KES, USDT",
  paymentAccepted: "Cash, Bank Transfer, Cryptocurrency, USDT",
  areaServed: [
    { "@type": "Country", name: "Kenya" },
    { "@type": "Country", name: "Tanzania" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Switzerland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gold Testing and Assaying Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gold Testing",
          description:
            "Professional sample evaluation for clients preparing to buy, sell or proceed.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gold Assaying",
          description:
            "Detailed chemical analysis of submitted gold samples with documented results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gold Purity Review",
          description:
            "Precise assessment of sample grade and physical condition.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Consultation",
          description:
            "One-on-one review of results and discussion of next steps.",
        },
      },
    ],
  },
  sameAs: ["https://wa.me/254735405910"],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
