import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Cairo, Tajawal } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

const tajawal = Tajawal({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "Dr.X AI Assistant",
  description: "Your advanced AI assistant powered by DeepSeek and other models.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${cairo.variable} ${tajawal.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
