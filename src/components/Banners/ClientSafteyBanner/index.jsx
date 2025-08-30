import { SlidersHorizontal } from "lucide-react";


export default function ClientSafteyBanner() {
  return (
    <section
    className="relative bg-[#1743ff] text-white rounded-xl overflow-hidden -mt-2"
      style={{
        backgroundImage: `url('/assets/safety-contract.png')`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-4 py-1 text-sm mb-4">
            <SlidersHorizontal className="h-4 w-4" />
              <span>Forms</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          Client Safety Contract
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
          Click “input fields” to fill and submit the form below.
          </p>
        </div>
      </div>
    </section>
  );
}
