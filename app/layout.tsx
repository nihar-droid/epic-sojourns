import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import QuoteModalProvider from "@/components/providers/QuoteModalProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Epic Sojourns | Luxury Travel, MICE & Destination Weddings",
    template: "%s | Epic Sojourns",
  },

  description:
    "Epic Sojourns specializes in Corporate MICE, Destination Weddings, Luxury Holidays, Domestic & International Tour Packages, and Visa Assistance.",

  keywords: [
    "Epic Sojourns",
    "Corporate MICE",
    "Destination Wedding",
    "Luxury Travel",
    "Travel Agency India",
    "Visa Assistance",
    "International Tours",
    "Domestic Tours",
    "Business Travel",
    "Corporate Events",
  ],

  authors: [{ name: "Epic Sojourns" }],

  creator: "Epic Sojourns",

  metadataBase: new URL("https://epicsojourns.com"),

  openGraph: {
    title: "Epic Sojourns",
    description:
      "Luxury travel experiences, destination weddings, corporate MICE and visa assistance.",

    url: "https://epicsojourns.com",

    siteName: "Epic Sojourns",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Epic Sojourns",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Epic Sojourns",
    description:
      "Luxury travel experiences, destination weddings and corporate MICE.",
    images: ["/logo/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
