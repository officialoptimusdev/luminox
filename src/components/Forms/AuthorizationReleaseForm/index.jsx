import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { DatePicker } from "@/components/Atoms/DatePicker";

export default function AuthorizationReleaseForm() {
  const [form, setForm] = useState({
    patientName: "",
    dateOfBirth: null,
    message: "",
    serviceDate: null,
    patientSignature: "",
    witnessSignature: "",
  });

  const sigCanvasPatient = useRef(null);
  const sigCanvasWitness = useRef(null);
  const fileInputPatient = useRef(null);
  const fileInputWitness = useRef(null);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const saveSignature = (ref, key) => {
    const dataURL = ref.current.getTrimmedCanvas().toDataURL("image/png");
    setForm((f) => ({ ...f, [key]: dataURL }));
  };

  const clearSignature = (ref, key) => {
    ref.current.clear();
    setForm((f) => ({ ...f, [key]: "" }));
  };

  const handleFileUpload = (e, key) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((f) => ({ ...f, [key]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SIDE FORM */}
          <div className="lg:col-span-2">
            {/* Heading */}
            <h1 className="text-sm font-medium text-gray-700">
              Authorization for Release of Information
            </h1>
            <h2 className="text-3xl font-bold mt-2">Required Fields*</h2>
            <p className="text-sm text-gray-600 mb-6">
              Click input fields to fill them out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Patient Name & DOB */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Patients Name</label>
                  <input
                    name="patientName"
                    value={form.patientName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50 focus:ring-2 focus:ring-cyan-200"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Date of Birth (DOB)</label>
                  <div className="mt-1">
                    <DatePicker
                      value={form.dateOfBirth}
                      onChange={(d) => setForm((f) => ({ ...f, dateOfBirth: d }))}
                    />
                  </div>
                </div>
              </div>

              {/* Bullet consent text */}
              <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                <li>I authorize the use or disclosure of the above-named individual's health information as described below.</li>
                <li>The following individual or organization is authorized to make the disclosure:</li>
              </ul>

              {/* Enter Message */}
              <div>
                <label className="text-sm font-medium">Enter Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Please include full name of physician or organization, address, phone, and FAX number."
                  className="mt-1 w-full border px-4 py-2 rounded-md bg-gray-50 focus:ring-2 focus:ring-cyan-200"
                />
              </div>

              {/* Cyan Highlight Section */}
              <div className="p-4 border-l-4 border-cyan-400 bg-cyan-50 text-gray-700 rounded text-sm">
                The type and amount of information to be used or disclosed is as follows, please circle as indicated:
              </div>

              {/* Date of Specific Service */}
              <div>
                <label className="text-sm font-medium">Date of Specific Service</label>
                <div className="mt-1">
                  <DatePicker
                    value={form.serviceDate}
                    onChange={(d) => setForm((f) => ({ ...f, serviceDate: d }))}
                  />
                </div>
              </div>

              {/* Records Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                {[
                  "History and Physical",
                  "Consultation Reports",
                  "Face Sheet",
                  "Medication List",
                  "Progress Notes",
                  "Previous Psychiatric Reports",
                  "Emergency Department Record",
                  "Most Recent Discharge Note",
                  "Laboratory & Ekg Reports",
                  "All Records",
                  "Problem List",
                  "Urine Drug Screening Results",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="radio" name="records" className="accent-cyan-600" />
                    {item}
                  </label>
                ))}
              </div>

              {/* Disclosure Info */}
              <div>
                <p className="text-sm text-gray-700 mb-2">I understand:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-2">
                  <li>The information in my health record may include sensitive information (HIV, behavioral health, etc.).</li>
                </ul>
              </div>

              {/* Organization Highlight */}
              <div className="p-4 border-l-4 border-cyan-400 bg-cyan-50 rounded text-sm">
                <p className="text-gray-700 font-medium mb-2">
                  This information may be disclosed to and used by the following organization for continuity of healthcare:
                </p>
                <div className="mt-2 text-cyan-800 space-y-2">
                  <p className="font-semibold text-cyan-900">Luminox Healthcare Services</p>
                  <div className="text-xs space-y-1 text-cyan-900">
                    <p><strong className="font-semibold">Richmond, VA:</strong> 3900 Westerre Pkwy, Suite 300, Richmond, VA 23233</p>
                    <p><strong className="font-semibold">Bowie, MD:</strong> 16701 Melford Blvd, Bowie, MD 20715</p>
                    <p><strong className="font-semibold">Washington, DC:</strong> 2001 L St NW, STE 500, Washington, DC 20036</p>
                  </div>
                  <a href="tel:+12407537276" className="text-sm mt-1 inline-block cursor-pointer text-cyan-800 font-medium hover:underline">
                    +1 (240)-753-7276
                  </a>
                </div>
              </div>

              {/* Signature Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Patient Signature */}
                <div>
                  <label className="text-sm font-medium">Signature of Patient or Legal Representative</label>
                  {form.patientSignature ? (
                    <img src={form.patientSignature} className="border rounded-md w-full max-h-32 mt-2" />
                  ) : (
                    <SignatureCanvas
                      ref={sigCanvasPatient}
                      penColor="black"
                      canvasProps={{ className: "border rounded-md w-full h-32 bg-white mt-2" }}
                      onEnd={() => saveSignature(sigCanvasPatient, "patientSignature")}
                    />
                  )}
                  <div className="flex gap-2 mt-2">
                    <button type="button" className="text-sm border px-3 py-1 rounded-md text-red-500"
                      onClick={() => clearSignature(sigCanvasPatient, "patientSignature")}>Clear</button>
                    <button type="button" className="text-sm border px-3 py-1 rounded-md"
                      onClick={() => fileInputPatient.current.click()}>Upload Signature</button>
                    <input type="file" ref={fileInputPatient} className="hidden"
                      accept="image/*" onChange={(e) => handleFileUpload(e, "patientSignature")} />
                  </div>
                </div>

                {/* Witness Signature */}
                <div>
                  <label className="text-sm font-medium">Witness’ Signature</label>
                  {form.witnessSignature ? (
                    <img src={form.witnessSignature} className="border rounded-md w-full max-h-32 mt-2" />
                  ) : (
                    <SignatureCanvas
                      ref={sigCanvasWitness}
                      penColor="black"
                      canvasProps={{ className: "border rounded-md w-full h-32 bg-white mt-2" }}
                      onEnd={() => saveSignature(sigCanvasWitness, "witnessSignature")}
                    />
                  )}
                  <div className="flex gap-2 mt-2">
                    <button type="button" className="text-sm border px-3 py-1 rounded-md text-red-500"
                      onClick={() => clearSignature(sigCanvasWitness, "witnessSignature")}>Clear</button>
                    <button type="button" className="text-sm border px-3 py-1 rounded-md"
                      onClick={() => fileInputWitness.current.click()}>Upload Signature</button>
                    <input type="file" ref={fileInputWitness} className="hidden"
                      accept="image/*" onChange={(e) => handleFileUpload(e, "witnessSignature")} />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button type="submit"
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full">
                Submit Form
              </button>
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

            <div className="bg-white rounded-lg p-4 border border-gray-100 space-y-3">
              <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Contact Info</p>

              <div>
                <div className="text-xs text-slate-400">Email Address</div>
                <a href="mailto:contact@luminoxmentalhealth.com" className="text-sm cursor-pointer hover:underline text-slate-700 font-medium">
                  contact@luminoxmentalhealth.com
                </a>
              </div>

              <div>
                <div className="text-xs text-slate-400">Phone Number</div>
                <a href="tel:+12407537276" className="text-sm mt-1 cursor-pointer hover:underline text-slate-700 font-medium block">
                  +1 (240)-753-7276
                </a>
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-1">Assistance hours</div>
                <div className="text-sm text-slate-700">Monday - Friday 9am - 5pm</div>
              </div>

              <div>
                <div className="text-xs text-slate-400 mb-1">Locations / Addresses</div>
                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <span className="block font-semibold text-[#007171]">Richmond, VA:</span>
                    3900 Westerre Pkwy, Suite 300, Richmond, VA 23233
                  </div>
                  <div>
                    <span className="block font-semibold text-[#007171]">Bowie, MD:</span>
                    16701 Melford Blvd, Bowie, MD 20715
                  </div>
                  <div>
                    <span className="block font-semibold text-[#007171]">Washington, DC:</span>
                    2001 L St NW, STE 500, Washington, DC 20036
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 flex-wrap pt-2 border-t border-gray-100">
                <a href="https://www.facebook.com/share/19RjinXcf8/" target="_blank"
                  rel="noopener noreferrer" title="Facebook" className="bg-[#0866ff] hover:bg-[#222425] p-2 rounded-full text-white transition-colors">
                  <FaFacebookF size={14} />
                </a>
                <a href="https://www.instagram.com/luminox_mental_health?igsi=Z3FwdnNsODFhNHUw" target="_blank"
                  rel="noopener noreferrer" title="Instagram" className="bg-[#d53c6c] hover:bg-[#222425] p-2 rounded-full text-white transition-colors">
                  <FaInstagram size={14} />
                </a>
                <a href="https://www.linkedin.com/company/luminox-healthcare-services-llc/" target="_blank"
                  rel="noopener noreferrer" title="LinkedIn" className="bg-[#0077b5] hover:bg-[#222425] p-2 rounded-full text-white transition-colors">
                  <FaLinkedinIn size={14} />
                </a>
                <a href="https://www.tiktok.com/@luminox_mental_he0?_r=1&_t=ZT-99NFrDEiVf3" target="_blank"
                  rel="noopener noreferrer" title="TikTok" className="bg-[#000000] border border-gray-200 hover:bg-[#222425] p-2 rounded-full text-white transition-colors">
                  <FaTiktok size={14} />
                </a>
                <a href="https://www.youtube.com/@luminoxmentalhealth" target="_blank"
                  rel="noopener noreferrer" title="YouTube" className="bg-[#ff0000] hover:bg-[#222425] p-2 rounded-full text-white transition-colors">
                  <FaYoutube size={14} />
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
  )
}
