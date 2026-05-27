import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, MapPin, Clock, Star, ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image - Punjabi Bride */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bride.jpg"
          alt=""
          fill
          className="object-cover object-top scale-105"
          priority
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a0f]/90 via-purple-900/60 to-fuchsia-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a0f] via-transparent to-[#0d0a0f]/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-20">
        {/* Logo Badge */}
        <div className="mb-6 sm:mb-8 flex justify-center animate-fade-in">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-2xl shadow-fuchsia-500/40">
            <Image
              src="/logo.png"
              alt="Victoria Beauty Salon"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Location */}
        <p className="text-white/50 text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-5 font-medium animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Mission, British Columbia
        </p>

        {/* Main Headline */}
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-5 sm:mb-6 leading-[1.1] text-balance animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Celebrating <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Every</span>
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">{"Woman's"}</span> Beauty
        </h1>

        {/* Subheadline */}
        <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed text-pretty px-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Our Punjabi bridal and casual Punjabi makeover services for your special moments.
        </p>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/70 text-xs sm:text-sm">Available for bookings this week</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          {/* Primary CTA - WhatsApp */}
          <a
            href="https://wa.me/16042876262?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
            className="w-full max-w-xs sm:max-w-sm flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-purple-600 text-white font-semibold text-base sm:text-lg shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book on WhatsApp</span>
          </a>

          {/* Secondary Row */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Secondary CTA - Phone */}
            <a
              href="tel:+16042876262"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>(604) 287-6262</span>
            </a>

            {/* See Services Link */}
            <Link
              href="#services"
              className="flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-300 text-sm group"
            >
              <span>See Services</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
            <span className="text-white/70 text-[11px] sm:text-xs">4.9 on Google</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fuchsia-400" />
            <span className="text-white/70 text-[11px] sm:text-xs">Mission, BC</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fuchsia-400" />
            <span className="text-white/70 text-[11px] sm:text-xs">Open Daily 9am-8pm</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block animate-fade-in" style={{ animationDelay: '800ms' }}>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-0.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
