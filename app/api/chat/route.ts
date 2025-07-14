import { deepseek } from "@ai-sdk/deepseek"
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Ensure DEEPSEEK_API_KEY is set in your Vercel project environment variables
    if (!process.env.DEEPSEEK_API_KEY) {
      throw new Error("DEEPSEEK_API_KEY is not set in environment variables.")
    }

    const result = await streamText({
      model: deepseek("deepseek-chat"), // You can also try 'deepseek-coder' or 'deepseek-reasoner'
      messages,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in AI chat route:", error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "An unknown error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
