import { MessageCircle } from "lucide-react"

export function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 bg-gradient-to-t from-[#0d0a0f] via-[#0d0a0f]/95 to-transparent md:hidden pb-safe">
      <a
        href="https://wa.me/16042876262?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
        className="flex items-center justify-center gap-3 w-full px-6 py-3.5 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 active:scale-[0.98] transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Book on WhatsApp</span>
      </a>
    </div>
  )
}
