"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

const NAV_ITEMS = ["Services", "Our Work", "FAQ", "Contact"]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-fuchsia-500 to-purple-600 p-0.5 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Victoria Beauty Salon"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm sm:text-base transition-colors duration-300 group-hover:text-fuchsia-200">Victoria Beauty</p>
              <p className="text-fuchsia-300/70 text-xs">Salon &middot; Mission, BC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="relative text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+16042876262"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(604) 287-6262</span>
            </a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-[#0d0a0f]/95 backdrop-blur-xl border-t border-white/5 transition-all duration-500 ease-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="block text-white/70 hover:text-white py-3 transition-colors border-b border-white/5 last:border-0" 
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
