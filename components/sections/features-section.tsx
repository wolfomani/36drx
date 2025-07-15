import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Book, Code, GraduationCap, Lightbulb, TrendingUp, Cpu } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-drx-dark-gray text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
        مميزات <span className="text-drx-red">Dr.X</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="bg-drx-black border-drx-red text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-gold/30 shadow-xl">
          <CardHeader>
            <Book className="w-12 h-12 text-drx-gold mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">مواد تعليمية شاملة</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              مكتبة ضخمة من المقالات، الدروس، والدورات التدريبية في مجالات الذكاء الاصطناعي المختلفة، من الأساسيات إلى
              المستويات المتقدمة.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-drx-black border-drx-red text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-gold/30 shadow-xl">
          <CardHeader>
            <Code className="w-12 h-12 text-drx-gold mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">تطوير ويب بالذكاء الاصطناعي</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              أدوات متطورة لتطوير مواقع الويب مباشرةً باستخدام تقنيات الذكاء الاصطناعي، مع التركيز على الكفاءة والدقة.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-drx-black border-drx-red text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-gold/30 shadow-xl">
          <CardHeader>
            <GraduationCap className="w-12 h-12 text-drx-gold mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">تدريب نماذج متقدمة</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              تدريب نماذج الذكاء الاصطناعي بأقوى الخوارزميات والأدوات المتطورة لضمان نتائج دقيقة ومبهرة.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-drx-black border-drx-red text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-gold/30 shadow-xl">
          <CardHeader>
            <Lightbulb className="w-12 h-12 text-drx-gold mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">محتوى تفاعلي وإلهامي</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              رسوم بيانية، رسوم توضيحية، وتمارين تفاعلية لجعل عملية التعلم ممتعة وجذابة.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-drx-black border-drx-red text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-gold/30 shadow-xl">
          <CardHeader>
            <TrendingUp className="w-12 h-12 text-drx-gold mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">تحليلات واتجاهات AI</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              استكشف أحدث الاتجاهات والتحليلات في عالم الذكاء الاصطناعي لمواكبة التطورات.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-drx-black border-drx-red text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-gold/30 shadow-xl">
          <CardHeader>
            <Cpu className="w-12 h-12 text-drx-gold mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">أتمتة ذكية</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              أدوات وحلول لأتمتة المهام المعقدة باستخدام الذكاء الاصطناعي لزيادة الكفاءة والإنتاجية.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
