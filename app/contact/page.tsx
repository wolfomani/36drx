import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section for Contact */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            تواصل معنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            نحن هنا للإجابة على استفساراتك ومساعدتك في مشروعك القادم.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">أرسل لنا رسالة</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">
                  الاسم الكامل
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="أدخل اسمك"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-300 mb-2">
                  الموضوع
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="موضوع رسالتك"
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
                  رسالتك
                </label>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-drx-orange focus:border-drx-orange resize-y"
                />
              </div>
              <Button
                type="submit"
                className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform w-full"
              >
                إرسال الرسالة <Send className="mr-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">معلومات الاتصال</h2>
            <div className="space-y-6 text-lg text-gray-300">
              <div className="flex items-center justify-end">
                <span className="mr-3">info@drx.com</span>
                <Mail className="h-6 w-6 text-drx-orange" />
              </div>
              <div className="flex items-center justify-end">
                <span className="mr-3">+966 50 123 4567</span>
                <Phone className="h-6 w-6 text-drx-red" />
              </div>
              <div className="flex items-center justify-end">
                <span className="mr-3">الرياض، المملكة العربية السعودية</span>
                <MapPin className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-white mb-4">تابعنا على وسائل التواصل</h3>
              <div className="flex justify-end space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.127 8.437 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12c0-5.522-4.477-9.998-9.999-9.998z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2.417a.75.75 0 01.07.867 8.578 8.578 0 00-1.419 4.773c0 5.275 4.293 9.568 9.568 9.568a8.578 8.578 0 004.773-1.419.75.75 0 01.867.07l.417.417a.75.75 0 01-.07.867 9.992 9.992 0 01-5.61 1.65c-5.523 0-10-4.477-10-10S6.792 2.417 12.315 2.417zM12 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5s10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
