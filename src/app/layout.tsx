import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoundersDAO Conference 2025",
  description: "Las Vegas, NV - September 19-21, 2025 | Join us for three days of insight, connection, and momentum with Web3 founders, operators, and investors.",
  openGraph: {
    title: "FoundersDAO Conference 2025",
    description: "Las Vegas, NV - September 19-21, 2025 | Join us for three days of insight, connection, and momentum with Web3 founders, operators, and investors.",
    type: "website",
    locale: "en_US",
    url: "https://foundersdao2025-4jauqkae3-whart0ns-projects.vercel.app",
    siteName: "FoundersDAO Conference 2025"
  },
  twitter: {
    card: "summary_large_image",
    title: "FoundersDAO Conference 2025",
    description: "Las Vegas, NV - September 19-21, 2025 | Join us for three days of insight, connection, and momentum with Web3 founders, operators, and investors.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
