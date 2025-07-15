import { Search } from "lucide-react"

const TopBar = () => {
  return (
    <div className="w-full py-4 px-6 bg-surface-base border-b border-border-l2">
      <div className="flex items-center justify-between">
        {/* الشعار */}
        <div>
          <img src="/images/dr-x-logo.png" alt="Dr.X" className="h-8" />
        </div>

        {/* عناصر التحكم */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-l2">
            <Search className="w-5 h-5 text-fg-secondary" />
          </button>

          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full bg-button-primary text-white text-sm font-medium hover:bg-button-primary-hover">
              سجل
            </button>
            <button className="px-4 py-2 rounded-full border border-toggle-border text-primary text-sm font-medium hidden sm:block hover:bg-surface-l2">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
