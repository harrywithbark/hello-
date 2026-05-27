import Image from "next/image"

const services = [
  { 
    name: "Punjabi Bridal Makeup", 
    description: "Complete Punjabi bridal packages with bold eyes, flawless contouring & traditional red lip for your Anand Karaj",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop"
  },
  { 
    name: "Casual Punjabi Makeover", 
    description: "Everyday glam and soft Punjabi-inspired looks for parties, Lohri, Baisakhi & casual outings",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop"
  },
  { 
    name: "Sangeet & Mehndi Glam", 
    description: "Vibrant, camera-ready makeup for your sangeet night and mehndi celebrations",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&h=400&fit=crop"
  },
  { 
    name: "Bridal Mehndi & Henna", 
    description: "Intricate Punjabi-style mehndi designs for hands and feet, perfect for the choora ceremony",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=400&fit=crop"
  },
  { 
    name: "Bridal Hair & Dupatta Setting", 
    description: "Elegant updos, curls & traditional dupatta draping styled for the Punjabi bride",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop"
  },
  { 
    name: "Pre-Wedding Skincare", 
    description: "Bridal facial packages and skin prep treatments to get you glowing before your big day",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop"
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-24 relative">
      {/* Transparent gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a0f] via-[#0d0a0f]/95 to-[#0d0a0f]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-fuchsia-400/80 text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3 font-medium">
            Our Services
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white mb-3 sm:mb-4">
            What We Offer
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base">
            Punjabi bridal and casual makeover services for every celebration
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-fuchsia-500/40 transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a0f] via-[#0d0a0f]/50 to-transparent" />
              </div>
              
              {/* Service Content */}
              <div className="relative p-5 sm:p-6 -mt-8">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-fuchsia-300 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
