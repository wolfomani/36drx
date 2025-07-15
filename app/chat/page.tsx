"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { cn } from "@/lib/utils"
import { RefreshCcw, Copy, Share2, ThumbsUp, ThumbsDown, Newspaper, ImageIcon, Users } from "lucide-react"
import ChatInput from "./components/ChatInput"
import TopBar from "./components/TopBar"

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
  const [localMessages, setLocalMessages] = useState<Message[]>([]) // Renamed from `messages` to `localMessages` to avoid conflict with `useChat`
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
  const [selectedModel, setSelectedModel] = useState("deepseek")
  // Store selection state
  const selectionStateRef = useRef<{ start: number | null; end: number | null }>({ start: null, end: null })

  // Constants for layout calculations to account for the padding values
  // These are now less critical as we're relying on global layout for top padding
  const TOP_PADDING_GLOBAL_NAV = 96 // pt-24 (6rem = 96px) from global layout
  const BOTTOM_PADDING_INPUT_AREA = 128 // pb-32 (8rem = 128px)
  const ADDITIONAL_OFFSET = 16 // Reduced offset for fine-tuning

  // AI SDK integration
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
    body: {
      modelName: selectedModel,
    },
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
    setLocalMessages(newLocalMessages)
  }, [aiMessages, setAiMessages])

  useEffect(() => {
    scrollToBottom()
  }, [localMessages, aiIsLoading]) // Scroll when messages change or AI is loading

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
    if (localMessages.length === 0) {
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

    localMessages.forEach((message) => {
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
  }, [localMessages])

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
        data: { model: selectedModel },
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
    <div className="dark min-h-screen bg-surface-base text-fg-primary overflow-hidden" dir="rtl">
      <div className="flex flex-col h-screen">
        {/* الشريط العلوي */}
        <TopBar />

        {/* المحتوى الرئيسي */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
          {localMessages.length === 0 ? (
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
          ) : (
            <div className="flex-1 w-full max-w-4xl overflow-y-auto px-4">
              <div className="space-y-4">
                {localMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                        message.type === "user"
                          ? "bg-button-primary text-white rounded-bl-none"
                          : "bg-surface-l2 text-fg-primary rounded-br-none"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {aiIsLoading && (
                  <div className="flex justify-start">
                    <div className="bg-surface-l2 text-fg-primary px-4 py-3 rounded-2xl rounded-br-none">
                      <div className="flex items-center gap-2">
                        <span>Dr.X يكتب</span>
                        <div className="flex gap-1">
                          <div
                            className="w-2 h-2 bg-fg-secondary rounded-full animate-bounce"
                            style={{ animationDelay: "0s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-fg-secondary rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-fg-secondary rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* شريط الإدخال */}
        <div className="pb-6 pt-4 px-4">
          <ChatInput
            input={inputValue}
            handleInputChange={handleLocalInputChange}
            handleSubmit={handleLocalSubmit}
            selectedModel={selectedModel}
            handleModelChange={setSelectedModel}
            isLoading={aiIsLoading}
          />
        </div>
      </div>
    </div>
  )
}
