import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, GraduationCap, Calendar } from "lucide-react"
import { getMemberBySlug, teamMembers } from "@/lib/team-members"
import { getAssetPath } from "@/lib/utils"

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = getMemberBySlug(slug)

  if (!member) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24 pb-20 md:pb-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-[#788668] hover:text-[#6a7659]">
              <Link href="/#team" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Team
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#F2D497]/30 shadow-lg">
                <img
                  src={member.image ? (member.image.startsWith('http') ? member.image : getAssetPath(member.image)) : getAssetPath("/placeholder.svg")}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4">{member.name}</h1>
                <p className="text-2xl text-[#788668] font-medium">{member.title}</p>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F4EC]">
                  <GraduationCap className="w-6 h-6 text-[#788668] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#788668] font-medium">Majors</p>
                    <p className="text-lg text-[#3D3D3D]">{member.majors}</p>
                    {member.minors && (
                      <p className="text-sm text-[#5C5C5C] mt-1">Minors: {member.minors}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F4EC]">
                  <Calendar className="w-6 h-6 text-[#788668] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#788668] font-medium">Class</p>
                    <p className="text-lg text-[#3D3D3D]">{member.class}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F4EC]">
                  <MapPin className="w-6 h-6 text-[#788668] flex-shrink-0" />
                  <div>
                    <p className="text-sm text-[#788668] font-medium">Hometown</p>
                    <p className="text-lg text-[#3D3D3D]">{member.hometown}</p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="pt-6 border-t border-[#E5DED3]">
                <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4">About</h2>
                <p className="text-lg text-[#5C5C5C] leading-relaxed whitespace-pre-line">{member.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
