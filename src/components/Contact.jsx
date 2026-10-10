import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const INTEREST_OPTIONS = [
  { value: 'customer',    label: 'Customer â€” I want to try the product' },
  { value: 'retailer',   label: 'Retailer â€” I want to stock this product' },
  { value: 'distributor',label: 'Distributor â€” I can help with distribution' },
  { value: 'investor',   label: 'Investor â€” I\'m interested in the opportunity' },
  { value: 'other',      label: 'Other' },
]

const INITIAL = { fullName: '', mobile: '', email: '', city: '', interest: '', message: '' }

function validate(f) {
  const e = {}
  if (!f.fullName.trim())         e.fullName = 'Please enter your name.'
  if (!/^\d{10}$/.test(f.mobile.replace(/\s/g, ''))) e.mobile = 'Enter a valid 10-digit number.'
  if (!/\S+@\S+\.\S+/.test(f.email)) e.email = 'Enter a valid email.'
  if (!f.city.trim())             e.city    = 'Please enter your city.'
  if (!f.interest)                e.interest = 'Please select your interest type.'
  return e
}

export default function Contact() {
  const ref = useScrollReveal()
  const [form,   setForm]   = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const change = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(er => ({ ...er, [name]: '' }))
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    setTimeout(() => { setStatus('success'); setForm(INITIAL) }, 900)
  }

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D1F10 0%, #6B3A2A 100%)' }}
    >
      {/* Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      <div ref={ref} className="container-wide relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left â€” contact info */}
          <div>
            <div className="reveal mb-4">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold border-b-2 border-brand-gold/50 pb-1">
                Get in Touch
              </span>
            </div>

            <div className="reveal reveal-delay-1 mb-6">
              <h2
                className="text-display text-brand-cream leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Let's Start a
                <br />
                <em className="italic text-brand-gold">Conversation.</em>
              </h2>
            </div>

            <div className="reveal reveal-delay-2 mb-8">
              <p className="text-brand-cream/70 text-lg leading-relaxed">
                Whether you're a consumer, retailer, or partner â€” we'd love to hear from you.
                Reach out and we'll get back to you promptly.
              </p>
            </div>

            {/* Contact cards */}
            <div className="reveal reveal-delay-3 space-y-4 mb-8">
              {/* Founders */}
              <div className="rounded-2xl p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">The Team</h4>
                <div className="space-y-2">
                  <p className="text-brand-cream font-semibold">Abhishek Kumar â€” <span className="text-brand-cream/70 font-normal">Founder</span></p>
                  <p className="text-brand-cream font-semibold">Shivani Kumari â€” <span className="text-brand-cream/70 font-normal">Co-Founder</span></p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:Avhi6311@gmail.com"
                className="flex items-center gap-4 rounded-2xl p-5 border border-white/10 transition-all hover:border-brand-gold/40 group"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-xl flex-shrink-0">
                  âœ‰ï¸
                </div>
                <div>
                  <p className="text-brand-cream/50 text-xs uppercase tracking-wide mb-0.5">Email</p>
                  <p className="text-brand-cream font-medium group-hover:text-brand-gold transition-colors">
                    Avhi6311@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916287974490"
                className="flex items-center gap-4 rounded-2xl p-5 border border-white/10 transition-all hover:border-brand-gold/40 group"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-xl flex-shrink-0">
                  ðŸ“ž
                </div>
                <div>
                  <p className="text-brand-cream/50 text-xs uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                  <p className="text-brand-cream font-medium group-hover:text-brand-gold transition-colors">
                    +91 62879 74490
                  </p>
                </div>
              </a>
            </div>

            {/* Brand tagline */}
            <div className="reveal reveal-delay-4">
              <p
                className="text-display italic text-brand-cream/40 text-lg"
              >
                "A familiar snack. A modern pack.<br />A brand preparing to launch."
              </p>
            </div>
          </div>

          {/* Right â€” contact form */}
          <div className="reveal reveal-delay-3">
            {status === 'success' ? (
              <div className="rounded-2xl border border-green-400/30 bg-green-900/20 p-10 text-center">
                <div className="text-5xl mb-4">âœ…</div>
                <h3 className="text-display text-brand-cream text-2xl font-bold mb-3">Message Received!</h3>
                <p className="text-brand-cream/70 text-base">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-outline-cream mt-6 text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                className="rounded-2xl border border-white/10 p-8 md:p-10 space-y-5"
                style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}
              >
                <h3 className="text-brand-cream font-bold text-lg mb-6">Send us a message</h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-brand-cream/70 mb-1.5 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={change}
                    placeholder="Your full name"
                    className={`form-input w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal bg-white/90 transition-colors ${
                      errors.fullName ? 'border-red-400' : 'border-transparent'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Mobile + City */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-brand-cream/70 mb-1.5 uppercase tracking-wide">
                      Mobile *
                    </label>
                    <input
                      name="mobile"
                      type="tel"
                      value={form.mobile}
                      onChange={change}
                      placeholder="10-digit number"
                      maxLength={10}
                      className={`form-input w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal bg-white/90 transition-colors ${
                        errors.mobile ? 'border-red-400' : 'border-transparent'
                      }`}
                    />
                    {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-cream/70 mb-1.5 uppercase tracking-wide">
                      City *
                    </label>
                    <input
                      name="city"
                      type="text"
                      value={form.city}
                      onChange={change}
                      placeholder="Your city"
                      className={`form-input w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal bg-white/90 transition-colors ${
                        errors.city ? 'border-red-400' : 'border-transparent'
                      }`}
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-brand-cream/70 mb-1.5 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={change}
                    placeholder="your@email.com"
                    className={`form-input w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal bg-white/90 transition-colors ${
                      errors.email ? 'border-red-400' : 'border-transparent'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Interest */}
                <div>
                  <label className="block text-xs font-semibold text-brand-cream/70 mb-1.5 uppercase tracking-wide">
                    I Am Aâ€¦ *
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={change}
                    className={`form-input w-full rounded-xl border px-4 py-3 text-sm text-brand-charcoal bg-white/90 transition-colors cursor-pointer ${
                      errors.interest ? 'border-red-400' : 'border-transparent'
                    }`}
                  >
                    <option value="">Select your interest type</option>
                    {INTEREST_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  {errors.interest && <p className="text-red-400 text-xs mt-1">{errors.interest}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-brand-cream/70 mb-1.5 uppercase tracking-wide">
                    Message <span className="font-normal text-brand-cream/40">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={change}
                    placeholder="What's on your mind?"
                    className="form-input w-full rounded-xl border border-transparent px-4 py-3 text-sm text-brand-charcoal bg-white/90 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sendingâ€¦
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
