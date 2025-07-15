import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-700 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-300">
        <div className="flex flex-col items-center mb-6">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/images/drx-logo.png"
              alt="Dr X Logo"
              width={50}
              height={50}
              className="rounded-full glow-effect"
            />
            <span className="text-white text-3xl font-bold mr-3 gradient-text">Dr X</span>
          </Link>
          <p className="max-w-2xl mx-auto text-lg">
            مساعدك الذكي المتطور - مدعوم بأحدث تقنيات الذكاء الاصطناعي لتقديم حلول مبتكرة في تطوير الويب، تطبيقات
            الجوال، والذكاء الاصطناعي.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-lg">
          <div>
            <h3 className="font-semibold text-white mb-3">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  المشاريع
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  عنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>البريد الإلكتروني: info@drx.com</li>
              <li>الهاتف: +966 50 123 4567</li>
              <li>العنوان: الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">السياسات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  شروط الخدمة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <p>&copy; {new Date().getFullYear()} Dr X. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
