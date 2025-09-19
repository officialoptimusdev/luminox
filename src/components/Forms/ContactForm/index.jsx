import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+234", flag: "🇳🇬" },
];

export default function ContactForm({ onSuccess }) {
  const [selected, setSelected] = useState(countries[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setLoading(true);

    const mailchimpUrl =
      "https://luminoxmentalhealth.us9.list-manage.com/subscribe/post?u=cd904721bffa081f0beb50882&id=e738859bda&f_id=0093c2e1f0";

    const data = new URLSearchParams();
    data.append("EMAIL", formData.email);
    data.append("PHONE", `${selected.code}${formData.phone}`);
    data.append("MMERGE1", formData.fullName);
    data.append("MMERGE2", formData.message);

    console.log("Submitting form...");
    console.log("Selected country:", selected);
    console.log("Form data:", formData);
    console.log("Payload being sent to Mailchimp:", Object.fromEntries(data));

    try {
      await fetch(mailchimpUrl, {
        method: "POST",
        body: data,
        mode: "no-cors", // response is opaque
      });

      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      setErrors({});

      // 🔹 Only call onSuccess if parent passed a function
      if (typeof onSuccess === "function") {
        onSuccess(true); // pass a truthy value so modal can close
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full name */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Smith"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
        />
        {errors.fullName && (
          <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
        )}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone (without country code)" // updated
            className="flex-1 px-4 py-3 rounded-r-lg bg-gray-100 focus:outline-none"
          />

        </div>
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="rounded-full flex items-center gap-2 bg-[#2e6f73] hover:bg-[#265b5e] text-white px-6"
      >
        {loading ? "Sending..." : "Leave us a Message"}
        {!loading && <ArrowRight className="h-4 w-4" />}
      </Button>
    </form>
  );
}



