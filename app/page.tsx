import { HomePage } from "@/components/home-page";
import { SiteHeader } from "@/components/site-header";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bilex Minerals",
  url: "https://bilexminerals.com",
  logo: "https://bilexminerals.com/bilex-logo.webp",
  description:
    "East African mineral trading, gold sourcing, assaying, CIF logistics, exploration support, and equipment leasing company.",
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
    "gold sourcing Kenya",
    "gold assaying",
    "mining logistics East Africa",
    "mineral export services",
    "exploration support Africa",
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
