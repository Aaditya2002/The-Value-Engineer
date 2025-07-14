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
  title: "The Value Engineering - Peace of Mind in Construction Estimating",
  description:
    "We are selling peace of mind. Your Scope. Your Format. Your Timeline. We Estimate It All. Trusted by contractors worldwide.",
  keywords: "construction estimating, quantity takeoff, value engineering, peace of mind, free sample estimate, custom workflow",
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
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <div className="text-center text-xs text-gray-400 py-2">
          Now featuring a video background on the homepage. Logo & color scheme updates coming soon.
        </div>
        <ChatBot />
      </body>
    </html>
  )
}
