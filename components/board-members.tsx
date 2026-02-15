import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { teamMembers } from "@/lib/team-members"
import { formatDisplayName } from "@/lib/utils"

export function BoardMembers() {
  return (
    <section id="team" className="py-20 md:py-32 bg-[#F8F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">Meet Our Team</h2>
          <p className="text-lg text-[#5C5C5C] max-w-2xl mx-auto">
            The dedicated board members bringing Journeys of Hope to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Link key={index} href={`/team/${member.slug}`}>
              <Card className="bg-white border-none shadow-lg overflow-hidden group hover:shadow-xl transition-all cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#3D3D3D] mb-1 group-hover:text-[#788668] transition-colors">
                    {formatDisplayName(member.name)}
                  </h3>
                  <p className="text-[#788668] font-medium mb-2">{member.title}</p>
                  <p className="text-[#5C5C5C] text-sm">{member.majors}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-[#5C5C5C] italic">
            Want to get involved? Reach out to learn more about joining our mission.
          </p>
          <Button asChild variant="outline" className="border-[#788668] text-[#788668] hover:bg-[#788668] hover:text-white">
            <Link href="/register">Register for the conference</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
