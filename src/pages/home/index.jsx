import React, { useEffect, useState } from "react";
import FeaturedBlog from "@/components/Featured/FeaturedBlog";
import FeaturedSection from "@/components/Featured/FeaturedSection";
import FeaturedServices from "@/components/Featured/FeaturedServices";
import Hero from "@/components/Hero/HomeHero";
import MissionStatement from "@/components/Sections/MissionStatement";
import ReviewSection from "@/components/Sections/ReviewSection";
import NewsLetterModal from "@/components/Modals/NewsLetterModal";
import ContactFormModal from "@/components/Modals/ContactFormModal";

const Home = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const sections = [
    {
      tagline: "Washington DC | Maryland | Virginia",
      title: "Mental Health Services.",
      description:
        "The core foundation of this movement exists with Luminox Healthcare Services which operates to revolutionize mental health service delivery throughout Washington DC.",
      buttonText: "Learn More",
      href: "/services",
      image: "/assets/featsec-one.jpg",
      bg: "#fff",
    },
    {
      tagline: "Contact Us",
      title: "Get In Touch.",
      description:
        "Have questions or ready to start your journey to better mental well-being? Reach out to Luminox Healthcare Services today—we look forward to connecting with you.",
      buttonText: "Get In Touch",
      modal: true,
      image: "/assets/featsec-two.jpg",
      bg: "#f9fafb",
    },
  ];


  useEffect(() => {
    // delay before showing
    const showTimer = setTimeout(() => {
      setShowNewsletter(true);
  
      // auto-close after 10s
      const hideTimer = setTimeout(() => {
        setShowNewsletter(false);
      }, 10000);
  
      // cleanup hideTimer when unmounted
      return () => clearTimeout(hideTimer);
    }, 5000); //  delay before showing (5s here)
  
    // cleanup showTimer when unmounted
    return () => clearTimeout(showTimer);
  }, []);
  

  useEffect(() => {
    const handler = () => setShowContact(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
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
      <ContactFormModal open={showContact} onOpenChange={setShowContact} />

    </main>
  );
};

export default Home;
