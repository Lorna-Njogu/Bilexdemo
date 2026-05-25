import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "lenis/dist/lenis.css";
import "react-phone-number-input/style.css";
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
  openGraph: {
    title: "Gold Testing & Assaying Services in Kenya | Bilex Minerals",
    description:
      "Book gold testing, assaying, purity review and private consultation with Bilex Minerals.",
    url: "https://bilexminerals.com",
    siteName: "Bilex Minerals",
    images: [
      {
        url: "https://bilexminerals.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bilex Minerals gold testing and assaying",
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
    images: ["https://bilexminerals.com/twitter-image.png"],
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
      </body>
    </html>
  );
}
