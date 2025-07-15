import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Settings, Search, User } from "lucide-react"

const TopBar = () => {
  return (
    <div className="w-full py-4 px-6 bg-surface-base border-b border-border-l2">
      <div className="flex items-center justify-between">
        {/* الشعار */}
        <div>
          <Link href="/">
            <Image src="/images/dr-x-logo.png" alt="Dr.X" width={88} height={33} className="h-8 w-auto" />
          </Link>
        </div>

        {/* عناصر التحكم */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="p-2 rounded-full hover:bg-surface-l2">
            <Search className="w-5 h-5 text-fg-secondary" />
          </Button>

          <Button variant="ghost" size="icon" className="p-2 rounded-full hover:bg-surface-l2 hidden sm:flex">
            <Settings className="w-5 h-5 text-fg-secondary" />
          </Button>

          <div className="flex gap-2">
            <Button className="px-4 py-2 rounded-full bg-button-primary hover:bg-button-primary-hover text-white text-sm font-medium">
              <User className="w-4 h-4 ml-1" />
              سجل
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2 rounded-full border border-toggle-border text-primary text-sm font-medium hidden sm:block hover:bg-surface-l2 bg-transparent"
            >
              تسجيل الدخول
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
