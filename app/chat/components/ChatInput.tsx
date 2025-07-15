import { Paperclip, Send, ChevronDown } from "lucide-react"

const ChatInput = () => {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-surface-l2 rounded-3xl p-2 shadow-lg border border-border-l1">
        <div className="relative">
          <textarea
            placeholder="ماذا تريد أن تعرف؟"
            className="w-full bg-transparent resize-none py-4 px-4 min-h-[100px] text-fg-primary focus:outline-none placeholder:text-fg-secondary"
          />

          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex gap-2">
              {/* أزرار الإجراءات */}
              <button className="p-2 rounded-full hover:bg-surface-l3">
                <Paperclip className="w-5 h-5 text-fg-secondary" />
              </button>

              <div className="flex gap-1">
                <button className="px-3 py-1 rounded-full bg-surface-l3 text-sm flex items-center gap-1 hover:bg-surface-base">
                  <span className="text-fg-primary">DeepSearch</span>
                  <ChevronDown className="w-3 h-3 text-fg-secondary" />
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-l3 text-sm flex items-center gap-1 hover:bg-surface-base">
                  <span className="text-fg-primary">Think</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-primary">Dr.X 3</span>
              <button className="p-2 rounded-full bg-button-primary text-white hover:bg-button-primary-hover">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-secondary mt-3 text-center">
        بإرسالك رسالة إلى Dr.X، فإنك توافق على{" "}
        <a href="#" className="text-primary hover:underline">
          الشروط
        </a>{" "}
        و{" "}
        <a href="#" className="text-primary hover:underline">
          سياسة الخصوصية
        </a>
        .
      </p>
    </div>
  )
}

export default ChatInput
