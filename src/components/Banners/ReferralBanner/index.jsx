import React from "react";

export default function ReferralBanner() {
  return (
    <section
    className="relative bg-[#6d6a76] text-white rounded-xl overflow-hidden -mt-5"
      style={{
        backgroundImage: `linear-gradient(rgba(55, 53, 59, 0.75), rgba(55,53,59,0.75)), url('/assets/mission-two.png')`,
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-2 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-4 py-1 text-sm mb-4">
            Referral Form
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
            Referral for Services.
          </h1>

          <p className="text-lg text-white/90 max-w-xl">
            Please provide the following information in the form
          </p>
        </div>
      </div>
    </section>
  );
}
