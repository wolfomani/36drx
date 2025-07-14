"use client"

import type React from "react"

import Link from "next/link"
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Rocket,
  Lightbulb,
  Users,
  Gamepad,
  Briefcase,
  Heart,
  Server,
  Database,
  ShieldCheck,
  Expand,
  DollarSign,
  Globe,
  Lock,
  MessageSquare,
  Check,
  ShoppingCart,
  Cog,
  RefreshCw,
  Eye,
  Languages,
  LineChart,
  Clock,
  Star,
  User,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("all")
  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleRequestService = (service: string) => {
    setSelectedService(service)
    setShowModal(true)
  }

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowModal(false)
      alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً.")
    }, 2000)
  }

  const serviceCardClass =
    "bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  const filterButtonClass = (filter: string) =>
    cn(
      "px-6 py-3 rounded-full font-medium transition-all",
      activeService === filter
        ? "bg-blue-600 text-white dark:bg-blue-500"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    )

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* قسم البطل */}
      <section
        id="services"
        className="bg-gradient-to-br from-blue-600 to-purple-700 min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 animate-float">
            <Code className="h-16 w-16 text-white" />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: "-2s" }}>
            <Smartphone className="h-12 w-12 text-white" />
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: "-4s" }}>
            <Brain className="h-14 w-14 text-white" />
          </div>
        </div>
        <div className="relative z-10 text-center text-white px-4 pt-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">خدماتنا المتكاملة</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            حلول ذكية ومبتكرة تلبي جميع احتياجاتك الرقمية مع تقنيات الذكاء الاصطناعي المتطورة
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">تطوير الويب</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">تطبيقات الجوال</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">الذكاء الاصطناعي</span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">التحليلات</span>
          </div>
        </div>
      </section>

      {/* قسم فلترة الخدمات */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={() => setActiveService("all")} className={filterButtonClass("all")}>
              جميع الخدمات
            </Button>
            <Button onClick={() => setActiveService("web")} className={filterButtonClass("web")}>
              تطوير الويب
            </Button>
            <Button onClick={() => setActiveService("mobile")} className={filterButtonClass("mobile")}>
              تطبيقات الجوال
            </Button>
            <Button onClick={() => setActiveService("ai")} className={filterButtonClass("ai")}>
              الذكاء الاصطناعي
            </Button>
            <Button onClick={() => setActiveService("cloud")} className={filterButtonClass("cloud")}>
              الحلول السحابية
            </Button>
          </div>
        </div>
      </section>

      {/* خدمات تطوير الويب */}
      {(activeService === "all" || activeService === "web") && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <Code className="inline-block h-10 w-10 text-blue-600 dark:text-blue-400 ml-4" />
                تطوير الويب المتقدم
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                نبني مواقع ويب وتطبيقات متطورة تجمع بين التصميم الجذاب والأداء المتفوق
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className={serviceCardClass}>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">مواقع متجاوبة</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    مواقع تعمل بكفاءة على جميع الأجهزة مع تصميم متجاوب وسريع
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 text-right">
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      تصميم متجاوب 100%
                    </li>
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      سرعة تحميل فائقة
                    </li>
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      تحسين محركات البحث
                    </li>
                  </ul>
                </div>
              </div>

              <div className={serviceCardClass}>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingCart className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">متاجر إلكترونية</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">منصات تجارة إلكترونية متكاملة مع نظم دفع آمنة</p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 text-right">
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      بوابات دفع متعددة
                    </li>
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      إدارة المخزون
                    </li>
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      تتبع الطلبات
                    </li>
                  </ul>
                </div>
              </div>

              <div className={serviceCardClass}>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Cog className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">تطبيقات ويب مخصصة</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">حلول مخصصة تلبي احتياجات عملك الخاصة</p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 text-right">
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      تطوير مخصص
                    </li>
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      تكامل مع الأنظمة
                    </li>
                    <li>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      أمان متقدم
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleRequestService("web")}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all text-lg shadow-lg flex items-center justify-center mx-auto"
              >
                <Rocket className="h-5 w-5 ml-2" />
                ابدأ مشروع الويب الآن
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* خدمات تطبيقات الجوال */}
      {(activeService === "all" || activeService === "mobile") && (
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <Smartphone className="inline-block h-10 w-10 text-green-600 dark:text-green-400 ml-4" />
                تطبيقات الجوال الذكية
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                تطبيقات جوال متطورة لنظامي iOS و Android مع تجربة مستخدم استثنائية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">تطبيقات أصلية وهجينة</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center">
                        <svg
                          className="h-6 w-6 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 19.5v-7.5h-3v-3h3V6c0-2.761 2.239-5 5-5h3v3h-3c-1.104 0-2 .896-2 2v1.5h5l-1 3h-4v7.5h-3z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">تطبيقات iOS</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        تطبيقات أصلية لأجهزة iPhone و iPad بأعلى معايير الجودة
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center">
                        <svg
                          className="h-6 w-6 text-green-600 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 19.5v-7.5h-3v-3h3V6c0-2.761 2.239-5 5-5h3v3h-3c-1.104 0-2 .896-2 2v1.5h5l-1 3h-4v7.5h-3z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">تطبيقات Android</h4>
                      <p className="text-gray-600 dark:text-gray-300">تطبيقات محسنة لنظام Android مع أداء متفوق</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center">
                        <RefreshCw className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">تطبيقات هجينة</h4>
                      <p className="text-gray-600 dark:text-gray-300">حلول فعالة من حيث التكلفة تعمل على المنصتين</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div
                  className={cn(
                    serviceCardClass,
                    "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
                  )}
                >
                  <Users className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">تطبيقات اجتماعية</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">منصات تفاعلية ومجتمعات رقمية</p>
                </div>

                <div
                  className={cn(
                    serviceCardClass,
                    "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
                  )}
                >
                  <Gamepad className="h-10 w-10 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">تطبيقات الألعاب</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">ألعاب تفاعلية وممتعة</p>
                </div>

                <div
                  className={cn(
                    serviceCardClass,
                    "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900",
                  )}
                >
                  <Briefcase className="h-10 w-10 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">تطبيقات أعمال</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">حلول مؤسسية متقدمة</p>
                </div>

                <div
                  className={cn(
                    serviceCardClass,
                    "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900",
                  )}
                >
                  <Heart className="h-10 w-10 text-red-600 dark:text-red-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">تطبيقات صحية</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">تطبيقات اللياقة والصحة</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleRequestService("mobile")}
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all text-lg shadow-lg flex items-center justify-center mx-auto"
              >
                <Smartphone className="h-5 w-5 ml-2" />
                ابدأ تطبيق الجوال الآن
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* خدمات الذكاء الاصطناعي */}
      {(activeService === "all" || activeService === "ai") && (
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <Brain className="inline-block h-10 w-10 text-blue-400 ml-4" />
                حلول الذكاء الاصطناعي
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                تقنيات ذكاء اصطناعي متطورة لتحسين أعمالك وأتمتة العمليات
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className={cn(serviceCardClass, "bg-gray-800 border border-gray-700")}>
                <MessageSquare className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">روبوتات الدردشة</h3>
                <p className="text-gray-400 text-sm">مساعدين أذكياء للتفاعل مع العملاء</p>
              </div>

              <div className={cn(serviceCardClass, "bg-gray-800 border border-gray-700")}>
                <Eye className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">رؤية الحاسوب</h3>
                <p className="text-gray-400 text-sm">تحليل وفهم الصور والفيديوهات</p>
              </div>

              <div className={cn(serviceCardClass, "bg-gray-800 border border-gray-700")}>
                <Languages className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">معالجة اللغة</h3>
                <p className="text-gray-400 text-sm">فهم وتحليل النصوص والمحتوى</p>
              </div>

              <div className={cn(serviceCardClass, "bg-gray-800 border border-gray-700")}>
                <LineChart className="h-10 w-10 text-red-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">التعلم الآلي</h3>
                <p className="text-gray-400 text-sm">نماذج ذكية للتنبؤ والتحليل</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Dr X - مساعدك الذكي</h3>
                <p className="text-lg mb-6">تجربة دردشة متطورة مع ذكاء اصطناعي متقدم باستخدام أحدث التقنيات</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                    <MessageSquare className="h-6 w-6 text-white mx-auto mb-2" />
                    <h4 className="font-semibold">محادثات طبيعية</h4>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                    <Lightbulb className="h-6 w-6 text-white mx-auto mb-2" />
                    <h4 className="font-semibold">حلول ذكية</h4>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                    <Clock className="h-6 w-6 text-white mx-auto mb-2" />
                    <h4 className="font-semibold">متاح 24/7</h4>
                  </div>
                </div>
                <Link href="/chat">
                  <Button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block">
                    جرب Dr X الآن
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleRequestService("ai")}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all text-lg shadow-lg flex items-center justify-center mx-auto"
              >
                <Brain className="h-5 w-5 ml-2" />
                استكشف حلول الذكاء الاصطناعي
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* خدمات الحلول السحابية */}
      {(activeService === "all" || activeService === "cloud") && (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                <Cloud className="inline-block h-10 w-10 text-blue-600 dark:text-blue-400 ml-4" />
                الحلول السحابية المتقدمة
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                بنية تحتية سحابية قابلة للتطوير مع أمان وموثوقية عاليين
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className={cn(serviceCardClass, "border-t-4 border-blue-500")}>
                <div className="text-center">
                  <Server className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">خوادم سحابية</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">خوادم عالية الأداء مع إمكانية التطوير الفوري</p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      أداء عالي ومستقر
                    </div>
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      نسخ احتياطية تلقائية
                    </div>
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      مراقبة مستمرة
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(serviceCardClass, "border-t-4 border-green-500")}>
                <div className="text-center">
                  <Database className="h-10 w-10 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">قواعد البيانات</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">إدارة وحماية بياناتك مع إمكانية الوصول السريع</p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      حماية متقدمة
                    </div>
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      استرداد سريع
                    </div>
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      تحليلات فورية
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(serviceCardClass, "border-t-4 border-purple-500")}>
                <div className="text-center">
                  <ShieldCheck className="h-10 w-10 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">الأمان السيبراني</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">حماية شاملة ضد التهديدات الإلكترونية</p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      تشفير متقدم
                    </div>
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      رصد التهديدات
                    </div>
                    <div>
                      <Check className="h-4 w-4 text-green-500 ml-2 inline-block" />
                      استجابة سريعة
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">مزايا الحلول السحابية</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Expand className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">قابلية التطوير</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">توسع مع نمو عملك</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">توفير التكلفة</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">ادفع مقابل ما تستخدم فقط</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">وصول عالمي</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">خدماتك متاحة في كل مكان</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 dark:bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">أمان عالي</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">حماية بمعايير عالمية</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleRequestService("cloud")}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all text-lg shadow-lg flex items-center justify-center mx-auto"
              >
                <Cloud className="h-5 w-5 ml-2" />
                احصل على حل سحابي مخصص
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* قسم الإحصائيات */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
            <p className="text-xl text-gray-300">نفخر بثقة عملائنا ونجاح مشاريعنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">250+</div>
              <div className="text-gray-300">عميل راضي</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-300">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-400 mb-2">24/7</div>
              <div className="text-gray-300">دعم مستمر</div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الشهادات */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">شهادات حقيقية من عملائنا السعداء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "خدمة استثنائية وتطوير احترافي. فريق Dr X تجاوز توقعاتنا في تطوير متجرنا الإلكتروني."
              </p>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center ml-4">
                  <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">أحمد محمد</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">مدير شركة تجارية</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "تطبيق الجوال الذي طوروه لنا أحدث نقلة نوعية في خدماتنا. فريق محترف ومتعاون."
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center ml-4">
                  <User className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">سارة أحمد</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">مؤسسة مشروع تقني</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "حلول الذكاء الاصطناعي التي قدموها عززت من كفاءة أعمالنا بشكل كبير. ننصح بهم بقوة."
              </p>
              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center ml-4">
                  <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">خالد العلي</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">مدير تقنية المعلومات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* نموذج الاتصال السريع (Modal) */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-lg w-full">
          <DialogHeader>
            <DialogTitle className="text-lg font-medium flex items-center">
              <Send className="h-5 w-5 text-blue-600 dark:text-blue-400 ml-2" />
              اطلب خدمة{" "}
              <span
                className="mr-1"
                x-text="selectedService === 'web' ? 'تطوير الويب' : selectedService === 'mobile' ? 'تطبيقات الجوال' : selectedService === 'ai' ? 'الذكاء الاصطناعي' : 'الحلول السحابية'"
              >
                {selectedService === "web"
                  ? "تطوير الويب"
                  : selectedService === "mobile"
                    ? "تطبيقات الجوال"
                    : selectedService === "ai"
                      ? "الذكاء الاصطناعي"
                      : "الحلول السحابية"}
              </span>
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleModalSubmit} className="space-y-4">
            <div>
              <Label htmlFor="modal-name" className="block text-sm font-medium mb-1">
                الاسم الكامل
              </Label>
              <Input
                id="modal-name"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="modal-email" className="block text-sm font-medium mb-1">
                البريد الإلكتروني
              </Label>
              <Input
                id="modal-email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="modal-phone" className="block text-sm font-medium mb-1">
                رقم الهاتف
              </Label>
              <Input
                id="modal-phone"
                type="tel"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="modal-details" className="block text-sm font-medium mb-1">
                تفاصيل المشروع
              </Label>
              <Textarea
                id="modal-details"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="اشرح لنا متطلبات مشروعك..."
              ></Textarea>
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                إلغاء
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center">
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
                ) : (
                  <span>إرسال الطلب</span>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
