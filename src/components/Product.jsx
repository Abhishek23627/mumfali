import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PouchSVG from './PouchSVG'

const FEATURES = [
  {
    emoji: '\uD83E\uDD5C',
    color: '#6B3A2A',
    title: '100g Pack',
    desc: 'Convenient everyday format. Right-sized for a single snacking session or sharing with a friend.',
    tag: 'Net Weight',
  },
  {
    emoji: '\uD83D\uDD25',
    color: '#E07B2A',
    title: 'Roasted In-Shell',
    desc: 'The classic peanut experience \u2014 in-shell, freshly roasted, the way it has always been enjoyed.',
    tag: 'Product Type',
  },
  {
    emoji: '\uD83D\uDCE6',
    color: '#C8961E',
    title: 'Hygienic Packaging',
    desc: 'Designed to provide a cleaner, sealed, packaged alternative to traditional open-bin loose peanuts.',
    tag: 'Packaging',
  },
  {
    emoji: '\uD83D\uDCB0',
    color: '#6B3A2A',
    title: 'Affordable',
    desc: 'Proposed MRP of \u20b920\u2013\u20b930. Accessible to impulse buyers across kirana stores and retail counters.',
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

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Pouch */}
          <div className="reveal reveal-delay-2 flex justify-center">
            <div className="relative">
              {/* Shadow disc */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 rounded-full"
                style={{ width: '65%', height: 24, background: 'radial-gradient(ellipse, rgba(107,58,42,0.35) 0%, transparent 75%)', filter: 'blur(8px)' }}
              />
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,150,30,0.18) 0%, transparent 70%)', filter: 'blur(20px)', transform: 'scale(1.3)' }}
              />
              <div className="relative z-10 animate-float pouch-shadow" style={{ width: 'clamp(200px, 35vw, 320px)' }}>
                <PouchSVG />
              </div>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`reveal reveal-delay-${i + 2} card-lift bg-white rounded-2xl p-6 border border-brand-beige shadow-sm`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: f.color + '18' }}
                >
                  {f.emoji}
                </div>
                <span className="inline-block text-xs uppercase tracking-widest text-brand-gold font-semibold mb-1">{f.tag}</span>
                <h3 className="font-bold text-brand-brown text-lg mb-2">{f.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="reveal reveal-delay-5 mt-16 text-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
            style={{ background: 'rgba(107,58,42,0.08)', borderColor: 'rgba(107,58,42,0.15)' }}
          >
            <span className="text-brand-brown text-sm font-medium">Initial production target:</span>
            <span className="text-brand-orange font-bold text-sm">1,000&ndash;5,000 packets/day</span>
            <span className="text-brand-muted text-xs">(scalable by demand)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
