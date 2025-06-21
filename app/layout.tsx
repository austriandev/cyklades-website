import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import BackgroundGallery from "@/components/background-gallery"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] })

export const metadata: Metadata = {
  title: "CYKLADES Records - House Music Label from Athens",
  description:
    "CYKLADES Records - Independent house music label based in Athens, Greece. Discover our artists and latest releases.",
  keywords: "house music, electronic music, Athens, Greece, record label, CYKLADES",
  authors: [{ name: "Alexandros Voliotis" }],
  creator: "Alexandros Voliotis",
  publisher: "CYKLADES Records",
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
    url: "https://cyklades.com",
    title: "CYKLADES Records - House Music Label from Athens",
    description: "Independent house music label based in Athens, Greece. Discover our artists and latest releases.",
    siteName: "CYKLADES Records",
  },
  twitter: {
    card: "summary_large_image",
    title: "CYKLADES Records - House Music Label from Athens",
    description: "Independent house music label based in Athens, Greece.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased`}>
        <BackgroundGallery />
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
