"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Quote, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { speakers } from "@/lib/speakers"
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

function getRoleLabel(speaker: (typeof speakers)[number], index: number): string {
  if (speaker.sessionRole) return speaker.sessionRole
  if (index === 0) return "Opening Speaker"
  return "Speaker"
}

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[number];
  index: number;
}) {
  const roleLabel = getRoleLabel(speaker, index)
  const isKeynote = roleLabel === "Keynote Speaker"
  const isOpening = roleLabel === "Opening Speaker"
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

          {/* Role badge - top left */}
          <div className="absolute top-5 left-5 flex items-center gap-2">
            <span
              className={`text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full backdrop-blur-sm ${
                isKeynote
                  ? "bg-[#D9A87E]/90 text-white"
                  : isOpening
                    ? "bg-[#788668]/90 text-white"
                    : "bg-white/20 text-white"
              }`}
            >
              {roleLabel}
            </span>
          </div>

          {/* Time badge - top right */}
          <div className="absolute top-5 right-5">
            <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Clock className="w-3 h-3" />
              {speaker.sessionTime}
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
          <p className="text-sm font-medium tracking-wide uppercase text-[#788668] mb-3">
            Conference Lineup
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            Meet Our Speakers
          </h2>
          <p className="text-lg text-[#5C5C5C] max-w-2xl mx-auto text-pretty">
            Five powerful voices sharing stories of borders, belonging, and the search for home
          </p>
        </div>

        {/* Speakers grid - uniform cards, no col-span for keynote */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.slug} speaker={speaker} index={index} />
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
