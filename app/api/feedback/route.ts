import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export async function POST(req: NextRequest) {
  try {
    const { sessionId, messageId, rating, feedbackText, userId } = await req.json()

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: false, error: "Database not configured" }, { status: 500 })
    }

    const sql = neon(process.env.DATABASE_URL)

    // First, ensure session exists or create it
    await sql`
      INSERT INTO chat_sessions (id, user_id, model)
      VALUES (${sessionId}, ${userId || "anonymous"}, 'deepseek')
      ON CONFLICT (id) DO NOTHING
    `

    // Insert feedback
    await sql`
      INSERT INTO user_feedback (session_id, message_id, rating, feedback_text)
      VALUES (${sessionId}, ${messageId}, ${rating}, ${feedbackText || ""})
    `

    return NextResponse.json({
      success: true,
      message: "تم حفظ التقييم بنجاح",
    })
  } catch (error) {
    console.error("Feedback Error:", error)
    return NextResponse.json({ success: false, error: "فشل في حفظ التقييم" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!)

    const avgRating = await sql`
      SELECT AVG(rating)::NUMERIC(3,2) as avg_rating, COUNT(*) as total_feedback
      FROM user_feedback
    `

    const ratingDistribution = await sql`
      SELECT rating, COUNT(*) as count
      FROM user_feedback
      GROUP BY rating
      ORDER BY rating DESC
    `

    const recentFeedback = await sql`
      SELECT f.rating, f.feedback_text, f.created_at, m.content as message_content
      FROM user_feedback f
      JOIN messages m ON f.message_id = m.id
      ORDER BY f.created_at DESC
      LIMIT 10
    `

    return NextResponse.json({
      averageRating: avgRating[0].avg_rating,
      totalFeedback: avgRating[0].total_feedback,
      ratingDistribution,
      recentFeedback,
    })
  } catch (error) {
    console.error("Feedback GET Error:", error)
    return NextResponse.json({ error: "فشل في جلب بيانات التقييم" }, { status: 500 })
  }
}
