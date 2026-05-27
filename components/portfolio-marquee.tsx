import Image from "next/image"

const portfolioRow1 = [
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop", alt: "Punjabi Bridal Makeup with Bold Eyes" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop", alt: "Casual Punjabi Party Glam" },
  { src: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=500&fit=crop", alt: "Bridal Mehndi Design" },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=500&fit=crop", alt: "Intricate Henna for Choora Ceremony" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop", alt: "Bridal Hair Updo with Dupatta" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=500&fit=crop", alt: "Pre-Wedding Facial Glow Treatment" },
]

const portfolioRow2 = [
  { src: "https://images.unsplash.com/photo-1610173826608-ed1c3c5f6d93?w=400&h=500&fit=crop", alt: "Sangeet Night Makeup Look" },
  { src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=500&fit=crop", alt: "Bridal Contouring and Highlight" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=500&fit=crop", alt: "Bride Skincare Prep Session" },
  { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=500&fit=crop", alt: "Punjabi Makeup Palette Setup" },
  { src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=500&fit=crop", alt: "Eyebrow Shaping for Bridal Look" },
  { src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=500&fit=crop", alt: "Casual Punjabi Makeover Portrait" },
]

function MarqueeRow({ images, direction }: { images: typeof portfolioRow1; direction: "left" | "right" }) {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
  const tripled = [...images, ...images, ...images]

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 sm:gap-4 ${animationClass} hover:[animation-play-state:paused]`} style={{ width: 'max-content' }}>
        {tripled.map((item, index) => (
          <div
            key={`${item.alt}-${index}`}
            className="relative w-36 h-44 sm:w-52 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 group"
          >
            <Image
              src={item.src}
              alt={`${item.alt} - Victoria Beauty Salon portfolio`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white text-xs sm:text-sm font-medium">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PortfolioMarquee() {
  return (
    <section id="our-work" className="py-16 sm:py-24 bg-[#faf5f0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 px-4">
          <p className="text-fuchsia-600/80 text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3 font-medium">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#1a1520]">
            Our Work
          </h2>
        </div>

        {/* Marquee Rows */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <MarqueeRow images={portfolioRow1} direction="left" />
          <MarqueeRow images={portfolioRow2} direction="right" />
        </div>
      </div>
    </section>
  )
}
