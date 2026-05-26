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
    question: "What services can I book at Bilex Minerals?",
    answer:
      "You can book gold testing, assaying, purity review, result review, buying consultation or selling consultation.",
  },
  {
    question: "How are results provided?",
    answer:
      "Results are reviewed in person at the appointment. A written service record is provided where required.",
  },
  {
    question: "What payment methods does Bilex Minerals accept?",
    answer: "Accepted payment methods: bank transfer, USDT, cryptocurrency and cash.",
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

export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Bilex Minerals EA",
      url: siteUrl,
      logo: `${siteUrl}/bilex-logo.webp`,
      email: "info@bilexminerals.com",
      telephone: "+254735405910",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "Bilex Minerals EA",
      description:
        "Professional gold testing, assaying, purity review and private consultation in Nairobi, Kenya.",
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.3031,
        longitude: 36.8218,
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
        opens: "08:00",
        closes: "17:00",
      },
      paymentAccepted: "Bank Transfer, Cash, Cryptocurrency, USDT",
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Country", name: "Tanzania" },
        { "@type": "Country", name: "United States" },
        { "@type": "Continent", name: "Europe" },
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
                "Detailed chemical analysis of submitted gold samples, with results documented against the tested material.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Private Consultation",
              description:
                "One-on-one review of your results and a clear discussion of next steps.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gold Sourcing",
              description:
                "Gold sourcing support for buyers with specific grade, volume or origin requirements.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gold Exporting",
              description:
                "Support for clients moving gold across borders. Documentation, compliance guidance and export coordination.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gold Exploration",
              description:
                "Advisory and field support for clients with active or prospective exploration interests in East Africa.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Bilex Minerals EA",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does gold testing take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timing is confirmed at booking and depends on the service and sample. Most appointments are completed within the session.",
          },
        },
        {
          "@type": "Question",
          name: "What gold testing services can I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can book gold testing, gold assaying, purity review, result review, buying consultation or selling consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Is consultation available after gold testing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Results are reviewed with the client directly. Next steps are the client's to decide.",
          },
        },
        {
          "@type": "Question",
          name: "How are gold test results provided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Results are reviewed in person at the appointment. A written service record is provided where required.",
          },
        },
        {
          "@type": "Question",
          name: "What payment methods are accepted?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bank transfer, USDT, cryptocurrency and cash are accepted.",
          },
        },
        {
          "@type": "Question",
          name: "Does Bilex Minerals sell gold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gold sales are handled by private inquiry, separately from testing and assaying services.",
          },
        },
        {
          "@type": "Question",
          name: "Does the test result affect payment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Payment is for the service. The result has no bearing on the fee.",
          },
        },
      ],
    },
  ],
};

export const testingAssayingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/testing-assaying`,
      url: `${siteUrl}/testing-assaying`,
      name: "Gold Assaying, Purity Testing and Result Review | Bilex Minerals",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Testing and Assaying",
            item: `${siteUrl}/testing-assaying`,
          },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Gold Testing and Assaying",
      provider: { "@id": `${siteUrl}/#business` },
      serviceType: "Gold Assaying and Testing",
      description:
        "Comprehensive gold testing, assaying, purity review and result documentation for clients presenting gold samples by appointment in Nairobi, Kenya.",
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "Country", name: "Tanzania" },
        { "@type": "Country", name: "United States" },
        { "@type": "Continent", name: "Europe" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Gold Testing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Gold Assaying",
              description:
                "Detailed chemical analysis of submitted gold samples, with results documented against the tested material.",
            },
          },
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
              name: "Gold Purity Testing",
              description:
                "A precise assessment of sample grade and physical condition.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Result Review",
              description:
                "One-on-one review of your results and a clear discussion of next steps.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Result Documentation",
              description:
                "Written documentation of test results, issued as a service record where required.",
            },
          },
        ],
      },
    },
  ],
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/contact`,
      url: `${siteUrl}/contact`,
      name: "Book a Gold Testing Appointment | Bilex Minerals Nairobi",
      description:
        "Book a gold testing or assaying appointment with Bilex Minerals in Nairobi, Kenya.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Book Appointment",
            item: `${siteUrl}/contact`,
          },
        ],
      },
    },
  ],
};
