import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leader Chips Maroc | قضي على الملل",
  description:
    "Leader Chips Maroc — Suivez-nous sur Instagram, TikTok et WhatsApp. قضي على الملل!",
  keywords: [
    "Leader Chips",
    "Leader Chips Maroc",
    "chips",
    "Morocco",
    "قضي على الملل",
  ],
  authors: [{ name: "Leader Chips Maroc" }],
  openGraph: {
    title: "Leader Chips Maroc | قضي على الملل",
    description:
      "Suivez Leader Chips Maroc sur Instagram, TikTok et WhatsApp.",
    siteName: "Leader Chips Maroc",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leader Chips Maroc | قضي على الملل",
    description:
      "Suivez Leader Chips Maroc sur Instagram, TikTok et WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e31837",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
