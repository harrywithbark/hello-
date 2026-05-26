import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

const NAV_ITEMS = ["Services", "Our Work", "FAQ", "Contact"]

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Follow us on Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Follow us on Facebook" },
  { icon: MessageCircle, href: "https://wa.me/16042876262", label: "Message us on WhatsApp" },
]

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 relative overflow-hidden">
      {/* Transparent gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-900/30 via-purple-900/30 to-fuchsia-900/30 animate-gradient-x" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Animated top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5 shadow-lg shadow-fuchsia-500/20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Victoria Beauty Salon"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-semibold transition-colors duration-300 group-hover:text-fuchsia-200">Victoria Beauty Salon</p>
                <p className="text-fuchsia-300/60 text-sm">Mission, BC</p>
              </div>
            </div>
            <p className="text-white/40 text-sm text-center md:text-left max-w-xs">
              South Asian & traditional beauty services for your special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white/50 hover:text-fuchsia-300 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-fuchsia-400 hover:border-fuchsia-400/30 hover:bg-fuchsia-500/10 hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a href="tel:+16042876262" className="text-fuchsia-400 font-semibold hover:text-fuchsia-300 transition-colors duration-300">
              (604) 287-6262
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Victoria Beauty Salon. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Home-based salon in Mission, BC
          </p>
        </div>
      </div>
    </footer>
  )
}
