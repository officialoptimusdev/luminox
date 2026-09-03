import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import ContactFormModal from "../Modals/ContactFormModal";
import { toast } from "sonner";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // 🔥 Mailchimp form action (same as NewsletterForm)
      const formData = new FormData();
      formData.append("EMAIL", email);

      await fetch(
        "https://luminoxmentalhealth.us9.list-manage.com/subscribe/post?u=cd904721bffa081f0beb50882&id=e738859bda&f_id=00edc2e1f0",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Mailchimp requires no-cors
        }
      );

      //Show success toast
      toast.success("🎉 You're subscribed to our newsletter!");
      setEmail("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <footer className="bg-[#111115] text-gray-200">
      {/* Top curved decoration (approx) */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="relative -top-50 left-0 w-full overflow-hidden leading-none z-0"
        >
          <svg
            className="block w-full h-40 transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            {/* Black background for the top section */}
            <rect width="1440" height="320" fill="#ffffff" />

            {/* White wave shape */}
            <path
              d="M0,128L360,192C600,256 840,256 1080,192L1440,128L1440,0L0,0Z"
              fill="#111115"
            />
          </svg>
        </div>



        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left column: Logo + newsletter */}
            <div className="md:col-span-4 flex flex-col gap-6">
              {/* Logo + tagline */}
              <div className="flex items-center gap-4">
                <a href="/" className="flex items-center h-20 shrink-0">
                  {/* Your portrait PNG (icon) */}
                  <img
                    src="/assets/luminox_logo_main.png"
                    alt="Luminox logo"
                    className="block h-12 md:h-14 w-auto object-contain shrink-0"
                  />
                  {/* Wordmark: remove this <span> if your PNG already includes 'Luminox' text */}
                  <span className="ml-3 text-lg md:text-2xl font-semibold tracking-tight text-[#ffffff]">
                    Luminox
                  </span>
                </a>
              </div>

              {/* Newsletter */}
              <div className="space-y-2">
                <p className="text-sm text-gray-300 font-medium">Newsletter</p>
                <p className="text-xs text-gray-400">
                  Subscribe to our newsletter for the latest updates.
                </p>

                {/*  Enhanced form with same logic as NewsLetterForm */}
                <form
                  onSubmit={handleSubmit}
                  className="flex gap-2 items-center max-w-md"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 bg-[#171718] border border-transparent text-gray-200 placeholder:text-gray-500 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className={`rounded-full px-4 py-2 text-white text-sm transition ${loading
                        ? "bg-teal-800 cursor-not-allowed"
                        : "bg-teal-600 hover:bg-teal-500"
                      }`}
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>

                <p className="text-xs text-gray-500">
                  By subscribing you agree to our Privacy Policies.
                </p>
              </div>




            </div>

            {/* Middle column: Quick Links */}
            <div className="md:col-span-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm text-teal-300 font-semibold mb-2">
                    QUICK LINKS
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      <a className="hover:underline" href="/services">Services</a>
                    </li>
                    <li>
                      <a className="hover:underline" href="/forms">Forms</a>
                    </li>
                    <li>
                      <a className="hover:underline" href="/about">About Us</a>
                    </li>
                    <li>
                      {/* Contact triggers modal */}
                      <button
                        onClick={() => setShowContact(true)}
                        className="hover:underline text-left"
                      >
                        Contact Us
                      </button>
                    </li>
                    <li>
                      <a className="hover:underline" href="/blog">Blog</a>
                    </li>
                    {/* <li>
                      <Link className="hover:underline" to="/team">Meet The Team</Link>
                    </li> */}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm text-teal-300 font-semibold mb-2">BUSINESS HOURS</h4>
                  <div className="text-gray-300 text-sm space-y-2">
                    <div>
                      <strong className="text-white">Monday – Friday</strong>
                      <div className="text-gray-400">9am - 5pm</div>
                    </div>
                    <div>
                      <strong className="text-white">Saturday</strong>
                      <div className="text-gray-400">9am - 2pm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Contact Info + Social */}
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <h4 className="text-sm text-teal-300 font-semibold mb-3">CONTACT INFO</h4>

                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <Phone className="text-teal-300 mt-1 shrink-0" size={18} />
                    <div>
                      <a href="tel:+12407537276" className="text-white font-medium cursor-pointer hover:underline">
                        +1 (240)-753-7276
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-teal-300 mt-1 shrink-0" size={18} />
                    <div>
                      <a
                        href="mailto:contact@luminoxmentalhealth.com"
                        className="text-gray-400 text-sm cursor-pointer hover:underline"
                      >
                        contact@luminoxmentalhealth.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-teal-300 mt-1 shrink-0" size={18} />
                    <div className="text-gray-300 text-sm space-y-3">
                      <div>
                        <span className="block font-semibold text-teal-300 text-xs uppercase tracking-wider">Richmond, VA</span>
                        <span className="text-gray-400">3900 Westerre Pkwy, Suite 300, Richmond, VA 23233</span>
                      </div>
                      <div>
                        <span className="block font-semibold text-teal-300 text-xs uppercase tracking-wider">Bowie, MD</span>
                        <span className="text-gray-400">16701 Melford Blvd, Bowie, MD 20715</span>
                      </div>
                      <div>
                        <span className="block font-semibold text-teal-300 text-xs uppercase tracking-wider">Washington, DC</span>
                        <span className="text-gray-400">2001 L St NW, STE 500, Washington, DC 20036</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <a href="https://www.facebook.com/share/19RjinXcf8/" target="_blank"
                    rel="noopener noreferrer" title="Facebook" className="bg-[#0866ff] hover:bg-teal-600 p-2.5 rounded-full text-white transition-colors">
                    <FaFacebookF size={14} />
                  </a>
                  <a href="https://www.instagram.com/luminox_mental_health?igsi=Z3FwdnNsODFhNHUw" target="_blank"
                    rel="noopener noreferrer" title="Instagram" className="bg-[#d53c6c] hover:bg-teal-600 p-2.5 rounded-full text-white transition-colors">
                    <FaInstagram size={14} />
                  </a>
                  <a href="https://www.linkedin.com/company/luminox-healthcare-services-llc/" target="_blank"
                    rel="noopener noreferrer" title="LinkedIn" className="bg-[#0077b5] hover:bg-teal-600 p-2.5 rounded-full text-white transition-colors">
                    <FaLinkedinIn size={14} />
                  </a>
                  <a href="https://www.tiktok.com/@luminox_mental_he0?_r=1&_t=ZT-99NFrDEiVf3" target="_blank"
                    rel="noopener noreferrer" title="TikTok" className="bg-[#000000] border border-gray-700 hover:bg-teal-600 p-2.5 rounded-full text-white transition-colors">
                    <FaTiktok size={14} />
                  </a>
                  <a href="https://www.youtube.com/@luminoxmentalhealth" target="_blank"
                    rel="noopener noreferrer" title="YouTube" className="bg-[#ff0000] hover:bg-teal-600 p-2.5 rounded-full text-white transition-colors">
                    <FaYoutube size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-[#1b1b1b] pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* <div className="bg-[#1b1c1d] rounded-full px-4 py-2 text-sm text-gray-200 flex items-center gap-3">
                  <Phone size={14} className="text-teal-300 cursor-pointer" />
                  <span className="font-sm sm:text-[10px]"> <a href="tel:+ +12407537276">
                    240-753-7276
                  </a></span>
                </div> */}
                <div className="text-sm text-gray-400">© {new Date().getFullYear()} Luminox Healthcare Services. All rights reserved.</div>
              </div>

              <div className="text-sm text-gray-400 flex gap-4">
                <a href="#" className="hover:underline">Designed by Spark Technologies</a>
                {/* <span>—</span>
                <a href="#" className="hover:underline">Privacy Policy</a> */}
                {/* <span>—</span>
                <a href="#" className="hover:underline">Cookies</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Modal */}
      <ContactFormModal open={showContact} onOpenChange={setShowContact} />
    </footer>
  );
};

export default Footer;