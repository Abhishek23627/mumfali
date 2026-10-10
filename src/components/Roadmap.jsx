import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'Validate',
    status: 'Current Focus',
    statusColor: '#E07B2A',
    icon: '🔬',
    desc: 'Local pilot launch. Validate the product, the price point, and the consumer response in a controlled market.',
    items: ['Local retail pilot', 'Consumer feedback', 'Price point validation', 'Kirana store partnerships'],
    dotColor: '#E07B2A',
  },
  {
    phase: 'Phase 2',
    title: 'Scale',
    status: 'Planned',
    statusColor: '#C8961E',
    icon: '📈',
    desc: 'Expand production capacity and distribution reach based on validated demand from Phase 1.',
    items: ['Scale to 5,000+ packets/day', 'Expand city coverage', 'Retail distribution networks', 'Brand visibility investment'],
    dotColor: '#C8961E',
  },
  {
    phase: 'Phase 3',
    title: 'Expand',
    status: 'Future Vision',
    statusColor: '#6B3A2A',
    icon: '🚀',
    desc: 'Introduce regional flavour variants and explore additional peanut-based product lines.',
    items: ['Spicy Masala (planned)', 'Salt & Pepper (planned)', 'Regional flavor variants', 'New product formats'],
    dotColor: '#6B3A2A',
  },
]

export default function Roadmap() {
  const ref = useScrollReveal()

  return (
    <section
      id="future"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D1F10 0%, #6B3A2A 50%, #5A2E1A 100%)' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className="container-wide relative z-10">

        {/* Section label */}
        <div className="reveal flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold border-b-2 border-brand-gold/50 pb-1">
            The Roadmap
          </span>
        </div>

        {/* Headline */}
        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="text-display text-brand-cream leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
          >
            Starting Small.{' '}
            <em className="italic text-brand-gold">Thinking Bigger.</em>
          </h2>
          <p className="text-brand-cream/70 text-lg mt-4 max-w-xl mx-auto">
            A focused, phased approach — from local validation to regional scale.
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PHASES.map((p, i) => (
            <div
              key={p.phase}
              className={`reveal reveal-delay-${i + 2} relative rounded-2xl overflow-hidden border border-white/10`}
              style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ background: p.dotColor }} />

              <div className="p-7">
                {/* Phase label + status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-cream/50">
                    {p.phase}
                  </span>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: p.dotColor + '30', color: p.dotColor }}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="text-display text-brand-cream text-2xl font-bold">{p.title}</h3>
                </div>

                {/* Description */}
                <p className="text-brand-cream/70 text-sm leading-relaxed mb-5">{p.desc}</p>

                {/* Items */}
                <ul className="space-y-2">
                  {p.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-brand-cream/80">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: p.dotColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow connector (not on last) */}
              {i < 2 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full items-center justify-center bg-brand-gold text-white text-xs font-bold shadow-lg">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Future flavour note */}
        <div className="reveal reveal-delay-5">
          <div className="rounded-2xl border border-brand-gold/30 p-6 md:p-8 text-center"
            style={{ background: 'rgba(200,150,30,0.08)' }}
          >
            <h4 className="text-display text-brand-gold text-xl mb-3">
              Future Flavour Plans
            </h4>
            <p className="text-brand-cream/70 text-sm mb-6 max-w-md mx-auto">
              These are planned future product variants, not currently available.
              Flavour development will follow market validation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['🌶️ Spicy Masala', '🧂 Salt & Pepper', '🌿 Regional Variants', '+ More (TBD)'].map(f => (
                <span
                  key={f}
                  className="px-5 py-2.5 rounded-full text-sm font-medium border border-brand-gold/40 text-brand-cream/80"
                  style={{ background: 'rgba(200,150,30,0.12)' }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
