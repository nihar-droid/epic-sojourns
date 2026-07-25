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
  title:
    "Epic Sojourns | Corporate MICE | Destination Weddings | Luxury Travel",
  description:
    "Epic Sojourns specializes in Corporate MICE, Destination Weddings, Domestic & International Tour Packages, and Visa Assistance.",
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
