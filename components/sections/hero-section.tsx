"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4 md:px-12 bg-drx-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-drx-black via-drx-dark-gray to-drx-black opacity-90 z-0 animate-gradient-shift"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <Image src="/images/dr-x-logo.png" alt="Dr.X Logo" width={300} height={100} className="mb-4 animate-fade-in" />
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-slide-up">
          Dr.X: <span className="text-drx-red">القوة المحرّكة</span> لرحلتك في عالم الذكاء الاصطناعي
        </h1>
        <p className="text-lg md:text-xl text-drx-light-gray max-w-3xl animate-fade-in-delay">
          منصة متكاملة لأتمتة وتعليم الذكاء الاصطناعي. اكتشف، تعلم، وأبدع مع أحدث التقنيات والخوارزميات.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in-delay-2">
          <Button
            asChild
            className="bg-drx-red text-white py-3 px-8 text-lg rounded-full hover:bg-drx-gold hover:text-drx-black transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Link href="/chat">ابدأ الدردشة AI</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-drx-gold text-drx-gold py-3 px-8 text-lg rounded-full hover:bg-drx-gold hover:text-drx-black transition-all duration-300 transform hover:scale-105 shadow-lg bg-transparent"
          >
            <Link href="#features">اكتشف المزيد</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes animate-gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-up { animation: slide-up 1s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.5s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 1s forwards; opacity: 0; }
        .animate-gradient-shift {
            background-size: 200% 200%;
            animation: animate-gradient-shift 15s ease infinite;
        }
      `}</style>
    </section>
  )
}
