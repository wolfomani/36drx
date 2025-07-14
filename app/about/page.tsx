import Link from "next/link"
import {
  Brain,
  Cog,
  MicroscopeIcon as Microchip,
  Rocket,
  Target,
  Heart,
  Lightbulb,
  Gem,
  Handshake,
  ShieldAlert,
  User,
  Code,
  LineChart,
  Cloud,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* القسم الرئيسي */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <Brain className="h-20 w-20 md:h-32 md:w-32 text-blue-300 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">من نحن؟</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            نحن فريق Dr X، رواد في مجال الذكاء الاصطناعي والتكنولوجيا المتقدمة
          </p>
          <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
            نسعى لتقديم حلول ذكية ومبتكرة تساعد في تطوير الأعمال وتحسين تجربة المستخدمين
          </p>
        </div>

        {/* عناصر ديكورية متحركة */}
        <div className="absolute top-20 left-10 animate-pulse-slow">
          <Cog className="h-8 w-8 text-white opacity-30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse-slow" style={{ animationDelay: "1s" }}>
          <Microchip className="h-10 w-10 text-white opacity-30" />
        </div>
        <div className="absolute top-1/2 left-20 animate-pulse-slow" style={{ animationDelay: "2s" }}>
          <Brain className="h-8 w-8 text-white opacity-30" />
        </div>
      </section>

      {/* قسم قصتنا */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">قصتنا</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <Lightbulb className="h-10 w-10 mb-4" />
                <h3 className="text-2xl font-bold mb-4">البداية</h3>
                <p className="text-lg leading-relaxed">
                  بدأت رحلتنا من إيمان عميق بقوة الذكاء الاصطناعي في تغيير العالم. أسسنا Dr X لنكون الجسر بين
                  التكنولوجيا المتقدمة واحتياجات الأعمال الحقيقية.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">الرؤية</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      أن نكون الرائدين في تقديم حلول الذكاء الاصطناعي المبتكرة والموثوقة
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">المهمة</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      تمكين الشركات والأفراد من استغلال قوة الذكاء الاصطناعي لتحقيق أهدافهم
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">القيم</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      الابتكار، الجودة، الشفافية، والالتزام بخدمة العملاء
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم قيمنا */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">قيمنا الأساسية</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              نؤمن بمجموعة من القيم الأساسية التي توجه عملنا وتحدد هويتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center value-card">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">الابتكار</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نسعى دائماً لاستكشاف حلول جديدة ومبتكرة تواكب التطورات التكنولوجية
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center value-card">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gem className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">الجودة</h3>
              <p className="text-gray-600 dark:text-gray-300">نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center value-card">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">الشراكة</h3>
              <p className="text-gray-600 dark:text-gray-300">
                نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والتعاون
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center value-card">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">الأمان</h3>
              <p className="text-gray-600 dark:text-gray-300">نضع الأمان والخصوصية في المقدمة في جميع حلولنا التقنية</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم فريق العمل */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">فريق العمل</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              فريق من الخبراء والمتخصصين في مجال الذكاء الاصطناعي والتكنولوجيا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center team-card">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">د. عبدالعزيز الحمداني</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">المؤسس والرئيس التنفيذي</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                خبير في الذكاء الاصطناعي مع أكثر من 15 عاماً من الخبرة في تطوير الحلول التقنية
              </p>
              <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
                <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.107 4.107 0 001.27 5.477A4.072 4.072 0 014 9.659v.05c0 4.454 3.106 8.13 7.24 8.976a4.092 4.092 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center team-card">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">سارة أحمد</h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-4">مديرة التطوير</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                متخصصة في تطوير تطبيقات الذكاء الاصطناعي وتعلم الآلة مع خبرة 10 سنوات
              </p>
              <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
                <Link
                  href="#"
                  className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.82.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.392-1.988 1.03-2.69-.104-.253-.448-1.274.097-2.659 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.70.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.382.202 2.405.097 2.659.644.703 1.03 1.595 1.03 2.69 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center team-card">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">محمد علي</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">مختص تحليل البيانات</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                خبير في تحليل البيانات الضخمة وبناء نماذج التنبؤ الذكية
              </p>
              <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
                <Link
                  href="#"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.107 4.107 0 001.27 5.477A4.072 4.072 0 014 9.659v.05c0 4.454 3.106 8.13 7.24 8.976a4.092 4.092 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.844z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم إحصائياتنا */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">التقنيات التي نستخدمها</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              نعتمد على أحدث التقنيات والأدوات لضمان تقديم أفضل الحلول
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg
                className="h-10 w-10 text-blue-600 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 19.5v-7.5h-3v-3h3V6c0-2.761 2.239-5 5-5h3v3h-3c-1.104 0-2 .896-2 2v1.5h5l-1 3h-4v7.5h-3z" />
              </svg>
              <h4 className="font-semibold text-gray-900 dark:text-white">Python</h4>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg
                className="h-10 w-10 text-yellow-500 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 19.5v-7.5h-3v-3h3V6c0-2.761 2.239-5 5-5h3v3h-3c-1.104 0-2 .896-2 2v1.5h5l-1 3h-4v7.5h-3z" />
              </svg>
              <h4 className="font-semibold text-gray-900 dark:text-white">JavaScript</h4>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg
                className="h-10 w-10 text-blue-500 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 19.5v-7.5h-3v-3h3V6c0-2.761 2.239-5 5-5h3v3h-3c-1.104 0-2 .896-2 2v1.5h5l-1 3h-4v7.5h-3z" />
              </svg>
              <h4 className="font-semibold text-gray-900 dark:text-white">React</h4>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg
                className="h-10 w-10 text-green-600 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 19.5v-7.5h-3v-3h3V6c0-2.761 2.239-5 5-5h3v3h-3c-1.104 0-2 .896-2 2v1.5h5l-1 3h-4v7.5h-3z" />
              </svg>
              <h4 className="font-semibold text-gray-900 dark:text-white">Node.js</h4>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <svg
                className="h-10 w-10 text-blue-500 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 19.5v-7.5h-3v-3h3V6c0-2.761 2.239-5 5-5h3v3h-3c-1.104 0-2 .896-2 2v1.5h5l-1 3h-4v7.5h-3z" />
              </svg>
              <h4 className="font-semibold text-gray-900 dark:text-white">Docker</h4>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Cloud className="h-10 w-10 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Cloud</h4>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الدعوة للعمل */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">هل أنت مستعد للبدء؟</h2>
            <p className="text-xl mb-8 opacity-90">
              انضم إلينا في رحلة الابتكار واكتشف كيف يمكن للذكاء الاصطناعي أن يغير مستقبل عملك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  تواصل معنا
                </Button>
              </Link>
              <Link href="/chat">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors bg-transparent"
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
