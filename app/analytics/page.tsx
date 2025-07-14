"use client"

import { useEffect, useRef, useState } from "react"
import Chart from "chart.js/auto"
import {
  Users,
  Eye,
  Clock,
  Percent,
  LineChartIcon as ChartLine,
  PieChart,
  Smartphone,
  Trophy,
  Star,
  ArrowUp,
  ArrowDown,
  CircleDot,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
              borderColor: "rgba(59, 130, 246, 1)",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
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
                "rgba(59, 130, 246, 0.8)",
                "rgba(16, 185, 129, 0.8)",
                "rgba(245, 158, 11, 0.8)",
                "rgba(239, 68, 68, 0.8)",
                "rgba(139, 92, 246, 0.8)",
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
              backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(16, 185, 129, 0.8)", "rgba(245, 158, 11, 0.8)"],
              borderColor: ["rgba(59, 130, 246, 1)", "rgba(16, 185, 129, 1)", "rgba(245, 158, 11, 1)"],
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

  const statCardClass =
    "bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-center text-white p-6 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
  const chartContainerClass = "relative h-[400px] bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <ChartLine className="inline-block h-12 w-12 md:h-16 md:w-16 ml-4" />
            التحليلات والإحصائيات
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            لوحة تحكم شاملة لمراقبة الأداء وتحليل البيانات
          </p>
        </div>

        {/* بطاقات الإحصائيات السريعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className={statCardClass}>
            <CardContent className="p-0">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{totalUsers}</h3>
              <p className="text-gray-300">إجمالي المستخدمين</p>
              <div className="mt-2 text-green-400 flex items-center justify-center">
                <ArrowUp className="h-4 w-4 ml-1" />
                <span className="text-sm">+12% من الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>

          <Card className={statCardClass}>
            <CardContent className="p-0">
              <Eye className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{pageViews}</h3>
              <p className="text-gray-300">مشاهدات الصفحة</p>
              <div className="mt-2 text-green-400 flex items-center justify-center">
                <ArrowUp className="h-4 w-4 ml-1" />
                <span className="text-sm">+8% من الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>

          <Card className={statCardClass}>
            <CardContent className="p-0">
              <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{avgTime}</h3>
              <p className="text-gray-300">متوسط وقت الجلسة</p>
              <div className="mt-2 text-green-400 flex items-center justify-center">
                <ArrowUp className="h-4 w-4 ml-1" />
                <span className="text-sm">+15% من الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>

          <Card className={statCardClass}>
            <CardContent className="p-0">
              <Percent className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{bounceRate}</h3>
              <p className="text-gray-300">معدل الارتداد</p>
              <div className="mt-2 text-red-400 flex items-center justify-center">
                <ArrowDown className="h-4 w-4 ml-1" />
                <span className="text-sm">-5% من الشهر الماضي</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* الرسوم البيانية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* رسم بياني خطي للزيارات */}
          <Card className={chartContainerClass}>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <ChartLine className="h-6 w-6 ml-2" />
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
                <PieChart className="h-6 w-6 ml-2" />
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
              <Smartphone className="h-6 w-6 ml-2" />
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
              <Trophy className="h-6 w-6 ml-2" />
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
    </div>
  )
}
