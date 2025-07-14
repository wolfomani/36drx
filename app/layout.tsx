import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageSquare, Github, Globe, DiscIcon as Discord } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })

export const metadata: Metadata = {
  title: "Dr X - مساعد الذكاء الاصطناعي المتطور",
  description: "حلول ذكية ومبتكرة في مجال الذكاء الاصطناعي والتكنولوجيا المتقدمة",
  generator: "v0.dev",
  icons: {
    icon: "/images/drx-app-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${inter.className} ${cairo.variable} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Navigation */}
          <nav className="fixed w-full z-50 nav-blur shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/" className="text-white text-xl font-bold flex items-center">
                      <Image
                        src="/images/drx-logo.png"
                        alt="Dr X Logo"
                        width={40}
                        height={40}
                        className="ml-3 rounded-lg glow-effect"
                      />
                      <span className="gradient-text">Dr X</span>
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
                    <Link
                      href="/"
                      className="text-white hover:text-drx-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      الرئيسية
                    </Link>
                    <Link
                      href="/about"
                      className="text-white hover:text-drx-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      من نحن
                    </Link>
                    <Link
                      href="/services"
                      className="text-white hover:text-drx-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      الخدمات
                    </Link>
                    <Link
                      href="/portfolio"
                      className="text-white hover:text-drx-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      أعمالنا
                    </Link>
                    <Link
                      href="/analytics"
                      className="text-white hover:text-drx-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      التحليلات
                    </Link>
                    <Link
                      href="/contact"
                      className="text-white hover:text-drx-orange px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      اتصل بنا
                    </Link>
                    <Link
                      href="/chat"
                      className="btn-gradient text-white px-4 py-2 rounded-full text-sm font-medium flex items-center"
                    >
                      دردش مع د. إكس <MessageSquare className="h-4 w-4 mr-2" />
                    </Link>
                  </div>
                </div>
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:text-drx-orange">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="nav-blur text-right border-none">
                      <div className="flex flex-col space-y-4 pt-8">
                        <Link
                          href="/"
                          className="text-white hover:text-drx-orange block px-3 py-2 rounded-md text-base font-medium"
                        >
                          الرئيسية
                        </Link>
                        <Link
                          href="/about"
                          className="text-white hover:text-drx-orange block px-3 py-2 rounded-md text-base font-medium"
                        >
                          من نحن
                        </Link>
                        <Link
                          href="/services"
                          className="text-white hover:text-drx-orange block px-3 py-2 rounded-md text-base font-medium"
                        >
                          الخدمات
                        </Link>
                        <Link
                          href="/portfolio"
                          className="text-white hover:text-drx-orange block px-3 py-2 rounded-md text-base font-medium"
                        >
                          أعمالنا
                        </Link>
                        <Link
                          href="/analytics"
                          className="text-white hover:text-drx-orange block px-3 py-2 rounded-md text-base font-medium"
                        >
                          التحليلات
                        </Link>
                        <Link
                          href="/contact"
                          className="text-white hover:text-drx-orange block px-3 py-2 rounded-md text-base font-medium"
                        >
                          اتصل بنا
                        </Link>
                        <Link
                          href="/chat"
                          className="btn-gradient text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                        >
                          دردش مع د. إكس
                        </Link>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1">{children}</main>
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/drx-logo.png"
                      alt="Dr X Logo"
                      width={32}
                      height={32}
                      className="ml-3 rounded glow-effect"
                    />
                    <h3 className="text-2xl font-bold gradient-text">Dr X</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    نحن رواد في مجال الذكاء الاصطناعي، نقدم حلولاً مبتكرة تساعد الشركات على تحقيق أهدافها وتطوير أعمالها.
                  </p>
                  <div className="flex space-x-4 space-x-reverse">
                    <Link
                      href="https://github.com/wolfomani"
                      className="text-gray-300 hover:text-drx-orange transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </Link>
                    <Link
                      href="https://hamkamai.github.io/3weep.app"
                      className="text-gray-300 hover:text-drx-orange transition-colors"
                    >
                      <Globe className="h-6 w-6" />
                    </Link>
                    <Link
                      href="https://36drx.vercel.app"
                      className="text-gray-300 hover:text-drx-orange transition-colors"
                    >
                      <Globe className="h-6 w-6" />
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-drx-orange transition-colors">
                        تطوير الويب
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-drx-orange transition-colors">
                        تطبيقات الجوال
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" className="text-gray-300 hover:text-drx-orange transition-colors">
                        الذكاء الاصطناعي
                      </Link>
                    </li>
                    <li>
                      <Link href="/analytics" className="text-gray-300 hover:text-drx-orange transition-colors">
                        التحليلات
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <MessageSquare className="h-5 w-5 ml-2" />
                      balqees0alalawi@gmail.com
                    </li>
                    <li className="flex items-center">
                      <Discord className="h-5 w-5 ml-2" />
                      @abdulaziz-x7r1g
                    </li>
                    <li className="flex items-center">
                      <Globe className="h-5 w-5 ml-2" />
                      سلطنة عمان
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
