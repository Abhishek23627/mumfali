import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const PARTNER_TYPES = [
  {
    icon: 'ðŸª',
    title: 'Retailers',
    desc: 'Looking to stock an affordable, impulse-friendly snack on your counter? Let\'s talk.',
  },
  {
    icon: 'ðŸšš',
    title: 'Distributors',
    desc: 'Interested in distribution partnerships as we expand? We\'d love to connect.',
  },
  {
    icon: 'ðŸ¤',
    title: 'Strategic Partners',
    desc: 'If you can add value to our supply chain, retail presence, or brand building â€” reach out.',
  },
  {
    icon: 'ðŸ’¼',
    title: 'Investors',
    desc: 'We\'re seeking up to â‚¹10 lakh in seed funding to take this from idea to first batch.',
  },
]

export default function Partnership() {
  const ref = useScrollReveal()

  const handlePartnerClick = () => {
    window.location.href = 'mailto:Avhi6311@gmail.com?subject=Partnership%20Enquiry%20%E2%80%94%20MUNGFALI%20Time%20Pass'
  }

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAF0DC 0%, #F0E0B8 100%)' }}
    >
      <div ref={ref} className="container-wide">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left â€” copy */}
          <div>
            {/* Section label */}
            <div className="reveal mb-4">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-orange border-b-2 border-brand-gold pb-1">
                Partnership &amp; Investment
              </span>
            </div>

            <div className="reveal reveal-delay-1 mb-6">
              <h2
                className="text-display text-brand-brown leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Want to Build<br />
                <em className="italic text-brand-orange">With Us?</em>
              </h2>
            </div>

            <div className="reveal reveal-delay-2 mb-8">
              <p className="text-brand-muted text-lg leading-relaxed mb-4">
                MUNGFALI Time Pass is at the idea and pre-launch stage, actively seeking
                the right partners and early backers to help bring this product to market.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Whether you're a retailer, distributor, or an investor who believes in the
                opportunity of branded traditional snacks â€” we'd love to have a conversation.
              </p>
            </div>

            {/* Investment detail box */}
            <div className="reveal reveal-delay-3 rounded-2xl border border-brand-gold/40 p-6 mb-8"
              style={{ background: 'rgba(200,150,30,0.06)' }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">ðŸ’¡</div>
                <div>
                  <h4 className="font-bold text-brand-brown mb-1">Seed Investment Opportunity</h4>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Proposed seed requirement: <strong className="text-brand-orange">Up to â‚¹10 lakh</strong>
                    <br />
                    This is an idea-stage venture. Investment terms, structures, and use of funds
                    are to be discussed. No confirmed round or term sheet exists at this stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-4">
              <button onClick={handlePartnerClick} className="btn-primary">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Right â€” partner type cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {PARTNER_TYPES.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${i + 2} card-lift rounded-2xl p-6 border border-brand-beige bg-white`}
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h4 className="font-bold text-brand-brown text-base mb-2">{p.title}</h4>
                <p className="text-brand-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
