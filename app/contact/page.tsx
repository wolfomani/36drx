import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen">
      {" "}
      {/* Adjusted padding for fixed navbar */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6 gradient-text animate-fade-in-up">تواصل معنا</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            نحن هنا للإجابة على استفساراتك ومساعدتك في مشروعك القادم.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-800/70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 gradient-text">معلومات الاتصال</h2>
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-amber-400" />
                <div>
                  <h3 className="text-xl font-semibold">البريد الإلكتروني</h3>
                  <a href="mailto:info@drx.com" className="text-lg text-gray-300 hover:text-white transition-colors">
                    info@drx.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">الهاتف</h3>
                  <a href="tel:+966501234567" className="text-lg text-gray-300 hover:text-white transition-colors">
                    +966 50 123 4567
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold">الموقع</h3>
                  <p className="text-lg text-gray-300">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h2 className="text-4xl font-bold mb-6 gradient-text">أرسل لنا رسالة</h2>
              <form className="space-y-6 bg-gray-900/70 border border-gray-700 rounded-xl p-6 shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="اسمك"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="بريدك الإلكتروني"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-white mb-2">
                    الموضوع
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    placeholder="موضوع رسالتك"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                    رسالتك
                  </label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-amber-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  إرسال الرسالة <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 gradient-text animate-fade-in-up">هل أنت مستعد لبدء مشروعك؟</h2>
          <p className="text-lg mb-8 text-gray-300 animate-fade-in-up delay-200">
            دعنا نساعدك في تحويل أفكارك إلى واقع رقمي ملموس.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in-up delay-400">
              تواصل معنا اليوم
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
