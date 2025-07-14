"use client"

import "ios-vibrator-pro-max" // Assuming this is a valid import for vibration
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
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
            "max-w-[85%] px-4 py-3 rounded-2xl text-white transition-all duration-300 transform hover:scale-[1.02]",
            message.type === "user"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 rounded-bl-none shadow-lg"
              : "bg-gradient-to-r from-amber-500 to-orange-500 rounded-br-none shadow-lg",
          )}
        >
          {message.content && (
            <span
              className={cn(
                "text-base leading-relaxed",
                message.type === "system" && !isCompleted ? "animate-fade-in" : "",
              )}
            >
              {message.content}
            </span>
          )}
        </div>

        {message.type === "system" && isCompleted && (
          <div className="flex items-center gap-3 px-2 mt-2 mb-4">
            <button className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full bg-gray-700/50">
              <RefreshCcw className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full bg-gray-700/50">
              <Copy className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors p-1.5 rounded-full bg-gray-700/50">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-amber-400 transition-colors p-1.5 rounded-full bg-gray-700/50">
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button className="text-gray-400 hover:text-rose-500 transition-colors p-1.5 rounded-full bg-gray-700/50">
              <ThumbsDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    )
  }

  const shouldApplyHeight = (sectionIndex: number) => {
    return sectionIndex > 0
  }

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center pt-24 px-4 pb-4" // Adjusted pt-24
      ref={mainContainerRef}
    >
      {/* AI Status Header */}
      <div className="w-full max-w-4xl mb-4 bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-2">
            <Robot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Dr X</span>
              <span className="ml-2">- مساعد الذكاء الاصطناعي</span>
            </h1>
            <p className="text-sm text-gray-300">مساعدك الذكي المتطور - مدعوم بأحدث تقنيات الذكاء الاصطناعي</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-green-600/20 border border-green-600/50 rounded-full px-4 py-2 text-sm">
          <CircleDot className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-300">Dr X متصل</span>
        </div>
      </div>
      {/* Chat Container */}
      <div className="flex flex-col w-full max-w-4xl flex-1 rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-xl border border-gray-700 shadow-2xl">
        {/* Model Selector */}
        <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Brain className="h-5 w-5 text-amber-400" />
              <h3 className="text-lg font-medium text-white">اختر نموذج الذكاء الاصطناعي:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => selectModel("deepseek")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl transition-all transform hover:-translate-y-0.5",
                  currentModel === "deepseek"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg"
                    : "bg-gray-700/60 border border-gray-600 text-white hover:bg-gray-700",
                )}
              >
                <Search className="h-4 w-4" />
                <span>DeepSeek R1</span>
              </Button>
              <Button
                onClick={() => selectModel("huggingface")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl transition-all transform hover:-translate-y-0.5",
                  currentModel === "huggingface"
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-lg"
                    : "bg-gray-700/60 border border-gray-600 text-white hover:bg-gray-700",
                )}
              >
                <Smile className="h-4 w-4" />
                <span>Hugging Face</span>
              </Button>
            </div>
          </div>
          {/* Features Panel */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center">
              <div className="bg-amber-500/10 p-2 rounded-lg mb-2">
                <Zap className="h-5 w-5 text-amber-400" />
              </div>
              <p className="text-sm text-center text-gray-300">استجابة فورية</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center">
              <div className="bg-blue-500/10 p-2 rounded-lg mb-2">
                <Languages className="h-5 w-5 text-blue-400" />
              </div>
              <p className="text-sm text-center text-gray-300">دعم متعدد اللغات</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3 flex flex-col items-center">
              <div className="bg-green-500/10 p-2 rounded-lg mb-2">
                <ShieldCheck className="h-5 w-5 text-green-400" />
              </div>
              <p className="text-sm text-center text-gray-300">آمن ومحمي</p>
            </div>
          </div>
        </div>
        {/* Messages Area */}
        <div
          ref={chatContainerRef}
          className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-900/30 to-gray-800/30"
          style={{ maxHeight: "calc(100vh - 320px)" }}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => renderMessage(message))}
            {aiIsLoading && (
              <div className="flex items-center gap-3 mb-4 justify-start">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-2 flex-shrink-0 animate-pulse">
                  <Robot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-gradient-to-r from-amber-500/80 to-orange-500/80 rounded-br-none p-3 text-white flex items-center gap-2">
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
            {aiError && (
              <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 text-red-300">
                <span className="font-medium">حدث خطأ:</span> {aiError.message}
              </div>
            )}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        </div>
        {/* Input Area */}
        <form onSubmit={handleLocalSubmit} className="p-4 border-t border-gray-700 bg-gray-900/50 backdrop-blur-lg">
          <div
            ref={inputContainerRef}
            className={cn(
              "relative w-full rounded-2xl border border-gray-600 bg-gray-800/50 p-3 cursor-text transition-all",
              aiIsLoading ? "opacity-70" : "hover:border-amber-500/50 focus-within:border-amber-500",
            )}
            onClick={handleInputContainerClick}
          >
            <div className="pb-10">
              <Textarea
                ref={textareaRef}
                placeholder={aiIsLoading ? "بانتظار الرد..." : "اكتب رسالتك هنا..."}
                className="min-h-[24px] max-h-[160px] w-full rounded-2xl border-0 bg-transparent text-white placeholder:text-gray-400 placeholder:text-base focus-visible:ring-0 focus-visible:ring-offset-0 text-base pl-3 pr-4 pt-0 pb-0 resize-none overflow-y-auto leading-tight"
                value={inputValue}
                onChange={handleLocalInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  if (textareaRef.current) {
                    textareaRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                }}
              />
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "rounded-full h-9 w-9 flex-shrink-0 bg-gray-700/70 hover:bg-amber-500/20 transition-all",
                      activeButton === "add" && "bg-amber-500/30 border border-amber-500/50",
                    )}
                    onClick={() => toggleButton("add")}
                    disabled={aiIsLoading}
                  >
                    <Plus className="h-5 w-5 text-amber-400" />
                    <span className="sr-only">Add</span>
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className={cn(
                      "rounded-xl h-9 px-4 flex items-center bg-gray-700/70 hover:bg-blue-500/20 gap-1.5 transition-all",
                      activeButton === "deepSearch" && "bg-blue-500/30 border border-blue-500/50",
                    )}
                    onClick={() => toggleButton("deepSearch")}
                    disabled={aiIsLoading}
                  >
                    <Search className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-white">DeepSearch</span>
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className={cn(
                      "rounded-xl h-9 px-4 flex items-center bg-gray-700/70 hover:bg-purple-500/20 gap-1.5 transition-all",
                      activeButton === "think" && "bg-purple-500/30 border border-purple-500/50",
                    )}
                    onClick={() => toggleButton("think")}
                    disabled={aiIsLoading}
                  >
                    <Lightbulb className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-white">Think</span>
                  </Button>
                </div>
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full h-9 w-9 border-0 flex-shrink-0 transition-all transform hover:scale-110",
                    hasTyped ? "bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg" : "bg-gray-700",
                  )}
                  disabled={!inputValue.trim() || aiIsLoading}
                >
                  <ArrowUp className="h-5 w-5 text-white" />
                  <span className="sr-only">Submit</span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
