import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqItems = [
  {
    question: "Is there really no cost to attend?",
    answer:
      "Absolutely free. PAC is funded by Principia College and generous donors who believe in student-led civic education. We want cost to never be a barrier to participation.",
  },
  {
    question: "Can I attend just one session instead of the full conference?",
    answer:
      "Yes! While we encourage attending the full conference for the complete experience, you're welcome to register for individual sessions that fit your schedule.",
  },
  {
    question: "Is this only for college students?",
    answer:
      "Not at all. We welcome high school students, college students, faculty, community members, and anyone interested in thoughtful discussion about public affairs.",
  },
  {
    question: "What should I bring?",
    answer:
      "Just yourself and an open mind. Feel free to bring a notebook if you like to take notes.",
  },
  {
    question: "Will food be provided?",
    answer:
      "Light refreshments will be available at the Thursday evening and Friday evening receptions. Information about nearby dining options will be included in your confirmation email.",
  },
  {
    question: "Is the venue accessible?",
    answer:
      "Yes. Wanamaker Hall is fully accessible. If you have specific accessibility needs, please email pac@principia.edu and we'll ensure you're accommodated.",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Yes. All registered attendees will receive access to session recordings within one week of the conference.",
  },
  {
    question: "How can I get involved beyond attending?",
    answer:
      "We're always looking for volunteers, future planning committee members, and partner organizations. Email pac@principia.edu to learn more about getting involved with future conferences.",
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#F8F4EC]">
      <Header />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#788668]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[#788668]" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#5C5C5C] max-w-2xl mx-auto">
              Quick answers about the Public Affairs Conference and how to participate.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#E5DED3] overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#E5DED3] last:border-b-0 px-6"
                >
                  <AccordionTrigger className="text-left text-[#3D3D3D] font-medium hover:text-[#788668] hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#5C5C5C] text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
