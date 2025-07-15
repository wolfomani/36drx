"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  Download,
  Share2,
  MoreVertical,
  Cpu,
  Zap,
  Globe,
  Database,
  BarChart3,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

interface Model {
  id: string
  name: string
  description: string
  provider: string
  capabilities: string[]
  available: boolean
}

interface TopBarProps {
  selectedModel: string
  onModelChange: (model: string) => void
}

export default function TopBar({ selectedModel, onModelChange }: TopBarProps) {
  const [models, setModels] = useState<Model[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "error">("checking")

  useEffect(() => {
    fetchModels()
    checkDatabaseStatus()
  }, [])

  const fetchModels = async () => {
    try {
      const response = await fetch("/api/models")
      const data = await response.json()
      setModels(data.models || [])
    } catch (error) {
      console.error("Error fetching models:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const checkDatabaseStatus = async () => {
    try {
      const response = await fetch("/api/database/test")
      const data = await response.json()
      setDbStatus(data.success ? "connected" : "error")
    } catch (error) {
      setDbStatus("error")
    }
  }

  const currentModel = models.find((m) => m.id === selectedModel)

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Dr.X - مساعد الذكاء الاصطناعي",
        text: "جرب Dr.X، مساعدك الذكي المتطور",
        url: window.location.href,
      })
    } catch (error) {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const handleExport = () => {
    const chatData = {
      timestamp: new Date().toISOString(),
      model: selectedModel,
      messages: [],
    }

    const blob = new Blob([JSON.stringify(chatData, null, 2)], {
      type: "application/json",
    })

    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `dr-x-chat-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleInitDatabase = async () => {
    try {
      const response = await fetch("/api/database/init", { method: "POST" })
      const data = await response.json()
      if (data.success) {
        setDbStatus("connected")
      }
    } catch (error) {
      console.error("Database init error:", error)
    }
  }

  const getStatusIcon = () => {
    switch (dbStatus) {
      case "connected":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case "error":
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return <Clock className="w-4 h-4 text-yellow-400 animate-spin" />
    }
  }

  const getModelIcon = (provider: string) => {
    switch (provider) {
      case "DeepSeek":
        return <Zap className="w-4 h-4 text-blue-400" />
      case "Google":
        return <Globe className="w-4 h-4 text-green-400" />
      default:
        return <Cpu className="w-4 h-4 text-gray-400" />
    }
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between p-4 border-b border-border-l1 bg-surface-base/80 backdrop-blur-sm sticky top-0 z-50"
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <motion.div whileHover={{ scale: 1.05 }} className="relative w-10 h-10">
          <Image src="/images/drx-logo.png" alt="Dr.X Logo" fill className="object-contain" priority />
        </motion.div>
        <div className="arabic-text">
          <h1 className="text-lg font-bold text-fg-primary">دكتور إكس</h1>
          <p className="text-xs text-fg-secondary">مساعد الذكاء الاصطناعي المتطور</p>
        </div>
      </div>

      {/* Status and Model Info */}
      <div className="flex items-center gap-3">
        {/* Database Status */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2"
          title={`قاعدة البيانات: ${dbStatus === "connected" ? "متصلة" : dbStatus === "error" ? "خطأ" : "جاري الفحص"}`}
        >
          {getStatusIcon()}
        </motion.div>

        {/* Current Model Badge */}
        {!isLoading && currentModel && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Badge
              variant="secondary"
              className="bg-surface-l2 text-fg-primary border-border-l1 arabic-text flex items-center gap-1"
            >
              {getModelIcon(currentModel.provider)}
              <span>{currentModel.name}</span>
            </Badge>
          </motion.div>
        )}

        {/* Model Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l1 arabic-text"
            >
              <Settings className="w-4 h-4 ml-1" />
              <span>النماذج</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 bg-surface-l1 border-border-l1">
            <div className="px-3 py-2 text-sm font-medium text-fg-primary arabic-text">اختر نموذج الذكاء الاصطناعي</div>
            <DropdownMenuSeparator className="bg-border-l1" />

            {models.map((model) => (
              <DropdownMenuItem
                key={model.id}
                onClick={() => onModelChange(model.id)}
                disabled={!model.available}
                className="flex items-center gap-3 text-fg-secondary hover:text-fg-primary hover:bg-surface-l2 arabic-text p-3"
              >
                <div className="flex items-center gap-2 flex-1">
                  {getModelIcon(model.provider)}
                  <div className="flex-1">
                    <div className="font-medium text-fg-primary">{model.name}</div>
                    <div className="text-xs text-fg-secondary">{model.description}</div>
                    <div className="flex gap-1 mt-1">
                      {model.capabilities.map((cap) => (
                        <Badge key={cap} variant="outline" className="text-xs">
                          {cap}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {selectedModel === model.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-button-primary rounded-full"
                  />
                )}
                {!model.available && (
                  <Badge variant="destructive" className="text-xs">
                    غير متاح
                  </Badge>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* More Options */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l1">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-surface-l1 border-border-l1">
            <DropdownMenuItem
              onClick={handleExport}
              className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l2 arabic-text"
            >
              <Download className="w-4 h-4 ml-2" />
              تصدير المحادثة
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleShare}
              className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l2 arabic-text"
            >
              <Share2 className="w-4 h-4 ml-2" />
              مشاركة الرابط
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border-l1" />
            <DropdownMenuItem
              onClick={handleInitDatabase}
              className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l2 arabic-text"
            >
              <Database className="w-4 h-4 ml-2" />
              إعداد قاعدة البيانات
            </DropdownMenuItem>
            <DropdownMenuItem className="text-fg-secondary hover:text-fg-primary hover:bg-surface-l2 arabic-text">
              <BarChart3 className="w-4 h-4 ml-2" />
              الإحصائيات والتحليلات
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  )
}
