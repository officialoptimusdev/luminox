import React, { useState } from "react";
import { Mail, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function NewsLetterForm({ onJoin }) {
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
         setError("Please enter a valid email address.");
         return;
      }

      setError("");
      setLoading(true);

      try {
         // 🔥 Use Mailchimp form action (your values here)
         const formData = new FormData();
         formData.append("EMAIL", email);

         const response = await fetch(
            "https://luminoxmentalhealth.us9.list-manage.com/subscribe/post?u=cd904721bffa081f0beb50882&id=e738859bda&f_id=00edc2e1f0",
            {
               method: "POST",
               body: formData,
               mode: "no-cors", // Mailchimp requires no-cors
            }
         );

         // ✅ Even with no-cors (opaque response), assume success
         toast.success("🎉 You're subscribed to our newsletter!");
         
         // Save subscription so popup never shows again
         localStorage.setItem("newsletterSubscribed", "true");

         if (onJoin) onJoin(email);
         setEmail("");
      } catch (err) {
         console.error(err);
         toast.error("Something went wrong. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   const isEmailValid = /^\S+@\S+\.\S+$/.test(email);

   return (
      <form
         onSubmit={handleSubmit}
         className="w-full max-w-md mx-auto px-6 py-8 bg-white rounded-2xl shadow-md"
         aria-label="newsletter-form"
      >
         {/* Illustration */}
         <div className="flex justify-center">
            <img
               src="/assets/news-letter.png"
               alt="newsletter"
               className="w-48 h-48 object-contain -mt-6"
            />
         </div>

         {/* Title */}
         <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-slate-900">
            Join Our
            <br />
            Newsletter.
         </h2>

         {/* Subtitle */}
         <p className="mt-3 text-center text-sm text-slate-500 px-6">
            Stay updated with our latest news, tips, and exclusive offers.
         </p>

         {/* Input */}
         <div className="mt-6 px-2">
            <label htmlFor="email" className="sr-only">
               Email address
            </label>

            <div className="relative">
               <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
               </span>
               <input
                  id="email"
                  type="email"
                  className={`w-full pl-11 pr-4 py-3 rounded-full bg-slate-50 border text-sm text-slate-700 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 ${
                     error
                        ? "border-red-500 focus:ring-red-400"
                        : "border-slate-100 focus:ring-teal-400"
                  }`}
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="email"
               />
            </div>

            {/* Error */}
            <p
               className={`mt-2 flex items-center text-sm text-red-600 transition-opacity duration-300 ${
                  error ? "opacity-100" : "opacity-0"
               }`}
            >
               <AlertCircle className="w-4 h-4 mr-1" />
               {error || "placeholder"}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex items-center justify-between gap-4">
               <button
                  type="button"
                  onClick={() =>
                     window.dispatchEvent(new CustomEvent("newsletter:maybe-later"))
                  }
                  className="flex-1 py-3 rounded-full bg-slate-50 text-slate-700 text-sm border border-transparent hover:bg-slate-100 transition"
               >
                  Maybe later
               </button>

               <button
                  type="submit"
                  disabled={!isEmailValid || loading}
                  className={`flex-1 py-3 rounded-full text-white text-sm font-medium transition ${
                     isEmailValid && !loading
                        ? "bg-[#3E757B] hover:bg-teal-700 cursor-pointer"
                        : "bg-[#3e757b34] cursor-not-allowed"
                  }`}
               >
                  {loading ? "Joining..." : "Join Now!"}
               </button>
            </div>

            {/* Privacy text */}
            <p className="mt-4 text-center text-[12px] text-slate-400">
               By subscribing you agree to our{" "}
               <span className="underline">Privacy Policies.</span>
            </p>
         </div>
      </form>
   );
}
