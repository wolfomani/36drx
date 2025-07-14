import Link from "next/link"
import Image from "next/image"
import { Lightbulb, Gem, Handshake, ShieldAlert, User, Code, LineChart, Cloud, Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
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

      {/* قسم قصتنا */}
      <section className="section-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">قصتنا</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-drx-orange to-drx-red mx-auto mb-8"></div>
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
                className="mx-auto rounded-lg pulse-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* قسم قيمنا */}
      <section className="section-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">قيمنا الأساسية</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-drx-orange to-drx-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-drx-orange to-drx-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">الابتكار</h3>
              <p className="text-gray-400">نسعى دائماً لاستكشاف حلول جديدة ومبتكرة تواكب التطورات التكنولوجية</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gem className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">الجودة</h3>
              <p className="text-gray-400">نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">الشراكة</h3>
              <p className="text-gray-400">نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والتعاون</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">الأمان</h3>
              <p className="text-gray-400">نضع الأمان والخصوصية في المقدمة في جميع حلولنا التقنية</p>
            </div>
          </div>
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
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">د. عبدالعزيز الحمداني</h3>
              <p className="text-blue-400 font-medium mb-4">المؤسس والرئيس التنفيذي</p>
              <p className="text-gray-400 text-sm">
                خبير في الذكاء الاصطناعي مع أكثر من 15 عاماً من الخبرة في تطوير الحلول التقنية
              </p>
              <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
                <Link
                  href="https://github.com/wolfomani"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://hamkamai.github.io/3weep.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Globe className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">سارة أحمد</h3>
              <p className="text-green-400 font-medium mb-4">مديرة التطوير</p>
              <p className="text-gray-400 text-sm">
                متخصصة في تطوير تطبيقات الذكاء الاصطناعي وتعلم الآلة مع خبرة 10 سنوات
              </p>
              <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
                <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-green-400 hover:text-green-300 transition-colors">
                  <Globe className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">محمد علي</h3>
              <p className="text-purple-400 font-medium mb-4">مختص تحليل البيانات</p>
              <p className="text-gray-400 text-sm">خبير في تحليل البيانات الضخمة وبناء نماذج التنبؤ الذكية</p>
              <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
                <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Globe className="h-6 w-6" />
                </Link>
              </div>
            </div>
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
    </div>
  )
}
