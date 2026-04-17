const SafariCarAnimation = () => (
  <div
    aria-hidden="true"
    className="hidden md:block absolute bottom-4 left-0 w-full pointer-events-none z-[1] overflow-hidden motion-reduce:hidden"
    style={{ height: "90px" }}
  >
    <div className="safari-car-track">
      {/* Ground shadow */}
      <div className="car-shadow" />

      <svg
        width="140"
        height="80"
        viewBox="0 0 140 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="car-svg"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3aa56b" />
            <stop offset="55%" stopColor="#2E8B57" />
            <stop offset="100%" stopColor="#1d5e3a" />
          </linearGradient>
          <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#246e46" />
            <stop offset="100%" stopColor="#163f29" />
          </linearGradient>
          <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cfe9f1" />
            <stop offset="50%" stopColor="#7fb6c8" />
            <stop offset="100%" stopColor="#3a6f80" />
          </linearGradient>
          <linearGradient id="windshieldGlare" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="headlight" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff8c4" />
            <stop offset="60%" stopColor="#FFD24A" />
            <stop offset="100%" stopColor="#c98a10" />
          </radialGradient>
          <radialGradient id="headBeam" cx="0" cy="0.5" r="1">
            <stop offset="0%" stopColor="#fff5b8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fff5b8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tireGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <radialGradient id="rim" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#d8d8d8" />
            <stop offset="70%" stopColor="#888" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </radialGradient>
        </defs>

        {/* ====== Headlight beam (forward glow) ====== */}
        <ellipse cx="128" cy="50" rx="16" ry="6" fill="url(#headBeam)" opacity="0.6" />

        {/* ====== Chassis / underbody ====== */}
        <rect x="18" y="55" width="106" height="6" rx="2" fill="#1a1a1a" />
        <rect x="14" y="56" width="6" height="4" rx="1" fill="#2d2d2d" />
        <rect x="120" y="56" width="6" height="4" rx="1" fill="#2d2d2d" />

        {/* ====== Main body ====== */}
        <path
          d="M20 56 L20 38 Q20 34 24 34 L110 34 Q116 34 119 38 L124 46 L124 56 Z"
          fill="url(#bodyGrad)"
          stroke="#143d27"
          strokeWidth="0.6"
        />

        {/* Body trim line */}
        <line x1="22" y1="48" x2="122" y2="48" stroke="#143d27" strokeWidth="0.5" opacity="0.6" />

        {/* ====== Pop-top safari roof (raised) ====== */}
        <path
          d="M30 34 L30 18 Q30 14 34 14 L96 14 Q100 14 100 18 L100 34 Z"
          fill="url(#roofGrad)"
          stroke="#0e2e1c"
          strokeWidth="0.6"
        />
        {/* Roof rack rails */}
        <rect x="28" y="13" width="74" height="1.8" rx="0.9" fill="#1a1a1a" />
        <rect x="32" y="11" width="2" height="3" fill="#1a1a1a" />
        <rect x="96" y="11" width="2" height="3" fill="#1a1a1a" />
        {/* Antenna */}
        <line x1="100" y1="14" x2="106" y2="4" stroke="#1a1a1a" strokeWidth="0.8" />
        <circle cx="106" cy="4" r="1" fill="#FFD700" />

        {/* ====== Pop-top window (open viewing roof) ====== */}
        <rect x="34" y="20" width="62" height="12" rx="1.5" fill="url(#windowGrad)" />
        <rect x="34" y="20" width="62" height="3" fill="#ffffff" opacity="0.25" />
        {/* Window dividers */}
        <line x1="50" y1="20" x2="50" y2="32" stroke="#0e2e1c" strokeWidth="0.6" />
        <line x1="65" y1="20" x2="65" y2="32" stroke="#0e2e1c" strokeWidth="0.6" />
        <line x1="80" y1="20" x2="80" y2="32" stroke="#0e2e1c" strokeWidth="0.6" />

        {/* ====== Tourist heads peeking from pop-top ====== */}
        <g className="tourist tourist-1">
          <circle cx="42" cy="18" r="2.8" fill="#d4a373" />
          <path d="M39.5 16 Q42 13 44.5 16 L44.5 18 L39.5 18 Z" fill="#5a3e1f" />
          <rect x="40" y="20" width="4" height="2" fill="#c44" />
        </g>
        <g className="tourist tourist-2">
          <circle cx="58" cy="18.5" r="2.6" fill="#e8c9a0" />
          <ellipse cx="58" cy="15.5" rx="3.5" ry="1.2" fill="#c8b78a" />
          <rect x="56.2" y="20.5" width="3.6" height="2" fill="#3a6f80" />
        </g>
        <g className="tourist tourist-3">
          <circle cx="73" cy="18" r="2.7" fill="#a87850" />
          <path d="M70 16 Q73 13 76 16 L76 17 L70 17 Z" fill="#1a1a1a" />
          {/* Tiny binoculars */}
          <rect x="71" y="17.5" width="4" height="1.5" rx="0.4" fill="#1a1a1a" />
        </g>
        <g className="tourist tourist-4">
          <circle cx="88" cy="18.5" r="2.5" fill="#c89171" />
          <path d="M85.5 16.5 Q88 13.5 90.5 16.5 L90.5 17.5 L85.5 17.5 Z" fill="#7a5530" />
        </g>

        {/* ====== Side windows ====== */}
        <g>
          <rect x="24" y="38" width="14" height="10" rx="1.2" fill="url(#windowGrad)" />
          <rect x="40" y="38" width="14" height="10" rx="1.2" fill="url(#windowGrad)" />
          <rect x="56" y="38" width="14" height="10" rx="1.2" fill="url(#windowGrad)" />
          <rect x="72" y="38" width="14" height="10" rx="1.2" fill="url(#windowGrad)" />
          <rect x="88" y="38" width="14" height="10" rx="1.2" fill="url(#windowGrad)" />
          {/* Windshield (slanted) */}
          <path d="M104 38 L116 38 Q120 38 122 42 L122 48 L104 48 Z" fill="url(#windowGrad)" />
          {/* Windshield glare */}
          <path d="M104 38 L116 38 Q120 38 122 42 L104 42 Z" fill="url(#windshieldGlare)" />
          {/* Window glares */}
          <rect x="24" y="38.5" width="14" height="2" fill="#ffffff" opacity="0.35" />
          <rect x="40" y="38.5" width="14" height="2" fill="#ffffff" opacity="0.35" />
          <rect x="56" y="38.5" width="14" height="2" fill="#ffffff" opacity="0.35" />
          <rect x="72" y="38.5" width="14" height="2" fill="#ffffff" opacity="0.35" />
          <rect x="88" y="38.5" width="14" height="2" fill="#ffffff" opacity="0.35" />
        </g>

        {/* ====== Doors / handles ====== */}
        <line x1="55" y1="48" x2="55" y2="56" stroke="#0e2e1c" strokeWidth="0.5" />
        <line x1="71" y1="48" x2="71" y2="56" stroke="#0e2e1c" strokeWidth="0.5" />
        <line x1="87" y1="48" x2="87" y2="56" stroke="#0e2e1c" strokeWidth="0.5" />
        <rect x="46" y="50.5" width="4" height="0.9" rx="0.4" fill="#0e2e1c" />
        <rect x="62" y="50.5" width="4" height="0.9" rx="0.4" fill="#0e2e1c" />
        <rect x="78" y="50.5" width="4" height="0.9" rx="0.4" fill="#0e2e1c" />

        {/* ====== Front grill / bumper ====== */}
        <rect x="118" y="50" width="8" height="6" rx="1" fill="#0e2e1c" />
        <rect x="118" y="51.5" width="8" height="0.6" fill="#3aa56b" opacity="0.7" />
        <rect x="118" y="53.5" width="8" height="0.6" fill="#3aa56b" opacity="0.7" />
        {/* Headlights */}
        <circle cx="122" cy="48" r="2.2" fill="url(#headlight)" />
        <circle cx="122" cy="48" r="0.8" fill="#fff" opacity="0.9" />
        {/* Bull bar */}
        <path d="M116 56 Q122 60 128 56" stroke="#1a1a1a" strokeWidth="1.4" fill="none" />
        <line x1="118" y1="57" x2="118" y2="60" stroke="#1a1a1a" strokeWidth="0.8" />
        <line x1="126" y1="57" x2="126" y2="60" stroke="#1a1a1a" strokeWidth="0.8" />

        {/* ====== Rear ====== */}
        <rect x="18" y="42" width="3" height="3" rx="0.5" fill="#c43a3a" />
        <rect x="18" y="50" width="3" height="2" rx="0.5" fill="#FFD24A" />

        {/* ====== Spare tire on back ====== */}
        <circle cx="16" cy="48" r="4" fill="#0a0a0a" />
        <circle cx="16" cy="48" r="2" fill="url(#rim)" />

        {/* ====== Wheels ====== */}
        <g className="wheel wheel-front">
          <circle cx="104" cy="60" r="8" fill="url(#tireGrad)" />
          <circle cx="104" cy="60" r="4.5" fill="url(#rim)" />
          <circle cx="104" cy="60" r="1.2" fill="#1a1a1a" />
          {/* Spokes */}
          <line x1="104" y1="56" x2="104" y2="64" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="100" y1="60" x2="108" y2="60" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="101.2" y1="57.2" x2="106.8" y2="62.8" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="106.8" y1="57.2" x2="101.2" y2="62.8" stroke="#1a1a1a" strokeWidth="0.8" />
        </g>
        <g className="wheel wheel-rear">
          <circle cx="36" cy="60" r="8" fill="url(#tireGrad)" />
          <circle cx="36" cy="60" r="4.5" fill="url(#rim)" />
          <circle cx="36" cy="60" r="1.2" fill="#1a1a1a" />
          <line x1="36" y1="56" x2="36" y2="64" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="32" y1="60" x2="40" y2="60" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="33.2" y1="57.2" x2="38.8" y2="62.8" stroke="#1a1a1a" strokeWidth="0.8" />
          <line x1="38.8" y1="57.2" x2="33.2" y2="62.8" stroke="#1a1a1a" strokeWidth="0.8" />
        </g>

        {/* ====== Mud flaps ====== */}
        <rect x="26" y="64" width="4" height="4" rx="0.6" fill="#0a0a0a" />
        <rect x="110" y="64" width="4" height="4" rx="0.6" fill="#0a0a0a" />

        {/* ====== "VITALVIEW SAFARIS" decal ====== */}
        <rect x="42" y="51" width="40" height="3.5" rx="0.5" fill="#FFD24A" opacity="0.95" />
        <text
          x="62"
          y="53.7"
          fontSize="2.6"
          fontWeight="700"
          fill="#1d5e3a"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.3"
        >
          VITALVIEW SAFARIS
        </text>

        {/* ====== Dust particles behind wheels ====== */}
        <g>
          <circle cx="28" cy="66" r="2.4" fill="#d4c4a8" className="dust dust-1" />
          <circle cx="24" cy="68" r="2" fill="#c9b797" className="dust dust-2" />
          <circle cx="20" cy="66" r="1.8" fill="#d4c4a8" className="dust dust-3" />
          <circle cx="16" cy="69" r="1.4" fill="#bca785" className="dust dust-4" />
          <circle cx="12" cy="67" r="1.2" fill="#d4c4a8" className="dust dust-5" />
        </g>
      </svg>
    </div>

    <style>{`
      .safari-car-track {
        position: absolute;
        bottom: 0;
        left: 0;
        will-change: transform;
        animation: safari-drive 25s linear infinite;
      }
      .car-svg {
        animation: car-bob 0.5s ease-in-out infinite;
        transform-origin: center bottom;
        filter: drop-shadow(0 4px 6px rgba(0,0,0,0.35));
      }
      .car-shadow {
        position: absolute;
        bottom: 2px;
        left: 14px;
        width: 110px;
        height: 6px;
        background: radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%);
        animation: shadow-pulse 0.5s ease-in-out infinite;
      }
      @keyframes safari-drive {
        0% { transform: translateX(-160px); }
        100% { transform: translateX(calc(100vw + 40px)); }
      }
      @keyframes car-bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-1px); }
      }
      @keyframes shadow-pulse {
        0%, 100% { transform: scaleX(1); opacity: 0.7; }
        50% { transform: scaleX(0.95); opacity: 0.55; }
      }
      .wheel {
        transform-origin: center;
        transform-box: fill-box;
        animation: wheel-spin 0.4s linear infinite;
      }
      .wheel-front { transform-origin: 104px 60px; }
      .wheel-rear { transform-origin: 36px 60px; }
      @keyframes wheel-spin {
        to { transform: rotate(360deg); }
      }
      .tourist {
        transform-origin: center bottom;
        animation: tourist-bob 0.5s ease-in-out infinite;
      }
      .tourist-2 { animation-delay: 0.1s; }
      .tourist-3 { animation-delay: 0.2s; }
      .tourist-4 { animation-delay: 0.15s; }
      @keyframes tourist-bob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-0.8px); }
      }
      .dust {
        opacity: 0;
        animation: dust-puff 1.4s ease-out infinite;
      }
      .dust-1 { animation-delay: 0s; }
      .dust-2 { animation-delay: 0.25s; }
      .dust-3 { animation-delay: 0.5s; }
      .dust-4 { animation-delay: 0.75s; }
      .dust-5 { animation-delay: 1s; }
      @keyframes dust-puff {
        0% { opacity: 0.75; transform: translate(0, 0) scale(0.8); }
        100% { opacity: 0; transform: translate(-18px, -6px) scale(1.8); }
      }
      @media (prefers-reduced-motion: reduce) {
        .safari-car-track, .dust, .wheel, .tourist, .car-svg, .car-shadow {
          animation: none !important;
        }
      }
    `}</style>
  </div>
);

export default SafariCarAnimation;
