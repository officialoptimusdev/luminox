import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+234", flag: "🇳🇬" },
];

export default function ContactForm() {
  const [selected, setSelected] = useState(countries[0]);

  return (
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
  );
}
