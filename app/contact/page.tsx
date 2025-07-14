import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            تواصل معنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            نحن هنا للإجابة على أسئلتك ومساعدتك في مشروعك القادم.
          </p>
          <Link href="/chat">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform animate-fade-in-up delay-400">
              ابدأ الدردشة الآن <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">معلومات الاتصال</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              لا تتردد في التواصل معنا عبر أي من الطرق التالية. فريقنا متاح لمساعدتك.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-700">
                <Mail className="h-8 w-8 text-drx-orange" />
                <div>
                  <h3 className="text-xl font-semibold text-white">البريد الإلكتروني</h3>
                  <a href="mailto:info@drx.com" className="text-gray-300 hover:text-white transition-colors">
                    info@drx.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-700">
                <Phone className="h-8 w-8 text-drx-red" />
                <div>
                  <h3 className="text-xl font-semibold text-white">الهاتف</h3>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                    +123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-700">
                <MapPin className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">الموقع</h3>
                  <p className="text-gray-300">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/70 p-6 rounded-xl shadow-lg border border-gray-700">
                <Clock className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">ساعات العمل</h3>
                  <p className="text-gray-300">الأحد - الخميس: 9:00 صباحًا - 5:00 مساءً</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up delay-200">
            <h2 className="text-3xl font-bold text-white mb-6">أرسل لنا رسالة</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange transition-all"
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange transition-all"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-300 mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange transition-all"
                  placeholder="موضوع رسالتك"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
                  رسالتك
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange transition-all resize-y"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              <Button
                type="submit"
                className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform w-full"
              >
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-fade-in-up">موقعنا على الخريطة</h2>
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 overflow-hidden h-80 md:h-96 flex items-center justify-center text-gray-400 text-2xl animate-fade-in-up delay-200">
            <p>خريطة الموقع ستكون هنا قريباً</p>
          </div>
        </div>
      </section>
    </div>
  )
}
