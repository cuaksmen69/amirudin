import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amirudin.com'),
  title: "AMIRUDIN - Solusi Terpercaya untuk Kesuksesan Bisnis Anda",
  description: "AMIRUDIN adalah mitra bisnis profesional yang berkomitmen untuk membantu mengembangkan potensi usaha Anda dengan solusi inovatif dan terpercaya. Layanan konsultasi bisnis terbaik di Jambi.",
  keywords: ["AMIRUDIN", "konsultasi bisnis", "manajemen proyek", "pengembangan usaha", "bisnis profesional", "Jambi", "Muaro Jambi", "Kumpeh Ulu"],
  authors: [{ name: "AMIRUDIN Team" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "AMIRUDIN - Solusi Terpercaya untuk Kesuksesan Bisnis Anda",
    description: "Mitra bisnis profesional yang berkomitmen untuk membantu mengembangkan potensi usaha Anda dengan solusi inovatif dan terpercaya.",
    url: "https://amirudin.com",
    siteName: "AMIRUDIN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "AMIRUDIN Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMIRUDIN - Solusi Terpercaya untuk Kesuksesan Bisnis Anda",
    description: "Mitra bisnis profesional yang berkomitmen untuk membantu mengembangkan potensi usaha Anda dengan solusi inovatif dan terpercaya.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
