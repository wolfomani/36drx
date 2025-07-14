import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Globe, Mail, DiscIcon as Discord, MapPin } from "lucide-react"

export default function Footer() {
  return (
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
                className="text-gray-300 hover:text-orange-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://hamkamai.github.io/3weep.app"
                className="text-gray-300 hover:text-orange-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-6 w-6" />
              </Link>
              <Link
                href="https://36drx.vercel.app"
                className="text-gray-300 hover:text-orange-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  تطوير الويب
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  تطبيقات الجوال
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  الذكاء الاصطناعي
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-300 hover:text-orange-400 transition-colors">
                  التحليلات
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2" />
                balqees0alalawi@gmail.com
              </li>
              <li className="flex items-center">
                <Discord className="h-5 w-5 ml-2" />
                @abdulaziz-x7r1g
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 ml-2" />
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
  )
}
