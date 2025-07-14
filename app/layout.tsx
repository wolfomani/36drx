import type React from "react"
import { Cairo } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "dr.x",
  title: "Dr X - حلول الذكاء الاصطناعي وتطوير الويب",
  description: "Dr X هي شركة رائدة في تطوير الويب، تطبيقات الجوال، وحلول الذكاء الاصطناعي المبتكرة.",
}
