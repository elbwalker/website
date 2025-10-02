import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
  metadataBase: new URL("https://www.elbwalker.com"),
  title: {
    default: "elbwalker - Privacy-First Data Collection",
    template: "%s | elbwalker",
  },
  description: "We help teams build privacy-first data collection with walkerOS - an open-source platform for digital analytics.",
  openGraph: {
    title: "elbwalker - Privacy-First Data Collection",
    description: "We help teams build privacy-first data collection with walkerOS - an open-source platform for digital analytics.",
    url: "https://www.elbwalker.com",
    siteName: "elbwalker",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "elbwalker - Privacy-First Data Collection",
    description: "We help teams build privacy-first data collection with walkerOS - an open-source platform for digital analytics.",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
