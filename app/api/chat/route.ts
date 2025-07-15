import { streamText } from "ai"
import { createOpenAI } from "@ai-sdk/openai"
import { google } from "@ai-sdk/google"

// DeepSeek configuration (OpenAI-compatible API)
const deepseek = createOpenAI({
  baseURL: process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/chat/completions",
  apiKey: process.env.DEEPSEEK_API_KEY,
})

// Gemini configuration
// The @ai-sdk/google package automatically uses GOOGLE_API_KEY from process.env.
// Ensure your GEMINI_API_KEY is set as GOOGLE_API_KEY in your environment variables.
const gemini = google("gemini-1.5-flash") // Using a common Gemini model name

export async function POST(req: Request) {
  const { messages, modelName } = await req.json()

  let model
  if (modelName === "deepseek") {
    model = deepseek("deepseek-chat") // Assuming 'deepseek-chat' is the model name for DeepSeek
  } else if (modelName === "gemini") {
    model = gemini
  } else {
    // Default to DeepSeek if no model is specified or recognized
    model = deepseek("deepseek-chat")
  }

  try {
    const result = await streamText({
      model: model,
      messages,
    })
    return result.toAIStreamResponse()
  } catch (error) {
    console.error("Error streaming text:", error)
    return new Response(JSON.stringify({ error: "Failed to stream AI response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
