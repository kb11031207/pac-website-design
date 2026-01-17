import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { EventDetails } from "@/components/event-details"
import { Speaker } from "@/components/speaker"
import { BoardMembers } from "@/components/board-members"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <EventDetails />
      <Speaker />
      <BoardMembers />
      <Footer />
    </main>
  )
}
