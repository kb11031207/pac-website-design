import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, Users, Calendar, MapPin, Mic2 } from "lucide-react"
import Image from "next/image"

const pastPACspeakers = [
  "Vincent Stanley (Author of The Responsible Company)",
  "David Miller (former president of World Wildlife Fund Canada)",
  "Shiza Shahid (founder of The Malala Fund)",
]

const pastPrincipiaSpeakers = [
  "Doris Kearns Goodwin",
  "Vincente Fox",
  "Barack Obama",
  "Margaret Thatcher",
  "George H.W. Bush",
  "Jimmy Carter",
  "Colin Powell",
  "Henry Kissinger",
  "James Baker",
  "Oscar Arias",
  "Coretta Scott King",
  "Wangari Maathai",
  "Muhammad Yunus",
  "Wole Soyinka",
  "Madeleine Albright",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F4EC]">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-4 bg-gradient-to-b from-[#F2D497]/30 to-[#F8F4EC]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D3D3D] mb-6">
            About <span className="text-[#788668]">PAC</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed">
            Learn about the history and mission of the Public Affairs Conference
          </p>
        </div>
      </section>

      {/* About PAC Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#788668]/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#788668]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">The Public Affairs Conference</h2>
              </div>
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-6">
                The Public Affairs Conference (PAC) is the{" "}
                <span className="font-semibold text-[#D9A87E]">oldest student-led conference in the United States</span>
                . With a few exceptions, the conference has occurred annually since its inception in{" "}
                <span className="font-semibold">1939</span>.
              </p>
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-6">
                Principia students take responsibility for all aspects of planning and running the conference, from
                choosing the topic to inviting the speakers and coordinating logistics. The conference is a space where
                thought-provoking topics and discussions are raised and facilitated.
              </p>
              <div className="flex items-center gap-2 text-[#788668] font-medium">
                <Calendar className="w-5 h-5" />
                <span>Est. 1939 — Over 85 years of student leadership</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D9A87E]/10 rounded-3xl transform rotate-3"></div>
              <Image
                src="https://content.principia.edu/sites/pac2025/files/2023/01/Capture-de%CC%81cran-2023-01-18-a%CC%80-13.03.01-1024x791.png"
                alt="Students organizing PAC conference"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* This Year's PAC */}
      <section className="py-16 md:py-20 px-4 bg-[#788668]/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4">This Year's Conference</h2>
            <p className="text-xl text-[#D9A87E] font-semibold">Journeys of Hope: Understanding Immigration</p>
          </div>

          <Card className="bg-white/80 border-[#E5DED3] shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-8">
                Our goal is to{" "}
                <span className="font-semibold text-[#788668]">educate, raise awareness, and foster dialogue</span>{" "}
                within the community about immigrants' right to pursue safety, freedom, and opportunity. We stand with
                immigrants who approach life with fear, love, and hope.
              </p>
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-8">
                Through sharing immigrant stories, we ensure they are not only heard and valued but{" "}
                <span className="font-semibold text-[#788668]">deeply and genuinely understood</span>. Through PAC, we
                aim to highlight the importance of immigration in shaping a globally interconnected world.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-2 text-[#5C5C5C]">
                  <Calendar className="w-5 h-5 text-[#D9A87E]" />
                  <span className="font-medium">April 3-4, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-[#5C5C5C]">
                  <MapPin className="w-5 h-5 text-[#D9A87E]" />
                  <span className="font-medium">Wannamaker, Principia College</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past PAC Speakers */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#D9A87E]/10 flex items-center justify-center">
              <Mic2 className="w-6 h-6 text-[#D9A87E]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">Past PAC Speakers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pastPACspeakers.map((speaker, index) => (
              <Card key={index} className="bg-white border-[#E5DED3] hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <p className="text-[#3D3D3D] font-medium">{speaker}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Principia College */}
      <section className="py-16 md:py-20 px-4 bg-[#D9A87E]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-[#788668]/10 rounded-3xl transform -rotate-3"></div>
              <Image
                src="https://content.principia.edu/sites/pac2025/files/2023/01/Capture-de%CC%81cran-2023-01-18-a%CC%80-13.03.01-1024x791.png"
                alt="Principia College campus overlooking Mississippi River"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#788668]/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#788668]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">About Principia College</h2>
              </div>
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-6">
                Principia is a century-old, co-educational, four-year liberal arts institution set on the bluffs
                overlooking the Mississippi River, in <span className="font-semibold">Elsah, Illinois</span>.
              </p>
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-6">
                Principia College places a strong emphasis on educating its students to be{" "}
                <span className="font-semibold text-[#788668]">active global citizens</span>.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <p className="text-3xl font-bold text-[#D9A87E]">~350</p>
                  <p className="text-sm text-[#5C5C5C]">Students</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <p className="text-3xl font-bold text-[#D9A87E]">40+</p>
                  <p className="text-sm text-[#5C5C5C]">States</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <p className="text-3xl font-bold text-[#D9A87E]">30+</p>
                  <p className="text-sm text-[#5C5C5C]">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Speakers at Principia */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#A3C2B8]/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#788668]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">Distinguished Speakers at Principia</h2>
          </div>
          <p className="text-[#5C5C5C] text-lg mb-8 max-w-3xl">
            Over the many years, Principia has hosted many distinguished speakers at its convocation ceremonies,
            including:
          </p>
          <div className="flex flex-wrap gap-3">
            {pastPrincipiaSpeakers.map((speaker, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-[#E5DED3] rounded-full text-[#3D3D3D] font-medium hover:bg-[#788668]/5 transition-colors"
              >
                {speaker}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
