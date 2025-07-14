"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
    { name: "من نحن", href: "/about" },
    { name: "أعمالنا", href: "/portfolio" },
    { name: "التحليلات", href: "/analytics" },
    { name: "تواصل معنا", href: "/contact" },
    { name: "الدردشة", href: "/chat" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/drx-logo.png"
            alt="Dr X Logo"
            width={40}
            height={40}
            className="rounded-full glow-effect"
          />
          <span className="text-2xl font-bold gradient-text">Dr X</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden bg-gray-900/90 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-xl font-medium py-2"
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
