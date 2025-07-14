import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Dr X - مساعد الذكاء الاصطناعي المتطور",
  description: "مساعدك الذكي المتطور - مدعوم بأحدث تقنيات الذكاء الاصطناعي",
  icons: {
    icon: "/images/drx-app-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} font-cairo bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
