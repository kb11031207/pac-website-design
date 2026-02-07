import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-end pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${getAssetPath('/diverse-hands-holding-together-unity-warmth-golden.jpg')}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EC]/50 via-[#F8F4EC]/30 to-transparent" />
      </div>

      {/* Hero Text Overlay (Right Side) */}
      <div className="relative z-10 max-w-xl mx-auto lg:mx-0 lg:mr-12 xl:mr-20 px-4 sm:px-6 lg:px-8 text-center lg:text-right">
        <p className="text-sm md:text-base text-[#788668] font-medium mb-4 tracking-wide">
          America&apos;s Oldest Student-Led Conference • Est. 1939
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D3D3D] mb-6 leading-tight text-balance">
          Journeys of Hope
        </h1>

        <p className="text-lg md:text-xl text-[#5C5C5C] mb-8 leading-relaxed text-pretty">
          Five voices. Two days. One urgent question: What does it mean to search for home in America?
        </p>

        <p className="text-[#788668] font-medium text-sm md:text-base mb-10">
          April 2–3, 2025 Principia College • Free Admission
        </p>

        <div className="flex justify-center lg:justify-end">
          <Button
            asChild
            size="lg"
            className="bg-[#788668] hover:bg-[#6a7659] text-white px-8 py-6 text-lg rounded-full inline-flex items-center gap-2"
          >
            <a href="/register">
              Register Now <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="mt-16 animate-bounce flex justify-center lg:justify-end">
          <ArrowDown className="w-8 h-8 text-[#788668]" />
        </div>
      </div>
    </section>
  )
}
