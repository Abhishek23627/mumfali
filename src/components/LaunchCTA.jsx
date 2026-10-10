import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const INITIAL = { name: '', mobile: '', email: '', city: '', message: '', consent: false }
const ERRORS_INIT = {}

function validate(fields) {
  const errs = {}
  if (!fields.name.trim())           errs.name    = 'Please enter your name.'
  if (!/^\d{10}$/.test(fields.mobile.replace(/\s/g, '')))
                                     errs.mobile  = 'Enter a valid 10-digit mobile number.'
  if (!/\S+@\S+\.\S+/.test(fields.email))
                                     errs.email   = 'Enter a valid email address.'
  if (!fields.city.trim())           errs.city    = 'Please enter your city.'
  if (!fields.consent)               errs.consent = 'Please accept to continue.'
  return errs
}

export default function LaunchCTA() {
  const ref   = useScrollReveal()
  const [form,    setForm]    = useState(INITIAL)
  const [errors,  setErrors]  = useState(ERRORS_INIT)
  const [status,  setStatus]  = useState('idle') // idle | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    // Future: connect to email API / backend
    // For now, simulate success after 800ms
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm(INITIAL)
    }, 900)
  }

  return (
    <section
      id="launch"
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5E5C0 0%, #FAF0DC 100%)' }}
    >
      {/* Decorative dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8961E 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div ref={ref} className="container-wide relative z-10">

        <div className="max-w-2xl mx-auto">

          {/* Section label */}
          <div className="reveal flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-orange border-b-2 border-brand-gold pb-1">
              Early Access
            </span>
          </div>

          {/* Headline */}
          <div className="reveal reveal-delay-1 text-center mb-4">
            <h2
              className="text-display text-brand-brown leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
            >
              Be Part of the{' '}
              <em className="italic text-brand-orange">First Batch.</em>
            </h2>
          </div>

          <div className="reveal reveal-delay-2 text-center mb-10">
            <p className="text-brand-muted text-lg leading-relaxed">
              Moanfali Time Pass is preparing to bring a familiar Indian snack into a
              modern packaged format. Register your interest and be among the first
              to know when we launch.
            </p>
          </div>

          {/* Form card */}
          <div className="reveal reveal-delay-3">
            {status === 'success' ? (
              /* ─── Success state ─── */
              <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-display text-brand-brown text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-brand-muted text-base leading-relaxed">
                  We've received your interest and will get in touch with you shortly.
                  <br />
                  <span className="text-xs text-brand-muted/70 mt-2 block">
                    No order has been placed. This is an expression of interest only.
                  </span>
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-6 text-sm"
                >
                  Register Another
                </button>
              </div>
            ) : (
              /* ─── Form ─── */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-brand-beige bg-white shadow-md p-8 md:p-10 space-y-5"
              >
                {/* Name + City row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lc-name" className="block text-xs font-semibold text-brand-charcoal mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      id="lc-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input w-full rounded-xl border px-4 py-3 text-sm bg-brand-cream/50 transition-colors ${
                        errors.name ? 'border-red-400' : 'border-brand-beige'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="lc-city" className="block text-xs font-semibold text-brand-charcoal mb-1.5 uppercase tracking-wide">
                      City *
                    </label>
                    <input
                      id="lc-city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className={`form-input w-full rounded-xl border px-4 py-3 text-sm bg-brand-cream/50 transition-colors ${
                        errors.city ? 'border-red-400' : 'border-brand-beige'
                      }`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="lc-mobile" className="block text-xs font-semibold text-brand-charcoal mb-1.5 uppercase tracking-wide">
                    Mobile Number *
                  </label>
                  <input
                    id="lc-mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`form-input w-full rounded-xl border px-4 py-3 text-sm bg-brand-cream/50 transition-colors ${
                      errors.mobile ? 'border-red-400' : 'border-brand-beige'
                    }`}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="lc-email" className="block text-xs font-semibold text-brand-charcoal mb-1.5 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    id="lc-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`form-input w-full rounded-xl border px-4 py-3 text-sm bg-brand-cream/50 transition-colors ${
                      errors.email ? 'border-red-400' : 'border-brand-beige'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="lc-msg" className="block text-xs font-semibold text-brand-charcoal mb-1.5 uppercase tracking-wide">
                    Message <span className="text-brand-muted font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="lc-msg"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us anything — where you'd buy it, what price works for you, etc."
                    className="form-input w-full rounded-xl border border-brand-beige px-4 py-3 text-sm bg-brand-cream/50 resize-none"
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 accent-brand-orange flex-shrink-0"
                    />
                    <span className="text-xs text-brand-muted leading-relaxed">
                      I consent to Moanfali Time Pass storing and using my contact details to
                      follow up about this expression of interest. I understand this is not an order.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs mt-1 ml-7">{errors.consent}</p>}
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
                      Registering…
                    </span>
                  ) : 'Register Your Interest'}
                </button>

                <p className="text-center text-xs text-brand-muted">
                  This form registers your interest only. No payment, order, or commitment is involved.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
