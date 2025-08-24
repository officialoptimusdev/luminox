import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import FadeSlider from "../FadeSlider";
import heroImages from "@/constants/heroImages";

export default function Hero() {
  const words = ["Compassion", "Care", "Clarity"];
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
      <section className="w-full relative flex flex-col items-center justify-center text-center min-h-[50vh] bg-[#e6f0ef] px-4 sm:px-6 lg:px-8 pb-5">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-3">
          Embodying,{" "}
          <span className="text-teal-700 transition-all duration-300">
            {currentWord}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-gray-600 text-sm sm:text-base md:text-lg mb-8">
          Experience compassionate, expert mental health care that fits seamlessly
          into your life. There's always hope despite the hurdles you are facing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#3E757B] hover:bg-[#3E757B] text-white"
          >
            Book Apointment
            <span className="rounded-full bg-white p-2">
              <ArrowRight className="h-5 w-5 text-black" />
            </span>
          </Button>

          <Button
            size="lg"
            className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#fff] hover:bg-[#3E757B] text-[#3E757B] hover:text-white"
          >
            Know More
            <span className="rounded-full bg-[#fff] p-2">
              <Eye className="h-5 w-5 text-[#000] hover:text-[#fff]" />
            </span>
          </Button>
        </div>


      </section>
      <div className="w-full bg-gradient-to-b from-[#e6f0ef] to-transparent pointer-events-none">
        {/* Slider */}
        <FadeSlider images={heroImages} duration={5000} />
      </div>

    </>
  );
}
