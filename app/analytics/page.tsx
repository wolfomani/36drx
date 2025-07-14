import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { TrendingUp, Users, DollarSign, Clock, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AnalyticsPage() {
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
    { name: "مبيعات", value: 400 },
    { name: "تسويق", value: 300 },
    { name: "تطوير", value: 300 },
    { name: "دعم", value: 200 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen">
      {" "}
      {/* Adjusted padding for fixed navbar */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6 gradient-text animate-fade-in-up">تحليلات الأداء</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            نقدم رؤى عميقة حول أداء مشاريعك وحلولك الرقمية لمساعدتك على اتخاذ قرارات مستنيرة.
          </p>
        </div>
      </section>
      <section className="py-16 bg-gray-800/70">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in-up">
            نظرة عامة على المقاييس
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up">
              <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">النمو</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                <p className="text-3xl font-bold text-white mb-1">+15%</p>
                <p>نمو شهري</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-200">
              <Users className="h-12 w-12 text-blue-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">المستخدمون</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                <p className="text-3xl font-bold text-white mb-1">12,345</p>
                <p>مستخدم نشط</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-400">
              <DollarSign className="h-12 w-12 text-amber-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">الإيرادات</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                <p className="text-3xl font-bold text-white mb-1">$50,000</p>
                <p>إيرادات شهرية</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center animate-fade-in-up delay-600">
              <Clock className="h-12 w-12 text-purple-400 mb-4" />
              <CardTitle className="text-2xl font-semibold mb-2">متوسط الجلسة</CardTitle>
              <CardContent className="text-gray-300 text-sm">
                <p className="text-3xl font-bold text-white mb-1">03:45</p>
                <p>دقائق</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text animate-fade-in-up">
            الرسوم البيانية التفصيلية
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">الزيارات الشهرية</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a4a4a" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "8px" }}
                      itemStyle={{ color: "#fff" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} name="المشاهدات" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" name="المستخدمون" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 animate-fade-in-up delay-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">الإيرادات حسب المصدر</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4a4a4a" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "8px" }}
                      itemStyle={{ color: "#fff" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" name="الإيرادات" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">توزيع المصاريف</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: "8px" }}
                      itemStyle={{ color: "#fff" }}
                      labelStyle={{ color: "#fff" }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 animate-fade-in-up delay-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">المصادر الجغرافية</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-[300px]">
                <Globe className="h-24 w-24 text-blue-400 mb-4" />
                <p className="text-lg text-gray-300">البيانات الجغرافية متاحة قريباً.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 gradient-text animate-fade-in-up">هل تحتاج إلى تحليلات مخصصة؟</h2>
          <p className="text-lg mb-8 text-gray-300 animate-fade-in-up delay-200">
            دعنا نساعدك في فهم بياناتك واتخاذ قرارات أفضل.
          </p>
          <Link href="/contact">
            <Button className="btn-gradient text-white px-10 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all animate-fade-in-up delay-400">
              تواصل معنا اليوم
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
