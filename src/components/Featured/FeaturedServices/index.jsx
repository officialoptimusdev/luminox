import { servicesData } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export default function FeaturedServices() {
  return (
    <section className="w-full py-16 px-6 sm:px-10 lg:px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-2">
        <h2 className="text-4xl font-extrabold mb-4">Our Services</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
        At Luminox Healthcare Services, we recognize that every individual’s story is unique. That’s why our approach goes beyond a one-size-fits-all model.
         Our care is grounded in evidence-based practices but delivered with compassion and cultural sensitivity, 
         ensuring that each visit feels like a step toward clarity, balance, and lasting wellness.
        </p>
        <Link to="/services">
          <Button className="rounded-full bg-black text-white hover:bg-gray-800">
            See Services <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
