import React, { useEffect, useRef } from 'react'
import PouchSVG from './PouchSVG'

/* Decorative floating peanut pod */
function PeanutPod({ style, className = '' }) {
  return (
    <svg
      viewBox="0 0 60 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="30" cy="26" rx="18" ry="22" fill="#C8961E" opacity="0.8"/>
      <ellipse cx="30" cy="64" rx="18" ry="22" fill="#C8961E" opacity="0.8"/>
      <rect x="14" y="42" width="32" height="6" rx="3" fill="#6B3A2A" opacity="0.4"/>
      <ellipse cx="30" cy="26" rx="11" ry="14" fill="#E07B2A" opacity="0.6"/>
      <ellipse cx="30" cy="64" rx="11" ry="14" fill="#E07B2A" opacity="0.6"/>
      <ellipse cx="24" cy="20" rx="4" ry="2.5" fill="rgba(255,255,255,0.2)" transform="rotate(-25 24 20)"/>
    </svg>
  )
}

/* Scroll-down indicator */
function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-2 text-brand-cream opacity-70">
      <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-brand-cream to-transparent relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-4 bg-white/60 rounded-full"
          style={{ animation: 'scrollDot 1.8s ease-in-out infinite' }}
        />
      </div>
      <style>{`
        @keyframes scrollDot {
          0%   { transform: translateY(-8px); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(48px); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    if (!particlesRef.current) return
    const items = particlesRef.current.querySelectorAll('.particle-item')
    items.forEach((el) => {
      el.style.left             = Math.random() * 100 + '%'
      el.style.top              = Math.random() * 80 + '%'
      el.style.animationDelay   = Math.random() * 4 + 's'
      el.style.animationDuration = (4 + Math.random() * 4) + 's'
    })
  }, [])

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToLaunch  = () => document.getElementById('launch')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D1F10 0%, #6B3A2A 40%, #8B4E3A 70%, #5A2E1A 100%)' }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 65% 50%, rgba(200,150,30,0.18) 0%, transparent 70%)' }}
      />

      {/* Floating peanut particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(7)].map((_, i) => (
          <PeanutPod
            key={i}
            className="particle-item absolute animate-float"
            style={{ width: 24 + i * 8 + 'px', opacity: 0.08 + i * 0.02 }}
          />
        ))}
      </div>

      {/* Decorative circle */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{
          width: 'clamp(320px, 52vw, 680px)',
          height: 'clamp(320px, 52vw, 680px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,150,30,0.12) 0%, rgba(107,58,42,0.05) 60%, transparent 100%)',
          border: '1px solid rgba(200,150,30,0.15)',
        }}
      />

      {/* Main content */}
      <div className="container-wide relative z-10 grid md:grid-cols-2 gap-12 items-center pt-28 pb-20 md:pt-32 md:pb-24">

        {/* LEFT - Copy */}
        <div className="flex flex-col items-start gap-6 md:gap-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-gold border border-brand-gold/40 bg-brand-gold/10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse-soft" />
            Preparing to Launch
          </div>

          {/* Headline */}
          <h1
            className="text-display text-brand-cream leading-[1.1]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}
          >
            The Classic{' '}
            <em className="not-italic text-brand-gold">Time-Pass</em>{' '}
            Snack,<br />Reimagined.
          </h1>

          {/* Sub-headline */}
          <p className="text-brand-cream/80 text-lg md:text-xl leading-relaxed max-w-md">
            Traditional roasted in-shell peanuts, packed for today's everyday snacking.
          </p>

          {/* Product spec pills */}
          <div className="flex flex-wrap gap-2">
            {['100g Pack', 'Roasted In-Shell', 'Proposed MRP \u20b920\u2013\u20b930'].map(tag => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 text-brand-cream/90"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={scrollToContact} className="btn-primary">Get in Touch</button>
            <button onClick={scrollToLaunch}  className="btn-outline-cream">Be the First to Try</button>
          </div>

          {/* Hindi tagline */}
          <p className="text-brand-cream/50 text-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            मुंगफली टाइम पास &mdash; जब भी फुर्सत मिले
          </p>
        </div>

        {/* RIGHT - Product Pouch */}
        <div className="flex justify-center items-center relative">
          {/* Glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '80%', paddingBottom: '80%',
              background: 'radial-gradient(circle, rgba(200,150,30,0.22) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />
          {/* Pouch */}
          <div className="relative z-10 animate-float pouch-shadow" style={{ width: 'clamp(240px, 38vw, 380px)' }}>
            <PouchSVG />
          </div>
          {/* Floating peanuts around pouch */}
          <PeanutPod className="absolute -top-4 -left-4 animate-float-slow"  style={{ width: 48, opacity: 0.5 }} />
          <PeanutPod className="absolute bottom-8 -right-6 animate-float-fast" style={{ width: 36, opacity: 0.4, animationDelay: '2s' }} />
          <PeanutPod className="absolute top-1/2 -left-8 animate-float"       style={{ width: 28, opacity: 0.35, animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#FAF0DC"/>
      </svg>
    </section>
  )
}
