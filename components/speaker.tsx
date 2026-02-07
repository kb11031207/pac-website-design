import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import { getAssetPath } from "@/lib/utils"
import { speakers } from "@/lib/speakers"

export function Speaker() {
  return (
    <section id="speaker" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            Guest Speakers
          </h2>
          <p className="text-lg text-[#5C5C5C] mb-6">
            Hear from leading voices in immigration advocacy
          </p>
          <Button asChild className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => {
            const sessionDisplay = speaker.sessionRole
              ? `${speaker.sessionRole} – ${speaker.sessionTime}`
              : speaker.sessionTime
            return (
              <Link key={speaker.slug} href={`/speakers/${speaker.slug}`}>
                <article className="group h-full flex flex-col rounded-2xl overflow-hidden bg-[#F8F4EC] border border-[#E5DED3] hover:shadow-xl hover:border-[#D9A87E]/50 transition-all">
                  <div className="aspect-[4/5] overflow-hidden bg-[#F2D497]/30">
                    <img
                      src={
                        speaker.image.startsWith("http")
                          ? speaker.image
                          : getAssetPath(speaker.image)
                      }
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#3D3D3D] mb-2 group-hover:text-[#788668] transition-colors">
                      {speaker.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[#788668] text-sm font-medium mb-4">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{sessionDisplay}</span>
                    </div>
                    <p className="text-[#5C5C5C] leading-relaxed text-pretty flex-1 line-clamp-4 mb-4">
                      {speaker.shortBio}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#788668] font-medium group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
