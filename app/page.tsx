import Header from "@/components/layout/header"
import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import AiModelsSection from "@/components/sections/ai-models-section"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-drx-black text-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AiModelsSection />
      </main>
      <Footer />
    </div>
  )
}
