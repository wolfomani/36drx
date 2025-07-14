import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      name: "منصة التجارة الإلكترونية الذكية",
      description: "متجر إلكتروني متكامل مدعوم بالذكاء الاصطناعي لتحسين تجربة التسوق والتوصيات الشخصية.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["تطوير الويب", "ذكاء اصطناعي", "تجارة إلكترونية"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      name: "تطبيق إدارة المهام للجوال",
      description: "تطبيق جوال سهل الاستخدام لإدارة المهام والمشاريع بفعالية، متوفر على iOS و Android.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["تطبيقات الجوال", "UI/UX", "إنتاجية"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      name: "نظام تحليل البيانات التنبؤي",
      description: "حل ذكاء اصطناعي لتحليل البيانات الضخمة وتقديم تنبؤات دقيقة لدعم اتخاذ القرار.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["ذكاء اصطناعي", "تحليل بيانات", "تعلم آلة"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      name: "موقع شركة عقارية متجاوب",
      description: "تصميم وتطوير موقع ويب حديث ومتجاوب لشركة عقارية، مع معرض صور وميزات بحث متقدمة.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["تطوير الويب", "تصميم متجاوب", "عقارات"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      name: "تطبيق لياقة بدنية شخصي",
      description: "تطبيق جوال يقدم خطط تمارين مخصصة وتتبع التقدم، مع واجهة مستخدم جذابة.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["تطبيقات الجوال", "صحة ولياقة", "UI/UX"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      name: "نظام محادثة ذكي (Chatbot)",
      description: "تطوير روبوت محادثة مدعوم بالذكاء الاصطناعي لخدمة العملاء والدعم الفني.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["ذكاء اصطناعي", "معالجة اللغة الطبيعية", "خدمة عملاء"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen">
      {" "}
      {/* Adjusted padding for fixed navbar */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6 gradient-text animate-fade-in-up">أعمالنا المميزة</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            نحن نفخر بتقديم حلول رقمية مبتكرة وعالية الجودة لعملائنا في مختلف الصناعات.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-800/70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-gray-900/70 border border-gray-700 rounded-xl overflow-hidden shadow-lg card-hover animate-fade-in-up"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-xl font-semibold text-white">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button className="btn-gradient text-white px-4 py-2 text-sm rounded-full flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        عرض مباشر
                      </Button>
                    </Link>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="bg-transparent border border-gray-600 text-gray-300 px-4 py-2 text-sm rounded-full flex items-center gap-2 hover:bg-gray-700"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 gradient-text animate-fade-in-up">هل لديك فكرة لمشروع؟</h2>
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
