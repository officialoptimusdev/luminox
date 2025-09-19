import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
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
          className="absolute top-4 right-4 rounded-full bg-white shadow p-1"
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

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full gap-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="font-semibold cursor-pointer"> <a href="tel:+12405537970">
                  +1 (240)-553-7970
                </a></span>
              </div>
              <div className="flex items-center gap-3 text-xl">
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

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1 cursor-pointer">
                  Email Address
                </span>
                <a
                  href="mailto:contact@luminoxmentalhealth.com">
                  contact@luminoxmentalhealth.com
                </a>

              </p>

              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1 cursor-pointer">
                  Phone Number
                </span>
                <a href="tel:+ +12407547276">
                +1 (240)-754-7276
              </a>

                <br />
                <span className="text-xs text-gray-500">
                  Assistance hours: Monday - Friday 9am - 5pm
                </span>
              </p>

              <p>
                <span className="block font-semibold text-xs text-gray-500 mb-1">
                  Address
                </span>
                3900 Westerre Parkway, Richmond, VA 23233 <br />
                16701 Melford Blvd, Bowie MD 20715
              </p>
            </div>

            <p className="mt-10 font-bold text-lg">
              We are always happy to assist you!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
