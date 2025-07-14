import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-lg border-t border-gray-700 py-10 text-gray-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/drx-logo.png"
              alt="Dr X Logo"
              width={40}
              height={40}
              className="rounded-full glow-effect"
            />
            <span className="text-2xl font-bold gradient-text">Dr X</span>
          </div>
          <p className="text-sm leading-relaxed">
            نحن شركة Dr X، نقدم حلولاً مبتكرة في تطوير الويب، تطبيقات الجوال، والذكاء الاصطناعي. نسعى لتمكين عملائنا
            بأحدث التقنيات.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition-colors">
                أعمالنا
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">خدماتنا</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services#web-development" className="hover:text-white transition-colors">
                تطوير الويب
              </Link>
            </li>
            <li>
              <Link href="/services#mobile-apps" className="hover:text-white transition-colors">
                تطبيقات الجوال
              </Link>
            </li>
            <li>
              <Link href="/services#ai-solutions" className="hover:text-white transition-colors">
                حلول الذكاء الاصطناعي
              </Link>
            </li>
            <li>
              <Link href="/services#ui-ux" className="hover:text-white transition-colors">
                تصميم UI/UX
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">تواصل معنا</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-amber-400" />
              <a href="mailto:info@drx.com" className="hover:text-white transition-colors">
                info@drx.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-amber-400" />
              <a href="tel:+966501234567" className="hover:text-white transition-colors">
                +966 50 123 4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">الموقع:</span> الرياض، المملكة العربية السعودية
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dr X. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
