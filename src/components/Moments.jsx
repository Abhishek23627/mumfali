import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const OCCASIONS = [
  {
    emoji: '\uD83D\uDE82',
    title: 'Travel',
    subtitle: 'On the Go',
    desc: 'Railway journeys, bus rides, road trips \u2014 Mungfali Time Pass fits in every bag and every moment.',
    bg: '#6B3A2A',
  },
  {
    emoji: '\u2615',
    title: 'Tea Break',
    subtitle: 'Chai Time',
    desc: 'When the afternoon slows and the kettle boils \u2014 the perfect companion for every sip.',
    bg: '#8B4E3A',
  },
  {
    emoji: '\uD83C\uDFAC',
    title: 'Movie Time',
    subtitle: 'Reel Snacking',
    desc: 'The crunch is part of the plot. In-shell peanuts are the original Indian movie snack.',
    bg: '#5A2E1A',
  },
  {
    emoji: '\uD83E\uDD1D',
    title: 'Gatherings',
    subtitle: 'Shared Moments',
    desc: 'Spread the shells, share the stories. Peanuts bring people closer without a word.',
    bg: '#7A3E28',
  },
  {
    emoji: '\uD83C\uDF07',
    title: 'Evening Snack',
    subtitle: 'Sunset Ritual',
    desc: 'The evening sun, a park bench, and your favourite time-pass. Some routines are worth keeping.',
    bg: '#9B5E3A',
  },
]

export default function Moments() {
  const ref = useScrollReveal()

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF8EC 0%, #F5E5C0 100%)' }}
    >
      <div ref={ref} className="container-wide">

        {/* Section label */}
        <div className="reveal flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-orange border-b-2 border-brand-gold pb-1">
            Made For Everyday Moments
          </span>
        </div>

        {/* Headline */}
        <div className="reveal reveal-delay-1 text-center mb-14">
          <h2
            className="text-display text-brand-brown leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Whenever There&apos;s Time to Pass,
            <br />
            <em className="italic text-brand-orange">There&apos;s Mungfali.</em>
          </h2>
        </div>

        {/* Cards - horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {OCCASIONS.map((o, i) => (
            <div
              key={o.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} card-lift flex-shrink-0 snap-start w-64 md:w-auto rounded-2xl overflow-hidden group cursor-default`}
              style={{ minWidth: 240 }}
            >
              {/* Top coloured band */}
              <div
                className="flex flex-col items-center justify-center py-8 px-4 text-center transition-all duration-300 group-hover:py-10"
                style={{ background: o.bg }}
              >
                <span className="text-5xl mb-3">{o.emoji}</span>
                <h3 className="text-brand-cream font-bold text-lg leading-tight">{o.title}</h3>
                <span className="text-brand-gold text-xs font-medium uppercase tracking-widest mt-1">{o.subtitle}</span>
              </div>
              {/* Description */}
              <div className="bg-white px-5 py-5">
                <p className="text-brand-muted text-sm leading-relaxed">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="reveal reveal-delay-5 mt-12 text-center">
          <p className="text-display italic text-brand-brown/60 text-xl">
            The snack that needs no occasion &mdash; except time.
          </p>
        </div>
      </div>
    </section>
  )
}
