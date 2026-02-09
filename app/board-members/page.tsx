import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BoardMembers } from "@/components/board-members"

export default function BoardMembersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BoardMembers />
      <Footer />
    </main>
  )
}
