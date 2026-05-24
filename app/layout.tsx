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
      "Bilex Minerals | Rare Mineral Supply & Industrial Procurement",
    template: "%s | Bilex Minerals",
  },
  description:
    "Bilex Minerals supports rare mineral sourcing, bismuth supply, mineral analysis, processing support, export coordination, and international procurement partnerships.",
  keywords: [
    "bismuth supplier",
    "strategic minerals",
    "industrial mineral sourcing",
    "mineral processing support",
    "mining logistics East Africa",
    "mineral export services",
    "industrial minerals East Africa",
    "international mineral supply",
  ],
  alternates: {
    canonical: "https://bilexminerals.com",
  },
  openGraph: {
    title: "Bilex Minerals",
    description:
      "Rare mineral sourcing, bismuth supply, mineral analysis, processing support, and export coordination.",
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
      "Rare mineral sourcing, bismuth supply, mineral analysis, processing support, and export coordination.",
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
