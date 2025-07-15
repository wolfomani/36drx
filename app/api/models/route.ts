import { NextResponse } from "next/server"

export async function GET() {
  try {
    const models = [
      {
        id: "deepseek",
        name: "DeepSeek Chat",
        description: "نموذج متقدم للمحادثة والبرمجة",
        provider: "DeepSeek",
        capabilities: ["text", "code", "analysis"],
        available: !!process.env.DEEPSEEK_API_KEY,
      },
      {
        id: "gemini",
        name: "Gemini Pro",
        description: "نموذج Google المتطور",
        provider: "Google",
        capabilities: ["text", "multimodal", "reasoning"],
        available: !!process.env.GEMINI_API_KEY,
      },
    ]

    return NextResponse.json({ models })
  } catch (error) {
    console.error("Models API Error:", error)
    return NextResponse.json({ error: "فشل في جلب النماذج المتاحة" }, { status: 500 })
  }
}
