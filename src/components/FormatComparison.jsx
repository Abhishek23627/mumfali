import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const COMPARISONS = [
  {
    dimension: 'Packaging',
    loose: 'Open bin, newspaper cone, or unbranded bag',
    mtp: 'Sealed, hygienic 100g branded pouch',
  },
  {
    dimension: 'Portability',
    loose: 'Difficult to carry without spillage',
    mtp: 'Pocket-friendly, resealable pack format',
  },
  {
    dimension: 'Consistency',
    loose: 'Quantity and quality varies by vendor',
    mtp: 'Controlled roasting and sorting process',
  },
  {
    dimension: 'Retail Visibility',
    loose: 'Blends into generic bulk bins',
    mtp: 'Branded pack with shelf identity',
  },
  {
    dimension: 'Impulse-Buy Fit',
    loose: 'Depends heavily on vendor presence',
    mtp: 'Fixed price, packaged for kirana counters',
  },
  {
    dimension: 'Hygiene Perception',
    loose: 'Handled openly, no sealed protection',
    mtp: 'Sealed pack with no direct handling',
  },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"/>
    </svg>
  )
}
function DashIcon() {
  return (
    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd"/>
    </svg>
  )
}

export default function FormatComparison() {
  const ref = useScrollReveal()

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: '#FFF8EC' }}
    >
      <div ref={ref} className="container-wide">

        {/* Section label */}
        <div className="reveal flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-orange border-b-2 border-brand-gold pb-1">
            Format Evolution
          </span>
        </div>

        {/* Headline */}
        <div className="reveal reveal-delay-1 text-center mb-6">
          <h2
            className="text-display text-brand-brown leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
          >
            Why This Format?
          </h2>
          <p className="text-brand-muted text-lg mt-4 max-w-xl mx-auto">
            We're not reinventing the peanut — we're giving it a better home.
            This is a format evolution, not a product revolution.
          </p>
        </div>

        {/* Note */}
        <div className="reveal reveal-delay-2 flex justify-center mb-12">
          <p className="text-xs text-brand-muted bg-brand-beige/50 border border-brand-beige rounded-full px-5 py-2 max-w-lg text-center">
            * The following comparison is illustrative and based on commonly observed differences between loose and packaged peanut formats.
          </p>
        </div>

        {/* Comparison table */}
        <div className="reveal reveal-delay-3 overflow-x-auto rounded-2xl border border-brand-beige shadow-sm">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="bg-brand-beige/40 text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-brand-muted w-1/4">
                  Dimension
                </th>
                <th className="bg-brand-beige/20 text-left px-6 py-4 text-sm font-semibold text-brand-charcoal-soft w-[37.5%]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-400 flex-shrink-0"/>
                    Traditional Loose Format
                  </div>
                </th>
                <th className="bg-brand-brown text-left px-6 py-4 text-sm font-semibold text-brand-cream w-[37.5%]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-gold flex-shrink-0"/>
                    Moanfali Time Pass
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row, i) => (
                <tr
                  key={row.dimension}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-brand-charcoal">
                    {row.dimension}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 text-sm text-brand-muted">
                      <DashIcon />
                      <span>{row.loose}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2 text-sm text-brand-charcoal">
                      <CheckIcon />
                      <span>{row.mtp}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <div className="reveal reveal-delay-4 mt-6 text-center">
          <p className="text-xs text-brand-muted max-w-lg mx-auto">
            These are proposed format advantages based on the planned product design.
            Actual outcomes will depend on production execution and market reception.
          </p>
        </div>
      </div>
    </section>
  )
}
