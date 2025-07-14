import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, MessageSquare, Code, Smartphone, Lightbulb, Cloud } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black text-white pt-16">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
        <div className="mb-8 animate-pulse-slow">
          <Brain className="h-24 w-24 text-red-500 mx-auto" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Dr X - مساعد الذكاء الاصطناعي</h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
          مساعدك الذكي المتطور - مدعوم بأحدث تقنيات الذكاء الاصطناعي
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/chat">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center">
              دردش مع د. إكس <MessageSquare className="h-5 w-5 mr-2" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors bg-transparent"
            >
              استكشف خدماتنا
            </Button>
          </Link>
        </div>
      </div>

      <section className="py-20 w-full bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">لماذا تختار Dr X؟</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نقدم حلولاً تقنية مبتكرة وموثوقة لمساعدتك على تحقيق أهدافك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-blue-500 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">حلول مبتكرة</h3>
              <p className="text-gray-400">نقدم أحدث التقنيات والحلول الإبداعية لمواجهة تحدياتك.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-green-500 transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">جودة لا تضاهى</h3>
              <p className="text-gray-400">نلتزم بأعلى معايير الجودة في كل مشروع نقوم به.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-purple-500 transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">دعم متواصل</h3>
              <p className="text-gray-400">فريقنا متاح لتقديم الدعم والمساعدة على مدار الساعة.</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center border border-gray-700 hover:border-red-500 transition-all">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">خبرة واسعة</h3>
              <p className="text-gray-400">سنوات من الخبرة في مجال الذكاء الاصطناعي والتكنولوجيا.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">خدماتنا الرئيسية</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              نقدم مجموعة واسعة من الخدمات التقنية المتطورة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Code className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">تطوير الويب</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">بناء مواقع وتطبيقات ويب متجاوبة وعالية الأداء.</p>
              <Link href="/services" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                اعرف المزيد
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Smartphone className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">تطبيقات الجوال</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">تطوير تطبيقات iOS و Android بتجربة مستخدم فريدة.</p>
              <Link href="/services" className="text-green-600 dark:text-green-400 hover:underline font-semibold">
                اعرف المزيد
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <Brain className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">الذكاء الاصطناعي</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                حلول ذكاء اصطناعي متقدمة لتحليل البيانات وأتمتة المهام.
              </p>
              <Link href="/services" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">
                اعرف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
