// @ts-nocheck — Babel-standalone strips TS, no compile-time checking
// Primitives: logo, icons, small reusable components

function StevieMark({ size = 32 }) {
  return (
    <img
      src="favicon.png"
      alt="Stevie"
      width={size}
      height={size}
      style={{ display: "block", borderRadius: 8 }}
    />
  );
}

function Brand({ size = "default", homeHref = "index.html" }) {
  const isLg = size === "lg";
  const markSize = isLg ? 44 : 36;
  return (
    <a href={homeHref} className="brand" aria-label="Stevie home">
      <StevieMark size={markSize} />
      <span className="brand-name" style={isLg ? { fontSize: 32 } : null}>Stevie</span>
    </a>
  );
}

function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlaneIcon({ size = 28, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M3 17l5-1 4.5 4.5L17 19l-3 8 2.5 1.5 5.5-9.5 7-1.5c1.7-.4 3-1.5 3-2.5s-1.3-1.5-3-1.5l-6 .5L17 7l-2.5 1 2 6L11 16l-3-3.5L5.5 13 3 17z"
        fill={color}
      />
    </svg>
  );
}

function StarIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M8 1l2 4.7 5 .5-3.8 3.4 1.1 5-4.3-2.6-4.3 2.6 1.1-5L1 6.2l5-.5L8 1z" />
    </svg>
  );
}

function Globe({ size = 320 }) {
  // Halftone globe with route lines
  return (
    <svg viewBox="0 0 400 400" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="halftone" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1" fill="var(--cobalt-ink)" opacity="0.18" />
        </pattern>
        <clipPath id="globeClip">
          <circle cx="200" cy="200" r="180" />
        </clipPath>
      </defs>
      <circle cx="200" cy="200" r="180" fill="var(--paper)" stroke="var(--cobalt-ink)" strokeWidth="2" />
      <g clipPath="url(#globeClip)">
        <rect width="400" height="400" fill="url(#halftone)" />
        {/* Latitude lines */}
        <ellipse cx="200" cy="200" rx="180" ry="40" fill="none" stroke="var(--cobalt)" strokeWidth="1" opacity="0.45" />
        <ellipse cx="200" cy="200" rx="180" ry="100" fill="none" stroke="var(--cobalt)" strokeWidth="1" opacity="0.35" />
        <ellipse cx="200" cy="200" rx="180" ry="160" fill="none" stroke="var(--cobalt)" strokeWidth="1" opacity="0.25" />
        {/* Longitude */}
        <ellipse cx="200" cy="200" rx="40" ry="180" fill="none" stroke="var(--cobalt)" strokeWidth="1" opacity="0.4" />
        <ellipse cx="200" cy="200" rx="100" ry="180" fill="none" stroke="var(--cobalt)" strokeWidth="1" opacity="0.3" />
        {/* Continents abstract blobs */}
        <path d="M90 130 q40 -30 90 -10 q30 15 20 50 q-20 30 -60 25 q-50 -10 -50 -65z" fill="var(--cobalt)" opacity="0.85" />
        <path d="M220 180 q50 -20 90 15 q20 30 -10 60 q-40 20 -80 -5 q-30 -25 0 -70z" fill="var(--cobalt)" opacity="0.85" />
        <path d="M140 260 q40 -10 70 15 q10 25 -20 40 q-40 15 -60 -10 q-15 -25 10 -45z" fill="var(--cobalt)" opacity="0.85" />
        {/* Route dashed */}
        <path d="M110 160 Q200 60 290 220" stroke="var(--terracotta)" strokeWidth="2" strokeDasharray="3 5" fill="none" />
        <circle cx="110" cy="160" r="5" fill="var(--terracotta)" />
        <circle cx="290" cy="220" r="5" fill="var(--terracotta)" />
      </g>
    </svg>
  );
}

function PerforationDots() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "0 8px" }}>
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 4, height: 4, borderRadius: "50%", background: "var(--rule-strong)", display: "inline-block",
          }}
        />
      ))}
    </div>
  );
}

Object.assign(window, { StevieMark, Brand, Arrow, PlaneIcon, StarIcon, Globe, PerforationDots });
