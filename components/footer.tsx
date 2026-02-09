import Link from "next/link"
import { Heart, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-12 bg-[#788668] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About the Public Affairs Conference</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              The Principia Public Affairs Conference was founded in 1939 by students who believed
              young people should lead conversations about the issues shaping our world. Over 80
              years later, that mission continues. Every speaker, every session, every detail is
              chosen and executed by Principia undergraduates committed to elevating discourse and
              building understanding.
            </p>
            <Button asChild size="sm" className="bg-[#F2D497] text-[#3D3D3D] hover:bg-[#F2D497]/90">
              <Link href="/register">Register Now</Link>
            </Button>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <a
              href="mailto:pac@principia.edu"
              className="text-white/80 hover:text-white flex items-center gap-2 mb-3 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              pac@principia.edu
            </a>
            <p className="text-white/80 mb-2">Follow @PrincipiaPAC</p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/PrincipiaPAC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="https://www.facebook.com/PrincipiaPAC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/PrincipiaPAC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#F2D497] fill-[#F2D497]" /> at Principia College
          </p>
          <p className="text-white/60 text-sm mt-2">© 2026 Principia PAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
