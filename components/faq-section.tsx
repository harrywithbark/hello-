"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What services do you offer for weddings?",
    answer: "We offer complete bridal packages including makeup, mehndi, hair styling, and pre-wedding skincare treatments. We also provide services for the entire bridal party \u2014 mothers, sisters, and bridesmaids."
  },
  {
    question: "Do you offer home visits?",
    answer: "Yes, we offer home visits for bridal parties and special occasions. Our studio is also open for individual appointments in a comfortable, private setting."
  },
  {
    question: "How far in advance should I book for my wedding?",
    answer: "We recommend booking at least 2-3 months in advance for bridal services, especially during wedding season (May-September). A trial session is included with bridal packages."
  },
  {
    question: "What are your hours and location?",
    answer: "We are located at 33787 Grewall Crescent, Mission, BC. Open daily 9am-8pm, closed Tuesdays. Walk-ins welcome, appointments preferred."
  },
]

function AccordionItem({ question, answer, isOpen, onToggle, id }: { 
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  id: number
}) {
  const headingId = `faq-heading-${id}`
  const panelId = `faq-panel-${id}`

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={headingId}
      >
        <span className="text-white font-medium text-base sm:text-lg pr-4 group-hover:text-fuchsia-300 transition-colors duration-300">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-fuchsia-400 flex-shrink-0 transition-transform duration-500 ease-out ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-white/60 text-sm sm:text-base leading-relaxed pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a0f] via-[#1a1520]/30 to-[#0d0a0f]" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-fuchsia-400/80 text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3 font-medium">
            Questions
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 px-5 sm:px-8">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              id={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              onToggle={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
