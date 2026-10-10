import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PARTNER_TYPES = [
  {
    icon: (
      <svg className="w-8 h-8 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
        <path d="M2 7h20"/>
      </svg>
    ),
    title: 'Retailers & Kiranas',
    desc: 'Stock a fresh, high-rotation snack packet on your shop counter with attractive margins.',
    badge: 'Retail',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="13" x="1" y="6" rx="2"/>
        <path d="M17 11h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4"/>
        <circle cx="5.5" cy="19.5" r="2.5"/>
        <circle cx="13.5" cy="19.5" r="2.5"/>
        <circle cx="18.5" cy="19.5" r="2.5"/>
      </svg>
    ),
    title: 'Distributors',
    desc: 'Partner with us across regional hubs as we expand territory-level FMCG distribution.',
    badge: 'Supply Chain',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-brand-brown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Strategic Partners',
    desc: 'Collaborate on sourcing, packaging automation, or institutional supply channels.',
    badge: 'Ecosystem',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="2" y2="22"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Angel Investors',
    desc: 'Support an early-stage Indian FMCG brand reimagining traditional impulse snacking.',
    badge: 'Pre-seed',
  },
]

export default function Partnership() {
  const ref = useScrollReveal()

  const handlePartnerClick = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = 'mailto:Avhi6311@gmail.com?subject=Partnership%20Enquiry%20%E2%80%94%20Mungfali%20Time%20Pass'
    }
  }

  return (
    <section
      id="partnership"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAF0DC 0%, #F3DFB0 100%)' }}
    >
      <div ref={ref} className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="reveal mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/30">
                Partnership &amp; Investment
              </span>
            </div>

            <div className="reveal reveal-delay-1 mb-6">
              <h2
                className="text-display text-brand-brown leading-tight"
                style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)' }}
              >
                Want to Build <br />
                <span className="italic text-brand-orange">With Us?</span>
              </h2>
            </div>

            <div className="reveal reveal-delay-2 space-y-4 mb-8">
              <p className="text-brand-charcoal-soft text-base md:text-lg leading-relaxed">
                Mungfali Time Pass is an early-stage Indian FMCG brand preparing for market launch. We are looking for forward-thinking partners to build distribution, retail reach, and scalable production together.
              </p>
              <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                Whether you own a retail network, run wholesale distribution, or want to explore early seed participation &mdash; let&apos;s start a conversation.
              </p>
            </div>

            {/* Seed Investment Opportunity Callout Box */}
            <div
              className="reveal reveal-delay-3 rounded-2xl border border-brand-gold/50 p-6 mb-8 shadow-sm bg-white/70 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center flex-shrink-0 text-brand-gold">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-brand-brown text-base">Seed Opportunity</h3>
                    <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">Pre-launch</span>
                  </div>
                  <p className="text-brand-charcoal text-sm leading-relaxed mb-2">
                    Proposed Seed Capital: <strong className="text-brand-orange font-bold text-base">Up to &#8377;10 Lakh</strong>
                  </p>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    Designed for pilot operations, batch roasting setup, and targeted launch across initial retail clusters. Terms are open for exploratory discussion.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action button */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={handlePartnerClick}
                className="btn-primary text-sm md:text-base shadow-md hover:shadow-lg"
              >
                Partner With Us
              </button>
              <a
                href="mailto:Avhi6311@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-brown hover:text-brand-orange transition-colors"
              >
                <span>Avhi6311@gmail.com</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column (7 cols) - Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {PARTNER_TYPES.map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal reveal-delay-${i + 1} card-lift rounded-2xl p-6 md:p-7 border border-brand-beige/80 bg-white/90 shadow-sm hover:border-brand-orange/40 transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-brand-cream/80 border border-brand-beige">
                        {p.icon}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-cream text-brand-brown border border-brand-beige">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-brand-brown text-lg mb-2">{p.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-brand-beige/50 flex items-center justify-between text-xs text-brand-orange font-semibold">
                    <span>Explore Collaboration</span>
                    <span>&rarr;</span>
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
