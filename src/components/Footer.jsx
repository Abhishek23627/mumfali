import React from 'react'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '#story',   label: 'Our Story' },
  { href: '#product', label: 'Product' },
  { href: '#process', label: 'How It Works' },
  { href: '#future',  label: 'Future' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{ background: '#1E0A04' }}
      className="text-brand-cream/70"
    >
      {/* Top section */}
      <div className="container-wide py-14 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Logo variant="light" size={40} className="mb-4"/>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Traditional roasted in-shell peanuts, packed for today's everyday snacking.
              Preparing to launch.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-cream/40">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-soft"/>
              Idea Stage Â· Pre-launch
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(l => (
                <button
                  key={l.href}
                  onClick={() => handleClick(l.href)}
                  className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors text-left"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-brand-cream/40 text-xs mb-0.5">Founder</p>
                <p className="text-brand-cream/80">Abhishek Kumar</p>
              </div>
              <div>
                <p className="text-brand-cream/40 text-xs mb-0.5">Co-Founder</p>
                <p className="text-brand-cream/80">Shivani Kumari</p>
              </div>
              <div>
                <a
                  href="mailto:Avhi6311@gmail.com"
                  className="text-brand-cream/70 hover:text-brand-gold transition-colors break-all"
                >
                  Avhi6311@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+916287974490"
                  className="text-brand-cream/70 hover:text-brand-gold transition-colors"
                >
                  +91 62879 74490
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5" />

      {/* Bottom bar */}
      <div className="container-wide py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-cream/30">
          <p>Â© {new Date().getFullYear()} MUNGFALI Time Pass. All rights reserved.</p>
          <p className="text-center">
            This website is for promotional and brand awareness purposes.
            Products are not yet commercially available.
          </p>
        </div>
      </div>
    </footer>
  )
}
