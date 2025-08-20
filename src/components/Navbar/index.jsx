import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#" },
    { name: "Forms", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0d2d2d]/90 md:bg-[#e6f0f0]/60 backdrop-blur-md mt-2">
      {/* make the bar tall enough to support a big logo/wordmark */}
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* LEFT: Logo (icon + wordmark) + nav */}
        <div className="flex items-center">
          <a href="/" className="flex items-center h-20 shrink-0">
            {/* Your portrait PNG (icon) */}
            <img
              src="/assets/luminox_logo_main.png"
              alt="Luminox logo"
              className="block h-12 md:h-14 w-auto object-contain shrink-0"
            />
            {/* Wordmark: remove this <span> if your PNG already includes 'Luminox' text */}
            <span className="ml-3 text-lg md:text-2xl font-semibold tracking-tight text-[#1c1c1c]">
              Luminox
            </span>
          </a>

          {/* Desktop nav pill */}
          <div className="hidden md:flex items-center bg-white/70 rounded-full px-4 py-4 ml-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-[#007171] transition-colors first:pl-0 last:pr-0 px-4"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: Desktop buttons pill */}
        <div className="hidden md:flex items-center bg-white/70 rounded-full p-4 space-x-2">
          <Button
            variant="ghost"
            className="rounded-full px-6 hover:bg-transparent text-[#004d4d]"
          >
            Patient Portal
          </Button>
          <Button className="rounded-full flex items-center gap-2 bg-[#2e6f73] hover:bg-[#265b5e] text-white px-6">
            Book Appointment
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="flex md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-6 space-y-6 bg-[#0d2d2d] text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="/assets/luminox_logo_main.png"
                  alt="Luminox logo"
                  className="h-10 w-auto object-contain"
                />
                <span className="ml-2 text-xl font-semibold">Luminox</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 font-medium text-lg"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 border-t border-white/20 space-y-4">
              <Button
                variant="outline"
                className="w-full rounded-full border-white text-white"
                onClick={() => setOpen(false)}
              >
                Patient Portal
              </Button>
              <Button
                className="w-full rounded-full flex items-center justify-center gap-2 bg-[#102425] hover:bg-[#265b5e]"
                onClick={() => setOpen(false)}
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
