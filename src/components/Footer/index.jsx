import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactFormModal from "../Modals/ContactFormModal";


const Footer = () => {
  const [showContact, setShowContact] = useState(false);
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
                <p className="text-xs text-gray-400">Subscribe to our newsletter for the latest updates.</p>

                <form className="flex gap-2 items-center max-w-md">
                  {/* Replace input/button with shadcn/ui <Input> and <Button> if desired */}
                  <label htmlFor="footer-email" className="sr-only">Email</label>
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Enter email address"
                    className="flex-1 bg-[#171718] border border-transparent text-gray-200 placeholder:text-gray-500 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-teal-600 hover:bg-teal-500 px-4 py-2 text-white text-sm"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-xs text-gray-500">By subscribing you agree to our Privacy Policies.</p>
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
                      <strong className="text-white">Saturday & Sunday</strong>
                      <div className="text-gray-400">9am - 5pm</div>
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
                    <Phone className="text-teal-300 mt-1" size={18} />
                    <div>
                      <a href="tel:+12405537970" className="text-white font-medium cursor-pointer">
                        +1 (240)-553-7970
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="text-teal-300 mt-1" size={18} />
                    <div>
                      <a
                        href="mailto:contact@luminoxmentalhealth.com"
                        className="text-gray-400 text-sm cursor-pointer"
                      >
                        contact@luminoxmentalhealth.com
                      </a>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <MapPin className="text-teal-300 mt-1" size={18} />
                    <div className="text-gray-400 text-sm">
                      3900 Westerre Parkway, Richmond, VA 23233<br />
                      16701 Melford Blvd, Bowie MD 20715
                    </div>
                  </div>
                </div>
              </div>

              {/* Social & badges */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/share/1FUdebEzjS/" target="_blank"
                    rel="noopener noreferrer" className="bg-[#0866ff] hover:bg-[#222425] p-2 rounded-full text-white">
                    <FaFacebookF size={14} />
                  </a>
                  <a href="https://www.instagram.com/luminox.mentalhealth/" target="_blank"
                    rel="noopener noreferrer" className="bg-[#d53c6c] hover:bg-[#222425] p-2 rounded-full text-white">
                    <FaInstagram size={14} />
                  </a>
                  {/* <a href="#" target="_blank"
                    rel="noopener noreferrer" className="bg-[#ff2929] hover:bg-[#222425] p-2 rounded-full text-white">
                    <FaYoutube size={14} />
                  </a> */}
                </div>

                {/* <div className="flex gap-2 items-center text-xs text-gray-400">
                  <span className="px-3 py-2 bg-[#1b1c1d] rounded-full">Doxy</span>
                  <span className="px-3 py-2 bg-[#1b1c1d] rounded-full">Psychology Today</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-[#1b1b1b] pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* <div className="bg-[#1b1c1d] rounded-full px-4 py-2 text-sm text-gray-200 flex items-center gap-3">
                  <Phone size={14} className="text-teal-300 cursor-pointer" />
                  <span className="font-sm sm:text-[10px]"> <a href="tel:+12405537970">
                    240-553-7970
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