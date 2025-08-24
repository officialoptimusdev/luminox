import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Listbox } from "@headlessui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+234", flag: "🇳🇬" },
];

export default function ContactFormModal({ trigger, open, onOpenChange }) {
  const [selected, setSelected] = useState(countries[0]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent
        className="max-w-5xl w-full p-0 rounded-2xl overflow-hidden [&>button:first-of-type]:hidden"
    
      >
        {/* Custom Close button */}
        <button
          onClick={() => onOpenChange && onOpenChange(false)}
          className="absolute top-4 right-4 rounded-full bg-white shadow p-1"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Left: Form */}
          <div className="bg-white p-8 space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Contact Us
              </p>
              <h2 className="text-3xl font-bold leading-snug">
                Get in touch with us. <br /> We&apos;re here to assist you.
              </h2>
            </div>

            <form className="space-y-4">
              {/* Full name */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
                />
              </div>

              {/* Phone with dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative">
                      <Listbox.Button className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-l-lg">
                        <span>{selected.flag}</span>
                        <span>{selected.code}</span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute mt-1 bg-white shadow rounded-lg z-10 text-[15px]">
                        {countries.map((c) => (
                          <Listbox.Option
                            key={c.code}
                            value={c}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          >
                            {c.flag} {c.code}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                  <input
                    type="tel"
                    placeholder="000-000-0000"
                    className="flex-1 px-4 py-3 rounded-r-lg bg-gray-100 focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Enter message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
                />
              </div>

              {/* Submit */}
              <Button className="rounded-full flex items-center gap-2 bg-[#2e6f73] hover:bg-[#265b5e] text-white px-6">
                Leave us a Message
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right: Contact info */}
          <div className="hidden md:block bg-white p-8 border-l relative">
            <h3 className="text-xs font-semibold text-[#007171] mb-4 uppercase tracking-wide">
              Contact Info
            </h3>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full gap-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="font-semibold">+1 (240)-553-7970</span>
              </div>
              <div className="flex items-center gap-3 text-xl">
                <FaFacebook className="cursor-pointer hover:opacity-80 text-[#3b5998]" />
                <FaInstagram className="cursor-pointer hover:opacity-80 text-pink-600" />
              </div>
            </div>

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1">
                  Email Address
                </span>
                luminoxhealth@gmail.com
              </p>

              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1">
                  Phone Number
                </span>
                240-553-7970
                <br />
                <span className="text-xs text-gray-500">
                  Assistance hours: Monday - Friday 6 am to 8 pm EST
                </span>
              </p>

              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1">
                  Address
                </span>
                3900 Westerre Parkway, Richmond, VA 23233 <br />
                16701 Melford Blvd, Bowie MD 20715
              </p>
            </div>

            <p className="mt-10 font-bold text-lg">
              We are always happy to assist you!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
