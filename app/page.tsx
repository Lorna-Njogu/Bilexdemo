import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SiteHeader } from "@/components/site-header";
import {
  createPageMetadata,
  faqSchema,
  homeKeywords,
  localBusinessSchema,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gold Testing & Assaying Services in East Africa | Bilex Minerals",
  description:
    "Professional gold testing, assaying and purity review in Nairobi, Kenya. Serving international traders, buyers and investors from the US and Europe. By appointment.",
  keywords: homeKeywords,
  openGraphDescription:
    "Professional gold testing, assaying and purity review in Nairobi, Kenya. Serving international traders, buyers and investors. By appointment.",
  twitterTitle: "Gold Testing & Assaying Services | Bilex Minerals",
  twitterDescription:
    "Gold testing, assaying, purity review and result documentation. Nairobi, Kenya. Serving international clients.",
});

const schemas = [localBusinessSchema, faqSchema];

export default function Page() {
  return (
    <>
      <SiteHeader variant="transparent" />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HomePage />
    </>
  );
}
