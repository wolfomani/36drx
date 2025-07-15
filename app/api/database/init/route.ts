import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function POST() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: false, error: "DATABASE_URL غير محدد" }, { status: 500 })
    }

    const sql = neon(process.env.DATABASE_URL)

    // Create tables
    await sql`
      CREATE TABLE IF NOT EXISTS chat_sessions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id VARCHAR(255),
        model VARCHAR(100),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS chat_messages (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
        role VARCHAR(20) NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS user_feedback (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
        message_id UUID,
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        feedback_text TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS analytics_events (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        event_type VARCHAR(100) NOT NULL,
        event_data JSONB,
        user_id VARCHAR(255),
        session_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `

    return NextResponse.json({
      success: true,
      message: "تم إنشاء جداول قاعدة البيانات بنجاح",
    })
  } catch (error) {
    console.error("Database Init Error:", error)
    return NextResponse.json({ success: false, error: "فشل في إنشاء جداول قاعدة البيانات" }, { status: 500 })
  }
}
