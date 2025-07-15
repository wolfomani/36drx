"use client"
import { useState } from "react"
import { useChat } from "ai/react"
import { Newspaper, ImageIcon, Users } from "lucide-react"
import ChatInput from "./components/ChatInput"
import TopBar from "./components/TopBar"

export default function ChatPage() {
  const [selectedModel, setSelectedModel] = useState("deepseek") // Default model
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: "/api/chat",
    body: {
      modelName: selectedModel,
    },
  })

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
    // Optionally, clear messages or append a system message when model changes
    // For simplicity, we'll just change the model for future requests.
  }

  return (
    <div className="dark min-h-screen bg-surface-base text-fg-primary overflow-hidden" dir="rtl">
      <div className="flex flex-col h-screen">
        {/* الشريط العلوي */}
        <TopBar />

        {/* المحتوى الرئيسي */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
          <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
            <img src="/images/dr-x-logo.png" alt="Dr.X" className="w-64 sm:w-80 mb-6" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl">
              {[
                { icon: ImageIcon, label: "تعديل الصورة" },
                { icon: Newspaper, label: "آخر الأخبار" },
                { icon: Users, label: "شخصيات" },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-surface-l2 hover:bg-surface-l3 transition-colors border border-border-l2"
                >
                  <item.icon className="w-5 h-5 text-secondary" />
                  <span className="text-fg-primary">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* شريط الإدخال */}
        <div className="pb-6 pt-4 px-4">
          <ChatInput />
        </div>
      </div>
    </div>
  )
}
