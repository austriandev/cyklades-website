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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen antialiased`}>
        <BackgroundGallery />
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  )
}
