"use client"

import type React from "react"

import Link from "next/link"
import {
  MailOpenIcon as Envelope,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Check,
  Map,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 2000)
  }

  const contactCardClass =
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center text-white transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
  const formInputClass =
    "bg-white/10 border border-white/30 text-white placeholder-gray-400 focus-visible:ring-blue-500 focus-visible:ring-offset-0"

  return (
    <div className="bg-gray-900 text-white">
      {/* القسم الرئيسي */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* العناصر المزخرفة */}
        <div className="absolute w-64 h-64 top-20 left-10 opacity-30 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 animate-float"></div>
        <div
          className="absolute w-48 h-48 top-60 right-20 opacity-20 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div
          className="absolute w-32 h-32 bottom-40 left-1/3 opacity-25 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 animate-float"
          style={{ animationDelay: "-4s" }}
        ></div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto pt-8">
          <div className="animate-float">
            <Envelope className="h-24 w-24 text-blue-300 mx-auto mb-8 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم ودع الخبراء يقودون مشروعك نحو النجاح
          </p>

          {/* معلومات الاتصال السريعة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className={contactCardClass}>
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">اتصل بنا</h3>
              <p className="text-blue-200">+966 50 123 4567</p>
            </div>
            <div className={contactCardClass}>
              <Envelope className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">راسلنا</h3>
              <p className="text-blue-200">info@drx.com</p>
            </div>
            <div className={contactCardClass}>
              <MapPin className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">زرنا</h3>
              <p className="text-blue-200">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم النموذج ومعلومات الاتصال */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* نموذج الاتصال */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
                      الاسم الأول
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className={cn("w-full px-4 py-3 rounded-lg", formInputClass)}
                      placeholder="أدخل اسمك الأول"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-white text-sm font-medium mb-2">
                      اسم العائلة
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className={cn("w-full px-4 py-3 rounded-lg", formInputClass)}
                      placeholder="أدخل اسم العائلة"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className={cn("w-full px-4 py-3 rounded-lg", formInputClass)}
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    رقم الهاتف
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className={cn("w-full px-4 py-3 rounded-lg", formInputClass)}
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    موضوع الرسالة
                  </Label>
                  <Select required>
                    <SelectTrigger id="subject" className={cn("w-full px-4 py-3 rounded-lg", formInputClass)}>
                      <SelectValue placeholder="اختر موضوع الرسالة" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 text-white border-gray-700">
                      <SelectItem value="web-dev">تطوير الويب</SelectItem>
                      <SelectItem value="mobile-app">تطبيقات الجوال</SelectItem>
                      <SelectItem value="ai-consulting">استشارات الذكاء الاصطناعي</SelectItem>
                      <SelectItem value="cloud-solutions">الحلول السحابية</SelectItem>
                      <SelectItem value="general">استفسار عام</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    الرسالة
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className={cn("w-full px-4 py-3 rounded-lg resize-none", formInputClass)}
                    placeholder="اكتب رسالتك هنا..."
                  ></Textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 ml-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : submitted ? (
                    <span className="text-green-300 flex items-center justify-center">
                      <Check className="h-5 w-5 ml-2" />
                      تم الإرسال بنجاح!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="h-5 w-5 ml-2" />
                      إرسال الرسالة
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* معلومات التواصل التفصيلية */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold">العنوان</h4>
                      <p className="text-gray-300">
                        شارع الملك فهد، حي العليا
                        <br />
                        الرياض 12213، المملكة العربية السعودية
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-green-500 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold">الهاتف</h4>
                      <p className="text-gray-300">
                        +966 50 123 4567
                        <br />
                        +966 11 456 7890
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-red-500 p-3 rounded-full">
                      <Envelope className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold">البريد الإلكتروني</h4>
                      <p className="text-gray-300">
                        info@drx.com
                        <br />
                        support@drx.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-purple-500 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold">ساعات العمل</h4>
                      <p className="text-gray-300">
                        الأحد - الخميس: 9:00 - 18:00
                        <br />
                        الجمعة - السبت: مغلق
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* وسائل التواصل الاجتماعي */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">تابعنا على</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-center transition-colors">
                    <Facebook className="h-6 w-6 text-white mx-auto mb-2" />
                    <p className="text-white text-sm">Facebook</p>
                  </Link>
                  <Link href="#" className="bg-blue-400 hover:bg-blue-500 p-4 rounded-lg text-center transition-colors">
                    <Twitter className="h-6 w-6 text-white mx-auto mb-2" />
                    <p className="text-white text-sm">Twitter</p>
                  </Link>
                  <Link href="#" className="bg-blue-700 hover:bg-blue-800 p-4 rounded-lg text-center transition-colors">
                    <Linkedin className="h-6 w-6 text-white mx-auto mb-2" />
                    <p className="text-white text-sm">LinkedIn</p>
                  </Link>
                  <Link href="#" className="bg-pink-600 hover:bg-pink-700 p-4 rounded-lg text-center transition-colors">
                    <Instagram className="h-6 w-6 text-white mx-auto mb-2" />
                    <p className="text-white text-sm">Instagram</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخريطة */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">موقعنا على الخريطة</h2>
            <p className="text-xl text-gray-300">زر مكاتبنا في قلب الرياض</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg">
            <div className="relative h-96 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Map className="h-24 w-24 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">خريطة تفاعلية</h3>
                <p className="text-gray-300">يمكنك العثور علينا في حي العليا، الرياض</p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  <MapPin className="h-5 w-5 ml-2" />
                  احصل على الاتجاهات
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-300">إجابات سريعة على أكثر الأسئلة شيوعاً</p>
          </div>

          <div className="space-y-4">
            <FaqItem
              question="كم يستغرق تطوير موقع إلكتروني؟"
              answer="يعتمد الوقت على تعقيد المشروع، لكن عادة ما يستغرق المشروع من 2-8 أسابيع. نقوم بتزويدكم بجدول زمني مفصل بعد مناقشة متطلباتكم."
            />
            <FaqItem
              question="هل تقدمون خدمات الصيانة والدعم؟"
              answer="نعم، نقدم خدمات صيانة ودعم شاملة تشمل التحديثات الأمنية، إضافة المحتوى، وحل المشاكل التقنية على مدار الساعة."
            />
            <FaqItem
              question="ما هي تكلفة المشاريع؟"
              answer="التكلفة تختلف حسب نوع وحجم المشروع. نقدم استشارة مجانية لتحديد التكلفة المناسبة لميزانيتك ومتطلباتك."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-right text-white font-semibold hover:bg-white/10 transition-colors rounded-lg flex justify-between items-center"
        variant="ghost"
      >
        <span>{question}</span>
        <svg
          className={cn("h-5 w-5 transform transition-transform", isOpen ? "rotate-180" : "")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </Button>
      {isOpen && <div className="px-6 pb-4 text-gray-300">{answer}</div>}
    </div>
  )
}
