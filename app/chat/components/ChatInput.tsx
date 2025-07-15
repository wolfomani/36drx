"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Paperclip, Mic, Square, ImageIcon, FileText, Loader2, X, Play, Pause } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "@/hooks/use-toast"

interface ChatInputProps {
  onSendMessage: (message: string, attachments?: File[]) => void
  isLoading: boolean
  disabled?: boolean
}

export default function ChatInput({ onSendMessage, isLoading, disabled }: ChatInputProps) {
  const [message, setMessage] = useState("")
  const [attachments, setAttachments] = useState<File[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [message])

  // Recording timer
  useEffect(() => {
    if (isRecording) {
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)
    } else {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current)
      }
      setRecordingTime(0)
    }

    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current)
      }
    }
  }, [isRecording])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() || attachments.length > 0) {
      onSendMessage(message.trim(), attachments)
      setMessage("")
      setAttachments([])
      setAudioUrl(null)

      // Add haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      const maxSize = 10 * 1024 * 1024 // 10MB
      if (file.size > maxSize) {
        toast({
          title: "حجم الملف كبير جداً",
          description: `الملف ${file.name} يتجاوز الحد الأقصى 10 ميجابايت`,
          variant: "destructive",
        })
        return false
      }
      return true
    })

    setAttachments((prev) => [...prev, ...validFiles])
  }

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: BlobPart[] = []
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data)

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" })
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)

        const file = new File([blob], `recording-${Date.now()}.webm`, {
          type: "audio/webm",
        })
        setAttachments((prev) => [...prev, file])
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)

      toast({
        title: "بدء التسجيل",
        description: "يتم تسجيل الصوت الآن...",
      })
    } catch (error) {
      toast({
        title: "خطأ في التسجيل",
        description: "فشل في الوصول للميكروفون",
        variant: "destructive",
      })
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)

      toast({
        title: "انتهى التسجيل",
        description: "تم حفظ التسجيل الصوتي",
      })
    }
  }

  const toggleAudioPlayback = () => {
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 بايت"
    const k = 1024
    const sizes = ["بايت", "كيلوبايت", "ميجابايت", "جيجابايت"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return <ImageIcon className="w-4 h-4 text-blue-400" />
    } else if (file.type.startsWith("audio/")) {
      return <Mic className="w-4 h-4 text-green-400" />
    } else {
      return <FileText className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <div className="border-t border-border-l1 bg-surface-base/90 backdrop-blur-sm p-4">
      {/* Recording Status */}
      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 flex items-center justify-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
          >
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 font-medium arabic-text">جاري التسجيل... {formatTime(recordingTime)}</span>
            <Button onClick={stopRecording} size="sm" variant="destructive" className="arabic-text">
              <Square className="w-4 h-4 ml-1" />
              إيقاف
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Attachments Preview */}
      <AnimatePresence>
        {attachments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4 flex flex-wrap gap-2"
          >
            {attachments.map((file, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2 bg-surface-l1 rounded-lg px-3 py-2 text-sm border border-border-l1"
              >
                {getFileIcon(file)}
                <div className="flex flex-col">
                  <span className="text-fg-primary font-medium">{file.name}</span>
                  <span className="text-fg-secondary text-xs">({formatFileSize(file.size)})</span>
                </div>

                {file.type.startsWith("audio/") && audioUrl && (
                  <Button onClick={toggleAudioPlayback} size="sm" variant="ghost" className="p-1">
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  </Button>
                )}

                <Button
                  onClick={() => removeAttachment(index)}
                  size="sm"
                  variant="ghost"
                  className="p-1 text-fg-secondary hover:text-red-400"
                >
                  <X className="w-3 h-3" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio element for playback */}
      {audioUrl && <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        {/* Attachment Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l1 p-2"
                disabled={disabled || isRecording}
              >
                <Paperclip className="w-5 h-5" />
              </Button>
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48 bg-surface-l1 border-border-l1">
            <DropdownMenuItem
              onClick={() => fileInputRef.current?.click()}
              className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l2 arabic-text"
            >
              <ImageIcon className="w-4 h-4 ml-2" />
              رفع صورة
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => fileInputRef.current?.click()}
              className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l2 arabic-text"
            >
              <FileText className="w-4 h-4 ml-2" />
              رفع ملف
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,audio/*,.txt,.pdf,.doc,.docx,.py,.js,.html,.css,.json,.md"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Text Input */}
        <div className="flex-1 relative">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "Dr.X يكتب..." : "اكتب رسالتك هنا..."}
            className="min-h-[50px] max-h-48 resize-none bg-surface-l1 border-border-l1 text-fg-primary placeholder:text-fg-secondary focus:border-button-primary arabic-text rounded-2xl"
            disabled={disabled || isRecording}
          />

          {/* Character count */}
          {message.length > 0 && (
            <div className="absolute bottom-2 left-2 text-xs text-fg-secondary">{message.length} حرف</div>
          )}
        </div>

        {/* Voice Recording */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className={`p-2 ${isRecording ? "text-red-400 animate-pulse" : "text-fg-secondary hover:text-fg-primary"} hover:bg-surface-l1`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={disabled}
          >
            {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </Button>
        </motion.div>

        {/* Send Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="submit"
            size="sm"
            className={`px-4 py-2 rounded-2xl transition-all duration-200 ${
              (message.trim() || attachments.length > 0) && !disabled && !isRecording
                ? "bg-gradient-to-r from-button-primary to-purple-600 hover:from-button-primary-hover hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                : "bg-surface-l2 text-fg-secondary cursor-not-allowed"
            }`}
            disabled={disabled || (!message.trim() && attachments.length === 0) || isRecording}
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </Button>
        </motion.div>
      </form>

      {/* Footer Text */}
      <p className="text-xs text-fg-secondary mt-3 text-center leading-relaxed arabic-text">
        بإرسالك رسالة إلى Dr.X، فإنك توافق على{" "}
        <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
          الشروط والأحكام
        </a>{" "}
        و{" "}
        <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
          سياسة الخصوصية
        </a>
        .
      </p>
    </div>
  )
}
