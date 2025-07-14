"use client"

import Link from "next/link"
import {
  Eye,
  Phone,
  Plus,
  Calendar,
  ArrowLeft,
  Globe,
  Smartphone,
  Brain,
  Paintbrush,
  ShoppingCart,
  Star,
  LineChartIcon as ChartLine,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      category: "web",
      title: "منصة التجارة الإلكترونية",
      description: "منصة تجارة إلكترونية متكاملة مع نظام دفع آمن وإدارة المخزون",
      technologies: ["React", "Node.js", "MongoDB"],
      year: "2024",
      icon: Globe,
    },
    {
      id: 2,
      category: "mobile",
      title: "تطبيق إدارة المهام",
      description: "تطبيق ذكي لإدارة المهام والمشاريع مع إشعارات فورية",
      technologies: ["Flutter", "Firebase", "Dart"],
      year: "2024",
      icon: Smartphone,
    },
    {
      id: 3,
      category: "ai",
      title: "نظام الذكاء الاصطناعي",
      description: "نظام ذكي لتحليل البيانات والتنبؤ بالاتجاهات المستقبلية",
      technologies: ["Python", "TensorFlow", "Docker"],
      year: "2024",
      icon: Brain,
    },
    {
      id: 4,
      category: "web",
      title: "لوحة تحكم تحليلية",
      description: "لوحة تحكم شاملة لعرض البيانات والإحصائيات التفاعلية",
      technologies: ["Vue.js", "Chart.js", "JavaScript"],
      year: "2023",
      icon: ChartLine,
    },
    {
      id: 5,
      category: "design",
      title: "هوية بصرية متكاملة",
      description: "تصميم هوية بصرية شاملة لشركة تقنية ناشئة",
      technologies: ["Photoshop", "Illustrator", "Figma"],
      year: "2023",
      icon: Paintbrush,
    },
    {
      id: 6,
      category: "mobile",
      title: "تطبيق متجر إلكتروني",
      description: "تطبيق تسوق محمول مع ميزات الدفع الآمن والتتبع",
      technologies: ["React Native", "Redux", "API"],
      year: "2023",
      icon: ShoppingCart,
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
    <div className="bg-black text-white">
      {/* قسم البطل */}
      <section className="gradient-bg min-h-screen flex flex-col items-center justify-center p-4 pt-16">
        <div className="relative z-10 text-center px-4 pt-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">معرض أعمالنا</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            استكشف مجموعة متنوعة من المشاريع المبتكرة التي أنجزناها بنجاح
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gradient text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center"
            >
              <Eye className="h-5 w-5 ml-2" />
              استعرض المشاريع
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-drx-orange text-drx-orange px-8 py-3 rounded-full text-lg font-semibold hover:bg-drx-orange hover:text-black transition-colors bg-transparent flex items-center justify-center"
              >
                <Phone className="h-5 w-5 ml-2" />
                اطلب مشروعك
              </Button>
            </Link>
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
                  <project.icon className="h-24 w-24 text-white opacity-80" />
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
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar className="h-4 w-4 ml-1" />
                      {project.year}
                    </span>
                    <Link href="#" className="text-drx-orange hover:text-drx-red font-medium flex items-center">
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
