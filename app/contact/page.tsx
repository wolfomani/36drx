import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text leading-tight">تواصل معنا</h1>
            <p className="text-lg md:text-xl text-gray-300">
              نحن هنا للإجابة على أسئلتك ومساعدتك في مشروعك القادم. لا تتردد في التواصل معنا.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border border-gray-700 shadow-xl p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4">أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="أدخل اسمك"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-drx-orange"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-drx-orange"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    الموضوع
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="موضوع رسالتك"
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-drx-orange"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    رسالتك
                  </label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-drx-orange"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-800/50 border border-gray-700 shadow-xl p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4">معلومات الاتصال</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-drx-orange/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-drx-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">البريد الإلكتروني</h3>
                  <p className="text-gray-300">balqees0alalawi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-drx-blue/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-drx-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">الهاتف</h3>
                  <p className="text-gray-300">+966 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-drx-purple/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-drx-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">العنوان</h3>
                  <p className="text-gray-300">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c1.804 0 3.483-.638 4.85-1.766 1.367-1.128 2.42-2.65 3.09-4.41.67-1.76 1.005-3.64 1.005-5.54s-.335-3.78-1.005-5.54c-.67-1.76-1.723-3.282-3.09-4.41C11.773 1.638 10.094 1 8.29 1c-1.804 0-3.483.638-4.85 1.766C2.073 3.894 1.02 5.416.35 7.176c-.67 1.76-1.005 3.64-1.005 5.54s.335 3.78 1.005 5.54c.67 1.76 1.723 3.282 3.09 4.41 1.367 1.128 3.046 1.766 4.85 1.766zM12 2.25c-2.62 0-4.98 1.05-6.75 2.75C3.5 6.75 2.45 9.13 2.45 12s1.05 5.25 2.8 7.05c1.75 1.8 4.13 2.8 6.75 2.8s5.05-1.05 6.8-2.8c1.75-1.8 2.8-4.13 2.8-7.05s-1.05-5.25-2.8-7.05C17.05 3.3 14.67 2.25 12 2.25zM12 17.5c-3.04 0-5.5-2.46-5.5-5.5s2.46-5.5 5.5-5.5 5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.86 8.16 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75.997.798-.222 1.64-.333 2.48-.337.84.004 1.682.115 2.48.337 1.91-1.267 2.75-.997 2.75-.997.545 1.378.202 2.397.099 2.65.64.698 1.028 1.591 1.028 2.682 0 3.841-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.488C19.14 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
