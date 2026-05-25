import { HomePage } from "@/components/home-page";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: {
    absolute: "Gold Testing & Assaying Services in Kenya | Bilex Minerals",
  },
  description:
    "Book gold testing, assaying, purity review and private consultation with Bilex Minerals. Payment is accepted by bank transfer, USDT, cryptocurrency and cash.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bilex Minerals",
  url: "https://bilexminerals.com",
  logo: "https://bilexminerals.com/bilex-logo.webp",
  description:
    "Gold testing, assaying, purity review and private consultation services in Kenya.",
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
    "gold result review",
    "XAU/USD market reference",
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
