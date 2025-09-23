import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ServiceForm from "../Forms/ServiceForm";


export default function MobileServiceFormModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open modal only on mobile screen
    if (window.innerWidth < 768) {
      setOpen(true);

      // Auto close after 20s
      const timer = setTimeout(() => {
        setOpen(false);
      }, 90000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="sm:hidden"> {/* Only render on mobile */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm p-0 bg-transparent border-none shadow-none">
          <ServiceForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}
