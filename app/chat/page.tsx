"use client"

import "ios-vibrator-pro-max" // Assuming this is a valid import for vibration
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Brain,
  Zap,
  Languages,
  ShieldCheck,
  Search,
  Smile,
  CircleDot,
  BotIcon as Robot,
  Plus,
  Lightbulb,
  ArrowUp,
  RefreshCcw,
  Copy,
  Share2,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react"

type ActiveButton = "none" | "add" | "deepSearch" | "think"
type MessageType = "user" | "system"

interface Message {
  id: string
  content: string
  type: MessageType
  completed?: boolean
  newSection?: boolean
}

interface MessageSection {
  id: string
  messages: Message[]
  isNewSection: boolean
  isActive?: boolean
  sectionIndex: number
}

interface StreamingWord {
  id: number
  text: string
}

// Faster word delay for smoother streaming
const WORD_DELAY = 40 // ms per word
const CHUNK_SIZE = 2 // Number of words to add at once

export default function ChatInterface() {
  const [inputValue, setInputValue] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const newSectionRef = useRef<HTMLDivElement>(null)
  const [hasTyped, setHasTyped] = useState(false)
  const [activeButton, setActiveButton] = useState<ActiveButton>("none")
  const [isMobile, setIsMobile] = useState(false)
  const [messages, setMessages] = useState<Message[]>([]) // Renamed from `messages` to `localMessages` to avoid conflict with `useChat`
  const [messageSections, setMessageSections] = useState<MessageSection[]>([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [streamingWords, setStreamingWords] = useState<StreamingWord[]>([])
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(null)
  const [viewportHeight, setViewportHeight] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [completedMessages, setCompletedMessages] = useState<Set<string>>(new Set())
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null)
  const inputContainerRef = useRef<HTMLDivElement>(null)
  const shouldFocusAfterStreamingRef = useRef(false)
  const mainContainerRef = useRef<HTMLDivElement>(null)
  // Store selection state
  const selectionStateRef = useRef<{ start: number | null; end: number | null }>({ start: null, end: null })

  // Constants for layout calculations to account for the padding values
  // These are now less critical as we're relying on global layout for top padding
  const TOP_PADDING_GLOBAL_NAV = 96 // pt-24 (6rem = 96px) from global layout
  const BOTTOM_PADDING_INPUT_AREA = 128 // pb-32 (8rem = 128px)
  const ADDITIONAL_OFFSET = 16 // Reduced offset for fine-tuning

  // AI SDK integration
  const [currentModel, setCurrentModel] = useState("deepseek")
  const {
    messages: aiMessages,
    input: aiInput,
    handleInputChange: handleAiInputChange,
    handleSubmit: handleAiSubmit,
    isLoading: aiIsLoading,
    error: aiError,
    setMessages: setAiMessages,
  } = useChat({
    api: "/api/chat",
    onFinish: () => {
      scrollToBottom()
      setIsStreaming(false) // Ensure streaming state is reset
      setStreamingWords([])
      setStreamingMessageId(null)
    },
    onStreamMode: "text",
  })

  // Sync AI SDK messages with local messages for rendering and custom logic
  useEffect(() => {
    // Add initial welcome message if no messages exist in AI SDK
    if (aiMessages.length === 0) {
      setAiMessages([
        {
          id: "welcome-message",
          role: "assistant",
          content: "مرحباً! أنا Dr X، مساعدك الذكي المتطور. كيف يمكنني مساعدتك اليوم؟",
        },
      ])
    }
    // Convert aiMessages to local Message format and manage sections
    const newLocalMessages: Message[] = aiMessages.map((msg) => ({
      id: msg.id,
      content: msg.content,
      type: msg.role === "user" ? "user" : "system",
      completed: true, // AI SDK messages are always "completed" when received
    }))
    setMessages(newLocalMessages)
  }, [aiMessages, setAiMessages])

  useEffect(() => {
    scrollToBottom()
  }, [messages, aiIsLoading]) // Scroll when messages change or AI is loading

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Check if device is mobile and get viewport height
  useEffect(() => {
    const checkMobileAndViewport = () => {
      const isMobileDevice = window.innerWidth < 768
      setIsMobile(isMobileDevice)

      // Capture the viewport height
      const vh = window.innerHeight
      setViewportHeight(vh)

      // Apply fixed height to main container on mobile
      if (isMobileDevice && mainContainerRef.current) {
        mainContainerRef.current.style.height = `${vh}px`
      }
    }

    checkMobileAndViewport()

    // Set initial height
    if (mainContainerRef.current) {
      mainContainerRef.current.style.height = isMobile ? `${viewportHeight}px` : "100svh"
    }

    // Update on resize
    window.addEventListener("resize", checkMobileAndViewport)

    return () => {
      window.removeEventListener("resize", checkMobileAndViewport)
    }
  }, [isMobile, viewportHeight])

  // Organize messages into sections (this logic might be redundant with AI SDK, but keeping for now)
  useEffect(() => {
    if (messages.length === 0) {
      setMessageSections([])
      setActiveSectionId(null)
      return
    }

    const sections: MessageSection[] = []
    let currentSection: MessageSection = {
      id: `section-${Date.now()}-0`,
      messages: [],
      isNewSection: false,
      sectionIndex: 0,
    }

    messages.forEach((message) => {
      if (message.newSection) {
        // Start a new section
        if (currentSection.messages.length > 0) {
          // Mark previous section as inactive
          sections.push({
            ...currentSection,
            isActive: false,
          })
        }

        // Create new active section
        const newSectionId = `section-${Date.now()}-${sections.length}`
        currentSection = {
          id: newSectionId,
          messages: [message],
          isNewSection: true,
          isActive: true,
          sectionIndex: sections.length,
        }

        // Update active section ID
        setActiveSectionId(newSectionId)
      } else {
        // Add to current section
        currentSection.messages.push(message)
      }
    })

    // Add the last section if it has messages
    if (currentSection.messages.length > 0) {
      sections.push(currentSection)
    }

    setMessageSections(sections)
  }, [messages])

  // Scroll to maximum position when new section is created, but only for sections after the first
  useEffect(() => {
    if (messageSections.length > 1) {
      setTimeout(() => {
        const scrollContainer = chatContainerRef.current

        if (scrollContainer) {
          // Scroll to maximum possible position
          scrollContainer.scrollTo({
            top: scrollContainer.scrollHeight,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [messageSections])

  // Focus the textarea on component mount (only on desktop)
  useEffect(() => {
    if (textareaRef.current && !isMobile) {
      textareaRef.current.focus()
    }
  }, [isMobile])

  // Set focus back to textarea after streaming ends (only on desktop)
  useEffect(() => {
    if (!isStreaming && shouldFocusAfterStreamingRef.current && !isMobile) {
      focusTextarea()
      shouldFocusAfterStreamingRef.current = false
    }
  }, [isStreaming, isMobile])

  // Calculate available content height (viewport minus header and input)
  const getContentHeight = () => {
    // Calculate available height by subtracting the top and bottom padding from viewport height
    return viewportHeight - TOP_PADDING_GLOBAL_NAV - BOTTOM_PADDING_INPUT_AREA - ADDITIONAL_OFFSET
  }

  // Save the current selection state
  const saveSelectionState = () => {
    if (textareaRef.current) {
      selectionStateRef.current = {
        start: textareaRef.current.selectionStart,
        end: textareaRef.current.selectionEnd,
      }
    }
  }

  // Restore the saved selection state
  const restoreSelectionState = () => {
    const textarea = textareaRef.current
    const { start, end } = selectionStateRef.current

    if (textarea && start !== null && end !== null) {
      // Focus first, then set selection range
      textarea.focus()
      textarea.setSelectionRange(start, end)
    } else if (textarea) {
      // If no selection was saved, just focus
      textarea.focus()
    }
  }

  const focusTextarea = () => {
    if (textareaRef.current && !isMobile) {
      textareaRef.current.focus()
    }
  }

  const handleInputContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only focus if clicking directly on the container, not on buttons or other interactive elements
    if (
      e.target === e.currentTarget ||
      (e.currentTarget === inputContainerRef.current && !(e.target as HTMLElement).closest("button"))
    ) {
      if (textareaRef.current) {
        textareaRef.current.focus()
      }
    }
  }

  const selectModel = (model: string) => {
    setCurrentModel(model)
    setAiMessages((prevMessages) => [
      ...prevMessages,
      {
        id: `system-model-change-${Date.now()}`,
        role: "assistant",
        content: `تم تبديل النموذج إلى ${model === "deepseek" ? "DeepSeek R1" : "Hugging Face"}`,
      },
    ])
  }

  const quickMessage = (text: string) => {
    handleAiSubmit(new Event("submit"), {
      messages: [...aiMessages, { id: `quick-user-${Date.now()}`, role: "user", content: text }],
      data: { model: currentModel },
    })
  }

  const handleLocalInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value

    // Only allow input changes when not streaming
    if (!aiIsLoading) {
      setInputValue(newValue) // Update local input state
      handleAiInputChange(e) // Also update AI SDK input state

      if (newValue.trim() !== "" && !hasTyped) {
        setHasTyped(true)
      } else if (newValue.trim() === "" && hasTyped) {
        setHasTyped(false)
      }

      const textarea = textareaRef.current
      if (textarea) {
        textarea.style.height = "auto"
        const newHeight = Math.max(24, Math.min(textarea.scrollHeight, 160))
        textarea.style.height = `${newHeight}px`
      }
    }
  }

  const handleLocalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && !aiIsLoading) {
      // Add vibration when message is submitted
      navigator.vibrate(50)

      // Use AI SDK's handleSubmit
      handleAiSubmit(e, {
        messages: [...aiMessages, { id: `user-${Date.now()}`, role: "user", content: inputValue.trim() }],
        data: { model: currentModel },
      })

      // Reset local input state
      setInputValue("")
      setHasTyped(false)
      setActiveButton("none")

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }

      // Only focus the textarea on desktop, not on mobile
      if (!isMobile) {
        focusTextarea()
      } else {
        // On mobile, blur the textarea to dismiss the keyboard
        if (textareaRef.current) {
          textareaRef.current.blur()
        }
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle Cmd+Enter on both mobile and desktop
    if (!aiIsLoading && e.key === "Enter" && e.metaKey) {
      e.preventDefault()
      handleLocalSubmit(e)
      return
    }

    // Only handle regular Enter key (without Shift) on desktop
    if (!aiIsLoading && !isMobile && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleLocalSubmit(e)
    }
  }

  const toggleButton = (button: ActiveButton) => {
    if (!aiIsLoading) {
      // Save the current selection state before toggling
      saveSelectionState()

      setActiveButton((prev) => (prev === button ? "none" : button))

      // Restore the selection state after toggling
      setTimeout(() => {
        restoreSelectionState()
      }, 0)
    }
  }

  const renderMessage = (message: Message) => {
    const isCompleted = message.completed // AI SDK messages are completed by default

    return (
      <div key={message.id} className={cn("flex flex-col", message.type === "user" ? "items-end" : "items-start")}>
        <div
          className={cn(
            "max-w-[80%] px-4 py-2 rounded-2xl text-white",
            message.type === "user"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 rounded-bl-none"
              : "bg-gradient-to-r from-drx-orange to-drx-red rounded-br-none",
          )}
        >
          {/* For user messages or completed system messages, render without animation */}
          {message.content && (
            <span className={message.type === "system" && !isCompleted ? "animate-fade-in" : ""}>
              {message.content}
            </span>
          )}

          {/* For streaming messages, render with animation (if AI SDK supports chunking for this) */}
          {/* This part might need adjustment based on how `useChat` streams.
              For now, `useChat` handles streaming directly into `message.content`. */}
        </div>

        {/* Message actions */}
        {message.type === "system" && isCompleted && (
          <div className="flex items-center gap-2 px-4 mt-1 mb-2">
            <button className="text-gray-400 hover:text-gray-200 transition-colors">
              <RefreshCcw className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-200 transition-colors">
              <Copy className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-200 transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-200 transition-colors">
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-200 transition-colors">
              <ThumbsDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    )
  }

  // Determine if a section should have fixed height (only for sections after the first)
  const shouldApplyHeight = (sectionIndex: number) => {
    return sectionIndex > 0
  }

  return (
    <section id="chat" className="gradient-bg min-h-screen flex flex-col items-center justify-center pt-24 px-4">
      {/* AI Status */}
      <div className="absolute top-20 right-4 bg-green-600/20 border border-green-600/50 rounded-full px-4 py-2 text-sm flex items-center gap-2">
        <CircleDot className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
        <span>Dr X متصل</span>
      </div>

      <Card className="flex flex-col flex-1 w-full my-4 bg-gray-800/90 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
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
            <div className="max-w-3xl mx-auto space-y-4">
              {messages.map((message) => renderMessage(message))}
              {aiIsLoading && (
                <div className="flex items-center gap-3 mb-4 justify-start">
                  <div className="bg-gradient-to-r from-drx-orange to-drx-red rounded-full p-2 flex-shrink-0">
                    <Robot className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-drx-orange to-drx-red rounded-br-none p-4 text-white flex items-center gap-2">
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
              {aiError && <div className="text-red-500 text-center mt-4">حدث خطأ: {aiError.message}</div>}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>

        {/* Input Area */}
        <form onSubmit={handleLocalSubmit} className="p-6 border-t border-gray-700 bg-gray-900/50">
          <div
            ref={inputContainerRef}
            className={cn(
              "relative w-full rounded-3xl border border-white/20 bg-white/10 p-3 cursor-text",
              aiIsLoading && "opacity-80",
            )}
            onClick={handleInputContainerClick}
          >
            <div className="pb-9">
              <Textarea
                ref={textareaRef}
                placeholder={aiIsLoading ? "Waiting for response..." : "اكتب رسالتك هنا..."}
                className="min-h-[24px] max-h-[160px] w-full rounded-3xl border-0 bg-transparent text-white placeholder:text-gray-400 placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0 text-base pl-2 pr-4 pt-0 pb-0 resize-none overflow-y-auto leading-tight"
                value={inputValue}
                onChange={handleLocalInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  // Ensure the textarea is scrolled into view when focused
                  if (textareaRef.current) {
                    textareaRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                }}
              />
            </div>

            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className={cn(
                      "rounded-full h-8 w-8 flex-shrink-0 border-white/20 bg-white/10 p-0 transition-colors hover:bg-white/20",
                      activeButton === "add" && "bg-white/20 border-white/30",
                    )}
                    onClick={() => toggleButton("add")}
                    disabled={aiIsLoading}
                  >
                    <Plus className={cn("h-4 w-4 text-gray-300", activeButton === "add" && "text-white")} />
                    <span className="sr-only">Add</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "rounded-full h-8 px-3 flex items-center border-white/20 bg-white/10 gap-1.5 transition-colors hover:bg-white/20",
                      activeButton === "deepSearch" && "bg-white/20 border-white/30",
                    )}
                    onClick={() => toggleButton("deepSearch")}
                    disabled={aiIsLoading}
                  >
                    <Search className={cn("h-4 w-4 text-gray-300", activeButton === "deepSearch" && "text-white")} />
                    <span className={cn("text-white text-sm", activeButton === "deepSearch" && "font-medium")}>
                      DeepSearch
                    </span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "rounded-full h-8 px-3 flex items-center border-white/20 bg-white/10 gap-1.5 transition-colors hover:bg-white/20",
                      activeButton === "think" && "bg-white/20 border-white/30",
                    )}
                    onClick={() => toggleButton("think")}
                    disabled={aiIsLoading}
                  >
                    <Lightbulb className={cn("h-4 w-4 text-gray-300", activeButton === "think" && "text-white")} />
                    <span className={cn("text-white text-sm", activeButton === "think" && "font-medium")}>Think</span>
                  </Button>
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  size="icon"
                  className={cn(
                    "rounded-full h-8 w-8 border-0 flex-shrink-0 transition-all duration-200",
                    hasTyped ? "btn-gradient scale-110" : "bg-gray-700",
                  )}
                  disabled={!inputValue.trim() || aiIsLoading}
                >
                  <ArrowUp className={cn("h-4 w-4 transition-colors", hasTyped ? "text-white" : "text-gray-500")} />
                  <span className="sr-only">Submit</span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </section>
  )
}
