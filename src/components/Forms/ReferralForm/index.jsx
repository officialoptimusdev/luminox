import React, { useState, useEffect } from "react";
import { Phone, Mail, User } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Listbox } from "@headlessui/react";


const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+234", flag: "🇳🇬" },
];

const genders = ["Female", "Male", "Other"];


export default function ReferralForm() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedGender, setSelectedGender] = useState("");

  // service checkboxes
  const [services, setServices] = useState({
    outpatient: false,
    medication: false,
  });

  // form fields
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    gender: "",
    insuranceCompany: "",
    idNumber: "",
    groupNumber: "",
    currentMedications: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // required: fullName, phone, email, gender, and at least one service selected
    const requiredFilled =
      form.fullName.trim() !== "" &&
      form.phone.trim() !== "" &&
      form.email.trim() !== "" &&
      form.gender.trim() !== "" &&
      (services.outpatient || services.medication);

    setIsValid(requiredFilled);
  }, [form, services]);

  function handleServiceChange(e) {
    const { name, checked } = e.target;
    setServices((s) => ({ ...s, [name]: checked }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    // Replace this with real submit logic
    console.log("Submitting form", { form, services });
    alert("Form submitted (demo). See console for data.");
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Main content: form and contact card */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: form area (spans 2 columns on lg) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-1 text-black">Required Fields*</h2>
            <p className="text-sm text-black mb-6">Click input fields to fill them out.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Services requested */}
              <div className="border-l-2 border-slate-200 pl-4">
                <p className="font-semibold mb-2">Services requested (Check all that apply):</p>
                <div className="flex flex-col gap-3 mt-2">
                  <label className="inline-flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="outpatient"
                      checked={services.outpatient}
                      onChange={handleServiceChange}
                      className="accent-[#4d8e92] w-4 h-4"
                    />
                    <span>Outpatient mental health treatment</span>
                  </label>

                  <label className="inline-flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="medication"
                      checked={services.medication}
                      onChange={handleServiceChange}
                      className="accent-[#4d8e92] w-4 h-4"
                    />
                    <span>Medication management</span>
                  </label>
                </div>
              </div>

              {/* Client Information */}
              <div className="border-l-2 border-slate-200 pl-4">
                <p className="font-semibold mb-4">Client Information.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm text-gray-600">Full Name</label>
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-400" />
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#dbeeee]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-600">Enter Phone Number</label>
                    <div className="flex items-center gap-2">
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
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="000-000-0000"
                        className="w-full border flex-1 px-4 py-3 rounded-full bg-gray-200 outline-none focus:ring-2 focus:ring-[#dbeeee]"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-1">
                    <label className="text-sm text-gray-600">Address</label>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter home address"
                      className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#dbeeee]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-600">Email Address</label>
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-gray-400" />
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#dbeeee]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm text-gray-600">Gender</label>
                    <Listbox value={selectedGender} onChange={setSelectedGender}>
                      <div className="relative">
                        <Listbox.Button className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-left outline-none focus:ring-2 focus:ring-[#dbeeee]">
                          {selectedGender || "Select Gender"}
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 w-full bg-white shadow rounded-lg z-10 text-sm">
                          {genders.map((g) => (
                            <Listbox.Option
                              key={g}
                              value={g}
                              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                              {g}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>

                </div>
              </div>

              {/* Insurance Information */}
              <div className="border-l-2 border-slate-200 pl-4">
                <p className="font-semibold mb-3">Insurance Information:</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    name="insuranceCompany"
                    value={form.insuranceCompany}
                    onChange={handleChange}
                    placeholder="Insurance Company"
                    className="col-span-1 md:col-span-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#dbeeee]"
                  />
                  <input
                    name="idNumber"
                    value={form.idNumber}
                    onChange={handleChange}
                    placeholder="ID Number"
                    className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#dbeeee]"
                  />

                  <input
                    name="groupNumber"
                    value={form.groupNumber}
                    onChange={handleChange}
                    placeholder="Group Number"
                    className="col-span-1 md:col-span-3 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#dbeeee]"
                  />

                  <textarea
                    name="currentMedications"
                    value={form.currentMedications}
                    onChange={handleChange}
                    placeholder="Enter current medications."
                    className="col-span-1 md:col-span-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#dbeeee] resize-none"
                    rows="3"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-medium transition-colors ${isValid ? "bg-[#4d8e92]" : "bg-[#abcdcb] cursor-not-allowed"
                    }`}
                >
                  Submit Form
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact card */}
          <aside className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              {/* <div>
                <p className="text-sm text-gray-400">Contact Info</p>
                <div className="flex items-center gap-2 mt-2">
                  <div> <a href="tel:+12405537970" className="text-sm font-medium cursor-pointer"> +1 (240)-553-7970</a>
                  </div>
                </div>
              </div> */}

            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Contact Info</p>

              <a
                href="mailto:contact@luminoxmentalhealth.com"

              >
                <p className="mt-2 text-sm cursor-pointer"> contact@luminoxmentalhealth.com</p>
              </a>


              <div className="mt-3 text-xs text-slate-400">Phone Number</div>
              <div> <a href="tel:+ +12407547276" className="text-sm mt-1 cursor-pointer">
                +1 (240)-754-7276
              </a></div>

              <div className="mt-3 text-xs text-slate-400">Assistance hours</div>
              <div className="text-sm mt-1">Monday - Friday 9am - 5pm</div>

              <div className="mt-3 text-xs text-slate-400">Address</div>
              <div className="text-sm mt-1">
                3900 Westerre Parkway, Richmond, VA 23233
                <br />
                16701 Melford Blvd, Bowie MD 20715
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="https://www.facebook.com/share/1FUdebEzjS/" target="_blank"
                  rel="noopener noreferrer" className="bg-[#0866ff] hover:bg-[#222425] p-2 rounded-full text-white">
                  <FaFacebookF size={14} />
                </a>
                <a href="https://www.instagram.com/luminox.mentalhealth/" target="_blank"
                  rel="noopener noreferrer" className="bg-[#d53c6c] hover:bg-[#222425] p-2 rounded-full text-white">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>

            <div className="mt-6 text-center text-slate-400 text-[35px]">
              We are always happy to assist you
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}