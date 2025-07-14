"use client"

import { useState, useEffect, useRef } from "react"
import { useChat } from "ai/react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Send,
  Brain,
  Zap,
  Languages,
  ShieldCheck,
  Search,
  Smile,
  CircleDot,
  User,
  BotIcon as Robot,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ChatPage() {
  const [currentModel, setCurrentModel] = useState("deepseek")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error, setMessages } = useChat({
    api: "/api/chat",
    onFinish: () => {
      scrollToBottom()
    },
    onStreamMode: "text", // Ensure text streaming
  })

  useEffect(() => {
    // Add initial welcome message if no messages exist
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome-message",
          role: "assistant",
          content: "مرحباً! أنا Dr X، مساعدك الذكي المتطور. كيف يمكنني مساعدتك اليوم؟",
        },
      ])
    }
  }, [messages.length, setMessages])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const selectModel = (model: string) => {
    setCurrentModel(model)
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: `system-model-change-${Date.now()}`,
        role: "assistant",
        content: `تم تبديل النموذج إلى ${model === "deepseek" ? "DeepSeek R1" : "Hugging Face"}`,
      },
    ])
  }

  const quickMessage = (text: string) => {
    handleSubmit(new Event("submit"), {
      messages: [...messages, { id: `quick-user-${Date.now()}`, role: "user", content: text }],
      data: { model: currentModel },
    })
  }

  return (
    <div className="gradient-bg min-h-screen flex flex-col items-center justify-center p-4 pt-16">
      {/* AI Status */}
      <div className="absolute top-20 right-4 bg-green-600/20 border border-green-600/50 rounded-full px-4 py-2 text-sm flex items-center gap-2">
        <CircleDot className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
        <span>Dr X متصل</span>
      </div>

      <Card className="flex flex-col flex-1 max-w-4xl mx-auto w-full my-4 bg-gray-800/90 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
        <CardHeader className="p-6 pb-4 bg-gradient-to-r from-gray-900 to-gray-800">
          <CardTitle className="text-center text-4xl font-bold gradient-text flex items-center justify-center mb-2">
            <Image src="/images/drx-logo.png" alt="Dr X" width={32} height={32} className="ml-3 rounded glow-effect" />
            Dr X - مساعد الذكاء الاصطناعي
          </CardTitle>
          <p className="text-center text-gray-300">مساعدك الذكي المتطور - مدعوم بأحدث تقنيات الذكاء الاصطناعي</p>

          {/* Model Selector */}
          <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-4 mt-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Brain className="h-5 w-5 ml-2" />
              اختر نموذج الذكاء الاصطناعي:
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                onClick={() => selectModel("deepseek")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                  currentModel === "deepseek"
                    ? "btn-gradient text-white font-medium"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20",
                )}
              >
                <Search className="h-4 w-4" />
                DeepSeek R1
              </Button>
              <Button
                onClick={() => selectModel("huggingface")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                  currentModel === "huggingface"
                    ? "btn-gradient text-white font-medium"
                    : "bg-white/10 border border-white/20 text-white hover:bg-white/20",
                )}
              >
                <Smile className="h-4 w-4" />
                Hugging Face
              </Button>
            </div>
          </div>

          {/* Feature Panel */}
          <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-5 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">استجابة فورية</p>
              </div>
              <div>
                <Languages className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">دعم متعدد اللغات</p>
              </div>
              <div>
                <ShieldCheck className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-300">آمن ومحمي</p>
              </div>
            </div>
          </div>
        </CardHeader>

        {/* Messages Area */}
        <CardContent className="flex-1 overflow-hidden p-6" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <ScrollArea className="h-full pr-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex items-start gap-3 mb-4", message.role === "user" ? "justify-end" : "justify-start")}
              >
                {message.role === "assistant" ? (
                  <div className="bg-gradient-to-r from-drx-orange to-drx-red rounded-full p-2 flex-shrink-0">
                    <Robot className="h-5 w-5 text-white" />
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 flex-shrink-0">
                    <User className="h-5 w-5 text-white" />
                  </div>
                )}
                <div
                  className={cn(
                    "p-4 max-w-xs text-white",
                    message.role === "user" ? "chat-bubble-user" : "chat-bubble-ai",
                  )}
                >
                  <p className="font-semibold mb-1">{message.role === "user" ? "أنت" : "Dr X"}</p>
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3 mb-4 justify-start">
                <div className="bg-gradient-to-r from-drx-orange to-drx-red rounded-full p-2 flex-shrink-0">
                  <Robot className="h-5 w-5 text-white" />
                </div>
                <div className="chat-bubble-ai p-4 text-white flex items-center gap-2">
                  <span>Dr X يكتب</span>
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            {error && <div className="text-red-500 text-center mt-4">حدث خطأ: {error.message}</div>}
            <div ref={messagesEndRef} />
          </ScrollArea>
        </CardContent>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-6 border-t border-gray-700 bg-gray-900/50">
          <div className="bg-white/10 rounded-full p-2 flex items-center gap-3 border border-white/20 backdrop-blur-md">
            <Input
              type="text"
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-4 py-2 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="btn-gradient text-white w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
              disabled={isLoading}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>

          {/* Quick Buttons */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <Button
              variant="outline"
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20 text-sm"
              onClick={() => quickMessage("ما هي أحدث تقنيات الذكاء الاصطناعي؟")}
              disabled={isLoading}
            >
              تقنيات الذكاء الاصطناعي
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20 text-sm"
              onClick={() => quickMessage("اشرح لي البرمجة بطريقة بسيطة")}
              disabled={isLoading}
            >
              تعلم البرمجة
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20 text-sm"
              onClick={() => quickMessage("ما هي أفضل النصائح للنجاح؟")}
              disabled={isLoading}
            >
              نصائح النجاح
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
