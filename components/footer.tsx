import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-700">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/images/drx-logo.png" alt="Dr X Logo" width={50} height={50} className="rounded-full" />
            <span className="text-3xl font-bold gradient-text">Dr X</span>
          </Link>
          <p className="text-lg leading-relaxed mb-4">
            Dr X هي شركة رائدة في تطوير الويب، تطبيقات الجوال، وحلول الذكاء الاصطناعي المبتكرة. نحن نساعد الشركات على
            تحقيق أهدافها الرقمية.
          </p>
          <div className="flex gap-4">
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

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                خدماتنا
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition-colors">
                أعمالنا
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link href="/chat" className="hover:text-white transition-colors">
                الدردشة
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">تواصل معنا</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-drx-orange" />
              <a href="mailto:info@drx.com" className="hover:text-white transition-colors">
                info@drx.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-drx-orange" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +123 456 7890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-drx-orange">📍</span>
              <span>الرياض، المملكة العربية السعودية</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dr X. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
