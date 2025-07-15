"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
    { name: "المشاريع", href: "/portfolio" },
    { name: "التحليلات", href: "/analytics" },
    { name: "عنا", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
    { name: "الدردشة", href: "/chat" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/drx-logo.png"
            alt="Dr X Logo"
            width={40}
            height={40}
            className="rounded-full glow-effect"
          />
          <span className="text-white text-2xl font-bold mr-3 gradient-text">Dr X</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-gray-300 hover:text-white transition-colors text-lg font-medium",
                pathname === link.href && "text-white font-bold border-b-2 border-drx-orange pb-1",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden bg-black/90 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-gray-300 hover:text-white transition-colors text-xl font-medium py-2 w-full text-center",
                pathname === link.href && "text-white font-bold border-b-2 border-drx-orange pb-1",
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
