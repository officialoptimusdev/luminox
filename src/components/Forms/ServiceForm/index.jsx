import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const services = [
   { id: 1, name: "Web Development" },
   { id: 2, name: "Mobile App Development" },
   { id: 3, name: "UI/UX Design" },
   { id: 4, name: "SEO Optimization" },
];

const countries = [
   { code: "+1", flag: "🇺🇸" },
   { code: "+44", flag: "🇬🇧" },
   { code: "+234", flag: "🇳🇬" },
];

export default function ServiceForm() {
   const [selectedService, setSelectedService] = useState(null);

   const [selectedCountry, setSelectedCountry] = useState(countries[0]);

   return (
      <div className="max-w-lg mx-auto rounded-2xl bg-white shadow-sm p-4 space-y-4">
         <div>
            <h2 className="text-lg font-semibold">
               Have Questions or an Enquiry?
            </h2>
            <p className="text-sm text-gray-500">
               Stay updated with our latest news, tips, and exclusive offers.
            </p>
         </div>

         {/* Name + Email */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
               <Label htmlFor="fullName">Full Name</Label>
               <Input id="fullName" placeholder="John Smith" className="mt-1" />
            </div>
            <div>
               <Label htmlFor="email">Email Address</Label>
               <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="mt-1"
               />
            </div>
         </div>

         {/* Phone with dropdown */}
         <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
               Phone Number
            </label>
            <div className="flex">
               <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                  <div className="relative">
                     <Listbox.Button className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-l-lg">
                        <span>{selectedCountry.flag}</span>
                        <span>{selectedCountry.code}</span>
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

         {/* Service Dropdown */}
         <div>
            <Label>Service</Label>
            <p className="text-sm text-gray-500 mb-1">
               What service would you be interested in?
            </p>

            <Listbox value={selectedService} onChange={setSelectedService}>
               <div className="relative">
                  <Listbox.Button className="w-full flex items-center justify-between border rounded-xl bg-gray-50 px-3 py-2 text-gray-700">
                     <span className="flex items-center gap-2">
                        <Menu className="w-4 h-4 text-gray-500" />
                        {selectedService ? selectedService.name : "Select Service"}
                     </span>
                     <ChevronDown className="w-4 h-4 text-gray-500" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-xl z-10 overflow-hidden">
                     {services.map((service) => (
                        <Listbox.Option
                           key={service.id}
                           value={service}
                           className={({ active }) =>
                              `px-4 py-2 cursor-pointer ${active ? "bg-gray-100" : "bg-white"
                              }`
                           }
                        >
                           {service.name}
                        </Listbox.Option>
                     ))}
                  </Listbox.Options>
               </div>
            </Listbox>
         </div>

         {/* Submit Button */}
         <Button
            disabled
            className="w-full rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 text-gray-500"
         >
            Send
         </Button>

         <p className="text-xs text-center text-gray-400">
            By subscribing you agree to our Privacy Policies.
         </p>
      </div>
   );
}
