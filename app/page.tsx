import { HomePage } from "@/components/home-page";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Professional Gold Testing and Assaying Services",
  description:
    "Professional gold testing, assaying, purity analysis, verification and consultation for buyers, traders and investors, with a live XAU/USD gold price reference.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bilex Minerals",
  url: "https://bilexminerals.com",
  logo: "https://bilexminerals.com/bilex-logo.webp",
  description:
    "Professional gold testing, assaying, purity analysis, verification and consultation services in Kenya.",
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
    "gold assaying Kenya",
    "gold testing services",
    "gold purity testing",
    "gold quality verification",
    "live gold prices",
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
