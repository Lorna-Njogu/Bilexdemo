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
      "Bilex Minerals | Gold Sourcing, Mineral Trading & Logistics East Africa",
    template: "%s | Bilex Minerals",
  },
  description:
    "Premium East African mineral trading, gold sourcing in Kenya, assaying services, CIF logistics, mineral export support, exploration support, and equipment leasing from Bilex Minerals.",
  keywords: [
    "mineral trading East Africa",
    "gold sourcing Kenya",
    "gold dealers Kenya",
    "assaying services Kenya",
    "mining logistics East Africa",
    "mineral export services",
    "exploration support Africa",
    "gold trading company Kenya",
  ],
  alternates: {
    canonical: "https://bilexminerals.com",
  },
  openGraph: {
    title: "Bilex Minerals",
    description:
      "Trusted East African mineral trading, gold sourcing, assaying, CIF logistics, and exploration support.",
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
      "Premium East African gold sourcing, mineral trading, assaying, and export logistics.",
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
