import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

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
  // In a server component, you cannot use usePathname directly.
  // For conditional rendering based on route, you would typically pass a prop
  // from a layout.tsx that wraps a client component, or use a separate layout
  // for specific routes. For simplicity and to avoid breaking the existing structure,
  // we will keep Navbar and Footer rendered globally.
  // The chat page will be modified to remove its internal header.

  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} bg-black text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
