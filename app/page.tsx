import { HomePage } from "@/components/home-page";
import { SiteHeader } from "@/components/site-header";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bilex Minerals",
  url: "https://bilexminerals.com",
  logo: "https://bilexminerals.com/bilex-logo.webp",
  description:
    "Industrial and strategic mineral sourcing, bismuth supply support, processing coordination, quality assessment, and export partnership company.",
  areaServed: ["Kenya", "Tanzania", "East Africa"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254735405910",
    contactType: "consultation desk",
    areaServed: "East Africa",
    availableLanguage: ["English", "Swahili"],
  },
  knowsAbout: [
    "mineral trading East Africa",
    "bismuth supply",
    "strategic minerals",
    "mineral processing support",
    "mineral export services",
    "industrial mineral sourcing",
  ],
};

export default function Page() {
  return (
    <>
      <SiteHeader variant="transparent" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomePage />
    </>
  );
}
