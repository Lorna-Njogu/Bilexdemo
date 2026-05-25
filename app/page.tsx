import { HomePage } from "@/components/home-page";
import { SiteHeader } from "@/components/site-header";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bilex Minerals",
  url: "https://bilexminerals.com",
  logo: "https://bilexminerals.com/bilex-logo.webp",
  description:
    "Industrial mineral supplier in Kenya supporting bulk mineral supply, processed minerals, mining and mineral sourcing, and export coordination.",
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
    "industrial minerals Kenya",
    "mineral suppliers Kenya",
    "mineral export company",
    "bulk mineral supply",
    "processed minerals",
    "mining and mineral sourcing",
    "bismuth supply",
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
