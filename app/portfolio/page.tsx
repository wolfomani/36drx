"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Plus,
  Calendar,
  ArrowLeft,
  Globe,
  Smartphone,
  Brain,
  Paintbrush,
  Star,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      name: "تطبيق إدارة المشاريع الذكي",
      category: "تطبيقات الجوال",
      description:
        "تطبيق جوال متكامل يساعد الفرق على إدارة المشاريع بكفاءة باستخدام الذكاء الاصطناعي لتتبع المهام وتحليل الأداء.",
      image: "/images/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 2,
      name: "منصة التجارة الإلكترونية العصرية",
      category: "تطوير الويب",
      description: "متجر إلكتروني بتصميم جذاب وتجربة مستخدم سلسة، مع ميزات متقدمة لإدارة المنتجات والطلبات.",
      image: "/images/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 3,
      name: "نظام تحليل البيانات بالذكاء الاصطناعي",
      category: "حلول الذكاء الاصطناعي",
      description: "نظام ذكاء اصطناعي يقوم بتحليل كميات هائلة من البيانات وتقديم رؤى قابلة للتنفيذ لدعم اتخاذ القرار.",
      image: "/images/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 4,
      name: "تطبيق اللياقة البدنية الشخصي",
      category: "تطبيقات الجوال",
      description: "تطبيق يقدم خطط تمارين مخصصة وتتبع التقدم، مدعومًا بخوارزميات الذكاء الاصطناعي.",
      image: "/images/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 5,
      name: "موقع شركة استشارات تقنية",
      category: "تطوير الويب",
      description: "موقع تعريفي احترافي يعرض خدمات شركة استشارات تقنية، مع تصميم متجاوب وسهل الاستخدام.",
      image: "/images/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      id: 6,
      name: "روبوت دردشة لخدمة العملاء",
      category: "حلول الذكاء الاصطناعي",
      description: "روبوت دردشة ذكي يعمل على مدار الساعة لتقديم الدعم الفوري والإجابة على استفسارات العملاء.",
      image: "/images/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  const filterButtonClass = (filter: string) =>
    cn(
      "px-6 py-3 rounded-full font-medium border-2 border-gray-700 transition-colors",
      activeFilter === filter ? "btn-gradient text-white" : "bg-gray-800 text-white hover:bg-gray-700",
    )

  const projectCardClass = "bg-gray-800 p-6 rounded-2xl card-hover"

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section for Portfolio */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            مشاريعنا المميزة
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            نحن نفخر بتحويل الأفكار الجريئة إلى حلول رقمية ملموسة.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform animate-fade-in-up delay-400">
              ابدأ مشروعك معنا <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">استكشف أعمالنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/70 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:border-drx-orange transition-all duration-300"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-right">
                  <span className="text-sm font-semibold text-gray-400 mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-drx-orange hover:text-white transition-colors font-semibold"
                  >
                    عرض المشروع <ExternalLink className="mr-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* إحصائيات سريعة */}
      <section className="py-16 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-gray-400">مشروع مكتمل</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-400">رضا العملاء</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-400">عميل سعيد</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold gradient-text mb-2">5</div>
              <div className="text-gray-400">سنوات خبرة</div>
            </div>
          </div>
        </div>
      </section>

      {/* معرض المشاريع */}
      <section id="portfolio" className="py-20 gradient-bg pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">أعمالنا</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              مجموعة مختارة من أفضل مشاريعنا التي تعكس خبرتنا وإبداعنا
            </p>
          </div>

          {/* فلاتر المشاريع */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={() => setActiveFilter("all")} className={filterButtonClass("all")}>
              جميع المشاريع
            </Button>
            <Button onClick={() => setActiveFilter("web")} className={filterButtonClass("web")}>
              تطوير الويب
            </Button>
            <Button onClick={() => setActiveFilter("mobile")} className={filterButtonClass("mobile")}>
              تطبيقات الجوال
            </Button>
            <Button onClick={() => setActiveFilter("ai")} className={filterButtonClass("ai")}>
              ذكاء اصطناعي
            </Button>
            <Button onClick={() => setActiveFilter("design")} className={filterButtonClass("design")}>
              تصميم
            </Button>
          </div>

          {/* شبكة المشاريع */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className={projectCardClass}>
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative flex items-center justify-center">
                  {project.category === "web" ? (
                    <Globe className="h-24 w-24 text-white opacity-80" />
                  ) : project.category === "mobile" ? (
                    <Smartphone className="h-24 w-24 text-white opacity-80" />
                  ) : project.category === "ai" ? (
                    <Brain className="h-24 w-24 text-white opacity-80" />
                  ) : (
                    <Paintbrush className="h-24 w-24 text-white opacity-80" />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {project.category === "web"
                        ? "تطوير ويب"
                        : project.category === "mobile"
                          ? "تطبيق جوال"
                          : project.category === "ai"
                            ? "ذكاء اصطناعي"
                            : "تصميم"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{/* Technologies will be displayed here if needed */}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      {project.year}
                    </span>
                    <Link
                      href={project.link}
                      className="text-drx-orange hover:text-drx-red font-medium flex items-center"
                    >
                      عرض المشروع <ArrowLeft className="h-4 w-4 mr-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* زر عرض المزيد */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center">
                <Plus className="h-5 w-5 ml-2" />
                شاهد المزيد من المشاريع
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* شهادات العملاء */}
      <section className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">آراء حقيقية من عملائنا الذين حققوا النجاح معنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "فريق Dr X نفذ لنا مشروع رائع فاق توقعاتنا. الاحترافية والجودة كانت في المقدمة."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold ml-3">
                  أ
                </div>
                <div>
                  <h4 className="font-semibold text-white">أحمد محمد</h4>
                  <p className="text-gray-400 text-sm">مدير شركة التقنية الحديثة</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "تطبيق الجوال الذي طوروه لنا ساعدنا في زيادة مبيعاتنا بنسبة 40%. شكراً للفريق المميز."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold ml-3">
                  س
                </div>
                <div>
                  <h4 className="font-semibold text-white">سارة أحمد</h4>
                  <p className="text-gray-400 text-sm">مؤسسة متجر الأناقة</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                  <Star fill="currentColor" className="h-5 w-5" />
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "خدمة عملاء ممتازة ودعم فني متواصل. أنصح بالتعامل مع Dr X لجميع المشاريع التقنية."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold ml-3">
                  م
                </div>
                <div>
                  <h4 className="font-semibold text-white">محمد علي</h4>
                  <p className="text-gray-400 text-sm">رئيس قسم التسويق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للعمل */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">مستعد لبدء مشروعك القادم؟</h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">دعنا نحول أفكارك إلى واقع رقمي مبهر</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-gradient text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center">
                <Phone className="h-5 w-5 ml-2" />
                ابدأ مشروعك الآن
              </Button>
            </Link>
            <Link href="/chat">
              <Button
                variant="outline"
                className="border-2 border-drx-orange text-drx-orange px-8 py-3 rounded-full font-semibold hover:bg-drx-orange hover:text-black transition-colors bg-transparent flex items-center justify-center"
              >
                <MessageSquare className="h-5 w-5 ml-2" />
                دردش مع د. إكس
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
