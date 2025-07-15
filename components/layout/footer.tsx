import Link from "next/link"
import Image from "next/image"
import { Github, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-drx-black py-12 px-6 md:px-12 text-center border-t border-drx-dark-gray">
      <div className="flex flex-col items-center justify-center gap-6">
        <Image src="/images/dr-x-logo.png" alt="Dr.X Logo" width={150} height={50} />
        <p className="text-drx-light-gray max-w-2xl">
          نحن هنا لدعمك في رحلتك نحو إتقان الذكاء الاصطناعي. تواصل معنا عبر قنواتنا الاجتماعية.
        </p>
        <div className="flex gap-6 mt-4">
          <Link
            href="https://github.com/3RBAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-drx-gold transition-colors"
          >
            <Github className="w-8 h-8" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://t.me/wolfaiOM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-drx-gold transition-colors"
          >
            <Send className="w-8 h-8" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
        <p className="text-drx-light-gray text-sm mt-8">© {new Date().getFullYear()} Dr.X. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
