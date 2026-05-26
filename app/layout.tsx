import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "lenis/dist/lenis.css";
import "react-phone-number-input/style.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteFooter } from "@/components/site-footer";
import { FloatingSiteTools } from "@/components/floating-site-tools";
import { createPageMetadata, homeKeywords } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
  weight: ["500", "700"],
});

const analyticsDsn = process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_DSN;
const speedInsightsDsn = process.env.NEXT_PUBLIC_VERCEL_SPEED_INSIGHTS_DSN;

const analyticsProps = {
  mode: "production" as const,
  scriptSrc: "https://va.vercel-scripts.com/v1/script.js",
  ...(analyticsDsn ? { dsn: analyticsDsn } : {}),
};

const speedInsightsProps = {
  scriptSrc: "https://va.vercel-scripts.com/v1/speed-insights/script.js",
  ...(speedInsightsDsn ? { dsn: speedInsightsDsn } : {}),
};

export const metadata: Metadata = {
  ...createPageMetadata({
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
  }),
  metadataBase: new URL("https://bilexminerals.com"),
  robots:
    process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : { index: true, follow: true },
  icons: {
    icon: [
      { url: "https://bilexminerals.com/favicon.ico", sizes: "any" },
      {
        url: "https://bilexminerals.com/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "https://bilexminerals.com/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        {children}
        <SiteFooter />
        <FloatingSiteTools />
        <Analytics {...analyticsProps} />
        <SpeedInsights {...speedInsightsProps} />
      </body>
    </html>
  );
}
