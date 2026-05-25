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
    "Book gold testing, assaying, purity review and private consultation with Bilex Minerals. Payment is accepted by bank transfer, USDT, cryptocurrency and cash.",
  keywords: [
    "gold assaying Kenya",
    "gold testing services",
    "gold purity testing",
    "gold purity review",
    "gold testing Kenya",
    "gold result review",
    "gold testing appointment",
  ],
  alternates: {
    canonical: "https://bilexminerals.com",
  },
  openGraph: {
    title: "Gold Testing & Assaying Services in Kenya | Bilex Minerals",
    description:
      "Book gold testing, assaying, purity review and private consultation with Bilex Minerals.",
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
      "Gold testing, assaying, purity review and XAU/USD market reference.",
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
