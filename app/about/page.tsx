import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            من نحن
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            نحن Dr X، فريق من المبتكرين والمطورين المتخصصين في حلول الذكاء الاصطناعي وتطوير الويب.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform animate-fade-in-up delay-400">
              تواصل معنا <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">قصتنا</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              تأسست Dr X على يد مجموعة من الخبراء الشغوفين بالتكنولوجيا والابتكار، بهدف سد الفجوة بين الاحتياجات الرقمية
              المتزايدة والحلول المبتكرة. بدأنا رحلتنا برؤية واضحة: تمكين الشركات والأفراد من خلال أحدث تقنيات الذكاء
              الاصطناعي وتطوير الويب.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              منذ ذلك الحين، قمنا ببناء سمعة طيبة في تقديم حلول عالية الجودة، مدعومة بفريق من المهندسين والمصممين وخبراء
              الذكاء الاصطناعي الذين يلتزمون بالتميز.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl animate-fade-in-up delay-200">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Our Story"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-fade-in-up">مهمتنا ورؤيتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up">
              <Lightbulb className="h-12 w-12 text-drx-orange mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">مهمتنا</h3>
              <p className="text-gray-300">
                تقديم حلول رقمية مبتكرة وموثوقة، تمكن عملائنا من تحقيق أقصى إمكاناتهم في العصر الرقمي.
              </p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up delay-200">
              <Award className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">رؤيتنا</h3>
              <p className="text-gray-300">
                أن نكون الشريك الرقمي المفضل للشركات التي تسعى للتميز والابتكار في منطقة الشرق الأوسط وخارجها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text animate-fade-in-up">فريقنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 1"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 border-4 border-drx-orange"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">د. أحمد الشريف</h3>
              <p className="text-drx-orange mb-3">الرئيس التنفيذي ومؤسس الذكاء الاصطناعي</p>
              <p className="text-gray-300">خبير في الذكاء الاصطناعي والتعلم الآلي مع أكثر من 15 عامًا من الخبرة.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up delay-200">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 2"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 border-4 border-blue-400"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">فاطمة الزهراء</h3>
              <p className="text-blue-400 mb-3">مديرة تطوير الويب</p>
              <p className="text-gray-300">تقود فريق تطوير الويب بخبرة واسعة في بناء تطبيقات الويب المعقدة.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in-up delay-400">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 3"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 border-4 border-green-400"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">خالد العلي</h3>
              <p className="text-green-400 mb-3">رئيس قسم تطبيقات الجوال</p>
              <p className="text-gray-300">متخصص في تطوير تطبيقات iOS و Android مع سجل حافل بالنجاح.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">انضم إلى عائلة Dr X</h2>
          <p className="text-lg mb-8 text-gray-300 animate-fade-in-up delay-200">
            نحن نبحث دائمًا عن المواهب الشغوفة للانضمام إلى فريقنا المتنامي.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in-up delay-400">
              تصفح الوظائف الشاغرة
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
