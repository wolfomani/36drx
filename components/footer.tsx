import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-700 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image
              src="/images/drx-logo.png"
              alt="Dr X Logo"
              width={50}
              height={50}
              className="rounded-full glow-effect"
            />
            <span className="text-3xl font-bold gradient-text">Dr X</span>
          </Link>
          <p className="text-gray-400 max-w-md">
            Dr X هي شركة رائدة في تقديم حلول الذكاء الاصطناعي المتطورة وتطوير الويب وتطبيقات الجوال، ملتزمون بتقديم
            الابتكار والتميز.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-center md:text-right">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white mb-2">روابط سريعة</h3>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              الرئيسية
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
              خدماتنا
            </Link>
            <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
              أعمالنا
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white mb-2">الشركة</h3>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              من نحن
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              تواصل معنا
            </Link>
            <Link href="/chat" className="text-gray-400 hover:text-white transition-colors">
              الدردشة
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white mb-2">الموارد</h3>
            <Link href="/analytics" className="text-gray-400 hover:text-white transition-colors">
              التحليلات
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              المدونة
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              الأسئلة الشائعة
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-semibold text-white mb-2">تابعنا</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Dr X. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
