import React from 'react'

/**
 * SVG illustration of the MUNGFALI Time Pass 100g product pouch.
 * Designed to look like a premium Indian snack pouch.
 */
export default function PouchSVG({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 280 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label="MUNGFALI Time Pass 100g roasted peanut pouch"
    >
      {/* â”€â”€ Pouch body â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <defs>
        <linearGradient id="pouchGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#8B4E3A"/>
          <stop offset="35%"  stopColor="#6B3A2A"/>
          <stop offset="100%" stopColor="#3D1F10"/>
        </linearGradient>
        <linearGradient id="shineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.08)"/>
          <stop offset="40%"  stopColor="rgba(255,255,255,0.18)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.02)"/>
        </linearGradient>
        <linearGradient id="orangeBand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#C8961E"/>
          <stop offset="50%"  stopColor="#E07B2A"/>
          <stop offset="100%" stopColor="#C8961E"/>
        </linearGradient>
        <linearGradient id="topSeal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#4A2818"/>
          <stop offset="100%" stopColor="#6B3A2A"/>
        </linearGradient>
        <filter id="pouchShadow" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#1E0A04" floodOpacity="0.45"/>
        </filter>
        <clipPath id="pouchClip">
          <path d="M40,30 Q40,14 56,14 L224,14 Q240,14 240,30 L250,340 Q250,365 224,368 L56,368 Q30,368 30,340 Z"/>
        </clipPath>
      </defs>

      {/* Drop shadow container */}
      <g filter="url(#pouchShadow)">

        {/* Pouch body shape */}
        <path
          d="M40,30 Q40,14 56,14 L224,14 Q240,14 240,30 L250,340 Q250,365 224,368 L56,368 Q30,368 30,340 Z"
          fill="url(#pouchGrad)"
        />

        {/* Shine overlay */}
        <path
          d="M40,30 Q40,14 56,14 L224,14 Q240,14 240,30 L250,340 Q250,365 224,368 L56,368 Q30,368 30,340 Z"
          fill="url(#shineGrad)"
        />
      </g>

      {/* â”€â”€ Top heat-seal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <rect x="30" y="14" width="220" height="28" rx="4" fill="url(#topSeal)"/>
      {/* Tear notch */}
      <path d="M235,14 L245,20 L235,26 Z" fill="#C8961E" opacity="0.6"/>

      {/* â”€â”€ Orange accent band â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <rect x="30" y="78" width="220" height="8" fill="url(#orangeBand)" opacity="0.9"/>
      <rect x="30" y="294" width="220" height="8" fill="url(#orangeBand)" opacity="0.9"/>

      {/* â”€â”€ Logo area (top label block) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* Brand name bg */}
      <rect x="44" y="90" width="192" height="72" rx="6" fill="rgba(200,150,30,0.12)" stroke="#C8961E" strokeWidth="0.5" strokeOpacity="0.3"/>

      {/* MUNGFALI wordmark */}
      <text
        x="140" y="120"
        textAnchor="middle"
        fill="#FAF0DC"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 22, letterSpacing: 1 }}
      >
        MUNGFALI
      </text>

      {/* Decorative divider */}
      <line x1="70" y1="128" x2="210" y2="128" stroke="#C8961E" strokeWidth="0.8" strokeOpacity="0.6"/>

      {/* TIME PASS sub-wordmark */}
      <text
        x="140" y="150"
        textAnchor="middle"
        fill="#C8961E"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: 6 }}
      >
        TIME PASS
      </text>

      {/* â”€â”€ Centre peanut illustration â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {/* Large peanut pod â€“ left */}
      <g transform="translate(68, 175)">
        <ellipse cx="18" cy="22" rx="16" ry="20" fill="#C8961E" opacity="0.85"/>
        <ellipse cx="18" cy="58" rx="16" ry="20" fill="#C8961E" opacity="0.85"/>
        <rect x="4" y="38" width="28" height="5" rx="2.5" fill="#6B3A2A" opacity="0.5"/>
        <ellipse cx="18" cy="22" rx="10" ry="13" fill="#E07B2A" opacity="0.7"/>
        <ellipse cx="18" cy="58" rx="10" ry="13" fill="#E07B2A" opacity="0.7"/>
        <ellipse cx="13" cy="16" rx="3.5" ry="2" fill="rgba(255,255,255,0.25)" transform="rotate(-20 13 16)"/>
      </g>

      {/* Large peanut pod â€“ right */}
      <g transform="translate(174, 175)">
        <ellipse cx="18" cy="22" rx="16" ry="20" fill="#C8961E" opacity="0.85"/>
        <ellipse cx="18" cy="58" rx="16" ry="20" fill="#C8961E" opacity="0.85"/>
        <rect x="4" y="38" width="28" height="5" rx="2.5" fill="#6B3A2A" opacity="0.5"/>
        <ellipse cx="18" cy="22" rx="10" ry="13" fill="#E07B2A" opacity="0.7"/>
        <ellipse cx="18" cy="58" rx="10" ry="13" fill="#E07B2A" opacity="0.7"/>
        <ellipse cx="13" cy="16" rx="3.5" ry="2" fill="rgba(255,255,255,0.25)" transform="rotate(-20 13 16)"/>
      </g>

      {/* Small peanut pod â€“ centre */}
      <g transform="translate(118, 185) scale(0.85)">
        <ellipse cx="22" cy="24" rx="18" ry="22" fill="#C8961E" opacity="0.9"/>
        <ellipse cx="22" cy="66" rx="18" ry="22" fill="#C8961E" opacity="0.9"/>
        <rect x="6" y="42" width="32" height="6" rx="3" fill="#6B3A2A" opacity="0.5"/>
        <ellipse cx="22" cy="24" rx="11" ry="14" fill="#E07B2A" opacity="0.8"/>
        <ellipse cx="22" cy="66" rx="11" ry="14" fill="#E07B2A" opacity="0.8"/>
        <ellipse cx="16" cy="17" rx="4" ry="2.5" fill="rgba(255,255,255,0.25)" transform="rotate(-25 16 17)"/>
      </g>

      {/* Steam / roasted dots */}
      {[100,130,165,195].map((x, i) => (
        <circle key={i} cx={x} cy={270} r={2.5} fill="#C8961E" opacity={0.3 + i * 0.08}/>
      ))}

      {/* â”€â”€ Bottom info panel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <rect x="44" y="304" width="192" height="50" rx="4" fill="rgba(0,0,0,0.15)"/>

      {/* Net weight */}
      <text
        x="140" y="322"
        textAnchor="middle"
        fill="#FAF0DC"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 1 }}
      >
        NET WT. 100g
      </text>

      {/* MRP line */}
      <text
        x="140" y="340"
        textAnchor="middle"
        fill="#C8961E"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: 0.5 }}
      >
        ROASTED IN-SHELL PEANUTS
      </text>

      {/* Proposed MRP tag */}
      <rect x="88" y="348" width="104" height="18" rx="9" fill="#C8961E" opacity="0.9"/>
      <text
        x="140" y="361"
        textAnchor="middle"
        fill="#FAF0DC"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 9, letterSpacing: 1 }}
      >
        MRP â‚¹20â€“â‚¹30
      </text>

      {/* â”€â”€ Bottom seal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <path
        d="M30,340 Q30,368 56,368 L224,368 Q250,368 250,340 L248,355 Q248,372 224,375 L56,375 Q32,375 32,355 Z"
        fill="#3D1F10"
        opacity="0.6"
      />

      {/* Left edge crinkle highlight */}
      <path
        d="M30,60 Q26,100 28,180 Q26,240 30,310"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Right edge crinkle */}
      <path
        d="M250,60 Q254,100 252,180 Q254,240 250,310"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
