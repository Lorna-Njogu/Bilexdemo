import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SiteHeader } from "@/components/site-header";
import {
  createPageMetadata,
  homeKeywords,
  homePageSchema,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Professional Gold Testing & Assaying Services | Bilex Minerals EA",
  description:
    "Gold testing, assaying and purity review by appointment in Nairobi, Kenya. Accurate sample-based results for buyers, sellers and international clients. Bank transfer, USDT and cash accepted.",
  keywords: homeKeywords,
  openGraphDescription:
    "Gold testing, assaying and purity review by appointment in Nairobi, Kenya. Accurate sample-based results for buyers, sellers and international clients. Bank transfer, USDT and cash accepted.",
  twitterTitle:
    "Professional Gold Testing & Assaying Services | Bilex Minerals EA",
  twitterDescription:
    "Gold testing, assaying and purity review by appointment in Nairobi, Kenya. Accurate sample-based results for buyers, sellers and international clients. Bank transfer, USDT and cash accepted.",
});

export default function Page() {
  return (
    <>
      <SiteHeader variant="transparent" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <HomePage />
    </>
  );
}
