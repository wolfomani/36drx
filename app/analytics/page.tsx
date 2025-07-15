"use client"

import { useEffect, useRef, useState } from "react"
import Chart from "chart.js/auto"
import {
  Users,
  Eye,
  Clock,
  Percent,
  LineChartIcon as ChartLine,
  Smartphone,
  Trophy,
  Star,
  ArrowUp,
  CircleDot,
  Lightbulb,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, PieChart, TrendingUp, ArrowRight } from "lucide-react"

export default function AnalyticsPage() {
  const visitorsChartRef = useRef<HTMLCanvasElement>(null)
  const sourcesChartRef = useRef<HTMLCanvasElement>(null)
  const devicesChartRef = useRef<HTMLCanvasElement>(null)

  const [totalUsers, setTotalUsers] = useState("25,847")
  const [pageViews, setPageViews] = useState("185,692")
  const [avgTime, setAvgTime] = useState("4:32")
  const [bounceRate, setBounceRate] = useState("35%")
  const [activeUsers, setActiveUsers] = useState(Math.floor(Math.random() * 50) + 10)

  useEffect(() => {
    const visitorsCtx = visitorsChartRef.current?.getContext("2d")
    const sourcesCtx = sourcesChartRef.current?.getContext("2d")
    const devicesCtx = devicesChartRef.current?.getContext("2d")

    let visitorsChart: Chart | null = null
    let sourcesChart: Chart | null = null
    let devicesChart: Chart | null = null

    if (visitorsCtx) {
      visitorsChart = new Chart(visitorsCtx, {
        type: "line",
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
          datasets: [
            {
              label: "الزيارات",
              data: [1200, 1900, 3000, 5000, 2000, 3000, 4500, 3200, 2800, 4200, 3600, 2900, 4100, 3800],
              borderColor: "rgba(255, 77, 0, 1)", // drx-orange
              backgroundColor: "rgba(255, 77, 0, 0.1)", // drx-orange
              borderWidth: 3,
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "white",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            x: {
              ticks: {
                color: "white",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
        },
      })
    }

    if (sourcesCtx) {
      sourcesChart = new Chart(sourcesCtx, {
        type: "doughnut",
        data: {
          labels: ["البحث المباشر", "وسائل التواصل", "البحث العضوي", "المراجع", "الإعلانات"],
          datasets: [
            {
              data: [35, 25, 20, 15, 5],
              backgroundColor: [
                "rgba(255, 77, 0, 0.8)", // drx-orange
                "rgba(16, 185, 129, 0.8)", // green
                "rgba(245, 158, 11, 0.8)", // yellow
                "rgba(239, 68, 68, 0.8)", // red
                "rgba(139, 92, 246, 0.8)", // purple
              ],
              borderWidth: 2,
              borderColor: "rgba(255, 255, 255, 0.2)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                color: "white",
                padding: 20,
              },
            },
          },
        },
      })
    }

    if (devicesCtx) {
      devicesChart = new Chart(devicesCtx, {
        type: "bar",
        data: {
          labels: ["الهاتف المحمول", "سطح المكتب", "الجهاز اللوحي"],
          datasets: [
            {
              label: "عدد المستخدمين",
              data: [15420, 8760, 2850],
              backgroundColor: [
                "rgba(255, 77, 0, 0.8)", // drx-orange
                "rgba(16, 185, 129, 0.8)", // green
                "rgba(245, 158, 11, 0.8)", // yellow
              ],
              borderColor: [
                "rgba(255, 77, 0, 1)", // drx-orange
                "rgba(16, 185, 129, 1)", // green
                "rgba(245, 158, 11, 1)", // yellow
              ],
              borderWidth: 2,
              borderRadius: 8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "white",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
            x: {
              ticks: {
                color: "white",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
        },
      })
    }

    const activeUsersInterval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 50) + 10)
    }, 3000)

    return () => {
      visitorsChart?.destroy()
      sourcesChart?.destroy()
      devicesChart?.destroy()
      clearInterval(activeUsersInterval)
    }
  }, [])

  const statCardClass = "bg-gray-800 p-6 rounded-2xl text-center card-hover"
  const chartContainerClass = "relative h-[400px] bg-gray-800 rounded-xl p-6 border border-gray-700"

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section for Analytics */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight gradient-text animate-fade-in-up">
            تحليلات ورؤى
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            نحول البيانات الخام إلى رؤى قابلة للتنفيذ لنمو أعمالك.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-8 py-3 text-lg rounded-full shadow-lg hover:scale-105 transition-transform animate-fade-in-up delay-400">
              اطلب تحليل بياناتك <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Analytics Overview Section */}
      <section className="py-16 md:py-24 bg-gray-900/70 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">خدمات التحليلات لدينا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-orange transition-all duration-300">
              <BarChart className="h-12 w-12 text-drx-orange mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">تحليل البيانات</h3>
              <p className="text-gray-300">جمع وتحليل البيانات لتحديد الاتجاهات والأنماط الرئيسية.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-drx-red transition-all duration-300">
              <LineChart className="h-12 w-12 text-drx-red mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">التحليلات التنبؤية</h3>
              <p className="text-gray-300">استخدام نماذج الذكاء الاصطناعي للتنبؤ بالنتائج المستقبلية.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <PieChart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">تصور البيانات</h3>
              <p className="text-gray-300">تحويل البيانات المعقدة إلى رسوم بيانية سهلة الفهم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">فوائد التحليلات لعملك</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700">
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">تحسين الأداء</h3>
              <p className="text-gray-300">تحديد مجالات التحسين وزيادة الكفاءة التشغيلية.</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-gray-700">
              <Lightbulb className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">قرارات مستنيرة</h3>
              <p className="text-gray-300">اتخاذ قرارات استراتيجية مبنية على بيانات دقيقة ورؤى عميقة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Analytics Section */}
      <section id="analytics" className="section-bg py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">التحليلات</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-2xl text-center card-hover">
              <Users className="text-4xl text-blue-400 mb-4 mx-auto" />
              <div className="text-3xl font-bold gradient-text mb-2">{totalUsers}</div>
              <div className="text-gray-400">إجمالي المستخدمين</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center card-hover">
              <Eye className="text-4xl text-green-400 mb-4 mx-auto" />
              <div className="text-3xl font-bold gradient-text mb-2">{pageViews}</div>
              <div className="text-gray-400">مشاهدات الصفحة</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center card-hover">
              <Clock className="text-4xl text-purple-400 mb-4 mx-auto" />
              <div className="text-3xl font-bold gradient-text mb-2">{avgTime}</div>
              <div className="text-gray-400">متوسط الوقت</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl text-center card-hover">
              <Percent className="text-4xl text-orange-400 mb-4 mx-auto" />
              <div className="text-3xl font-bold gradient-text mb-2">{bounceRate}</div>
              <div className="text-gray-400">معدل الارتداد</div>
            </div>
          </div>

          {/* الرسوم البيانية */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* رسم بياني خطي للزيارات */}
            <Card className={chartContainerClass}>
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <ChartLine className="h-6 w-6 ml-2 text-drx-orange" />
                  الزيارات اليومية
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-[calc(100%-40px)]">
                <canvas ref={visitorsChartRef}></canvas>
              </CardContent>
            </Card>

            {/* رسم بياني دائري للمصادر */}
            <Card className={chartContainerClass}>
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <PieChart className="h-6 w-6 ml-2 text-drx-orange" />
                  مصادر الزيارات
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 h-[calc(100%-40px)]">
                <canvas ref={sourcesChartRef}></canvas>
              </CardContent>
            </Card>
          </div>

          {/* رسم بياني أعمدة للأجهزة */}
          <Card className={cn(chartContainerClass, "h-[450px] mb-12")}>
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Smartphone className="h-6 w-6 ml-2 text-drx-orange" />
                إحصائيات الأجهزة
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-40px)]">
              <canvas ref={devicesChartRef}></canvas>
            </CardContent>
          </Card>

          {/* جدول أهم الصفحات */}
          <Card className={cn(statCardClass, "p-6 mb-12")}>
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Trophy className="h-6 w-6 ml-2 text-drx-orange" />
                أهم الصفحات
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-right py-3 px-4">الصفحة</th>
                    <th className="text-right py-3 px-4">المشاهدات</th>
                    <th className="text-right py-3 px-4">الوقت المتوسط</th>
                    <th className="text-right py-3 px-4">معدل الارتداد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">/</td>
                    <td className="py-3 px-4">15,234</td>
                    <td className="py-3 px-4">3:24</td>
                    <td className="py-3 px-4">32%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">/chat</td>
                    <td className="py-3 px-4">8,976</td>
                    <td className="py-3 px-4">8:15</td>
                    <td className="py-3 px-4">18%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">/services</td>
                    <td className="py-3 px-4">6,543</td>
                    <td className="py-3 px-4">4:32</td>
                    <td className="py-3 px-4">25%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4">/portfolio</td>
                    <td className="py-3 px-4">4,321</td>
                    <td className="py-3 px-4">5:18</td>
                    <td className="py-3 px-4">28%</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* مؤشرات الأداء في الوقت الفعلي */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={statCardClass}>
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-4">المستخدمون النشطون الآن</h4>
                <div className="text-4xl font-bold text-green-400 mb-2 animate-pulse">{activeUsers}</div>
                <div className="flex items-center justify-center text-green-400">
                  <CircleDot className="h-3 w-3 bg-green-400 rounded-full animate-pulse mr-2" />
                  مباشر
                </div>
              </CardContent>
            </Card>

            <Card className={statCardClass}>
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-4">معدل التحويل</h4>
                <div className="text-4xl font-bold text-blue-400 mb-2">4.2%</div>
                <div className="text-green-400 flex items-center justify-center">
                  <ArrowUp className="h-4 w-4 ml-1" />
                  +0.3% من الأسبوع الماضي
                </div>
              </CardContent>
            </Card>

            <Card className={statCardClass}>
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-4">رضا العملاء</h4>
                <div className="text-4xl font-bold text-yellow-400 mb-2">4.8/5</div>
                <div className="flex justify-center text-yellow-400">
                  <Star className="h-5 w-5" fill="currentColor" />
                  <Star className="h-5 w-5" fill="currentColor" />
                  <Star className="h-5 w-5" fill="currentColor" />
                  <Star className="h-5 w-5" fill="currentColor" />
                  <Star className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
