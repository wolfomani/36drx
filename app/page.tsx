import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Lightbulb, Code, Smartphone, Cloud } from "lucide-react"

export default function HomePage() {
  return (
    <section id="home" className="gradient-bg min-h-screen flex flex-col items-center justify-center p-4 pt-16">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        <div className="mb-8 floating">
          <Image
            src="/images/drx-logo.png"
            alt="Dr X Logo"
            width={96}
            height={96}
            className="mx-auto rounded-lg pulse-glow"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight gradient-text">
          Dr X - مساعد الذكاء الاصطناعي
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          مساعدك الذكي المتطور - مدعوم بأحدث تقنيات الذكاء الاصطناعي
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/chat"
            className="btn-gradient text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center"
          >
            دردش مع د. إكس <MessageSquare className="h-5 w-5 mr-2" />
          </Link>
          <Link
            href="/services"
            className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-black transition-colors bg-transparent"
          >
            استكشف خدماتنا
          </Link>
        </div>
      </div>
      {/* Features Section */}
      <section className="py-20 w-full section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">لماذا تختار Dr X؟</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نقدم حلولاً تقنية مبتكرة وموثوقة لمساعدتك على تحقيق أهدافك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-orange-500 transition-all card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">حلول مبتكرة</h3>
              <p className="text-gray-400">نقدم أحدث التقنيات والحلول الإبداعية لمواجهة تحدياتك.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-green-500 transition-all card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">جودة لا تضاهى</h3>
              <p className="text-gray-400">نلتزم بأعلى معايير الجودة في كل مشروع نقوم به.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-purple-500 transition-all card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">دعم متواصل</h3>
              <p className="text-gray-400">فريقنا متاح لتقديم الدعم والمساعدة على مدار الساعة.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-blue-500 transition-all card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">خبرة واسعة</h3>
              <p className="text-gray-400">سنوات من الخبرة في مجال الذكاء الاصطناعي والتكنولوجيا.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
