import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Zap, Layers } from "lucide-react"

export default function AiModelsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-drx-black text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
        نماذج الذكاء الاصطناعي <span className="text-drx-red">المدمجة</span>
      </h2>
      <p className="text-lg md:text-xl text-drx-light-gray max-w-3xl mx-auto mb-10">
        نحن ندمج أحدث نماذج الذكاء الاصطناعي لتقديم إجابات سريعة ودقيقة ومحتوى جذاب.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-drx-dark-gray border-drx-gold text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-red/30 shadow-xl">
          <CardHeader>
            <Zap className="w-12 h-12 text-drx-red mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">سرعة ودقة فائقة</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              استفد من الاستجابات الفورية والتحليلات الدقيقة بفضل النماذج القوية مثل DeepSeek و Gemini.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-drx-dark-gray border-drx-gold text-white transition-all duration-300 hover:scale-105 hover:shadow-drx-red/30 shadow-xl">
          <CardHeader>
            <Layers className="w-12 h-12 text-drx-red mb-4 mx-auto" />
            <CardTitle className="text-2xl font-bold">توليد محتوى متنوع</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-drx-light-gray">
              يمكن لنماذجنا توليد محتوى نصي، أكواد، أو أفكار إبداعية لتلبية جميع احتياجاتك.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <p className="text-md text-drx-light-gray mt-10 max-w-4xl mx-auto">
        (يمكنك دمج نماذج الذكاء الاصطناعي المذكورة مثل DeepSeek و Gemini عن طريق إعداد موفري خدمة مخصصين في واجهة برمجة
        تطبيقات الدردشة لدينا، حيث أن الروابط المقدمة هي نقاط نهاية API وليست تكوينات مباشرة لحزمة AI SDK. سنستخدم Grok
        كنموذج افتراضي.)
      </p>
    </section>
  )
}
