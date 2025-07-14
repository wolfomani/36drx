"use client"

import type React from "react"
import Link from "next/link"
import { Mail, Github, DiscIcon as Discord, ExternalLink, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

  const contactCardClass = "bg-gray-800 p-6 rounded-2xl text-center card-hover"
  const formInputClass =
    "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-drx-orange focus:border-transparent text-white"

  return (
    <div className="bg-black text-white">
      {/* القسم الرئيسي */}
      <section className="gradient-bg min-h-screen flex flex-col items-center justify-center p-4 pt-16">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-8">
          <div className="floating">
            <Mail className="h-24 w-24 text-drx-orange mx-auto mb-8 animate-pulse-glow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">تواصل معنا</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            نحن هنا لمساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم ودع الخبراء يقودون مشروعك نحو النجاح
          </p>

          {/* معلومات الاتصال السريعة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className={contactCardClass}>
              <div className="w-12 h-12 bg-gradient-to-r from-drx-orange to-drx-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-300">balqees0alalawi@gmail.com</p>
            </div>
            <div className={contactCardClass}>
              <div className="w-12 h-12 bg-gradient-to-r from-drx-orange to-drx-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/wolfomani"
                className="text-drx-orange hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/wolfomani
              </a>
            </div>
            <div className={contactCardClass}>
              <div className="w-12 h-12 bg-gradient-to-r from-drx-orange to-drx-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Discord className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Discord</h3>
              <p className="text-gray-300">@abdulaziz-x7r1g</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم النموذج ومعلومات الاتصال */}
      <section id="contact" className="gradient-bg py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">نحن هنا لمساعدتك في تحقيق أهدافك التقنية</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* معلومات التواصل التفصيلية */}
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">معلومات التواصل</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">البريد الإلكتروني</div>
                    <div className="text-gray-300">balqees0alalawi@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <Link
                      href="https://github.com/wolfomani"
                      className="text-orange-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/wolfomani
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Discord className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Discord</div>
                    <div className="text-gray-300">@abdulaziz-x7r1g</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">التطبيق</div>
                    <Link
                      href="https://hamkamai.github.io/3weep.app"
                      className="text-orange-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://hamkamai.github.io/3weep.app
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">الموقع</div>
                    <Link
                      href="https://36drx.vercel.app"
                      className="text-orange-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://36drx.vercel.app
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* نموذج الاتصال */}
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">أرسل رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-drx-orange focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-drx-orange focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-drx-orange focus:border-transparent text-white"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-gradient text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 ml-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      تم الإرسال بنجاح!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 ml-2"
                      >
                        <path d="M22 2L11 13.12V22H13.88V13.12L22 2z"></path>
                      </svg>
                      إرسال الرسالة
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخريطة */}
      <section className="section-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">موقعنا على الخريطة</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-drx-orange to-drx-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">زر مكاتبنا في قلب الرياض</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="relative h-96 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Globe className="h-24 w-24 text-drx-orange mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">خريطة تفاعلية</h3>
                <p className="text-gray-300">يمكنك العثور علينا في حي العليا، الرياض</p>
                <Button className="mt-4 btn-gradient text-white px-6 py-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 ml-2"
                  >
                    <path d="M12 2v3h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z"></path>
                    <polyline points="16 2 16 6 20 6"></polyline>
                  </svg>
                  احصل على الاتجاهات
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="section-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-drx-orange to-drx-red mx-auto mb-8"></div>
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
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-right text-white font-semibold hover:bg-gray-700 transition-colors rounded-lg flex justify-between items-center"
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
