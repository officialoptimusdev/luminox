import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React, { useRef, useState } from "react"
import SignatureCanvas from "react-signature-canvas";
import { DatePicker } from "@/components/Atoms/DatePicker";

export default function InformedConsentForm() {
  const [form, setForm] = useState({
    patientName: "",
    date: null,
    signature: "",
  });

  const sigCanvas = useRef(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setForm((f) => ({ ...f, signature: dataURL }));
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
    setForm((f) => ({ ...f, signature: "" }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((f) => ({ ...f, signature: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main content: form and contact card */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: form area (spans 2 columns on lg) */}
          <div className="lg:col-span-2">
            <h1 className="text-sm font-medium text-gray-700">
              Informed Consent for Psychotropic Medications
            </h1>

            <h2 className="text-3xl font-bold text-black mt-2">Required Fields*</h2>
            <p className="text-sm text-gray-600 mb-6">
              Click input fields to fill them out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Consent Statement Box */}
              <div className="p-4 border-l-4 border-cyan-400 bg-cyan-50 text-gray-700 rounded">
                <p>
                  By electronically signing this form, I verify that I voluntarily consent
                  to receiving prescriptions from my provider for psychiatric medications
                  as a part of my treatment with Luminox Health Care Services. I also
                  confirm that I understand and voluntarily agree to the following:
                </p>
              </div>

              {/* Consent Bullet Points */}
              <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm">
                <li>I am entitled to receiving information about the medications I am prescribed.</li>
                <li>I understand that information about my medications will be provided in oral, and electronic form by my provider before any medication is prescribed.</li>
                <li>I understand that my prescriber of record will also ask me to provide voluntary verbal consent for any new medications, medication changes, and/or the discontinuation of medications before they are ordered.</li>
                <li>I understand psychotropic medications may have risks that include side effects, age-related risks, rare and potentially life-threatening side effects, as well as fetal risk for pregnant women. If I am a woman and have a possibility of pregnancy, I must tell my provider immediately to assess risks and benefits.</li>
                <li>I acknowledge my right to refuse any medication dose or withdrawal of consent at any time.</li>
                <li>I understand that having psychotropic medications prescribed by a non-Lasting Serenity Telepsychiatry INC provider, except in an urgency or emergency, may result in immediate discharge and end my patient-provider relationship.</li>
                <li>Upon discharge, I will be given a list of alternate providers in my area for continuation of psychiatric care.</li>
                <li>I understand I am responsible for making those appointments immediately to prevent gaps in my care.</li>
                <li>I understand that I can print this consent form at will.</li>
              </ul>

              {/* Patient Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Patient Name */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium mr-2">Patient’s Name</label>
                  <input
                    name="patientName"
                    value={form.patientName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="flex-1 border px-4 py-2 rounded-md bg-gray-50 focus:ring-2 focus:ring-cyan-200"
                  />
                </div>

                {/* Date of Birth */}
                <div className="flex items-center">
                  <label className="w-40 text-sm font-medium mr-2">Date of Birth (DOB)</label>
                  <div className="flex-1">
                    <DatePicker
                      value={form.date}
                      onChange={(d) => setForm((f) => ({ ...f, date: d }))}
                    />
                  </div>
                </div>
              </div>


              {/* Signature */}
              <div>
                <label className="block text-sm font-medium mb-1">Signature</label>
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
                        className: "border border-gray-300 rounded-md w-full h-32 bg-white",
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
  )
}
