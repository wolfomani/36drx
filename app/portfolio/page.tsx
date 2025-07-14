import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text leading-tight">
              أعمالنا ومشاريعنا
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              نحن فخورون بتقديم مجموعة من المشاريع الناجحة التي تعكس خبرتنا وابتكارنا في مختلف المجالات.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 1"
                className="rounded-t-xl object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">مشروع تطوير ويب</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                تطوير موقع ويب متكامل لشركة ناشئة، يتميز بتصميم عصري وأداء عالي.
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
                >
                  عرض المشروع
                </Button>
              </div>
            </Card>
            {/* Project 2 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 2"
                className="rounded-t-xl object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">تطبيق جوال ذكي</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                بناء تطبيق جوال مبتكر يوفر حلولًا ذكية للمستخدمين اليوميين.
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
                >
                  عرض المشروع
                </Button>
              </div>
            </Card>
            {/* Project 3 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 3"
                className="rounded-t-xl object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">حل ذكاء اصطناعي</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                تطوير نظام ذكاء اصطناعي لتحليل البيانات وتقديم رؤى قيمة للأعمال.
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
                >
                  عرض المشروع
                </Button>
              </div>
            </Card>
            {/* Project 4 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 4"
                className="rounded-t-xl object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">منصة تجارة إلكترونية</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                تصميم وتنفيذ منصة تجارة إلكترونية قوية وسهلة الاستخدام.
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
                >
                  عرض المشروع
                </Button>
              </div>
            </Card>
            {/* Project 5 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 5"
                className="rounded-t-xl object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">نظام إدارة محتوى</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                بناء نظام إدارة محتوى مخصص لتلبية احتياجات العملاء الفريدة.
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
                >
                  عرض المشروع
                </Button>
              </div>
            </Card>
            {/* Project 6 */}
            <Card className="bg-gray-800/50 border border-gray-700 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Project 6"
                className="rounded-t-xl object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">تكامل API</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                توفير حلول تكامل API سلسة لربط الأنظمة والتطبيقات المختلفة.
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all bg-transparent"
                >
                  عرض المشروع
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-r from-drx-blue to-drx-purple">
        <div className="container px-4 md:px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">هل لديك مشروع في ذهنك؟</h2>
          <p className="text-lg md:text-xl text-gray-200">دعنا نساعدك على تحويل فكرتك إلى واقع ملموس.</p>
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
