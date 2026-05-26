import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PortfolioMarquee } from "@/components/portfolio-marquee"
import { ServicesGrid } from "@/components/services-grid"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MobileCta } from "@/components/mobile-cta"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d0a0f]">
      <Navbar />
      <Hero />
      <PortfolioMarquee />
      <ServicesGrid />
      <FaqSection />
      <ContactSection />
      <Footer />
      <MobileCta />
    </main>
  )
}
