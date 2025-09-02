import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { blogHeroData } from "@/constants/data";
import { useState } from "react";

export default function BlogHero({
  icon = blogHeroData.icon,
  label = blogHeroData.label,
  title = blogHeroData.title,
  description = blogHeroData.description,
}) {
  const IconComponent = Icons[icon] || Icons.User2;
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log("Searching for:", query);
    alert(`Searching for: ${query}`);
  };

  return (
    <>

      <section className="relative w-full  overflow-hidden bg-gradient-to-b from-white/60 to-[#e3fcfb]/60">
        {/* Background image */}
        <div
          className="absolute inset-0 h-auto w-auto"
          style={{
            backgroundImage: `linear-gradient(rgba(55, 53, 59, 0.35), rgba(55,53,59,0.35)), url('/assets/blog_hero.jpg')`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // ensures proper scaling
          }}
        >
          <div className="absolute inset-0 bg-white/5" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-60">
          <div className="max-w-xl text-center lg:text-left space-y-9 mx-auto lg:mx-12">
            {/* Small Label */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/90 text-sm font-medium">
              <IconComponent className="h-4 w-4" />
              <span>{label}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h1>

            {/* Subtext */}
            <p className="text-white/80 text-base leading-relaxed">
              {description}
            </p>

            {/* Search Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-md w-full max-w-sm">
                <Icons.Search className="h-4 w-4 text-white/70" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search post"
                  className="ml-2 flex-1 bg-transparent outline-none text-white placeholder-white/70"
                />
              </div>
              <Button
                type="button"
                onClick={handleSearch}
                className="rounded-full px-6 py-2 shadow-md bg-white text-gray-800"
              >
                Search
                <Icons.Eye className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>





      </section>
      {/* Curved bottom (SVG) */}
      <div
        aria-hidden="true"
        className="hidden sm:block"
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          overflow: "hidden",
          width: "100%",
          zIndex: 2,
          lineHeight: 0,
        }}
      >
        <svg
          width="100%"
          height="120"
          viewBox="0 0 1440 375"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <defs>
            <linearGradient id="glassGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="rgba(227,252,251,0.85)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0 0L360 90C596.363 149.091 843.637 149.091 1080 90L1440 0L1660 265L1190 315C881.613 393.737 558.387 393.737 250 315L-220 265L0 0Z"
            fill="url(#glassGradient)"
          />
        </svg>
      </div>

    </>
  );
}
