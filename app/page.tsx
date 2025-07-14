import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Rocket, ShieldCheck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            مساعدك الذكي المتطور
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            مدعوم بأحدث تقنيات الذكاء الاصطناعي لتبسيط مهامك اليومية وتعزيز إنتاجيتك.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <Link href="/chat">
              <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
                ابدأ الدردشة الآن <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="btn-outline-gradient px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform bg-transparent"
              >
                اكتشف خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-fade-in-up">لماذا تختار Dr X؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-orange transition-all duration-300 animate-fade-in-up">
              <Lightbulb className="h-12 w-12 text-drx-orange mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">حلول مبتكرة</h3>
              <p className="text-gray-300">نقدم أحدث التقنيات في الذكاء الاصطناعي وتطوير الويب.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-red transition-all duration-300 animate-fade-in-up delay-200">
              <Rocket className="h-12 w-12 text-drx-red mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">أداء لا مثيل له</h3>
              <p className="text-gray-300">تصميمات سريعة، آمنة، وموثوقة لعملك.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 animate-fade-in-up delay-400">
              <ShieldCheck className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">أمان وخصوصية</h3>
              <p className="text-gray-300">نضمن حماية بياناتك بأعلى معايير الأمان.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-fade-in-up">خدماتنا الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Web Development"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-3">تطوير الويب</h3>
              <p className="text-gray-300">بناء مواقع وتطبيقات ويب عصرية ومتجاوبة.</p>
              <Link href="/services#web-development" className="text-drx-orange hover:underline mt-4 block">
                اعرف المزيد <ArrowRight className="inline-block h-4 w-4 mr-1" />
              </Link>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up delay-200">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Mobile App Development"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-3">تطوير تطبيقات الجوال</h3>
              <p className="text-gray-300">تطبيقات iOS و Android قوية وسهلة الاستخدام.</p>
              <Link href="/services#mobile-development" className="text-drx-orange hover:underline mt-4 block">
                اعرف المزيد <ArrowRight className="inline-block h-4 w-4 mr-1" />
              </Link>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up delay-400">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="AI Solutions"
                width={100}
                height={100}
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-3">حلول الذكاء الاصطناعي</h3>
              <p className="text-gray-300">تطوير أنظمة ذكاء اصطناعي مخصصة لعملك.</p>
              <Link href="/services#ai-solutions" className="text-drx-orange hover:underline mt-4 block">
                اعرف المزيد <ArrowRight className="inline-block h-4 w-4 mr-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            هل أنت مستعد للارتقاء بعملك؟
          </h2>
          <p className="text-lg mb-8 text-gray-300 animate-fade-in-up delay-200">
            تواصل معنا اليوم لمناقشة مشروعك والحصول على استشارة مجانية.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in-up delay-400">
              ابدأ مشروعك الآن
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
