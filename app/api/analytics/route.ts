import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function POST(req: NextRequest) {
  try {
    const { eventType, eventData, userId, sessionId } = await req.json()

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: false }, { status: 500 })
    }

    const sql = neon(process.env.DATABASE_URL)

    await sql`
      INSERT INTO analytics_events (event_type, event_data, user_id, session_id)
      VALUES (${eventType}, ${JSON.stringify(eventData)}, ${userId}, ${sessionId})
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Analytics Error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 })
    }

    const sql = neon(process.env.DATABASE_URL)

    const stats = await sql`
      SELECT 
        event_type,
        COUNT(*) as count,
        DATE_TRUNC('day', created_at) as date
      FROM analytics_events 
      WHERE created_at >= NOW() - INTERVAL '7 days'
      GROUP BY event_type, DATE_TRUNC('day', created_at)
      ORDER BY date DESC
    `

    return NextResponse.json({ stats })
  } catch (error) {
    console.error("Analytics GET Error:", error)
    return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 })
  }
}
