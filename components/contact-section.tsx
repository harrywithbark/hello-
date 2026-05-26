import { Phone, MessageCircle, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a0f] to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <p className="text-fuchsia-400/80 text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3 font-medium">
          Book Now
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6">
          Ready to Book?
        </h2>
        <p className="text-white/60 text-sm sm:text-base mb-8 sm:mb-10 max-w-xl mx-auto">
          Get in touch to schedule your appointment. We look forward to making you feel beautiful.
        </p>

        {/* Contact CTAs */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <a
            href="https://wa.me/16042876262?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
            className="w-full max-w-xs sm:max-w-sm flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold text-base sm:text-lg shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Book on WhatsApp</span>
          </a>
          <a
            href="tel:+16042876262"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            <span>(604) 287-6262</span>
          </a>
        </div>

        {/* Location Info - Linked to Google Maps */}
        <a
          href="https://maps.google.com/?q=33787+Grewall+Crescent+Mission+BC"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-fuchsia-300 transition-colors duration-300"
        >
          <MapPin className="w-4 h-4 text-fuchsia-400" />
          <span>33787 Grewall Crescent, Mission, BC</span>
        </a>
      </div>
    </section>
  )
}
