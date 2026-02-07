import { Heart, Users, Globe, MessageCircle } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empathy",
    description: "We stand with immigrants who approach life with fear, love, and hope.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Building bridges and fostering understanding within our community.",
  },
  {
    icon: Globe,
    title: "Awareness",
    description: "Highlighting the importance of immigration in shaping our interconnected world.",
  },
  {
    icon: MessageCircle,
    title: "Dialogue",
    description: "Creating spaces for meaningful conversations about immigrants' rights.",
  },
]

export function ValuesAndQuote() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-2xl bg-[#F8F4EC] hover:bg-[#F2D497]/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#788668] flex items-center justify-center mb-6 group-hover:bg-[#D9A87E] transition-colors">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D3D3D] mb-3">{value.title}</h3>
              <p className="text-[#5C5C5C] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#788668]/10 border border-[#788668]/20">
          <p className="text-xl md:text-2xl text-center text-[#3D3D3D] italic leading-relaxed text-pretty">
            "Through PAC, we aim to highlight the importance of immigration in shaping a globally interconnected world."
          </p>
        </div>
      </div>
    </section>
  )
}
