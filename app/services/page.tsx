"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
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
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

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
    "bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover"
  const filterButtonClass = (filter: string) =>
    cn(
      "px-6 py-3 rounded-full font-medium transition-all",
      activeService === filter
        ? "btn-gradient text-white"
        : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700",
    )

  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen">
      {" "}
      {/* Adjusted padding for fixed navbar */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6 gradient-text animate-fade-in-up">خدماتنا المبتكرة</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            نقدم مجموعة شاملة من الحلول الرقمية المصممة لتمكين أعمالك وتحقيق أهدافك في العالم الرقمي.
          </p>
        </div>
      </section>
      <section id="web-development" className="py-16 bg-gray-800/70">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center gradient-text animate-fade-in-up">تطوير الويب</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-gray-300">
                نحن متخصصون في بناء مواقع ويب قوية، متجاوبة، ومحسّنة للأداء باستخدام أحدث التقنيات. سواء كنت بحاجة إلى
                موقع تعريفي بسيط، متجر إلكتروني معقد، أو منصة ويب مخصصة، فإن فريقنا يضمن لك حلاً يلبي احتياجاتك بدقة.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>تطوير الواجهات الأمامية (Frontend) باستخدام React, Next.js</li>
                <li>تطوير الواجهات الخلفية (Backend) باستخدام Node.js, Python</li>
                <li>متاجر إلكترونية متكاملة (E-commerce)</li>
                <li>أنظمة إدارة المحتوى (CMS) مخصصة</li>
                <li>تحسين محركات البحث (SEO)</li>
              </ul>
              <Link href="/contact">
                <Button className="btn-gradient text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                  اطلب خدمة تطوير الويب
                </Button>
              </Link>
            </div>
            <div className="flex justify-center animate-fade-in-up delay-200">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Web Development"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="mobile-apps" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center gradient-text animate-fade-in-up">تطبيقات الجوال</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1 animate-fade-in-up">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mobile Apps"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2 animate-fade-in-up delay-200">
              <p className="text-lg text-gray-300">
                نصمم ونطور تطبيقات جوال مبتكرة لأجهزة iOS و Android توفر تجربة مستخدم استثنائية. نركز على الأداء،
                الأمان، وسهولة الاستخدام لضمان وصولك إلى جمهور أوسع.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>تطبيقات iOS أصلية (Swift/Objective-C)</li>
                <li>تطبيقات Android أصلية (Kotlin/Java)</li>
                <li>تطبيقات هجينة (Hybrid) باستخدام React Native, Flutter</li>
                <li>تصميم واجهة المستخدم (UI) وتجربة المستخدم (UX)</li>
                <li>دمج واجهات برمجة التطبيقات (APIs)</li>
              </ul>
              <Link href="/contact">
                <Button className="btn-gradient text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                  اطلب خدمة تطبيقات الجوال
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="ai-solutions" className="py-16 bg-gray-800/70">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center gradient-text animate-fade-in-up">
            حلول الذكاء الاصطناعي
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-gray-300">
                نطور أنظمة ذكاء اصطناعي مخصصة، تعلم آلة، ومعالجة اللغة الطبيعية لتحويل أعمالك. من التحليلات التنبؤية إلى
                الأتمتة الذكية، نساعدك على استغلال قوة البيانات.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>التعلم الآلي (Machine Learning) والتعلم العميق (Deep Learning)</li>
                <li>معالجة اللغة الطبيعية (NLP)</li>
                <li>الرؤية الحاسوبية (Computer Vision)</li>
                <li>التحليلات التنبؤية (Predictive Analytics)</li>
                <li>أنظمة التوصية (Recommendation Systems)</li>
              </ul>
              <Link href="/contact">
                <Button className="btn-gradient text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
                  اطلب خدمة حلول الذكاء الاصطناعي
                </Button>
              </Link>
            </div>
            <div className="flex justify-center animate-fade-in-up delay-200">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Solutions"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="other-services" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 gradient-text animate-fade-in-up">خدمات إضافية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up">
              <Palette className="h-12 w-12 text-pink-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">تصميم UI/UX</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                تصميم واجهات مستخدم جذابة وتجارب مستخدم سلسة لمنتجاتك الرقمية.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up delay-200">
              <Database className="h-12 w-12 text-green-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">إدارة قواعد البيانات</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                تصميم، تنفيذ، وإدارة قواعد بيانات قوية وآمنة لبياناتك.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up delay-400">
              <Cloud className="h-12 w-12 text-indigo-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">حلول السحابة</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                نشر وإدارة تطبيقاتك على منصات السحابة مثل AWS, Azure, Google Cloud.
              </CardContent>
            </Card>
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
      {/* قسم فلترة الخدمات */}
      <section className="py-12 section-bg">
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
      {/* خدماتنا الرئيسية */}
      <section id="services" className="py-20 w-full section-bg pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">خدماتنا الرئيسية</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">نقدم مجموعة واسعة من الخدمات التقنية المتطورة</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
              <Code className="text-6xl text-orange-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">تطوير الويب</h3>
              <p className="text-gray-300 mb-6">بناء مواقع وتطبيقات ويب متجاوبة وعالية الأداء.</p>
              <Link href="/contact" className="text-orange-400 hover:underline font-semibold">
                اعرف المزيد
              </Link>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
              <Smartphone className="text-6xl text-green-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">تطبيقات الجوال</h3>
              <p className="text-gray-300 mb-6">تطوير تطبيقات iOS و Android بتجربة مستخدم فريدة.</p>
              <Link href="/contact" className="text-green-400 hover:underline font-semibold">
                اعرف المزيد
              </Link>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
              <Brain className="text-6xl text-purple-400 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">الذكاء الاصطناعي</h3>
              <p className="text-gray-300 mb-6">حلول ذكاء اصطناعي متقدمة لتحليل البيانات وأتمتة المهام.</p>
              <Link href="/contact" className="text-purple-400 hover:underline font-semibold">
                اعرف المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* خدمات تطوير الويب */}
      {(activeService === "all" || activeService === "web") && (
        <section className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <Code className="inline-block h-10 w-10 text-drx-orange ml-4" />
                تطوير الويب المتقدم
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                نبني مواقع ويب وتطبيقات متطورة تجمع بين التصميم الجذاب والأداء المتفوق
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className={serviceCardClass}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-drx-orange to-drx-red rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">مواقع متجاوبة</h3>
                  <p className="text-gray-300 mb-6">مواقع تعمل بكفاءة على جميع الأجهزة مع تصميم متجاوب وسريع</p>
                  <ul className="text-sm text-gray-400 space-y-2 text-right">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">متاجر إلكترونية</h3>
                  <p className="text-gray-300 mb-6">منصات تجارة إلكترونية متكاملة مع نظم دفع آمنة</p>
                  <ul className="text-sm text-gray-400 space-y-2 text-right">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Cog className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">تطبيقات ويب مخصصة</h3>
                  <p className="text-gray-300 mb-6">حلول مخصصة تلبي احتياجات عملك الخاصة</p>
                  <ul className="text-sm text-gray-400 space-y-2 text-right">
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
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center mx-auto"
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
        <section className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <Smartphone className="inline-block h-10 w-10 text-green-400 ml-4" />
                تطبيقات الجوال الذكية
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                تطبيقات جوال متطورة لنظامي iOS و Android مع تجربة مستخدم استثنائية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">تطبيقات أصلية وهجينة</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">تطبيقات iOS</h4>
                      <p className="text-gray-300">تطبيقات أصلية لأجهزة iPhone و iPad بأعلى معايير الجودة</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                        <Smartphone className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">تطبيقات Android</h4>
                      <p className="text-gray-300">تطبيقات محسنة لنظام Android مع أداء متفوق</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                        <RefreshCw className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">تطبيقات هجينة</h4>
                      <p className="text-gray-300">حلول فعالة من حيث التكلفة تعمل على المنصتين</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className={serviceCardClass}>
                  <Users className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">تطبيقات اجتماعية</h4>
                  <p className="text-sm text-gray-300">منصات تفاعلية ومجتمعات رقمية</p>
                </div>

                <div className={serviceCardClass}>
                  <Gamepad className="h-10 w-10 text-green-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">تطبيقات الألعاب</h4>
                  <p className="text-sm text-gray-300">ألعاب تفاعلية وممتعة</p>
                </div>

                <div className={serviceCardClass}>
                  <Briefcase className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">تطبيقات أعمال</h4>
                  <p className="text-sm text-gray-300">حلول مؤسسية متقدمة</p>
                </div>

                <div className={serviceCardClass}>
                  <Heart className="h-10 w-10 text-drx-orange mx-auto mb-4" />
                  <h4 className="font-semibold text-white mb-2">تطبيقات صحية</h4>
                  <p className="text-sm text-gray-300">تطبيقات اللياقة والصحة</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleRequestService("mobile")}
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center mx-auto"
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
        <section className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <Brain className="inline-block h-10 w-10 text-purple-400 ml-4" />
                حلول الذكاء الاصطناعي
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                تقنيات ذكاء اصطناعي متطورة لتحسين أعمالك وأتمتة العمليات
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className={serviceCardClass}>
                <MessageSquare className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">روبوتات الدردشة</h3>
                <p className="text-gray-400 text-sm">مساعدين أذكياء للتفاعل مع العملاء</p>
              </div>

              <div className={serviceCardClass}>
                <Eye className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">رؤية الحاسوب</h3>
                <p className="text-gray-400 text-sm">تحليل وفهم الصور والفيديوهات</p>
              </div>

              <div className={serviceCardClass}>
                <Languages className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">معالجة اللغة</h3>
                <p className="text-gray-400 text-sm">فهم وتحليل النصوص والمحتوى</p>
              </div>

              <div className={serviceCardClass}>
                <LineChart className="h-10 w-10 text-drx-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">التعلم الآلي</h3>
                <p className="text-gray-400 text-sm">نماذج ذكية للتنبؤ والتحليل</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-drx-purple to-drx-dark-purple rounded-3xl p-8 mb-12">
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
                  <Button className="bg-white text-drx-purple px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block">
                    جرب Dr X الآن
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleRequestService("ai")}
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center mx-auto"
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
        <section className="py-20 section-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <Cloud className="inline-block h-10 w-10 text-blue-400 ml-4" />
                الحلول السحابية المتقدمة
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                بنية تحتية سحابية قابلة للتطوير مع أمان وموثوقية عاليين
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className={cn(serviceCardClass, "border-t-4 border-blue-500")}>
                <div className="text-center">
                  <Server className="h-10 w-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">خوادم سحابية</h3>
                  <p className="text-gray-300 mb-4">خوادم عالية الأداء مع إمكانية التطوير الفوري</p>
                  <div className="space-y-2 text-sm text-gray-400">
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
                  <Database className="h-10 w-10 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">قواعد البيانات</h3>
                  <p className="text-gray-300 mb-4">إدارة وحماية بياناتك مع إمكانية الوصول السريع</p>
                  <div className="space-y-2 text-sm text-gray-400">
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
                  <ShieldCheck className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-white">الأمان السيبراني</h3>
                  <p className="text-gray-300 mb-4">حماية شاملة ضد التهديدات الإلكترونية</p>
                  <div className="space-y-2 text-sm text-gray-400">
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

            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">مزايا الحلول السحابية</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Expand className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">قابلية التطوير</h4>
                  <p className="text-sm text-gray-300">توسع مع نمو عملك</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">توفير التكلفة</h4>
                  <p className="text-sm text-gray-300">ادفع مقابل ما تستخدم فقط</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">وصول عالمي</h4>
                  <p className="text-sm text-gray-300">خدماتك متاحة في كل مكان</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-drx-orange to-drx-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">أمان عالي</h4>
                  <p className="text-sm text-gray-300">حماية بمعايير عالمية</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleRequestService("cloud")}
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center mx-auto"
              >
                <Cloud className="h-5 w-5 ml-2" />
                احصل على حل سحابي مخصص
              </Button>
            </div>
          </div>
        </section>
      )}
      {/* قسم الإحصائيات */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">إنجازاتنا بالأرقام</h2>
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
              <div className="text-5xl font-bold text-drx-orange mb-2">24/7</div>
              <div className="text-gray-300">دعم مستمر</div>
            </div>
          </div>
        </div>
      </section>
      {/* قسم الشهادات */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-300">شهادات حقيقية من عملائنا السعداء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                "خدمة استثنائية وتطوير احترافي. فريق Dr X تجاوز توقعاتنا في تطوير متجرنا الإلكتروني."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center ml-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">أحمد محمد</div>
                  <div className="text-sm text-gray-400">مدير شركة تجارية</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                "تطبيق الجوال الذي طوروه لنا أحدث نقلة نوعية في خدماتنا. فريق محترف ومتعاون."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center ml-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">سارة أحمد</div>
                  <div className="text-sm text-gray-400">مؤسسة مشروع تقني</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                "حلول الذكاء الاصطناعي التي قدموها عززت من كفاءة أعمالنا بشكل كبير. ننصح بهم بقوة."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center ml-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">خالد العلي</div>
                  <div className="text-sm text-gray-400">مدير تقنية المعلومات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* نموذج الاتصال السريع (Modal) */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full border border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-lg font-medium flex items-center">
              <Send className="h-5 w-5 text-drx-orange ml-2" />
              اطلب خدمة{" "}
              <span className="mr-1">
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
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-drx-orange"
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
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-drx-orange"
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
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-drx-orange"
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
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-drx-orange"
                placeholder="اشرح لنا متطلبات مشروعك..."
              ></Textarea>
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                إلغاء
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="btn-gradient text-white px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
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
