"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import TopBar from "./components/TopBar"
import ChatInput from "./components/ChatInput"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, MessageSquarePlus } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import dynamic from "next/dynamic" // Import dynamic
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import type { Message } from "@/types/message" // Import Message from a shared types file

// Dynamically import ReactMarkdown and SyntaxHighlighter with SSR disabled
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false })
const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"), { ssr: false })
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

export default function ChatPage() {
  const [selectedModel, setSelectedModel] = useState("deepseek")
  const [isDatabaseConnected, setIsDatabaseConnected] = useState(false)
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error, append, setMessages } = useChat({
    api: "/api/chat",
    body: {
      model: selectedModel,
    },
    onFinish: (message) => {
      // Add haptic feedback on message finish
      if (navigator.vibrate) {
        navigator.vibrate(100)
      }
      scrollToBottom()
    },
    onError: (error) => {
      toast({
        title: "خطأ في الدردشة",
        description: error.message || "حدث خطأ أثناء معالجة رسالتك.",
        variant: "destructive",
      })
    },
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    checkDatabaseConnection()
  }, [])

  const checkDatabaseConnection = async () => {
    try {
      const res = await fetch("/api/database/test")
      if (res.ok) {
        const data = await res.json()
        setIsDatabaseConnected(data.connected)
        if (data.connected) {
          toast({
            title: "اتصال قاعدة البيانات",
            description: "تم الاتصال بقاعدة البيانات بنجاح.",
            variant: "success",
          })
        } else {
          toast({
            title: "خطأ في الاتصال بقاعدة البيانات",
            description: "فشل الاتصال بقاعدة البيانات.",
            variant: "destructive",
          })
        }
      } else {
        toast({
          title: "خطأ في فحص الاتصال",
          description: "فشل في فحص حالة اتصال قاعدة البيانات.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error checking database connection:", error)
      toast({
        title: "خطأ في الشبكة",
        description: "فشل في الاتصال بخادم فحص قاعدة البيانات.",
        variant: "destructive",
      })
    }
  }

  const initializeDatabase = async () => {
    try {
      const res = await fetch("/api/database/init", { method: "POST" })
      if (res.ok) {
        const data = await res.json()
        setIsDatabaseInitialized(data.initialized)
        if (data.initialized) {
          toast({
            title: "تهيئة قاعدة البيانات",
            description: "تم تهيئة قاعدة البيانات بنجاح.",
            variant: "success",
          })
        } else {
          toast({
            title: "خطأ في تهيئة قاعدة البيانات",
            description: "فشل تهيئة قاعدة البيانات.",
            variant: "destructive",
          })
        }
      } else {
        toast({
          title: "خطأ في التهيئة",
          description: "فشل في تهيئة قاعدة البيانات.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error initializing database:", error)
      toast({
        title: "خطأ في الشبكة",
        description: "فشل في الاتصال بخادم تهيئة قاعدة البيانات.",
        variant: "destructive",
      })
    }
  }

  const handleSendMessage = async (text: string, attachments?: File[]) => {
    if (!text.trim() && (!attachments || attachments.length === 0)) return

    const userMessage: Message = {
      id: `user-${messages.length + 1}`,
      role: "user",
      content: text,
      attachments: attachments?.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file), // Temporary URL for display
        type: file.type,
      })),
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])

    // For now, we'll just append the message.
    // In a real app, you'd upload attachments and then send the message with attachment URLs.
    append(userMessage)
  }

  const handleRateMessage = (messageId: string, rating: "up" | "down") => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, rating: msg.rating === rating ? undefined : rating } : msg,
      ),
    )
    toast({
      title: "تم التقييم",
      description: `تم تقييم الرسالة بـ ${rating === "up" ? "إعجاب" : "عدم إعجاب"}.`,
    })
    // Here you would send the rating to your backend API
  }

  const handleShareMessage = (messageContent: string) => {
    if (navigator.share) {
      navigator.share({
        title: "محادثة Dr.X",
        text: messageContent,
      })
    } else {
      navigator.clipboard.writeText(messageContent)
      toast({
        title: "تم النسخ",
        description: "تم نسخ الرسالة إلى الحافظة.",
      })
    }
  }

  const handleDownloadConversation = () => {
    const conversationText = messages
      .map((msg) => `${msg.role === "user" ? "أنت" : "Dr.X"}: ${msg.content}`)
      .join("\n\n")
    const blob = new Blob([conversationText], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "drx_conversation.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "تم التحميل",
      description: "تم تحميل المحادثة بنجاح.",
    })
  }

  const renderMessageContent = (content: string) => {
    return (
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <SyntaxHighlighter style={atomOneDark} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-2 last:mb-0" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-2 last:mb-0" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-400 hover:underline" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    )
  }

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      <TopBar
        selectedModel={selectedModel}
        onSelectModel={setSelectedModel}
        onDownloadConversation={handleDownloadConversation}
        onNewChat={() => setMessages([])}
        onTestDatabase={checkDatabaseConnection}
        onInitializeDatabase={initializeDatabase}
        isDatabaseConnected={isDatabaseConnected}
        isDatabaseInitialized={isDatabaseInitialized}
      />
      <ScrollArea className="flex-1 p-4">
        <div className="mx-auto max-w-3xl space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center arabic-text">
              <div className="w-24 h-24 bg-gradient-to-br from-button-primary to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                مرحباً بك في دكتور إكس
              </h2>
              <p className="text-lg text-fg-secondary max-w-md leading-relaxed">
                أنا Dr.X، مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  className="arabic-text bg-transparent"
                  onClick={() => handleSendMessage("ما هي أحدث التطورات في الذكاء الاصطناعي؟")}
                >
                  <MessageSquarePlus className="w-4 h-4 ml-2" />
                  أحدث التطورات في الذكاء الاصطناعي
                </Button>
                <Button
                  variant="outline"
                  className="arabic-text bg-transparent"
                  onClick={() => handleSendMessage("اشرح لي مفهوم الحوسبة السحابية.")}
                >
                  <MessageSquarePlus className="w-4 h-4 ml-2" />
                  مفهوم الحوسبة السحابية
                </Button>
                <Button
                  variant="outline"
                  className="arabic-text bg-transparent"
                  onClick={() => handleSendMessage("اكتب لي قصيدة قصيرة عن المستقبل.")}
                >
                  <MessageSquarePlus className="w-4 h-4 ml-2" />
                  قصيدة عن المستقبل
                </Button>
              </div>
            </div>
          ) : (
            messages.map((message: Message) => (
              <div
                key={message.id}
                className={cn("flex items-start gap-4", message.role === "user" ? "justify-end" : "justify-start")}
              >
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarImage src="/images/drx-app-icon.png" />
                    <AvatarFallback>
                      <Bot className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <Card
                  className={cn(
                    "max-w-[70%]",
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                  )}
                >
                  <div className="p-4 text-sm">{renderMessageContent(message.content)}</div>
                </Card>
                {message.role === "user" && (
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      <Bot className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/images/drx-app-icon.png" />
                <AvatarFallback>
                  <Bot className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <Card className="max-w-[70%] bg-muted">
                <div className="p-4 text-sm">Thinking...</div>
              </Card>
            </div>
          )}
          {error && <div className="text-red-500 text-sm text-center">Error: {error.message}</div>}
        </div>
      </ScrollArea>
      <div className="border-t bg-background p-4">
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
