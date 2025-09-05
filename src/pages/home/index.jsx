import React, { useEffect, useState } from "react";
import FeaturedBlog from "@/components/Featured/FeaturedBlog";
import FeaturedSection from "@/components/Featured/FeaturedSection";
import FeaturedServices from "@/components/Featured/FeaturedServices";
import Hero from "@/components/Hero/HomeHero";
import MissionStatement from "@/components/Sections/MissionStatement";
import ReviewSection from "@/components/Sections/ReviewSection";
import NewsLetterModal from "@/components/Modals/NewsLetterModal";

const Home = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  const sections = [
    {
      tagline: "Washington DC",
      title: "Mental Health Services.",
      description:
        "The core foundation of this movement exists with Luminox Healthcare Services which operates to revolutionize mental health service delivery throughout Washington DC.",
      buttonText: "Learn More",
      image: "/assets/featsec-one.jpg", // 👈 now .jpg
      bg: "#fff",
    },
    {
      tagline: "Contact Us",
      title: "Get In Touch.",
      description:
        "Have questions or ready to start your journey to better mental well-being? Reach out to Luminox Healthcare Services today—we look forward to connecting with you.",
      buttonText: "Get In Touch",
      image: "/assets/featsec-two.jpg", // 👈 now .jpg
      bg: "#f9fafb",
    },
  ];

  useEffect(() => {
    setShowNewsletter(true);
    const t = setTimeout(() => setShowNewsletter(false), 20000);
    return () => clearTimeout(t);
  }, []);

  const handleJoin = (email) => {
    console.log("Newsletter subscribed:", email);
  };

  return (
    <main className="w-full">
      <Hero />
      <FeaturedServices />
      <MissionStatement />
      <div className="bg-black text-white">
        <FeaturedBlog limit={3} />
      </div>
      <FeaturedSection sections={sections} />
      <ReviewSection />
      <NewsLetterModal
        open={showNewsletter}
        onClose={() => setShowNewsletter(false)}
        onJoin={(email) => {
          handleJoin(email);
          setShowNewsletter(false);
        }}
      />
    </main>
  );
};

export default Home;
