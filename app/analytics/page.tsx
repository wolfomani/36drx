"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { BarChart, Bar } from "recharts"
import { PieChart, Pie, Cell } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const data = [
  { name: "يناير", uv: 4000, pv: 2400, amt: 2400 },
  { name: "فبراير", uv: 3000, pv: 1398, amt: 2210 },
  { name: "مارس", uv: 2000, pv: 9800, amt: 2290 },
  { name: "أبريل", uv: 2780, pv: 3908, amt: 2000 },
  { name: "مايو", uv: 1890, pv: 4800, amt: 2181 },
  { name: "يونيو", uv: 2390, pv: 3800, amt: 2500 },
  { name: "يوليو", uv: 3490, pv: 4300, amt: 2100 },
]

const pieData = [
  { name: "تطوير الويب", value: 400, color: "hsl(var(--chart-1))" },
  { name: "تطبيقات الجوال", value: 300, color: "hsl(var(--chart-2))" },
  { name: "الذكاء الاصطناعي", value: 300, color: "hsl(var(--chart-3))" },
  { name: "خدمات السحابة", value: 200, color: "hsl(var(--chart-4))" },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 px-4 md:px-6">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-center bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text leading-tight">
              تحليلات وأداء Dr X
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              نقدم لك نظرة عميقة على أداء مشاريعنا والبيانات الرئيسية التي تدعم قراراتك.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
        <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Line Chart */}
          <Card className="bg-gray-800/50 border border-gray-700 shadow-xl col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">نمو المستخدمين</CardTitle>
              <CardDescription className="text-gray-400">تتبع نمو المستخدمين على مدار الأشهر.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  uv: {
                    label: "المستخدمون الجدد",
                    color: "hsl(var(--chart-1))",
                  },
                  pv: {
                    label: "المستخدمون النشطون",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="uv" stroke="var(--color-uv)" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="pv" stroke="var(--color-pv)" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="bg-gray-800/50 border border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">إيرادات الخدمات</CardTitle>
              <CardDescription className="text-gray-400">الإيرادات الشهرية من مختلف الخدمات.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  uv: {
                    label: "الإيرادات",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="uv" fill="var(--color-uv)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="bg-gray-800/50 border border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">توزيع المشاريع</CardTitle>
              <CardDescription className="text-gray-400">توزيع المشاريع حسب نوع الخدمة.</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  "تطوير الويب": {
                    label: "تطوير الويب",
                    color: "hsl(var(--chart-1))",
                  },
                  "تطبيقات الجوال": {
                    label: "تطبيقات الجوال",
                    color: "hsl(var(--chart-2))",
                  },
                  "الذكاء الاصطناعي": {
                    label: "الذكاء الاصطناعي",
                    color: "hsl(var(--chart-3))",
                  },
                  "خدمات السحابة": {
                    label: "خدمات السحابة",
                    color: "hsl(var(--chart-4))",
                  },
                }}
                className="h-[300px] w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card className="bg-gray-800/50 border border-gray-700 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white">المقاييس الرئيسية</CardTitle>
              <CardDescription className="text-gray-400">نظرة سريعة على أهم الأرقام.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">إجمالي المشاريع:</span>
                <span className="text-white font-bold text-lg">120</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">العملاء النشطون:</span>
                <span className="text-white font-bold text-lg">85</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">متوسط رضا العملاء:</span>
                <span className="text-white font-bold text-lg">4.8/5</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
