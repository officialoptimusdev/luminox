import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover } from "@headlessui/react";
import MegaMenuCard from "../../Cards/MegaMenuCard";
import ContactFormModal from "../../Modals/ContactFormModal";
import { GiHeartPlus } from "react-icons/gi";

const Navbar = ({ isDesktop }) => {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef(null); // ref for close delay
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
    const handlePop = () => setActivePath(window.location.pathname);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Forms", href: "/forms" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  // Prevent body scroll when mobile sheet is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="w-full sticky top-0 z-50 md:bg-[#e6f0f0]/65 backdrop-blur-md mt-2 border-none">
        <div className="container mx-auto px-4 flex items-center justify-between h-full relative">
          {/* LEFT: Logo + nav */}
          <div className="flex items-center">
            <a href="/" className="flex items-center h-20 shrink-0">
              <img
                src="/assets/luminox_logo_main.png"
                alt="Luminox logo"
                className="block h-12 md:h-14 w-auto object-contain shrink-0"
              />
              <span className="hidden md:inline ml-3 text-lg md:text-2xl font-semibold tracking-tight text-[#1c1c1c]">
                Luminox
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center bg-white/70 rounded-full gap-3 px-3 py-4 ml-3">
              {navItems.map((item) =>
                item.name === "Services" && isDesktop ? (
                  <Popover
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                        timeoutRef.current = null;
                      }
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      timeoutRef.current = setTimeout(() => {
                        setServicesOpen(false);
                      }, 150);
                    }}
                  >
                    <>
                      <Popover.Button
                        as="a"
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = item.href;
                        }}
                        className={`relative inline-flex items-center gap-1 text-sm font-medium px-4 py-2 transition-colors rounded-full
              ${activePath === item.href
                            ? "bg-[#007171] text-white"
                            : "text-gray-700 hover:bg-[#abcdcb] hover:text-white"
                          }`}
                      >
                        {item.name}
                        {servicesOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Popover.Button>

                      {servicesOpen && (
                        <Popover.Panel
                          static
                          className="absolute -right-80 top-full mt-2 z-50"
                        >
                          <div className="container mx-auto px-4">
                            <MegaMenuCard />
                          </div>
                        </Popover.Panel>
                      )}
                    </>
                  </Popover>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative text-sm font-medium px-4 py-2 transition-colors rounded-full text-nowrap
          ${activePath === item.href
                        ? "bg-[#007171] text-white"
                        : "text-gray-700 hover:bg-[#abcdcb] hover:text-white"
                      }`}
                  >
                    {item.name}
                  </a>
                )
              )}

              <ContactFormModal
                trigger={
                  <button className="text-sm text-gray-700 font-medium hover:bg-[#abcdcb] hover:text-white transition-colors px-4 py-2 rounded-full text-nowrap">
                    Contact Us
                  </button>
                }
              />
            </div>

          </div>

          {/* RIGHT: Desktop buttons */}
          <div className="hidden md:flex items-center bg-white/70 rounded-full px-4 space-x-3">
            <a
              href="https://portal.kareo.com/app/new/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="rounded-full px-6 py-3 hover:bg-transparent text-[#004d4d] flex items-center"
              >
                Patient Portal
                <GiHeartPlus className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <a
              href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full flex items-center gap-2 bg-[#2e6f73] hover:bg-[#265b5e] text-white px-3 py-6 mt-2 mb-2">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Mobile drawer */}
          <div className="flex items-center md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label={open ? "Close menu" : "Open menu"}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-[#3E757B] text-white focus:outline-none"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="fixed inset-0 left-0 top-0 z-50 w-full max-w-none h-screen bg-[#2e6f73] text-white p-6 rounded-none overflow-y-auto [&>button:first-of-type]:hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a href="/" className="flex items-center h-20 shrink-0">
                      <img
                        src="/assets/logo-icon.png"
                        alt="Luminox logo"
                        className="h-10 w-auto object-contain"
                      />
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    {activePath && (
                      <span className="bg-white text-[#2e6f73] rounded-md px-3 py-1 text-sm font-semibold">
                        {
                          navItems.find((item) => item.href === activePath)
                            ?.name
                        }
                      </span>
                    )}

                    <button
                      aria-label="Close menu"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-black text-white focus:outline-none"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <nav className="space-y-0">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 font-semibold text-md text-white transition-colors hover:text-gray-200"
                    >
                      {item.name}
                    </a>
                  ))}

                  <button
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => setContactOpen(true), 300);
                    }}
                    className="block py-0 font-semibold text-md text-left w-full text-white text-nowrap"
                  >
                    Contact Us
                  </button>
                </nav>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <div className="rounded-xl bg-[#234e4f]/95 p-4">
                    <p className="text-xs uppercase opacity-80">
                      Business Hours
                    </p>
                    <div className="mt-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-sm">Monday - Friday</span>
                        <span className="text-sm font-semibold">9am - 5pm</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm">Saturday</span>
                        <span className="text-sm font-semibold">9am - 2pm</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#234e4f]/95 p-4">
                    <p className="text-xs uppercase opacity-80">
                      Email Address
                    </p>
                    <p className="mt-2 text-sm">
                      contact@luminoxmentalhealth.com
                    </p>

                    <a
                      href="tel:+12405537970"
                      className="mt-3 block w-full text-center bg-white/10 py-3 rounded-md font-semibold"
                    >
                      +1 (240)-553-7970
                    </a>
                  </div>

                  <a href="https://portal.kareo.com/app/new/login">
                    <Button
                      variant="outline"
                      className="w-full rounded-md mt-3 mb-2 text-white"
                      onClick={() => setOpen(false)}
                    >
                      Patient Portal
                    </Button>
                  </a>

                  <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680">
                    <Button
                      className="w-full rounded-md flex items-center justify-center gap-2 bg-black/20 hover:bg-black/30"
                      onClick={() => setOpen(false)}
                    >
                      Book Appointment
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>

                <div className="mt-2">
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="#"
                      className="h-10 w-10 bg-[#0866ff] hover:bg-[#222425] flex items-center justify-center rounded-full text-white"
                    >
                      <FaFacebookF size={14} />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 bg-[#d53c6c] hover:bg-[#222425] flex items-center justify-center rounded-full text-white"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <ContactFormModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Navbar;
