import { Plus } from "lucide-react";

export default function GlassWaveOverlay({
  className = "",
  icon = <Plus className="w-6 h-6" />,
}) {
  return (
    <div
      className={`relative pointer-events-none overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(139.24deg, #FFFFFF -57.87%, rgba(109,109,109,0.24) 87.57%)",
        opacity: 1,
        clipPath:
          "path('M244 24L604 114C840.363 173.091 1087.64 173.091 1324 114L1684 24L1904 409L1434 459C1125.61 537.737 802.387 537.737 494 459L24 409L244 24Z')",
      }}
    >
      {/* Dotted texture + little blur to simulate frosted overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:16px_16px] backdrop-blur-[2px]" />

      {/* + Icon bottom-left */}
      <div className="absolute bottom-5 left-5 pointer-events-auto">
        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/40 backdrop-blur-[3px] text-white shadow-md">
          {icon}
        </div>
      </div>
    </div>
  );
}
