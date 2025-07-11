import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ChatBot from "@/components/ChatBot"
import LoadingAnimation from "@/components/LoadingAnimation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Value Engineer Pro - Precision Construction Estimating",
  description:
    "Professional construction estimating services trusted by developers and contractors. 500+ projects, 99.2% accuracy rate, 24hr turnaround.",
  keywords: "construction estimating, cost planning, quantity takeoffs, value engineering",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        <LoadingAnimation />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
