import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B5CF6",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://farishtafm.com"),
  title: {
    default: "Farishta FM - Your Spiritual Audio Companion | Islamic Audio App",
    template: "%s | Farishta FM",
  },
  description:
    "Discover peace and spiritual growth with Farishta FM. Stream Quran recitations, Islamic lectures, nasheeds, duas, and spiritual content. Download the app for a personalized spiritual journey.",
  keywords: [
    "Islamic audio",
    "Quran app",
    "Islamic lectures",
    "Nasheeds",
    "Duas",
    "Spiritual content",
    "Muslim app",
    "Islamic podcast",
    "Quran recitation",
    "Islamic meditation",
    "Farishta FM",
    "Religious audio",
    "Spiritual wellness",
  ],
  authors: [{ name: "Farishta FM Team" }],
  creator: "Farishta FM",
  publisher: "Farishta FM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farishtafm.com",
    siteName: "Farishta FM",
    title: "Farishta FM - Your Spiritual Audio Companion",
    description:
      "Stream Quran recitations, Islamic lectures, nasheeds, and spiritual content. Your daily dose of peace and spiritual growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Farishta FM - Spiritual Audio App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Farishta FM - Your Spiritual Audio Companion",
    description:
      "Stream Quran recitations, Islamic lectures, nasheeds, and spiritual content. Your daily dose of peace and spiritual growth.",
    images: ["/og-image.png"],
    creator: "@FarishtaFM",
  },
  alternates: {
    canonical: "https://farishtafm.com",
  },
  category: "Religion & Spirituality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
