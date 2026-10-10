import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PouchSVG from './PouchSVG'

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#6B3A2A" opacity="0.1"/>
        <text x="20" y="27" textAnchor="middle" fontSize="20">ðŸ¥œ</text>
      </svg>
    ),
    title: '100g Pack',
    desc: 'Convenient everyday format. Right-sized for a single snacking session or sharing with a friend.',
    tag: 'Net Weight',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#E07B2A" opacity="0.1"/>
        <text x="20" y="27" textAnchor="middle" fontSize="20">ðŸ”¥</text>
      </svg>
    ),
    title: 'Roasted In-Shell',
    desc: 'The classic peanut experience â€” in-shell, freshly roasted, the way it has always been enjoyed.',
    tag: 'Product Type',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#C8961E" opacity="0.1"/>
        <text x="20" y="27" textAnchor="middle" fontSize="20">ðŸ“¦</text>
      </svg>
    ),
    title: 'Hygienic Packaging',
    desc: 'Designed to provide a cleaner, sealed, packaged alternative to traditional open-bin loose peanuts.',
    tag: 'Packaging',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect width="40" height="40" rx="12" fill="#6B3A2A" opacity="0.1"/>
        <text x="20" y="27" textAnchor="middle" fontSize="20">ðŸ’°</text>
      </svg>
    ),
    title: 'Affordable',
    desc: 'Proposed MRP of â‚¹20â€“â‚¹30. Accessible to impulse buyers across kirana stores and retail counters.',
    tag: 'Pricing',
  },
]

export default function Product() {
  const ref = useScrollReveal()

  return (
    <section id="product" className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF0DC 0%, #F5E5C0 100%)' }}
    >
      <div ref={ref} className="container-wide">

        {/* Section label */}
        <div className="reveal flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-orange border-b-2 border-brand-gold pb-1">
            The Product
          </span>
        </div>

        {/* Headline */}
        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="text-display text-brand-brown leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
          >
            Simple Product.{' '}
            <em className="italic text-brand-orange">Carefully Designed.</em>
          </h2>
          <p className="text-brand-muted text-lg mt-4 max-w-xl mx-auto">
            One familiar snack. One clean packaged format. Everything else stays the same.
          </p>
        </div>

        {/* Main product layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left â€” Pouch 3D style */}
          <div className="reveal reveal-delay-2 flex justify-center">
            <div className="relative">
              {/* Shadow disc */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 rounded-full"
                style={{
                  width: '65%',
                  height: 24,
                  background: 'radial-gradient(ellipse, rgba(107,58,42,0.35) 0%, transparent 75%)',
                  filter: 'blur(8px)',
                }}
              />
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,150,30,0.18) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  transform: 'scale(1.3)',
                }}
              />
              <div
                className="relative z-10 animate-float pouch-shadow"
                style={{ width: 'clamp(200px, 35vw, 320px)' }}
              >
                <PouchSVG />
              </div>
            </div>
          </div>

          {/* Right â€” Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 2} card-lift bg-white rounded-2xl p-6 border border-brand-beige shadow-sm`}
              >
                <div className="mb-4">{f.icon}</div>
                <span className="inline-block text-xs uppercase tracking-widest text-brand-gold font-semibold mb-1">
                  {f.tag}
                </span>
                <h3 className="font-bold text-brand-brown text-lg mb-2">{f.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tag line */}
        <div className="reveal reveal-delay-5 mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border" style={{ background: 'rgba(107,58,42,0.08)', borderColor: 'rgba(107,58,42,0.15)' }}>
            <span className="text-brand-brown text-sm font-medium">
              Initial production target:
            </span>
            <span className="text-brand-orange font-bold text-sm">
              1,000â€“5,000 packets/day
            </span>
            <span className="text-brand-muted text-xs">(scalable by demand)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
