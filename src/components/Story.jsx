import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const MOMENTS = [
  {
    icon: '🚂',
    title: 'Railway Journey',
    desc: 'A window seat, passing fields, and a pack of moongphali. Some things never change.',
    color: 'from-amber-900/30 to-amber-800/20',
  },
  {
    icon: '🍵',
    title: 'Evening Tea Break',
    desc: 'When the chai arrives and conversation slows — the peanuts come out.',
    color: 'from-orange-900/30 to-orange-800/20',
  },
  {
    icon: '🎬',
    title: 'Movie at Home',
    desc: 'The unofficial snack of every Indian movie night. Low volume, big flavour.',
    color: 'from-red-900/30 to-red-800/20',
  },
  {
    icon: '🚌',
    title: 'Bus Travel',
    desc: 'Long rides, short patience — a familiar bag of peanuts makes the distance shorter.',
    color: 'from-yellow-900/30 to-yellow-800/20',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Casual Gatherings',
    desc: 'Spread a newspaper, crack the shells, start the conversation. Everyone joins in.',
    color: 'from-amber-800/30 to-amber-700/20',
  },
]

export default function Story() {
  const ref = useScrollReveal()

  return (
    <section id="story" className="section-pad bg-brand-cream relative overflow-hidden">
      {/* Background texture dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8961E 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={ref} className="container-wide relative z-10">

        {/* Section label */}
        <div className="reveal flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-orange border-b-2 border-brand-gold pb-1">
            Our Story
          </span>
        </div>

        {/* Main headline */}
        <div className="reveal reveal-delay-1 text-center mb-6">
          <h2
            className="text-display text-brand-brown leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
          >
            Some Snacks Don't Need<br />
            <em className="italic text-brand-orange">an Introduction.</em>
          </h2>
        </div>

        {/* Story paragraphs */}
        <div className="reveal reveal-delay-2 max-w-2xl mx-auto text-center mb-16">
          <p className="text-brand-muted text-lg leading-relaxed mb-4">
            Every Indian has a memory tied to roasted peanuts. A railway journey with a
            cone of moongphali bought at the platform. A winter evening with chai and
            a newspaper full of them. A bus ride where the hours passed faster
            with shells cracking between conversations.
          </p>
          <p className="text-brand-muted text-lg leading-relaxed">
            This isn't just a snack. It's a ritual. A universal time-pass that cuts
            across cities, states, and generations.
          </p>
        </div>

        {/* Transition statement */}
        <div className="reveal reveal-delay-3 mb-16">
          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #6B3A2A 0%, #8B4E3A 100%)' }}
          >
            <div className="px-8 py-10 md:px-12 md:py-12 relative z-10">
              <p
                className="text-display text-brand-cream text-center italic leading-relaxed"
                style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)' }}
              >
                "Moanfali Time Pass brings that familiar experience into a cleaner,
                more convenient, branded format — so the ritual travels with you,
                wherever you go."
              </p>
            </div>
            {/* Decorative peanut silhouettes */}
            <svg className="absolute bottom-0 right-0 opacity-10" width="120" height="160" viewBox="0 0 60 90" fill="none" aria-hidden="true">
              <ellipse cx="30" cy="26" rx="18" ry="22" fill="#FAF0DC"/>
              <ellipse cx="30" cy="64" rx="18" ry="22" fill="#FAF0DC"/>
              <rect x="14" y="42" width="32" height="6" rx="3" fill="#FAF0DC"/>
            </svg>
            <svg className="absolute top-0 left-0 opacity-10" width="80" height="100" viewBox="0 0 60 90" fill="none" aria-hidden="true">
              <ellipse cx="30" cy="26" rx="18" ry="22" fill="#FAF0DC"/>
              <ellipse cx="30" cy="64" rx="18" ry="22" fill="#FAF0DC"/>
              <rect x="14" y="42" width="32" height="6" rx="3" fill="#FAF0DC"/>
            </svg>
          </div>
        </div>

        {/* Occasion cards */}
        <div className="reveal reveal-delay-4 mb-6">
          <h3 className="text-display text-brand-brown text-center text-2xl md:text-3xl mb-10">
            Made for Every Occasion
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {MOMENTS.map((m, i) => (
            <div
              key={m.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} card-lift rounded-2xl p-6 border border-brand-beige/60 bg-gradient-to-br ${m.color} backdrop-blur-sm`}
              style={{ background: '#FFF8EC' }}
            >
              <div className="text-4xl mb-4">{m.icon}</div>
              <h4 className="font-semibold text-brand-brown mb-2 text-base">{m.title}</h4>
              <p className="text-brand-muted text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
