"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import TopBar from "./components/TopBar"
import ChatInput from "./components/ChatInput"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown, Bot, Share2, MessageSquarePlus, ImageIcon, Mic, FileText } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import dynamic from "next/dynamic" // Import dynamic
import { motion, AnimatePresence } from "framer-motion" // Import motion and AnimatePresence

// Dynamically import ReactMarkdown and SyntaxHighlighter with SSR disabled
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false })
const SyntaxHighlighter = dynamic(() => import("react-syntax-highlighter"), { ssr: false })
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import remarkGfm from "remark-gfm"

interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  rating?: "up" | "down"
  attachments?: { name: string; url: string; type: string }[]
}

export default function ChatPage() {
  const [selectedModel, setSelectedModel] = useState("deepseek")
  const [isDatabaseConnected, setIsDatabaseConnected] = useState(false)
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, append, setMessages } = useChat({
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
        remarkPlugins={[remarkGfm]}
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
    <div className="flex flex-col h-screen bg-surface-base text-fg-primary">
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

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center arabic-text">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-24 bg-gradient-to-br from-button-primary to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg"
            >
              <Bot className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              مرحباً بك في دكتور إكس
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-fg-secondary max-w-md leading-relaxed"
            >
              أنا Dr.X، مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
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
            </motion.div>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="w-8 h-8 border border-border-l1">
                      <AvatarImage src="/images/drx-app-icon.png" alt="Dr.X Avatar" />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl p-4 shadow-md ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none"
                        : "bg-surface-l1 text-fg-primary rounded-bl-none border border-border-l1"
                    }`}
                  >
                    <div className="prose prose-invert max-w-none arabic-text">
                      <div className="whitespace-pre-wrap leading-relaxed text-justify">
                        {renderMessageContent(message.content)}
                      </div>
                    </div>

                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.attachments.map((attachment, attIndex) => (
                          <a
                            key={attIndex}
                            href={attachment.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-surface-l2 rounded-lg px-3 py-2 text-sm text-fg-secondary hover:bg-surface-l3 transition-colors"
                          >
                            {attachment.type.startsWith("image/") ? (
                              <ImageIcon className="w-4 h-4 text-blue-400" />
                            ) : attachment.type.startsWith("audio/") ? (
                              <Mic className="w-4 h-4 text-green-400" />
                            ) : (
                              <FileText className="w-4 h-4 text-gray-400" />
                            )}
                            <span>{attachment.name}</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {message.role === "assistant" && (
                      <div className="mt-3 flex items-center gap-2 text-fg-secondary">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`p-1 h-auto ${message.rating === "up" ? "text-green-500" : "hover:text-green-400"}`}
                          onClick={() => handleRateMessage(message.id, "up")}
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`p-1 h-auto ${message.rating === "down" ? "text-red-500" : "hover:text-red-400"}`}
                          onClick={() => handleRateMessage(message.id, "down")}
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1 h-auto hover:text-blue-400"
                          onClick={() => handleShareMessage(message.content)}
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  {message.role === "user" && (
                    <Avatar className="w-8 h-8 border border-border-l1">
                      <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                      <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              ))}
              {isLoading && messages.length > 0 && (
                <div className="flex justify-start gap-3">
                  <Avatar className="w-8 h-8 border border-border-l1">
                    <AvatarImage src="/images/drx-app-icon.png" alt="Dr.X Avatar" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div className="bg-surface-l1 text-fg-primary rounded-2xl rounded-bl-none p-4 shadow-md max-w-[80%]">
                    <div className="loading-dots">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} disabled={isLoading} />
    </div>
  )
}
