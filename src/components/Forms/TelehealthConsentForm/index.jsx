import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React, { useRef, useState } from "react"
import SignatureCanvas from "react-signature-canvas";
import { DatePicker } from "@/components/Atoms/DatePicker";
import { Checkbox } from "@/components/ui/checkbox"

export default function TelehealthConsentForm() {
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
              Patient Consent for Telehealth tx and Services
            </h1>

            <h2 className="text-3xl font-bold text-black mt-2">Required Fields*</h2>
            <p className="text-sm text-gray-600 mb-6">
              Click input fields to fill them out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Consent Statement Box */}
              <div className="p-4 border-l-4 border-cyan-400 bg-cyan-50 text-gray-700 rounded">
                <p>
                  Tele-health by Doxy.me the technology service we use to conduct Tele-health
                  videoconferencing appointments. It is simple to use and there are no passwords
                  required to log in. By signing this document, I acknowledge:
                </p>
              </div>

              {/* Consent Bullet Points */}
              <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>I understand that my health care provider will engage in a Tele-health consultation with me.</li>
                <li>My health care provider explained to me how the video conferencing technology that will be used to conduct a consultation will not be the same as a direct client/health care provider visit due to the fact that I will not be in the same room as my provider.</li>
                <li>I understand that a Tele-health consultation has potential benefits including easier access to care and the convenience of meeting from a location of my choosing.</li>
                <li>I understand there are potential risks to this technology, including interruptions, unauthorized access, and technical difficulties. I understand that my health care provider or I can discontinue the Tele-health consult/visit if it is felt that the videoconferencing connections are not adequate for the situation.</li>
                <li>I have had a direct phone call conversation or video conferencing with my provider, during which I had the opportunity to ask questions regarding this procedure. My questions have been answered and the risks, benefits and any practical alternatives have been discussed with me in a language in which I understand.</li>
              </ul>

              <div className="p-4 border-l-4 border-gray-300 bg-gray-50 text-gray-400 rounded text-sm">
                <p>
                  Tele-health by Doxy.me the technology service we use to conduct Tele-health
                  videoconferencing appointments. It is simple to use and there are no passwords
                  required to log in. By signing this document, I acknowledge:
                </p>
              </div>

              <ul className="list-disc ml-6 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>Tele-health by DOXY.ME is NOT an Emergency Service and in the event of an emergency, I will use a phone to call 911.</li>
                <li>Though my provider and I may be in direct virtual contact through the Tele-health Service, neither Doxy.me nor the Tele-health Service provides any medical or healthcare services or advice including, but not limited to, emergency or urgent medical services.</li>
                <li>The Tele-health by Doxy.me Service facilitates videoconferencing and is not responsible for the delivery of any healthcare, medical advice or care.</li>
                <li>I do not assume that my provider has access to any or all of the technical information in the Tele-health by Doxy.me Service — or that such information is current, accurate or up-to-date. I will not rely on my health care provider to have any of this information in the Tele-health Doxy.me Service.</li>
                <li>To maintain confidentiality, I will not share my Tele-health appointment link with anyone unauthorized to attend the appointment.</li>
                <li>I understand the concepts and conditions of informed consents, privacy and confidentiality.</li>
                <li>I understand that I have the opportunity to discuss these concepts and conditions and to ask for clarification of parts which I am concerned about or do not fully understand.</li>
                <li>I understand that I will be informed of the goals, expectations, procedures, benefits, and possible risks involved in the evaluation and treatment/therapy.</li>
                <li>When using telemedicine services, technical issues could affect a session if there is a poor connection or non-functioning equipment.</li>
                <li>I understand that all communication will be private, legally privileged, and confidential unless otherwise specified by the specific laws presented below or unless I provide my written consent with a specified release of information.</li>
                <li>I also understand that there are no guarantees of positive outcome for the treatment/therapy.</li>
                <li>If I have health insurance, I understand that I am responsible for confirming coverage and network status before I receive treatment and that I am responsible for payment when services are not covered by my plan.</li>
                <li>I understand that applicable payment is due at the time-of-service that includes co-pays and self-payers.</li>
                <li>I understand that I may ask questions by secure message within the client portal anytime.</li>
                <li>I understand that I am responsible for privacy related to the technologies that I use to connect with Lasting Serenity Telepsychiatry, INC and that I must password-protect those technologies to increase the security of my information.</li>
                <li>I understand that I may be immediately discharged if my behavior is a threat to my provider(s) or the property of Lasting Serenity Telepsychiatry, INC.</li>
                <li>Upon such discharge, I understand that I will be given a list of alternate providers in my area from which I may choose a new provider for the continuation of my psychiatric care. I understand I am free to choose another provider that is not on the referral list and that I am responsible for making appointments immediately to prevent gaps in my care.</li>
                <li>I understand that I may revoke consent and cancel treatment at will.</li>
              </ul>

              {/* Checkbox Section */}
              <div className="mt-6 border-t pt-6">
                <h3 className="font-semibold text-red-600 mb-4">By signing this form, I certify:</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="certify1" />
                    <label htmlFor="certify1" className="text-sm leading-snug text-gray-700">
                      That I have read or had this form read and/or had this form explained to me and that I fully
                      understand its contents including the risks and benefits of the procedure(s).
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="certify2" />
                    <label htmlFor="certify2" className="text-sm leading-snug text-gray-700">
                      That I have been given ample opportunity to ask questions and that any questions have been
                      answered to my satisfaction.
                    </label>
                  </div>
                </div>
              </div>

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
              <div> <a href="tel:+12405537970" className="text-sm mt-1 cursor-pointer">
                +1 (240)-553-7970
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
