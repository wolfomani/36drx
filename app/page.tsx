import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Brain } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-6rem)] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            مساعدك الذكي المتطور
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            مدعوم بأحدث تقنيات الذكاء الاصطناعي لتقديم حلول مبتكرة في تطوير الويب، تطبيقات الجوال، والذكاء الاصطناعي.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
            <Link href="/services">
              <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
                اكتشف خدماتنا <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="bg-white/10 border border-white/20 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:bg-white/20 hover:scale-105 transition-transform"
              >
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">من نحن؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                نحن في Dr X، نؤمن بقوة الابتكار والتقنية في تحويل الأفكار إلى واقع ملموس. فريقنا من الخبراء يجمع بين
                الشغف بالذكاء الاصطناعي والخبرة العميقة في تطوير البرمجيات لتقديم حلول متكاملة تلبي احتياجات عملائنا
                المتغيرة.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                منذ تأسيسنا، التزمنا بتقديم أعلى مستويات الجودة والاحترافية، مع التركيز على بناء علاقات طويلة الأمد مع
                عملائنا من خلال الشفافية والثقة.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  اعرف المزيد عنا
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/placeholder.svg?height=400&width=600"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">خدماتنا الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-orange transition-all duration-300">
              <Code className="h-12 w-12 text-drx-orange mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">تطوير الويب</h3>
              <p className="text-gray-300">بناء مواقع ويب عصرية، متجاوبة، وآمنة باستخدام أحدث التقنيات.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-red transition-all duration-300">
              <Smartphone className="h-12 w-12 text-drx-red mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">تطبيقات الجوال</h3>
              <p className="text-gray-300">تصميم وتطوير تطبيقات جوال مبتكرة لأجهزة iOS و Android.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">حلول الذكاء الاصطناعي</h3>
              <p className="text-gray-300">تطوير حلول ذكاء اصطناعي مخصصة لتحسين الكفاءة واتخاذ القرار.</p>
            </div>
          </div>
          <Link href="/services">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg mt-12 hover:scale-105 transition-transform">
              شاهد جميع الخدمات <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-drx-orange to-drx-red text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
          <p className="text-xl md:text-2xl mb-8">دعنا نساعدك في تحويل أفكارك إلى واقع رقمي مذهل.</p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-white text-drx-red px-8 py-3 text-lg rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
            >
              تواصل معنا اليوم
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
