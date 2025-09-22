import SearchBar from "@/components/Atoms/SearchBar";
import { blogHeroData } from "@/constants/data";
import * as Icons from "lucide-react";


export default function BlogHero({
  query,
  setQuery,
  icon = blogHeroData.icon,
  label = blogHeroData.label,
  title = blogHeroData.title,
  description = blogHeroData.description,
}) {
  const IconComponent = Icons[icon] || Icons.User2;

  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-white/60 to-[#e3fcfb]/60">
        {/* Background image */}
        <div
          className="absolute inset-0 h-auto w-auto"
          style={{
            backgroundImage: `linear-gradient(rgba(55, 53, 59, 0.35), rgba(55,53,59,0.35)), url('/assets/blog_hero.jpg')`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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

            {/*  Reusable SearchBar */}
            <SearchBar query={query} setQuery={setQuery} />

          </div>
        </div>
      </section>

    </>
  );
}
