"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Mic, Scale, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const speakers = [
  {
    name: "Lauren Blodgett",
    title: "Executive Director & Founder at The Brave House",
    image: "/SpeakersHeadshots/Blodgett-Lauren.jpg",
    badges: [
      { label: "Immigration Attorney", icon: Scale, color: "bg-[#788668]" },
      { label: "TEDx Speaker", icon: Mic, color: "bg-[#D9A87E]" },
      { label: "Forbes 30 Under 30", icon: Award, color: "bg-[#A3C2B8] text-[#3D3D3D]" },
    ],
    bio: "Lauren Blodgett is a human rights and immigration attorney dedicated to protecting and advocating for vulnerable communities. As the founder of The Brave House, she has created safe spaces and resources for those seeking refuge and a new beginning.",
    achievements: [
      "Forbes 30 Under 30 for Law and Policy",
      "TEDx Speaker on Immigration Rights",
      "Human Rights & Immigration Attorney",
    ],
    featuredBadge: "Forbes 30 Under 30",
  },
  {
    name: "Golash Boza",
    title: "Title / Organization",
    image: "/SpeakersHeadshots/GOlash-Boza.jpg",
    badges: [
      { label: "Credential 1", icon: Award, color: "bg-[#788668]" },
      { label: "Credential 2", icon: Mic, color: "bg-[#D9A87E]" },
    ],
    bio: "Add speaker biography here. Describe their background, expertise, and why they are passionate about immigration advocacy and human rights.",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
    featuredBadge: "Featured",
  },
  {
    name: "Speaker Name",
    title: "Title / Organization",
    image: "/college-student-portrait-warm-friendly-diverse-mal.jpg",
    badges: [
      { label: "Credential 1", icon: Scale, color: "bg-[#788668]" },
      { label: "Credential 2", icon: Award, color: "bg-[#A3C2B8] text-[#3D3D3D]" },
    ],
    bio: "Add speaker biography here. Describe their background, expertise, and why they are passionate about immigration advocacy and human rights.",
    achievements: ["Achievement 1", "Achievement 2", "Achievement 3"],
    featuredBadge: "Featured",
  },
]

export function Speaker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1))
  }

  const speaker = speakers[currentIndex]

  return (
    <section id="speaker" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            Guest Speakers
          </h2>
          <p className="text-lg text-[#5C5C5C]">Hear from leading voices in immigration advocacy</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 md:-ml-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full bg-white/90 border-[#E5DED3] hover:bg-[#F2D497] hover:border-[#D9A87E] h-12 w-12 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-[#3D3D3D]" />
              <span className="sr-only">Previous speaker</span>
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 md:-mr-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full bg-white/90 border-[#E5DED3] hover:bg-[#F2D497] hover:border-[#D9A87E] h-12 w-12 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-[#3D3D3D]" />
              <span className="sr-only">Next speaker</span>
            </Button>
          </div>

          {/* Speaker content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-12">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#F2D497]/30">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#788668] rounded-full flex items-center justify-center">
                <span className="text-white text-center text-sm font-medium px-4">{speaker.featuredBadge}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {speaker.badges.map((badge, index) => (
                  <Badge key={index} className={`${badge.color} text-white hover:opacity-90`}>
                    <badge.icon className="w-3 h-3 mr-1" />
                    {badge.label}
                  </Badge>
                ))}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">{speaker.name}</h3>

              <p className="text-xl text-[#788668] font-medium">{speaker.title}</p>

              <p className="text-lg text-[#5C5C5C] leading-relaxed">{speaker.bio}</p>

              <div className="pt-4 border-t border-[#E5DED3]">
                <p className="text-[#5C5C5C] mb-4">Recognition & Achievements:</p>
                <ul className="space-y-2">
                  {speaker.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2 text-[#3D3D3D]">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          index === 0 ? "bg-[#788668]" : index === 1 ? "bg-[#D9A87E]" : "bg-[#A3C2B8]"
                        }`}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#788668]" : "bg-[#E5DED3] hover:bg-[#D9A87E]"
                }`}
                aria-label={`Go to speaker ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
