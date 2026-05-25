import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteFooter } from "@/components/site-footer";
import { FloatingSiteTools } from "@/components/floating-site-tools";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://bilexminerals.com"),
  title: {
    default:
      "Gold Testing & Assaying Services in Kenya | Bilex Minerals",
    template: "%s | Bilex Minerals",
  },
  description:
    "Bilex Minerals provides professional gold testing, assaying, purity analysis, verification and consultation services for buyers, traders and investors.",
  keywords: [
    "gold suppliers Kenya",
    "gold assaying Kenya",
    "gold testing services",
    "gold purity testing",
    "gold verification Kenya",
    "gold testing Kenya",
    "live gold prices",
    "gold price chart USD",
    "gold market trends",
  ],
  alternates: {
    canonical: "https://bilexminerals.com",
  },
  openGraph: {
    title: "Gold Testing & Assaying Services in Kenya | Bilex Minerals",
    description:
      "Professional gold testing, assaying, purity analysis, verification and consultation services.",
    url: "https://bilexminerals.com",
    siteName: "Bilex Minerals",
    images: [
      {
        url: "/bilex-logo.webp",
        width: 512,
        height: 512,
        alt: "Bilex Minerals EA logo",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilex Minerals",
    description:
      "Professional gold testing, assaying, purity analysis and live gold price reference.",
    images: ["/bilex-logo.webp"],
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
      >
        <SmoothScroll />
        {children}
        <SiteFooter />
        <FloatingSiteTools />
      </body>
    </html>
  );
}
