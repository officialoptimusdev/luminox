import { SlidersHorizontal } from "lucide-react";


export default function AuthorizationConsentBanner() {
  return (
    <section
    className="relative bg-[#fff9ec] text-black rounded-xl overflow-hidden -mt-2"
      style={{
        backgroundImage: `url('/assets/release-info.png')`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-black/10 rounded-full px-4 py-1 text-sm mb-4">
            <SlidersHorizontal className="h-4 w-4" />
              <span>Forms</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 text-black">
          Authorization for Release of Information
          </h1>

          <p className="text-lg text-black/90 max-w-xl">
          Click “input fields” to fill and submit the form below.
          </p>
        </div>
      </div>
    </section>
  );
}
