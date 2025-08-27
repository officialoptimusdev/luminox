import { servicesData } from "@/constants/data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function FeaturedServices() {
  return (
    <section className="w-full py-16 px-6 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Welcome!</h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Luminox Healthcare Services offers compassionate, convenient, and
          personalized telepsychiatry. We provide high-quality, evidence-based
          mental health care from the comfort of your home, with experienced
          providers committed to your well-being through accessible and culturally
          competent support.
        </p>
        <Button className="rounded-full bg-black text-white hover:bg-gray-800">
          See Services <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
