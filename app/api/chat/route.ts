import { type NextRequest, NextResponse } from "next/server"
import { streamText } from "ai"
import { deepseek } from "@ai-sdk/deepseek"

export async function POST(req: NextRequest) {
  try {
    const { messages, model = "deepseek" } = await req.json()

    // System prompt for Dr.X
    const systemPrompt = `أنت Dr.X، مساعد الذكاء الاصطناعي المتطور والمتخصص. أنت خبير في:

1. البرمجة وتطوير البرمجيات
2. التحليل والبحث العلمي
3. حل المشاكل التقنية
4. التعليم والشرح المبسط
5. الإبداع والابتكار

خصائصك:
- تجيب باللغة العربية بشكل واضح ومفصل
- تقدم حلول عملية وقابلة للتطبيق
- تشرح المفاهيم المعقدة بطريقة مبسطة
- تتفاعل بود واحترافية
- تقدم أمثلة عملية عند الحاجة

تذكر: أنت مساعد ذكي متطور يهدف لتقديم أفضل المساعدة الممكنة.`

    const result = await streamText({
      model: deepseek("deepseek-chat"),
      system: systemPrompt,
      messages,
      temperature: 0.7,
      maxTokens: 2000,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json({ error: "حدث خطأ في معالجة الطلب" }, { status: 500 })
  }
}
