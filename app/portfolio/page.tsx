import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      name: "منصة التجارة الإلكترونية الذكية",
      description: "متجر إلكتروني متكامل مدعوم بالذكاء الاصطناعي لتحسين تجربة التسوق.",
      image: "/placeholder.svg?height=400&width=600",
      category: "تطوير الويب",
      link: "#",
    },
    {
      id: 2,
      name: "تطبيق إدارة المهام الذكي",
      description: "تطبيق جوال يساعد المستخدمين على تنظيم مهامهم بفعالية باستخدام AI.",
      image: "/placeholder.svg?height=400&width=600",
      category: "تطبيقات الجوال",
      link: "#",
    },
    {
      id: 3,
      name: "نظام تحليل البيانات التنبؤي",
      description: "حل ذكاء اصطناعي يتنبأ بالاتجاهات السوقية ويقدم رؤى استراتيجية.",
      image: "/placeholder.svg?height=400&width=600",
      category: "حلول الذكاء الاصطناعي",
      link: "#",
    },
    {
      id: 4,
      name: "موقع شركة عقارية حديث",
      description: "تصميم وتطوير موقع ويب جذاب ومتجاوب لشركة عقارية رائدة.",
      image: "/placeholder.svg?height=400&width=600",
      category: "تطوير الويب",
      link: "#",
    },
    {
      id: 5,
      name: "تطبيق لياقة بدنية شخصي",
      description: "تطبيق جوال يقدم خطط تمارين مخصصة وتتبع التقدم.",
      image: "/placeholder.svg?height=400&width=600",
      category: "تطبيقات الجوال",
      link: "#",
    },
    {
      id: 6,
      name: "روبوت محادثة لخدمة العملاء",
      description: "تطوير روبوت محادثة ذكي لتحسين دعم العملاء على مدار الساعة.",
      image: "/placeholder.svg?height=400&width=600",
      category: "حلول الذكاء الاصطناعي",
      link: "#",
    },
  ]

  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            أعمالنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            استكشف مجموعة من مشاريعنا الناجحة التي تعكس خبرتنا في تطوير الويب، تطبيقات الجوال، وحلول الذكاء الاصطناعي.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform animate-fade-in-up delay-400">
              ابدأ مشروعك معنا <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text animate-fade-in-up">
            مشاريعنا المميزة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/70 backdrop-blur-lg rounded-xl shadow-lg border border-gray-700 overflow-hidden group animate-fade-in-up"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button className="btn-gradient text-white px-6 py-2 rounded-full text-lg">
                        عرض المشروع <ExternalLink className="mr-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-drx-orange text-sm mb-3">{project.category}</p>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">هل لديك فكرة مشروع؟</h2>
          <p className="text-lg mb-8 text-gray-300 animate-fade-in-up delay-200">دعنا نحولها إلى واقع رقمي مذهل.</p>
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
