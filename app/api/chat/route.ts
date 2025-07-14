import { streamText } from "ai"
import { deepseek } from "@ai-sdk/deepseek"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

// Initialize Google Generative AI with your API key
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export async function POST(req: Request) {
  const { messages, data } = await req.json()
  const modelName = data?.model || "deepseek" // Default to deepseek if not specified

  let model
  if (modelName === "deepseek") {
    model = deepseek("deepseek-chat")
  } else if (modelName === "huggingface") {
    // Assuming Hugging Face is integrated via Google Generative AI for this example
    // In a real scenario, you might use a dedicated Hugging Face provider if available in AI SDK
    model = google("gemini-pro") // Using Gemini Pro as a placeholder for Hugging Face
  } else {
    model = deepseek("deepseek-chat") // Fallback
  }

  const result = await streamText({
    model: model,
    messages,
  })

  return result.to
  Response()
}
