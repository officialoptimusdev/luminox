// import { Phone, Mail, User } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React, { useState, useRef } from "react";
import { Listbox } from "@headlessui/react";
import SignatureCanvas from "react-signature-canvas";
import { DatePicker } from "@/components/Atoms/DatePicker";

const countries = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+234", flag: "🇳🇬" },
];

export default function ClientSafetyForm() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [form, setForm] = useState({
    clientName: "",
    contactName: "",
    contactPhone: "",
    hospitalName: "",
    hospitalPhone: "",
    hospitalAddress: "",
    signature: "",
    date: new Date(),
  });

  const sigCanvas = useRef(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Signature pad functions
  const clearSignature = () => {
    sigCanvas.current.clear();
    setForm((f) => ({ ...f, signature: "" }));
  };

  const saveSignature = () => {
    if (!sigCanvas.current.isEmpty()) {
      const dataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      setForm((f) => ({ ...f, signature: dataUrl }));
    }
  };

  // File upload for signature
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm((f) => ({ ...f, signature: ev.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting", form);
    alert("Form submitted with signature!");
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Main content: form and contact card */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: form area (spans 2 columns on lg) */}
          <div className="lg:col-span-2">
            <h1 className="text-lg font-semibold text-gray-700">
              Client Safety Contract Form.
            </h1>

            <h2 className="text-3xl font-bold text-black mt-3">Required Fields*</h2>
            <p className="text-sm text-gray-700 mb-8">
              Click input fields to fill them out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Intro */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  I{" "}
                  <input
                    name="clientName"
                    value={form.clientName}
                    onChange={handleChange}
                    placeholder="Enter Full legal name"
                    className="border-b border-gray-400 focus:border-black outline-none px-2"
                  />{" "}
                  (client), hereby contract with Luminox Healthcare Provider/Clinician,
                  that I will take the following actions if I feel suicidal...
                </p>
                <ul className="list-disc ml-6 mt-4 space-y-1 text-gray-700">
                  <li>I will NOT attempt suicide.</li>
                  <li>
                    I will call someone, please provide name and telephone
                  </li>
                </ul>
              </div>

              {/* Emergency Notice */}
              <div className="p-4 border-l-4 border-cyan-400 bg-cyan-50 text-gray-700">
                <p>
                  If I do not reach Dr. Lartoniah Hassan or my assigned provider, I can
                  either call my therapist or phone any of the following services:
                </p>
              </div>

              {/* Agencies */}
              <div className="text-gray-800 text-sm space-y-2">
                <p className="font-semibold">Names/Agencies:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    National Suicide Prevention Hotlines{" "}
                    <span className="font-medium">1-800-SUICIDE (784-2433)</span> or{" "}
                    <span className="font-medium">1-800-273-TALK (8255)</span>{" "}
                    <a
                      href="http://www.aaamentalhealth.org/pr_warmline"
                      className="text-blue-600 underline"
                    >
                      http://www.aaamentalhealth.org/pr_warmline
                    </a>{" "}
                    , 410-768-5522
                  </li>
                  <li>
                    Disaster Distress (Helpline Offers Immediate Crisis Counseling){" "}
                    1-800-985 text "TalkWithUs" to 66746, 1-800-985-5990 or text
                    "Habianos" to 66746 (Spanish)
                  </li>
                  <li>
                    I will further seek support from any of the following people:
                    Provide names and phone numbers
                  </li>
                </ul>
              </div>

              {/* Support Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                <div>
                  <label className="block text-sm font-medium">Full Name</label>
                  <input
                    name="contactName"
                    value={form.contactName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full border px-4 py-2 rounded-md bg-gray-50 focus:ring-2 focus:ring-cyan-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Enter Phone Number</label>
                  <div className="flex gap-2">
                    <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                      <div className="relative">
                        <Listbox.Button className="flex items-center gap-2 border bg-gray-50 px-4 py-2 rounded-md">
                          <span>{selectedCountry.flag}</span>
                          <span>{selectedCountry.code}</span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 bg-white border shadow rounded-md z-10 text-sm">
                          {countries.map((c) => (
                            <Listbox.Option
                              key={c.code}
                              value={c}
                              className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                            >
                              {c.flag} {c.code}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={form.contactPhone}
                      onChange={handleChange}
                      placeholder="000-000-0000"
                      className="flex-1 border px-4 py-2 rounded-md bg-gray-50 focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>
                </div>
              </div>

              {/* Hospital Section */}
              <div className="p-4 border-l-4 border-cyan-400 bg-cyan-50 text-gray-700">
                <p>
                  If none of these actions are helpful or not available, I will go to
                  the ER at one of the following: Provide potential Hospital name,
                  Address, and Phone below:
                </p>
              </div>

              <div className="space-y-4 border border-gray-200 rounded-lg p-4 bg-gray-50">
                <p className="font-semibold text-gray-700">Hospital’s Information.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="hospitalName"
                    value={form.hospitalName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="border px-4 py-2 rounded-md bg-white focus:ring-2 focus:ring-cyan-200"
                  />
                  <div className="flex gap-2">
                    <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                      <div className="relative">
                        <Listbox.Button className="flex items-center gap-2 border bg-gray-50 px-4 py-2 rounded-md">
                          <span>{selectedCountry.flag}</span>
                          <span>{selectedCountry.code}</span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 bg-white border shadow rounded-md z-10 text-sm">
                          {countries.map((c) => (
                            <Listbox.Option
                              key={c.code}
                              value={c}
                              className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                            >
                              {c.flag} {c.code}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                    <input
                      type="tel"
                      name="hospitalPhone"
                      value={form.hospitalPhone}
                      onChange={handleChange}
                      placeholder="000-000-0000"
                      className="flex-1 border px-4 py-2 rounded-md bg-white focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>
                </div>

                <input
                  name="hospitalAddress"
                  value={form.hospitalAddress}
                  onChange={handleChange}
                  placeholder="Enter hospital’s location."
                  className="w-full border px-4 py-2 rounded-md bg-white focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              {/* Final Notice */}
              <div className="p-4 border-l-4 border-red-500 bg-red-50 text-gray-700">
                <p>
                  If I am unable to get help or I am unable to go to the hospital, I
                  will call 911 and request help.
                </p>
              </div>

              {/* Signature + Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium">Date</label>
                  <DatePicker
                    value={form.date}
                    onChange={(d) => setForm((f) => ({ ...f, date: d }))}
                  />

                </div>


                <div>
                  <label className="block text-sm font-medium">Signature</label>

                  {/* If signature is saved or uploaded, show preview */}
                  {form.signature ? (
                    <div className="border rounded-md bg-white p-2 flex flex-col items-center">
                      <img
                        src={form.signature}
                        alt="Signature preview"
                        className="max-h-32 object-contain"
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          type="button"
                          className="text-sm text-red-500 border px-3 py-1 rounded-md"
                          onClick={() => setForm((f) => ({ ...f, signature: "" }))}
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <SignatureCanvas
                        ref={sigCanvas}
                        penColor="black"
                        canvasProps={{
                          className:
                            "border border-gray-300 rounded-md w-full h-32 bg-white",
                        }}
                        onEnd={saveSignature}
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          type="button"
                          className="text-sm text-red-500 border px-3 py-1 rounded-md"
                          onClick={clearSignature}
                        >
                          Clear
                        </button>
                        <button
                          type="button"
                          className="text-sm text-gray-700 border px-3 py-1 rounded-md"
                          onClick={() => fileInputRef.current.click()}
                        >
                          Upload Signature
                        </button>
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full flex items-center gap-2"
                >
                  Submit Form →
                </button>
              </div>
            </form>
          </div>

          {/* Right: Contact card */}
          <aside className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400">Contact Info</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="text-sm font-medium">240-553-7970</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href="#" className="bg-[#0866ff] hover:bg-[#222425] p-2 rounded-full text-white">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="bg-[#d53c6c] hover:bg-[#222425] p-2 rounded-full text-white">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <p className="text-xs text-slate-400 uppercase tracking-wide">Contact Info</p>
              <p className="mt-2 text-sm">luminoxhealth@gmail.com</p>

              <div className="mt-3 text-xs text-slate-400">Phone Number</div>
              <div className="text-sm mt-1">240-553-7970</div>

              <div className="mt-3 text-xs text-slate-400">Assistance hours</div>
              <div className="text-sm mt-1">Monday - Friday 6 am to 8 pm EST</div>

              <div className="mt-3 text-xs text-slate-400">Address</div>
              <div className="text-sm mt-1">
                3900 Westerre Parkway, Richmond, VA 23233
                <br />
                16701 Melford Blvd, Bowie MD 20715
              </div>
            </div>

            <div className="mt-6 text-center text-slate-400 text-[35px]">We are always happy to assist you</div>
          </aside>
        </div>
      </section>
    </main>
  );
}