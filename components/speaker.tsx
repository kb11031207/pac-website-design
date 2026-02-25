"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Quote, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, TestimonialCard, type iTestimonial } from "@/components/ui/retro-testimonial"
import { speakers, publishedSpeakers } from "@/lib/speakers"
import { getAssetPath } from "@/lib/utils"

/** Set to false to use the carousel layout instead of the grid. */
const USE_GRID_LAYOUT = true

const OPENING_PLACEHOLDER_TIME = "Thursday, April 2 • 7:30–8:30 PM"

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
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

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[number]
  index: number
}) {
  const roleLabel = getRoleLabel(speaker, index)
  const isKeynote = roleLabel === "Keynote"
  const isOpening = roleLabel === "Opening"
  const imageSrc = speaker.image.startsWith("http")
    ? speaker.image
    : getAssetPath(speaker.image)

  return (
    <Link
      href={`/speakers/${speaker.slug}`}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#788668] focus-visible:ring-offset-2 rounded-2xl"
    >
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
          <div className="absolute top-5 left-5 right-5 flex justify-between items-start gap-3 pointer-events-none">
            <span
              className={`shrink-0 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full backdrop-blur-sm max-w-[40%] truncate ${
                isKeynote
                  ? "bg-[#D9A87E]/90 text-white"
                  : isOpening
                    ? "bg-[#788668]/90 text-white"
                    : "bg-white/20 text-white"
              }`}
              title={
                roleLabel === "Keynote"
                  ? "Keynote Speaker"
                  : roleLabel === "Opening"
                    ? "Opening Speaker"
                    : roleLabel
              }
            >
              {roleLabel}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full shrink-0 ml-auto">
              <Clock className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{speaker.sessionTime}</span>
            </span>
          </div>
        </div>
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

function GridOpeningPlaceholderCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-2xl shadow-lg h-full border-2 border-dashed border-[#788668]/40 bg-[#F8F4EC]/80 flex flex-col items-center justify-center min-h-[480px] p-8 text-center"
    >
      <span className="shrink-0 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[#788668]/90 text-white mb-4">
        Opening
      </span>
      <Clock className="w-10 h-10 text-[#788668]/50 mb-4" />
      <p className="text-lg font-bold text-[#3D3D3D] mb-2">Opening Speaker</p>
      <p className="text-[#5C5C5C] text-sm">To be announced</p>
      <p className="text-[#5C5C5C] text-xs mt-4">{OPENING_PLACEHOLDER_TIME}</p>
    </motion.div>
  )
}

// ——— Carousel layout (kept for easy switch-back) ———

function speakerToTestimonial(
  speaker: (typeof speakers)[number],
  index: number
): iTestimonial {
  const designation = speaker.sessionRole ?? speaker.sessionTime
  return {
    name: speaker.name,
    designation,
    description: speaker.shortBio,
    profileImage: speaker.image.startsWith("http")
      ? speaker.image
      : getAssetPath(speaker.image),
  }
}

function CarouselOpeningPlaceholderCard({
  testimonial: _testimonial,
  index: _index,
  onCardClose: _onCardClose,
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

function SpeakerCarousel() {
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
          <CarouselOpeningPlaceholderCard
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
    <div className="max-w-5xl mx-auto">
      <Carousel items={carouselItems} />
    </div>
  )
}

// ——— Main export ———

export function Speaker() {
  const showPlaceholder = speakers[0].status === "draft"

  return (
    <section id="speaker" className="py-20 md:py-32 bg-[#F8F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            Guest Speakers
          </h2>
          <p className="text-lg text-[#5C5C5C] max-w-2xl mx-auto text-pretty">
            Five powerful voices sharing stories of borders, belonging, and the
            search for home
          </p>
        </div>

        {USE_GRID_LAYOUT ? (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {showPlaceholder && (
                <GridOpeningPlaceholderCard key="opening-placeholder" />
              )}
              {publishedSpeakers.map((speaker, i) => (
                <SpeakerCard
                  key={speaker.slug}
                  speaker={speaker}
                  index={showPlaceholder ? i + 1 : i}
                />
              ))}
            </motion.div>
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
          </>
        ) : (
          <SpeakerCarousel />
        )}
      </div>
    </section>
  )
}
