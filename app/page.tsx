import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Brain, Rocket, ShieldCheck, Lightbulb, ArrowRight, Star, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="pt-24">
      {" "}
      {/* Adjusted padding for fixed navbar */}
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-96px)] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-80"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text">
            مستقبلك الرقمي يبدأ هنا مع Dr X
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            نقدم حلولاً مبتكرة في تطوير الويب، تطبيقات الجوال، والذكاء الاصطناعي لتمكين أعمالك.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                ابدأ مشروعك الآن <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg rounded-full hover:bg-white/20 transition-all"
              >
                اكتشف خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Services Overview Section */}
      <section id="services-overview" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text animate-fade-in-up">خدماتنا المتكاملة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up">
              <Code className="h-12 w-12 text-amber-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">تطوير الويب</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                بناء مواقع ويب قوية، متجاوبة، ومحسّنة للأداء باستخدام أحدث التقنيات.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up delay-200">
              <Smartphone className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">تطبيقات الجوال</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                تصميم وتطوير تطبيقات جوال مبتكرة لأجهزة iOS و Android توفر تجربة مستخدم استثنائية.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up delay-400">
              <Brain className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">حلول الذكاء الاصطناعي</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                تطوير أنظمة ذكاء اصطناعي مخصصة، تعلم آلة، ومعالجة اللغة الطبيعية لتحويل أعمالك.
              </CardContent>
            </Card>
          </div>
          <Link href="/services">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg mt-12 hover:shadow-xl transition-all">
              عرض جميع الخدمات <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text animate-fade-in-up">لماذا تختار Dr X؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up">
              <Rocket className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">الابتكار والتميز</h3>
              <p className="text-gray-300 text-sm">نحن نتبنى أحدث التقنيات ونقدم حلولاً مبتكرة تتجاوز التوقعات.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-200">
              <ShieldCheck className="h-10 w-10 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">الجودة والموثوقية</h3>
              <p className="text-gray-300 text-sm">نلتزم بأعلى معايير الجودة لضمان حلول قوية وموثوقة لعملائنا.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-400">
              <Users className="h-10 w-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">فريق متخصص</h3>
              <p className="text-gray-300 text-sm">فريق من الخبراء والمطورين ذوي الكفاءة العالية في مجالاتهم.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up">
              <Award className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">دعم مستمر</h3>
              <p className="text-gray-300 text-sm">نقدم دعماً فنياً شاملاً لضمان استمرارية عمل حلولك بكفاءة.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-200">
              <Lightbulb className="h-10 w-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">حلول مخصصة</h3>
              <p className="text-gray-300 text-sm">نصمم حلولاً تتناسب تماماً مع احتياجات عملك الفريدة وأهدافك.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-400">
              <Star className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">رضا العملاء</h3>
              <p className="text-gray-300 text-sm">
                نسعى دائماً لتحقيق أقصى درجات رضا العملاء من خلال تقديم أفضل الخدمات.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 gradient-text animate-fade-in-up">هل أنت مستعد لبدء مشروعك؟</h2>
          <p className="text-lg mb-8 text-gray-300 animate-fade-in-up delay-200">
            دعنا نساعدك في تحويل أفكارك إلى واقع رقمي ملموس.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in-up delay-400">
              تواصل معنا اليوم <ArrowRight className="mr-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
