import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Sparkle, Brain, Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-drx-black/80 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/dr-x-logo.png" alt="Dr.X Logo" width={88} height={33} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-drx-light-gray hover:text-drx-gold transition-colors flex items-center gap-2">
            <Home className="w-4 h-4" />
            الرئيسية
          </Link>
          <Link
            href="/chat"
            className="text-drx-light-gray hover:text-drx-gold transition-colors flex items-center gap-2"
          >
            <Sparkle className="w-4 h-4" />
            الدردشة AI
          </Link>
          <Link
            href="#features"
            className="text-drx-light-gray hover:text-drx-gold transition-colors flex items-center gap-2"
          >
            <Brain className="w-4 h-4" />
            المميزات
          </Link>
          <Link
            href="#contact"
            className="text-drx-light-gray hover:text-drx-gold transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            اتصل بنا
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="text-drx-gold border-drx-gold hover:bg-drx-red hover:text-white transition-colors bg-transparent"
        >
          تسجيل الدخول
        </Button>
        <Button className="bg-drx-red text-white hover:bg-drx-gold hover:text-drx-black transition-colors">سجل</Button>
      </div>
    </header>
  )
}
