import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Brain, MessageSquare } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

export const metadata: Metadata = {
  title: "Dr X - مساعد الذكاء الاصطناعي",
  description: "حلول ذكية ومبتكرة في مجال الذكاء الاصطناعي والتكنولوجيا المتقدمة",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.className} ${cairo.variable} bg-gray-50 scroll-smooth`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <nav className="fixed w-full z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/" className="text-gray-900 dark:text-white text-xl font-bold flex items-center">
                      <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400 ml-2" />
                      Dr X
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                    <Link
                      href="/"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      الرئيسية
                    </Link>
                    <Link
                      href="/about"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      من نحن
                    </Link>
                    <Link
                      href="/services"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      الخدمات
                    </Link>
                    <Link
                      href="/portfolio"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      أعمالنا
                    </Link>
                    <Link
                      href="/analytics"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      التحليلات
                    </Link>
                    <Link
                      href="/contact"
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      اتصل بنا
                    </Link>
                    <Link
                      href="/chat"
                      className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors flex items-center"
                    >
                      دردش مع د. إكس <MessageSquare className="h-4 w-4 mr-2" />
                    </Link>
                  </div>
                </div>
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-gray-900 dark:text-white">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-white dark:bg-gray-900 text-right">
                      <div className="flex flex-col space-y-4 pt-8">
                        <Link
                          href="/"
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          الرئيسية
                        </Link>
                        <Link
                          href="/about"
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          من نحن
                        </Link>
                        <Link
                          href="/services"
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          الخدمات
                        </Link>
                        <Link
                          href="/portfolio"
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          أعمالنا
                        </Link>
                        <Link
                          href="/analytics"
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          التحليلات
                        </Link>
                        <Link
                          href="/contact"
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium"
                        >
                          اتصل بنا
                        </Link>
                        <Link
                          href="/chat"
                          className="bg-red-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center flex items-center justify-center"
                        >
                          دردش مع د. إكس <MessageSquare className="h-4 w-4 mr-2" />
                        </Link>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Dr X</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    نحن رواد في مجال الذكاء الاصطناعي، نقدم حلولاً مبتكرة تساعد الشركات على تحقيق أهدافها وتطوير أعمالها.
                  </p>
                  <div className="flex space-x-4 space-x-reverse">
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.107 4.107 0 001.27 5.477A4.072 4.072 0 014 9.659v.05c0 4.454 3.106 8.13 7.24 8.976a4.092 4.092 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844z" />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.82.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.392-1.988 1.03-2.69-.104-.253-.448-1.274.097-2.659 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.70.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.382.202 2.405.097 2.659.644.703 1.03 1.595 1.03 2.69 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.866 8.175 6.84 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.82.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.392-1.988 1.03-2.69-.104-.253-.448-1.274.097-2.659 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.70.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.382.202 2.405.097 2.659.644.703 1.03 1.595 1.03 2.69 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.477 17.523 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                        تطوير الويب
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                        تطبيقات الجوال
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                        الذكاء الاصطناعي
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                        التحليلات
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.695 4.475a1.993 1.993 0 01-1.61 0L1.5 8.67zM19.5 3h-15a3 3 0 00-3 3v.41L12 11.485 22.5 6.41V6a3 3 0 00-3-3z" />
                      </svg>
                      info@drx.ai
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.975 0 01-.625 1.902l-2.979 2.979a1.875 1.875 0 002.652 2.652l2.979-2.979a1.875 1.875 0 011.902-.625l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 2.5 16.448 2.5 9.75V7.5a3 3 0 013-3h1.372z"
                          clipRule="evenodd"
                        />
                      </svg>
                      +966 XX XXX XXXX
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a8.75 8.75 0 00.288-.144 48.487 48.487 0 002.556-1.582 46.283 46.283 0 012.105-1.333 12.24 12.24 0 002.81-1.517 12.24 12.24 0 001.517-2.81 46.283 46.283 0 011.333-2.105c.3-.485.618-.991.93-1.515a8.75 8.75 0 00.144-.288l.04-.07.016-.028a.76.76 0 000-.723l-.015-.028-.041-.071A8.75 8.75 0 0022.351 12c0-.219-.018-.438-.053-.654a8.75 8.75 0 00-.144-.288l-.04-.07-.016-.028a.76.76 0 00-.723 0l-.028.015-.071.041a8.75 8.75 0 00-.288.144 48.487 48.487 0 00-2.556 1.582 46.283 46.283 0 01-2.105 1.333 12.24 12.24 0 00-2.81 1.517 12.24 12.24 0 00-1.517 2.81 46.283 46.283 0 01-1.333 2.105c-.3.485-.618.991-.93 1.515a8.75 8.75 0 00-.144.288l-.04.07-.016.028a.76.76 0 000 .723l.015.028.041.071a8.75 8.75 0 00.288.144 48.487 48.487 0 002.556 1.582 46.283 46.283 0 012.105 1.333 12.24 12.24 0 002.81 1.517 12.24 12.24 0 001.517 2.81 46.283 46.283 0 011.333 2.105c.3.485.618.991.93 1.515a8.75 8.75 0 00.144.288l.04.07.016.028a.76.76 0 00.723 0l.028-.015.071-.041a8.75 8.75 0 00.288-.144 48.487 48.487 0 002.556-1.582 46.283 46.283 0 012.105-1.333 12.24 12.24 0 002.81-1.517 12.24 12.24 0 001.517-2.81 46.283 46.283 0 011.333-2.105c.3-.485.618-.991.93-1.515a8.75 8.75 0 00.144-.288l.04-.07.016-.028a.76.76 0 000-.723l-.015-.028-.041-.071A8.75 8.75 0 0022.351 12c0-.219-.018-.438-.053-.654a8.75 8.75 0 00-.144-.288l-.04-.07-.016-.028a.76.76 0 00-.723 0l-.028.015-.071.041a8.75 8.75 0 00-.288.144 48.487 48.487 0 00-2.556 1.582 46.283 46.283 0 01-2.105 1.333 12.24 12.24 0 00-2.81 1.517 12.24 12.24 0 00-1.517 2.81 46.283 46.283 0 01-1.333 2.105c-.3.485-.618.991-.93 1.515a8.75 8.75 0 00-.144.288l-.04.07-.016.028a.76.76 0 000 .723l.015.028.041.071a8.75 8.75 0 00.288.144 48.487 48.487 0 002.556 1.582 46.283 46.283 0 012.105 1.333 12.24 12.24 0 002.81 1.517 12.24 12.24 0 001.517 2.81 46.283 46.283 0 011.333 2.105c.3.485.618.991.93 1.515a8.75 8.75 0 00.144.288l.04.07.016.028a.76.76 0 00.723 0l.028-.015.071-.041a8.75 8.75 0 00.288-.144 48.487 48.487 0 002.556-1.582 46.283 46.283 0 012.105-1.333 12.24 12.24 0 002.81-1.517 12.24 12.24 0 001.517-2.81 46.283 46.283 0 011.333-2.105c.3-.485.618.991.93 1.515a8.75 8.75 0 00.144.288l.04.07.016.028a.76.76 0 000 .723l-.015.028-.041.071A8.75 8.75 0 0022.351 12c0-.219-.018-.438-.053-.654a8.75 8.75 0 00-.144-.288l-.04-.07-.016-.028a.76.76 0 00-.723 0l-.028.015-.071.041a8.75 8.75 0 00-.288.144 48.487 48.487 0 00-2.556 1.582 46.283 46.283 0 01-2.105 1.333 12.24 12.24 0 00-2.81 1.517 12.24 12.24 0 00-1.517 2.81 46.283 46.283 0 01-1.333 2.105c-.3.485-.618.991-.93 1.515a8.75 8.75 0 00-.144.288l-.04.07-.016.028a.76.76 0 000 .723l.015.028.041.071A8.75 8.75 0 0022.351 12c0-.219-.018-.438-.053-.654a8.75 8.75 0 00-.144-.288l-.04-.07-.016-.028a.76.76 0 00-.723 0l-.028.015-.071.041a8.75 8.75 0 00-.288.144 48.487 48.487 0 00-2.556 1.582 46.283 46.283 0 01-2.105 1.333 12.24 12.24 0 00-2.81 1.517 12.24 12.24 0 00-1.517 2.81 46.283 46.283 0 01-1.333 2.105c-.3.485-.618.991-.93 1.515a8.75 8.75 0 00-.144.288l-.04.07-.016.028a.76.76 0 000 .723l.015.028.041.071A8.75 8.75 0 0022.351 12c0-.219-.018-.438-.053-.654a8.75 8.75 0 00-.144-.288l-.04-.07-.016-.028a.76.76 0 00-.723 0l-.028.015-.071.041A8.75 8.75 0 0022.351 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      الرياض، المملكة العربية السعودية
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-300">&copy; 2025 Dr X. جميع الحقوق محفوظة لعبدالعزيز الحمداني.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
