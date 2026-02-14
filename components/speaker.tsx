"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Quote, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { speakers, publishedSpeakers } from "@/lib/speakers"
import { getAssetPath } from "@/lib/utils"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

function getRoleLabel(
  speaker: (typeof speakers)[number],
  index: number
): string {
  if (speaker.sessionRole === "Keynote Speaker") return "Keynote"
  if (index === 0) return "Opening"
  return "Speaker"
}

const OPENING_PLACEHOLDER_TIME = "Thursday, April 2 • 7:30–8:30 PM"

function OpeningPlaceholderCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl shadow-lg h-full border-2 border-dashed border-[#788668]/40 bg-[#F8F4EC]/80 flex flex-col items-center justify-center min-h-[480px] p-8 text-center"
    >
      <span className="shrink-0 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[#788668]/90 text-white mb-4">
        Opening
      </span>
      <Clock className="w-10 h-10 text-[#788668]/50 mb-4" />
      <p className="text-lg font-bold text-[#3D3D3D] mb-2">
        Opening Speaker
      </p>
      <p className="text-[#5C5C5C] text-sm">To be announced</p>
      <p className="text-[#5C5C5C] text-xs mt-4">{OPENING_PLACEHOLDER_TIME}</p>
    </motion.div>
  )
}

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[number];
  index: number;
}) {
  const roleLabel = getRoleLabel(speaker, index)
  const isKeynote = roleLabel === "Keynote"
  const isOpening = roleLabel === "Opening"
  const imageSrc = speaker.image.startsWith("http")
    ? speaker.image
    : getAssetPath(speaker.image)

  return (
    <Link href={`/speakers/${speaker.slug}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#788668] focus-visible:ring-offset-2 rounded-2xl">
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl shadow-lg group h-full"
      >
        <div className="relative">
          <img
            src={imageSrc}
            alt={speaker.name}
            className="w-full h-[480px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Role badge - top left (max-width so it never overlaps time badge) */}
          <div className="absolute top-5 left-5 right-5 flex justify-between items-start gap-3 pointer-events-none">
            <span
              className={`shrink-0 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full backdrop-blur-sm max-w-[40%] truncate ${
                isKeynote
                  ? "bg-[#D9A87E]/90 text-white"
                  : isOpening
                    ? "bg-[#788668]/90 text-white"
                    : "bg-white/20 text-white"
              }`}
              title={roleLabel === "Keynote" ? "Keynote Speaker" : roleLabel === "Opening" ? "Opening Speaker" : roleLabel}
            >
              {roleLabel}
            </span>

            {/* Time badge - top right */}
            <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full shrink-0 ml-auto">
              <Clock className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{speaker.sessionTime}</span>
            </span>
          </div>
        </div>

        {/* Content overlay - bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left text-white">
          <Quote
            className="mb-3 h-8 w-8 text-[#F2D497]/60"
            aria-hidden
          />
          <blockquote className="text-sm md:text-base font-medium leading-relaxed mb-5 line-clamp-4">
            {speaker.shortBio}
          </blockquote>
          <figcaption>
            <p className="text-lg font-bold text-white">{speaker.name}</p>
          </figcaption>
        </div>
      </motion.div>
    </Link>
  )
}

export function Speaker() {
  return (
    <section id="speaker" className="py-20 md:py-32 bg-[#F8F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            Meet Our Speakers
          </h2>
          <p className="text-lg text-[#5C5C5C] max-w-2xl mx-auto text-pretty">
            Five powerful voices sharing stories of borders, belonging, and the search for home
          </p>
        </div>

        {/* Speakers grid - uniform cards, optional placeholder for draft opening speaker */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {speakers[0].status === "draft" && (
            <OpeningPlaceholderCard key="opening-placeholder" />
          )}
          {publishedSpeakers.map((speaker, i) => (
            <SpeakerCard
              key={speaker.slug}
              speaker={speaker}
              index={speakers[0].status === "draft" ? i + 1 : i}
            />
          ))}
        </motion.div>

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
