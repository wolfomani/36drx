import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Lightbulb, Rocket, Handshake } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text leading-tight">من نحن Dr X</h1>
            <p className="text-lg md:text-xl text-gray-300">
              نحن فريق من الخبراء المتخصصين في الذكاء الاصطناعي وتطوير الويب، ملتزمون بتقديم حلول مبتكرة وعالية الجودة
              لعملائنا.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 text-center lg:text-right">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text leading-tight">قصتنا</h2>
            <p className="text-lg text-gray-300">
              تأسست Dr X على يد مجموعة من المهندسين والمبتكرين الشغوفين بالتكنولوجيا والذكاء الاصطناعي. بدأنا رحلتنا
              بهدف سد الفجوة بين الأفكار الطموحة والتنفيذ التقني الفعال، وتقديم حلول رقمية تحدث فرقًا حقيقيًا في أعمال
              عملائنا. منذ ذلك الحين، نمت شركتنا وتطورت، محافظين على التزامنا بالجودة والابتكار.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Our Story"
              className="rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center gradient-text mb-12">قيمنا الأساسية</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-blue-500/20 p-4 rounded-full mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">الابتكار</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">
                نسعى دائمًا لتبني أحدث التقنيات وتقديم حلول إبداعية.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-green-500/20 p-4 rounded-full mb-4">
                  <Handshake className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">التعاون</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">
                نؤمن بقوة العمل الجماعي والشراكة مع عملائنا.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-purple-500/20 p-4 rounded-full mb-4">
                  <Rocket className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">التميز</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">
                نلتزم بتقديم أعلى مستويات الجودة في كل ما نقوم به.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-red-500/20 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">العميل أولاً</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">
                رضا عملائنا هو أولويتنا القصوى في كل خطوة.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center gradient-text mb-12">فريقنا</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Placeholder Team Member 1 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl flex flex-col items-center text-center p-6">
              <Image
                src="/placeholder-user.jpg"
                width={120}
                height={120}
                alt="Team Member"
                className="rounded-full mb-4 object-cover h-32 w-32"
              />
              <h3 className="text-xl font-bold text-white">الاسم الأول الأخير</h3>
              <p className="text-gray-400">المنصب</p>
              <p className="text-sm text-gray-500 mt-2">وصف موجز لدور العضو وخبراته.</p>
            </Card>
            {/* Placeholder Team Member 2 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl flex flex-col items-center text-center p-6">
              <Image
                src="/placeholder-user.jpg"
                width={120}
                height={120}
                alt="Team Member"
                className="rounded-full mb-4 object-cover h-32 w-32"
              />
              <h3 className="text-xl font-bold text-white">الاسم الأول الأخير</h3>
              <p className="text-gray-400">المنصب</p>
              <p className="text-sm text-gray-500 mt-2">وصف موجز لدور العضو وخبراته.</p>
            </Card>
            {/* Placeholder Team Member 3 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl flex flex-col items-center text-center p-6">
              <Image
                src="/placeholder-user.jpg"
                width={120}
                height={120}
                alt="Team Member"
                className="rounded-full mb-4 object-cover h-32 w-32"
              />
              <h3 className="text-xl font-bold text-white">الاسم الأول الأخير</h3>
              <p className="text-gray-400">المنصب</p>
              <p className="text-sm text-gray-500 mt-2">وصف موجز لدور العضو وخبراته.</p>
            </Card>
            {/* Placeholder Team Member 4 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl flex flex-col items-center text-center p-6">
              <Image
                src="/placeholder-user.jpg"
                width={120}
                height={120}
                alt="Team Member"
                className="rounded-full mb-4 object-cover h-32 w-32"
              />
              <h3 className="text-xl font-bold text-white">الاسم الأول الأخير</h3>
              <p className="text-gray-400">المنصب</p>
              <p className="text-sm text-gray-500 mt-2">وصف موجز لدور العضو وخبراته.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-r from-drx-blue to-drx-purple">
        <div className="container px-4 md:px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">انضم إلى عائلة Dr X</h2>
          <p className="text-lg md:text-xl text-gray-200">نحن نبحث دائمًا عن المواهب للانضمام إلى فريقنا المتنامي.</p>
          <Link href="/contact">
            <Button className="px-8 py-3 text-lg font-semibold rounded-full bg-white text-drx-blue hover:bg-gray-100 transition-all shadow-lg">
              تواصل معنا
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
