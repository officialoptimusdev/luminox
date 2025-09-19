import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"; // Sonner import

const SERVICE_ID = "service_tmqmou9";
const TEMPLATE_ID = "template_hvlqhar";
const PUBLIC_KEY = "lyUt_nZqd8b7ZhhZV";

const services = [
  { id: 1, name: "Addiction Treatment" },
  { id: 2, name: "Child & Adolescent" },
  { id: 3, name: "Crisis Intervention" },
  { id: 4, name: "Follow-Up & Monitoring" },
];

const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+234", flag: "🇳🇬" },
];

export default function ServiceForm() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle form input updates
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Submit via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: `${selectedCountry.code} ${formData.phone}`,
      service: selectedService ? selectedService.name : "Not selected",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "" });
        setSelectedService(null);
        setSelectedCountry(countries[0]);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-lg mx-auto rounded-2xl bg-white shadow-sm p-4 space-y-4 md:block"
    >
      <div>
        <h2 className="text-lg font-semibold">Have Questions or an Enquiry?</h2>
        <p className="text-sm text-gray-500">
          Stay updated with our latest news, tips, and exclusive offers.
        </p>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="John Smith"
            className="mt-1"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="mt-1"
            value={formData.email}
            onChange={handleChange}
            required
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
            id="phone"
            type="tel"
            placeholder="000-000-0000"
            className="flex-1 px-4 py-3 rounded-r-lg bg-gray-100 focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
            required
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
        type="submit"
        disabled={loading}
        className={`w-full rounded-xl ${loading
            ? "bg-gray-300 text-gray-500"
            : "bg-[#4d8e92] text-white"
          }`}
      >
        {loading ? "Sending..." : "Send"}
      </Button>

      <p className="text-xs text-center text-gray-400">
        By subscribing you agree to our Privacy Policies.
      </p>
    </motion.form>
  );
}
