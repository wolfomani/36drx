import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Languages, ShieldCheck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text leading-tight">
              مساعدك الذكي المتطور - مدعوم بأحدث تقنيات الذكاء الاصطناعي
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              مدعوم بأحدث تقنيات الذكاء الاصطناعي لتبسيط مهامك اليومية وتعزيز إنتاجيتك.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/chat">
                <Button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg">
                  ابدأ الدردشة الآن
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
                >
                  اكتشف خدماتنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-blue-500/20 p-4 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">أمان وخصوصية</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">
                نحن نضمن حماية بياناتك بأعلى معايير الأمان.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-red-500/20 p-4 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">أداء لا مثيل له</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">تصميمات بواجهة آمنة وموثوقة لأعمالك.</CardContent>
            </Card>
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-green-500/20 p-4 rounded-full mb-4">
                  <Languages className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">حلول مبتكرة</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">
                نقدم أحدث التقنيات في الذكاء الاصطناعي وتطوير الويب.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/50">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 text-center lg:text-right">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text leading-tight">من نحن Dr X</h2>
            <p className="text-lg text-gray-300">
              نحن فريق من الخبراء المتخصصين في الذكاء الاصطناعي وتطوير الويب، ملتزمون بتقديم حلول مبتكرة وعالية الجودة
              لعملائنا. نسعى دائمًا لتجاوز التوقعات وتحقيق أهداف أعمالك.
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="px-6 py-3 rounded-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
              >
                اعرف المزيد عنا
              </Button>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="About Us"
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-r from-drx-blue to-drx-purple">
        <div className="container px-4 md:px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            هل أنت مستعد لتحويل فكرتك إلى واقع؟
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            تواصل معنا اليوم لمناقشة مشروعك والحصول على استشارة مجانية.
          </p>
          <Link href="/contact">
            <Button className="px-8 py-3 text-lg font-semibold rounded-full bg-white text-drx-blue hover:bg-gray-100 transition-all shadow-lg">
              تواصل معنا
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
