import { Plus } from "lucide-react";

export default function GlassWaveOverlay({
  className = "",
  icon = <Plus className="w-8 h-8"   strokeWidth="5px"/>,
}) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1880 555"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="glassGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="30%" stopColor="rgba(255,255,255,0.28)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.14)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* Denser dot pattern */}
          <pattern id="dotPattern" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2.5" fill="#ffffff" fillOpacity="0.1" />

          </pattern>

          {/* clip path for the wave shape */}
          <clipPath id="waveClip">
            <path d="M244 24L604 114C840.363 173.091 1087.64 173.091 1324 114L1684 24L1904 409L1434 459C1125.61 537.737 802.387 537.737 494 459L24 409L244 24Z" />
          </clipPath>
        </defs>

        {/* Gradient filled wave (clipped) */}
        <g clipPath="url(#waveClip)" className="backdrop-blur-sm">
          <rect width="100%" height="100%" fill="url(#glassGradient)" />
        </g>

        {/* Dots drawn on top of the gradient within the same clip path */}
        <g clipPath="url(#waveClip)" className="pointer-events-none" style={{ mixBlendMode: "screen" }}>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </g>

        {/* Subtle stroke for the edge */}
        <path
          d="M244 24L604 114C840.363 173.091 1087.64 173.091 1324 114L1684 24L1904 409L1434 459C1125.61 537.737 802.387 537.737 494 459L24 409L244 24Z"
          fill="none"
          fillOpacity="0.1"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          className="pointer-events-none"
        />
      </svg>

      {/* + Icon bottom-left (clickable) */}
      <div className="absolute bottom-24 left-6 z-10 pointer-events-auto">
        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white shadow-md">
          {icon}
        </div>
      </div>
    </div>
  );
}