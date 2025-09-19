import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import NewsLetterForm from "../Forms/NewsLetterForm";


export default function NewsLetterModal({ open = true, onClose, onJoin }) {
   // close when Escape pressed
   useEffect(() => {
      const onKey = (e) => {
         if (e.key === "Escape" && onClose) onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
   }, [onClose]);

   // listen to "maybe later" from the form
   useEffect(() => {
      const handler = () => {
         if (onClose) onClose();
      };
      window.addEventListener("newsletter:maybe-later", handler);
      return () => window.removeEventListener("newsletter:maybe-later", handler);
   }, [onClose]);

   if (!open) return null;

   return ReactDOM.createPortal(
      <div
         className="fixed inset-0 z-50 flex items-center justify-center"
         aria-modal="true"
         role="dialog"
      >
         {/* Backdrop */}
         <div
            className="absolute inset-0 bg-slate-800/70 backdrop-blur-sm"
            onClick={() => {
               if (onClose) onClose();
            }}
         />

         {/* Card container matching screenshot size and style */}
         <div className="relative z-10 w-[420px] max-w-[92vw] mx-4">
            <div className="rounded-2xl overflow-hidden">
               {/* Slightly taller white card area with subtle pattern-like background */}
               <div className="bg-white rounded-2xl shadow-2xl">
                  {/* Pass the form as a child; supply a callback for when the user joins */}

                  <NewsLetterForm
                     onJoin={(email) => {
                        if (onJoin) onJoin(email);
                        // Delay closing after success
                        if (onClose) {
                           setTimeout(() => {
                              onClose();
                           }, 2000); // stays open for 2s after success
                        }
                     }}
                  />


               </div>
            </div>
         </div>
      </div>,
      document.body
   );
}