import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

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
    <section className="w-full relative flex flex-col items-center justify-center text-center min-h-[100vh] bg-[#e6f0ef] px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-4">
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
        <Button className="rounded-full bg-teal-700 hover:bg-teal-800 text-white px-6 py-4 sm:py-5 text-base sm:text-lg">
          Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <Button
          variant="outline"
          className="rounded-full border-gray-300 bg-white hover:bg-gray-100 text-gray-700 px-6 py-4 sm:py-5 text-base sm:text-lg"
        >
          Know More <Eye className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
