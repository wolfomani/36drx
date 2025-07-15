"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Paperclip, Lightbulb, Search } from "lucide-react"

interface ChatInputProps {
  input?: string
  handleInputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  selectedModel?: string
  handleModelChange?: (model: string) => void
  isLoading?: boolean
}

const ChatInput: React.FC<ChatInputProps> = ({
  input = "",
  handleInputChange,
  handleSubmit,
  selectedModel = "deepseek",
  handleModelChange,
  isLoading = false,
}) => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="bg-surface-l2 rounded-3xl p-2 shadow-lg border border-border-l1">
          <div className="relative">
            <Textarea
              value={input}
              onChange={handleInputChange}
              placeholder="ماذا تريد أن تعرف؟"
              className="w-full bg-transparent resize-none py-4 px-4 min-h-[100px] text-fg-primary focus:outline-none border-none focus-visible:ring-0 placeholder:text-fg-secondary"
              disabled={isLoading}
            />

            <div className="flex items-center justify-between px-2 py-2">
              <div className="flex gap-2">
                {/* أزرار الإجراءات */}
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-full hover:bg-surface-l3"
                  disabled={isLoading}
                >
                  <Paperclip className="w-5 h-5 text-fg-secondary" />
                </Button>

                <div className="flex gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    className="px-3 py-1 rounded-full bg-surface-l3 text-sm flex items-center gap-1 hover:bg-surface-l2 text-fg-primary"
                    disabled={isLoading}
                  >
                    <Search className="w-4 h-4" />
                    <span>DeepSearch</span>
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="px-3 py-1 rounded-full bg-surface-l3 text-sm flex items-center gap-1 hover:bg-surface-l2 text-fg-primary"
                    disabled={isLoading}
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span>Think</span>
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-blue-400">Dr.X 3</span>
                <Button
                  type="submit"
                  size="icon"
                  className="p-2 rounded-full bg-button-primary hover:bg-button-primary-hover text-white"
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <p className="text-xs text-fg-secondary mt-3 text-center">
        بإرسالك رسالة إلى Dr.X، فإنك توافق على{" "}
        <a href="#" className="text-blue-400 hover:underline">
          الشروط
        </a>{" "}
        و{" "}
        <a href="#" className="text-blue-400 hover:underline">
          سياسة الخصوصية
        </a>
        .
      </p>
    </div>
  )
}

export default ChatInput
