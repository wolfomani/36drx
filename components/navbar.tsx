"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageSquare, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
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
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                من نحن
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                الخدمات
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                أعمالنا
              </Link>
              <Link
                href="/analytics"
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                التحليلات
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
            <Button
              onClick={toggleMobileMenu}
              className="text-white hover:text-orange-400 bg-transparent hover:bg-transparent"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div id="mobile-menu" className={cn("md:hidden nav-blur", { hidden: !isMobileMenuOpen })}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium">
            الرئيسية
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            من نحن
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            الخدمات
          </Link>
          <Link
            href="/portfolio"
            className="text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            أعمالنا
          </Link>
          <Link
            href="/analytics"
            className="text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium"
          >
            التحليلات
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-orange-400 block px-3 py-2 rounded-md text-base font-medium"
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
      </div>
    </nav>
  )
}
