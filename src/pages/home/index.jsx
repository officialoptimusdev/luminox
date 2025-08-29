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
      image: "/assets/featsec-one.png",
      bg: "#fff",
    },
    {
      tagline: "Contact Us",
      title: "Get In Touch.",
      description:
        "Have questions or ready to start your journey to better mental well-being? Reach out to Luminox Healthcare Services today—we look forward to connecting with you.",
      buttonText: "Get In Touch",
      image: "/assets/featsec-two.png",
      bg: "#f9fafb",
    },
  ];

  useEffect(() => {
    // Only show the newsletter modal when Home mounts (i.e., user visits "/")
    setShowNewsletter(true);

    // Auto close after 20 seconds (20000 ms)
    const t = setTimeout(() => {
      setShowNewsletter(false);
    }, 20000);

    // Cleanup timer on unmount
    return () => clearTimeout(t);
  }, []);

  // Optional handler when user successfully joins
  const handleJoin = (email) => {
    // Keep your subscription logic here; this will be called when form submits
    console.log("Newsletter subscribed:", email);
    // you can also call an API here
  };

  return (
    <main className="w-full">
      <Hero />
      <FeaturedServices />
      <MissionStatement />
      <FeaturedBlog />
      <FeaturedSection sections={sections} />
      <ReviewSection />

      {/* Newsletter modal rendered on top when showNewsletter is true */}
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