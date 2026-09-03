import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import ContactForm from "../Forms/ContactForm";


export default function ContactFormModal({ trigger, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent
        className="max-w-5xl w-full p-0 rounded-2xl overflow-hidden [&>button:first-of-type]:hidden"
      >
        {/* Custom Close button */}
        <button
          onClick={() => onOpenChange && onOpenChange(false)}
          className="absolute top-4 right-4 rounded-full bg-white shadow p-1 z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Left: Form */}
          <div className="bg-white p-8 space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Contact Us
              </p>
              <h2 className="text-3xl font-bold leading-snug">
                Get in touch with us. <br /> We&apos;re here to assist you.
              </h2>
            </div>

            <ContactForm onSuccess={() => {
              if (typeof onOpenChange === "function") {
                onOpenChange(false);
              }
            }} />

          </div>

          {/* Right: Contact info */}
          <div className="hidden md:block bg-white p-8 border-l relative">
            <h3 className="text-xs font-semibold text-[#007171] mb-4 uppercase tracking-wide">
              Contact Info
            </h3>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full gap-2 w-fit">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="font-semibold cursor-pointer">
                  <a href="tel:+12407537276">+1 (240)-753-7276</a>
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap text-xl">
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

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1 cursor-pointer">
                  Email Address
                </span>
                <a href="mailto:contact@luminoxmentalhealth.com" className="hover:underline">
                  contact@luminoxmentalhealth.com
                </a>
              </p>

              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1 cursor-pointer">
                  Phone Number
                </span>
                <a href="tel:+12407537276" className="hover:underline">
                  +1 (240)-753-7276
                </a>
                <br />
                <span className="text-xs text-gray-500">
                  Assistance hours: Monday - Friday 9am - 5pm
                </span>
              </p>

              <div>
                <span className="block font-semibold text-xs text-gray-500 mb-2">
                  Locations / Addresses
                </span>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <span className="block font-semibold text-xs text-[#007171] uppercase">Richmond, VA</span>
                    <span>3900 Westerre Pkwy, Suite 300, Richmond, VA 23233</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-[#007171] uppercase">Bowie, MD</span>
                    <span>16701 Melford Blvd, Bowie, MD 20715</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-xs text-[#007171] uppercase">Washington, DC</span>
                    <span>2001 L St NW, STE 500, Washington, DC 20036</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 font-bold text-base text-[#007171]">
              We are always happy to assist you!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
