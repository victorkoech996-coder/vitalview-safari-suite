const SafariCarAnimation = () => (
  <div
    aria-hidden="true"
    className="hidden md:block absolute bottom-4 left-0 w-full pointer-events-none z-[1] overflow-hidden motion-reduce:hidden"
    style={{ height: "60px" }}
  >
    <div className="safari-car-track">
      <svg
        width="80"
        height="50"
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Dust particles */}
        <circle cx="6" cy="42" r="2.5" fill="#d4c4a8" className="dust dust-1" />
        <circle cx="2" cy="44" r="2" fill="#d4c4a8" className="dust dust-2" />
        <circle cx="10" cy="40" r="1.8" fill="#d4c4a8" className="dust dust-3" />

        {/* Body */}
        <rect x="14" y="22" width="54" height="14" rx="2" fill="#2E8B57" />
        {/* Pop-top roof */}
        <rect x="22" y="12" width="38" height="12" rx="2" fill="#246e46" />
        <rect x="24" y="14" width="34" height="2" rx="1" fill="#1a5234" />
        {/* Windows */}
        <rect x="24" y="24" width="10" height="8" rx="1" fill="#a8d5e2" />
        <rect x="36" y="24" width="10" height="8" rx="1" fill="#a8d5e2" />
        <rect x="48" y="24" width="10" height="8" rx="1" fill="#a8d5e2" />
        {/* Front grill */}
        <rect x="62" y="26" width="6" height="8" rx="1" fill="#1a5234" />
        <circle cx="65" cy="28" r="1" fill="#FFD700" />
        {/* Wheels */}
        <circle cx="22" cy="38" r="5" fill="#1a1a1a" />
        <circle cx="22" cy="38" r="2" fill="#555" />
        <circle cx="60" cy="38" r="5" fill="#1a1a1a" />
        <circle cx="60" cy="38" r="2" fill="#555" />
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
      @keyframes safari-drive {
        0% { transform: translateX(-100px); }
        100% { transform: translateX(calc(100vw + 20px)); }
      }
      .dust {
        opacity: 0;
        animation: dust-puff 1.2s ease-out infinite;
      }
      .dust-1 { animation-delay: 0s; }
      .dust-2 { animation-delay: 0.4s; }
      .dust-3 { animation-delay: 0.8s; }
      @keyframes dust-puff {
        0% { opacity: 0.7; transform: translate(0, 0) scale(1); }
        100% { opacity: 0; transform: translate(-12px, -4px) scale(1.6); }
      }
      @media (prefers-reduced-motion: reduce) {
        .safari-car-track, .dust { animation: none !important; }
      }
    `}</style>
  </div>
);

export default SafariCarAnimation;
