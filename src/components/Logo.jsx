import React from 'react'

/**
 * Mungfali Time Pass brand logo.
 * variant: 'dark' (default) | 'light' | 'icon-only'
 * size: number (height px, default 44)
 */
export default function Logo({ variant = 'dark', size = 44, className = '' }) {
  const textColor = variant === 'light' ? '#FAF0DC' : '#6B3A2A'
  const subColor  = variant === 'light' ? 'rgba(250,240,220,0.75)' : '#8B4E3A'

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} aria-label="Mungfali Time Pass">
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle cx="22" cy="22" r="22" fill="#6B3A2A"/>
        {/* Peanut pod shape - outer shell */}
        <ellipse cx="22" cy="17" rx="7.5" ry="5" fill="#C8961E" opacity="0.9"/>
        <ellipse cx="22" cy="27" rx="7.5" ry="5" fill="#C8961E" opacity="0.9"/>
        {/* Middle notch */}
        <rect x="15" y="21" width="14" height="2" fill="#6B3A2A"/>
        {/* Peanut seeds inside */}
        <ellipse cx="22" cy="17" rx="4.5" ry="3" fill="#E07B2A"/>
        <ellipse cx="22" cy="27" rx="4.5" ry="3" fill="#E07B2A"/>
        {/* Highlight shine */}
        <ellipse cx="19.5" cy="15.5" rx="1.5" ry="1" fill="rgba(255,255,255,0.3)" transform="rotate(-20 19.5 15.5)"/>
        <ellipse cx="19.5" cy="25.5" rx="1.5" ry="1" fill="rgba(255,255,255,0.3)" transform="rotate(-20 19.5 25.5)"/>
      </svg>

      {/* Wordmark */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none">
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: size * 0.38,
              color: textColor,
              letterSpacing: '0.01em',
              lineHeight: 1.1,
            }}
          >
            Mungfali
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: size * 0.24,
              color: subColor,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            Time Pass
          </span>
        </div>
      )}
    </div>
  )
}
