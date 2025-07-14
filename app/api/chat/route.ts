import { streamText } from "ai"
import { deepseek } from "@ai-sdk/deepseek"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: deepseek("deepseek-chat"), // أو deepseek-reasoner
    messages,
  })

  return result.toDataStreamResponse()
}
