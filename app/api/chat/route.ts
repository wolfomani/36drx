import { createOpenAI } from "@ai-sdk/openai"
import { streamText } from "ai"

// Create OpenAI instance for DeepSeek
const deepseek = createOpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY || "",
  baseURL: process.env.DEEPSEEK_API_URL || "https://api.deepseek.com",
})

export async function POST(req: Request) {
  try {
    const { messages, data } = await req.json()
    const modelName = data?.model || "deepseek"

    let model
    if (modelName === "deepseek") {
      model = deepseek("deepseek-chat")
    } else {
      // Default fallback
      model = deepseek("deepseek-chat")
    }

    const result = await streamText({
      model,
      messages,
      system: `أنت Dr.X، مساعد ذكي متطور ومفيد. تجيب باللغة العربية بطريقة ودودة ومهنية. 
      أنت خبير في مختلف المجالات وتقدم إجابات دقيقة ومفيدة.`,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API Error:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
