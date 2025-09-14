import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import FadeSlider from "../../Atoms/FadeSlider";
import heroImages from "@/constants/heroImages";


export default function Hero() {
  const words = ["Connection", "Compassion", "Care"];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [backspace, setBackspace] = useState(false);

  // Typing effect
  useEffect(() => {
    if (index === words.length) return;

    if (!backspace && subIndex === words[index].length + 1) {
      setTimeout(() => setBackspace(true), 1000);
      return;
    }

    if (backspace && subIndex === 0) {
      setBackspace(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (backspace ? -1 : 1));
      },
      backspace ? 50 : 150
    );

    setCurrentWord(words[index].substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, backspace]);

  return (
    <>
      {/* Hero Section */}
      <section className="mt-0 w-full relative flex flex-col items-center justify-center text-center min-h-[60vh] bg-[#e6f0ef] px-4 sm:px-6 lg:px-8 pb-8">
        {/* Heading */}
        <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-12">
          Embodying,
         
        </h1>

        <div className="mt text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
        <h1 className="text-teal-700 transition-all duration-300">
            {currentWord}
            <span className="animate-pulse mt-4">|</span>
          </h1>
        

        </div>

        {/* Subtext */}
        <p className="max-w-2xl text-gray-600 text-sm sm:text-base md:text-lg mt-10 mb-8">
          We embody Connection, Compassion, and Care by fostering genuine relationships, offering empathy,
         and delivering dedicated support that nurtures well-being and resilience. 
         Our commitment is to ensure every individual feels seen, valued, and empowered on their journey to healing.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
         target="_blank"
         rel="noopener noreferrer"
        >
        <Button
            size="lg"
            className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#3E757B] hover:bg-[#3E757B] text-white"
          >
            Book Apointment
            <span className="rounded-full bg-white p-2">
              <ArrowRight className="h-5 w-5 text-black" />
            </span>
          </Button>
        </a>
         
{/* 
       <Link to="/about">
       <Button
            size="lg"
            className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#fff] hover:bg-[#3E757B] text-[#3E757B] hover:text-white"
          >
            Know More
            <span className="rounded-full bg-[#fff] p-2">
              <Eye className="h-5 w-5 text-[#000] hover:text-[#fff]" />
            </span>
          </Button>
       </Link> */}
        </div>


      </section>
      <div className="w-full bg-gradient-to-b from-[#e6f0ef] to-transparent pointer-events-none">
        {/* Slider */}
        <FadeSlider images={heroImages} duration={5000} />
      </div>

    </>
  );
}
