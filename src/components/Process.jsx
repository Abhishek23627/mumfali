import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    number: '01',
    icon: '🌾',
    title: 'Source',
    desc: 'Quality in-shell peanuts sourced from trusted agricultural suppliers.',
  },
  {
    number: '02',
    icon: '🔥',
    title: 'Roast',
    desc: 'Controlled dry-roasting to achieve consistent flavour and crunch.',
  },
  {
    number: '03',
    icon: '✋',
    title: 'Sort',
    desc: 'Peanuts sorted by size and quality. Standard peanuts go into the main 100g pack.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Quality Check',
    desc: 'Batch-level checks to maintain product consistency before packaging.',
  },
  {
    number: '05',
    icon: '📦',
    title: 'Pack',
    desc: 'Sealed in hygienic, branded 100g pouches, ready for retail distribution.',
  },
]

const BYPRODUCT = [
  {
    label: 'Standard Peanuts',
    arrow: '→',
    output: 'Main Product (100g Pouch)',
    color: '#6B3A2A',
    outputColor: '#E07B2A',
  },
  {
    label: 'Smaller / Split Peanuts',
    arrow: '→',
    output: 'Potential Value-Added Uses (Planned)',
    color: '#8B4E3A',
    outputColor: '#C8961E',
  },
]

export default function Process() {
  const ref = useScrollReveal()

  return (
    <section
      id="process"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF0DC 0%, #F0E0B8 100%)' }}
    >
      <div ref={ref} className="container-wide">

        {/* Section label */}
        <div className="reveal flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-orange border-b-2 border-brand-gold pb-1">
            How It Works
          </span>
        </div>

        {/* Headline */}
        <div className="reveal reveal-delay-1 text-center mb-16">
          <h2
            className="text-display text-brand-brown leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
          >
            From Peanut to Pack
          </h2>
          <p className="text-brand-muted text-lg mt-4 max-w-xl mx-auto">
            A simple, focused operating model built around quality control at every step.
          </p>
        </div>

        {/* Process steps — desktop: horizontal flow, mobile: vertical */}
        <div className="reveal reveal-delay-2 mb-16">

          {/* Desktop horizontal */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting line */}
            <div
              className="absolute top-7 left-0 right-0 h-0.5 pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #E07B2A, #C8961E, #E07B2A, #C8961E, #E07B2A)' }}
            />

            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center flex-1 px-2 relative z-10"
              >
                {/* Numbered circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 border-4 border-brand-cream"
                  style={{ background: i % 2 === 0 ? '#6B3A2A' : '#E07B2A' }}
                >
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-1">
                  {step.number}
                </span>
                <h4 className="font-bold text-brand-brown mb-1 text-base">{step.title}</h4>
                <p className="text-brand-muted text-xs leading-relaxed max-w-[140px]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden flex flex-col gap-6 relative">
            <div
              className="absolute left-7 top-0 bottom-0 w-0.5"
              style={{ background: 'linear-gradient(180deg, #E07B2A, #C8961E, #E07B2A, #C8961E, #E07B2A)' }}
            />
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex items-start gap-5 relative z-10">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 border-4 border-brand-cream"
                  style={{ background: i % 2 === 0 ? '#6B3A2A' : '#E07B2A' }}
                >
                  {step.icon}
                </div>
                <div className="pt-2">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-0.5 block">
                    {step.number} — {step.title}
                  </span>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By-product utilisation model */}
        <div className="reveal reveal-delay-3">
          <div className="rounded-2xl border border-brand-beige bg-white p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="text-display text-brand-brown text-xl md:text-2xl mb-2">
                Planned Utilisation Model
              </h3>
              <p className="text-brand-muted text-sm max-w-lg mx-auto">
                The proposed operating model aims to make efficient use of the full peanut
                batch through thoughtful sorting. This is an operational goal, not a
                confirmed outcome.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {BYPRODUCT.map((b) => (
                <div
                  key={b.label}
                  className="flex-1 max-w-sm flex flex-col sm:flex-row items-center gap-3 rounded-xl p-5 border border-brand-beige"
                  style={{ background: '#FAF8F2' }}
                >
                  <div
                    className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold text-brand-cream text-center"
                    style={{ background: b.color, minWidth: 140 }}
                  >
                    {b.label}
                  </div>
                  <span className="text-brand-gold text-xl font-bold">{b.arrow}</span>
                  <div
                    className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold text-brand-cream text-center"
                    style={{ background: b.outputColor, minWidth: 160 }}
                  >
                    {b.output}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
