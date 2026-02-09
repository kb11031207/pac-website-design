import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Timeline, type TimelineEntry } from "@/components/ui/timeline"
import { getAssetPath } from "@/lib/utils"
import { EVENT_SCHEDULE } from "@/lib/constants"

const whatToExpectData: TimelineEntry[] = [
  {
    title: "Thursday Evening",
    content: (
      <p className="text-white/95 text-sm md:text-base font-normal leading-relaxed">
        The conference opens with Francisco Cantú&apos;s powerful reflection on borders, enforcement, and conscience. Following his talk, join us for an informal reception where you can continue conversations and meet fellow attendees.
      </p>
    ),
  },
  {
    title: "Friday Afternoon & Evening",
    content: (
      <p className="text-white/95 text-sm md:text-base font-normal leading-relaxed">
        Four distinct sessions offer different lenses on immigration—from scholarly research to legal realities to grassroots activism. Each session includes dedicated Q&A time. The conference concludes with Dr. Adeyemo&apos;s keynote, followed by a closing reception.
      </p>
    ),
  },
  {
    title: "Throughout the Conference",
    content: (
      <div>
        <ul className="space-y-2 text-white/95 text-sm md:text-base font-normal">
          <li className="flex gap-2 items-center">
            <span className="text-white shrink-0">•</span>
            Interactive discussion sessions between talks
          </li>
          <li className="flex gap-2 items-center">
            <span className="text-white shrink-0">•</span>
            Resource tables from immigrant advocacy organizations
          </li>
          <li className="flex gap-2 items-center">
            <span className="text-white shrink-0">•</span>
            Networking opportunities with speakers and attendees
          </li>
          <li className="flex gap-2 items-center">
            <span className="text-white shrink-0">•</span>
            Student-led breakout conversations
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "After PAC",
    content: (
      <p className="text-white/95 text-sm md:text-base font-normal leading-relaxed">
        All attendees receive access to session recordings, a curated reading list, and information about getting involved in immigration advocacy.
      </p>
    ),
  },
]

export function EventDetails() {
  return (
    <section id="event" className="py-20 md:py-32 bg-[#F2D497]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">Join Us</h2>
          <p className="text-lg text-[#5C5C5C] mb-6">Be part of this meaningful dialogue</p>
          <Button asChild className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D9A87E] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#788668] font-medium">Date</p>
                  <p className="text-xl font-bold text-[#3D3D3D]">April 2-3, 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#788668] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#788668] font-medium">Location</p>
                  <p className="text-xl font-bold text-[#3D3D3D]">Wannamaker</p>
                  <p className="text-[#5C5C5C]">Principia College</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#A3C2B8] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#788668] font-medium">Duration</p>
                  <p className="text-xl font-bold text-[#3D3D3D]">Two-Day Event</p>
                  <p className="text-[#5C5C5C]">Panels, stories, and discussions</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[400px] lg:min-h-[420px] rounded-3xl overflow-hidden">
            <img
              src={getAssetPath("/PrincipiaCollegeDrone.png")}
              alt="Wannamaker building at Principia College"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <a
                href="https://tours.covecreekproductions.com/principia/?utm_source=visit-page&utm_medium=click-through"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-white/90 transition-colors underline-offset-2 hover:underline"
              >
                <p className="text-xl font-bold">Principia College</p>
                <p className="text-white/80">Elsah, Illinois</p>
              </a>
            </div>
          </div>
        </div>

        {/* Schedule - full width below for better balance and readability */}
        <Card className="mt-8 bg-white border-none shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg font-semibold text-[#788668] mb-6">Schedule</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {EVENT_SCHEDULE.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-[#F8F4EC]/50"
                >
                  <div className="font-semibold text-[#3D3D3D] text-base">{item.speaker}</div>
                  <div className="text-[#5C5C5C] text-sm">
                    {item.day}
                  </div>
                  <div className="text-[#788668] font-medium text-sm">
                    {item.time}
                    {item.role ? ` · ${item.role}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Who Should Attend */}
        <Card className="mt-8 bg-white border-none shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg font-semibold text-[#788668] mb-6">Who Should Attend</p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-1 shrink-0 rounded-full bg-[#788668] mt-2.5 h-1.5 min-w-[6px]" aria-hidden />
                <span className="text-[#3D3D3D] text-base leading-relaxed">
                  Students interested in public policy, social justice, or international affairs
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1 shrink-0 rounded-full bg-[#788668] mt-2.5 h-1.5 min-w-[6px]" aria-hidden />
                <span className="text-[#3D3D3D] text-base leading-relaxed">
                  Educators seeking fresh perspectives on current events
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1 shrink-0 rounded-full bg-[#788668] mt-2.5 h-1.5 min-w-[6px]" aria-hidden />
                <span className="text-[#3D3D3D] text-base leading-relaxed">
                  Community members committed to informed civic participation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="w-1 shrink-0 rounded-full bg-[#788668] mt-2.5 h-1.5 min-w-[6px]" aria-hidden />
                <span className="text-[#3D3D3D] text-base leading-relaxed">
                  Anyone who believes understanding beats assumption
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* What to Expect - timeline */}
        <div className="mt-8">
          <Timeline
            data={whatToExpectData}
            title="What to Expect"
            subtitle="A quick guide to the two-day experience."
            variant="dark"
          />
        </div>
      </div>
    </section>
  )
}
