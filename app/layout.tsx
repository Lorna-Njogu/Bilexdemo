import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteFooter } from "@/components/site-footer";

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
      "Industrial Mineral Suppliers in Kenya | Bilex Minerals",
    template: "%s | Bilex Minerals",
  },
  description:
    "Bilex Minerals supplies industrial minerals for construction, manufacturing and export markets, with reliable sourcing, quality focus and bulk supply capability.",
  keywords: [
    "industrial minerals Kenya",
    "mineral suppliers Kenya",
    "mineral export company",
    "bulk mineral supply",
    "processed minerals",
    "mining and mineral sourcing",
    "mineral processing support",
    "bismuth supplier",
    "strategic minerals",
  ],
  alternates: {
    canonical: "https://bilexminerals.com",
  },
  openGraph: {
    title: "Industrial Mineral Suppliers in Kenya | Bilex Minerals",
    description:
      "Industrial mineral sourcing, bulk supply, processing support and export coordination for construction, manufacturing and export markets.",
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
      "Industrial mineral sourcing, bulk supply, processing support and export coordination in Kenya.",
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
      </body>
    </html>
  );
}
