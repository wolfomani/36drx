import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Lightbulb, Code, Cloud, Users, Eye, Clock, Percent, ArrowRight, Award, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section for About */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            قصتنا ورؤيتنا
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            نحن نؤمن بقوة الابتكار في تشكيل المستقبل الرقمي.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform animate-fade-in-up delay-400">
              تواصل مع فريقنا <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-right animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">قصتنا ورؤيتنا</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              تأسست Dr X على يد مجموعة من الخبراء في مجال التكنولوجيا، بهدف سد الفجوة بين الأفكار الطموحة والتنفيذ
              الرقمي الفعال. نؤمن بأن التكنولوجيا هي مفتاح التقدم، ونسعى لتمكين الشركات والأفراد من تحقيق أقصى
              إمكاناتهم.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              رؤيتنا هي أن نكون الشريك التقني المفضل للشركات التي تسعى للابتكار والنمو، من خلال تقديم حلول ذكية ومستدامة
              تتجاوز التوقعات.
            </p>
          </div>
          <div className="flex justify-center animate-fade-in-up delay-200">
            <Image
              src="/images/placeholder.svg?height=400&width=600"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">مهمتنا ورؤيتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-orange transition-all duration-300">
              <Lightbulb className="h-12 w-12 text-drx-orange mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">مهمتنا</h3>
              <p className="text-gray-300">
                تقديم حلول تقنية مبتكرة وعالية الجودة تمكن عملائنا من تحقيق أقصى إمكاناتهم في العصر الرقمي.
              </p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-red transition-all duration-300">
              <Users className="h-12 w-12 text-drx-red mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">رؤيتنا</h3>
              <p className="text-gray-300">
                أن نكون الشريك التقني المفضل للشركات والأفراد، من خلال بناء مستقبل يعتمد على الذكاء الاصطناعي والابتكار.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up">
              <Lightbulb className="h-12 w-12 text-amber-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">الابتكار</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                نسعى دائمًا لتبني أحدث التقنيات وتقديم حلول إبداعية.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up delay-200">
              <Users className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">التعاون</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                نعمل كفريق واحد مع عملائنا لتحقيق أفضل النتائج.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up delay-400">
              <Award className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">الجودة</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                نلتزم بتقديم حلول عالية الجودة وموثوقة تلبي أعلى المعايير.
              </CardContent>
            </Card>
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center card-hover animate-fade-in-up delay-600">
              <CheckCircle className="h-12 w-12 text-green-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">الشفافية</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                نؤمن بالصراحة والوضوح في جميع تعاملاتنا مع العملاء.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* القسم الرئيسي */}
      <section className="gradient-bg min-h-screen flex flex-col items-center justify-center p-4 pt-16">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <div className="mb-8 floating">
            <Image
              src="/images/drx-logo.png"
              alt="Dr X Logo"
              width={96}
              height={96}
              className="mx-auto rounded-lg pulse-glow"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight gradient-text">من نحن؟</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            نحن فريق Dr X، رواد في مجال الذكاء الاصطناعي والتكنولوجيا المتقدمة
          </p>
          <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
            نسعى لتقديم حلول ذكية ومبتكرة تساعد في تطوير الأعمال وتحسين تجربة المستخدمين
          </p>
        </div>
      </section>

      {/* قسم فريق العمل */}
      <section className="section-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">فريق العمل</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-drx-orange to-drx-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              فريق من الخبراء والمتخصصين في مجال الذكاء الاصطناعي والتكنولوجيا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 1"
                width={120}
                height={120}
                className="rounded-full mb-4 border-4 border-amber-500"
              />
              <CardTitle className="text-xl font-semibold text-white">أحمد السعيد</CardTitle>
              <CardContent className="text-amber-400 text-sm mb-2">الرئيس التنفيذي</CardContent>
              <CardContent className="text-gray-300 text-sm">
                قائد ملهم بخبرة واسعة في إدارة المشاريع التقنية والابتكار.
              </CardContent>
            </Card>
            <Card className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-200">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 2"
                width={120}
                height={120}
                className="rounded-full mb-4 border-4 border-blue-500"
              />
              <CardTitle className="text-xl font-semibold text-white">فاطمة الزهراء</CardTitle>
              <CardContent className="text-blue-400 text-sm mb-2">مديرة تطوير الويب</CardContent>
              <CardContent className="text-gray-300 text-sm">
                متخصصة في بناء واجهات الويب الحديثة وتجربة المستخدم.
              </CardContent>
            </Card>
            <Card className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-400">
              <Image
                src="/placeholder-user.jpg"
                alt="Team Member 3"
                width={120}
                height={120}
                className="rounded-full mb-4 border-4 border-purple-500"
              />
              <CardTitle className="text-xl font-semibold text-white">خالد منصور</CardTitle>
              <CardContent className="text-purple-400 text-sm mb-2">مهندس ذكاء اصطناعي</CardContent>
              <CardContent className="text-gray-300 text-sm">
                خبير في تعلم الآلة وتطوير حلول الذكاء الاصطناعي المتقدمة.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* قسم إحصائياتنا */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">إنجازاتنا بالأرقام</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-4">500+</div>
              <p className="text-xl">مشروع مكتمل</p>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-4">200+</div>
              <p className="text-xl">عميل راضٍ</p>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-4">50+</div>
              <p className="text-xl">خبير متخصص</p>
            </div>

            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-4">24/7</div>
              <p className="text-xl">دعم متواصل</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التقنيات */}
      <section className="section-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">التقنيات التي نستخدمها</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-drx-orange to-drx-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نعتمد على أحدث التقنيات والأدوات لضمان تقديم أفضل الحلول
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Code className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-white">Python</h4>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Code className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h4 className="font-semibold text-white">JavaScript</h4>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Code className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-white">React</h4>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Code className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-white">Node.js</h4>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Code className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold text-white">Docker</h4>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Cloud className="h-10 w-10 text-gray-400 mx-auto mb-4" />
              <h4 className="font-semibold text-white">Cloud</h4>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الدعوة للعمل */}
      <section className="section-bg py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-drx-purple to-drx-dark-purple rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl mb-8 opacity-90">
              انضم إلينا في رحلة الابتكار واكتشف كيف يمكن للذكاء الاصطناعي أن يغير مستقبل عملك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-drx-purple px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  تواصل معنا
                </Button>
              </Link>
              <Link href="/chat">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-drx-purple transition-colors bg-transparent"
                >
                  جرب Dr X الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات الجديدة */}
      <section className="section-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">إحصائيات إضافية</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-10 w-10 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white">المستخدمين النشطين</h4>
              <p className="text-gray-400 text-sm">10,000+</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Eye className="h-10 w-10 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white">الزيارات الشهرية</h4>
              <p className="text-gray-400 text-sm">500,000+</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Clock className="h-10 w-10 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white">الوقت المستغرق</h4>
              <p className="text-gray-400 text-sm">2 سنوات</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Percent className="h-10 w-10 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white">نسبة النجاح</h4>
              <p className="text-gray-400 text-sm">95%</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الذكاء الاصطناعي */}
      <section id="about" className="section-bg py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">من نحن؟</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">نحن روّاد الذكاء الاصطناعي</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                في Dr X، نؤمن بقوة التكنولوجيا في تغيير العالم. نحن فريق من المطورين والمهندسين المتخصصين في الذكاء
                الاصطناعي، نسعى لتقديم حلول مبتكرة تساعد الأفراد والشركات على تحقيق أهدافهم.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-gray-400">مشروع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-gray-400">عميل راضٍ</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/images/drx-logo.png"
                alt="Dr X Team"
                width={256}
                height={256}
                className="w-64 h-64 mx-auto rounded-lg pulse-glow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
