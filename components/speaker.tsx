"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, TestimonialCard, type iTestimonial } from "@/components/ui/retro-testimonial"
import { speakers, publishedSpeakers } from "@/lib/speakers"
import { getAssetPath } from "@/lib/utils"

const OPENING_PLACEHOLDER_TIME = "Thursday, April 2 • 7:30–8:30 PM"

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop"

function speakerToTestimonial(
  speaker: (typeof speakers)[number],
  index: number
): iTestimonial {
  const designation =
    speaker.sessionRole ?? speaker.sessionTime
  return {
    name: speaker.name,
    designation,
    description: speaker.shortBio,
    profileImage: speaker.image.startsWith("http")
      ? speaker.image
      : getAssetPath(speaker.image),
  }
}

function OpeningPlaceholderCard({
  index,
  onCardClose,
}: {
  testimonial: iTestimonial
  index: number
  onCardClose: () => void
}) {
  return (
    <div
      className="rounded-3xl border-2 border-dashed border-[#788668]/40 bg-[#F8F4EC]/80 flex flex-col items-center justify-center h-[500px] md:h-[550px] w-80 md:w-96 shrink-0 shadow-md"
      role="presentation"
    >
      <span className="shrink-0 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[#788668]/90 text-[#F8F4EC] mb-4">
        Opening
      </span>
      <Clock className="w-10 h-10 text-[#788668]/50 mb-4" />
      <p className="text-lg font-bold text-[#3D3D3D] mb-2">Opening Speaker</p>
      <p className="text-[#5C5C5C] text-sm">To be announced</p>
      <p className="text-[#5C5C5C] text-xs mt-4">{OPENING_PLACEHOLDER_TIME}</p>
    </div>
  )
}

export function Speaker() {
  const showPlaceholder = speakers[0].status === "draft"
  const placeholderTestimonial: iTestimonial = {
    name: "__placeholder__",
    designation: "",
    description: "",
    profileImage: "",
  }

  const carouselItems = [
    ...(showPlaceholder
      ? [
          <OpeningPlaceholderCard
            key="opening-placeholder"
            testimonial={placeholderTestimonial}
            index={0}
            onCardClose={() => {}}
          />,
        ]
      : []),
    ...publishedSpeakers.map((speaker, i) => (
      <TestimonialCard
        key={speaker.slug}
        testimonial={speakerToTestimonial(
          speaker,
          showPlaceholder ? i + 1 : i
        )}
        index={showPlaceholder ? i + 1 : i}
        slug={speaker.slug}
        backgroundImage={BACKGROUND_IMAGE}
      />
    )),
  ]

  return (
    <section id="speaker" className="py-20 md:py-32 bg-[#F8F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            Meet Our Speakers
          </h2>
          <p className="text-lg text-[#5C5C5C] max-w-2xl mx-auto text-pretty">
            Five powerful voices sharing stories of borders, belonging, and the
            search for home
          </p>
        </div>

        {/* Speakers carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel items={carouselItems} />
        </div>

        {/* Bottom register CTA */}
        <div className="text-center mt-16 pt-8 border-t border-[#F2D497]/40">
          <p className="text-[#5C5C5C] mb-5 text-lg">
            Don&apos;t miss these extraordinary conversations
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#D9A87E] hover:bg-[#c9956b] text-white px-10 py-6 text-lg rounded-full gap-2 group"
          >
            <Link href="/register">
              Secure Your Spot
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
