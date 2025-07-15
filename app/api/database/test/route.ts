import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: false, error: "DATABASE_URL غير محدد" }, { status: 500 })
    }

    const sql = neon(process.env.DATABASE_URL)
    const result = await sql`SELECT NOW() as current_time`

    return NextResponse.json({
      success: true,
      message: "تم الاتصال بقاعدة البيانات بنجاح",
      timestamp: result[0].current_time,
    })
  } catch (error) {
    console.error("Database Test Error:", error)
    return NextResponse.json({ success: false, error: "فشل في الاتصال بقاعدة البيانات" }, { status: 500 })
  }
}
