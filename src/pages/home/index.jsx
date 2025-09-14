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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  //  3 rotating location sections
  const rotatingSections = [
    {
      tagline: "Washington DC",
      title: "Mental Health Services.",
      description:
        "The core foundation of this movement exists with Luminox Healthcare Services which operates to revolutionize mental health service delivery throughout Washington DC.",
      buttonText: "Learn More",
      href: "/services",
      image: "/assets/featsec-one.jpg",
      bg: "#fff",
    },
    {
      tagline: "Maryland",
      title: "Expanding Our Reach.",
      description:
        "We are proud to extend our innovative care approach to New York and New Jersey, making compassionate support more accessible.",
      buttonText: "Learn More",
      href: "/services",
      image: "/assets/luminox0.jpg",
      bg: "#fff",
    },
    {
      tagline: "Virginia",
      title: "Nationwide Support.",
      description:
        "Our mission continues across states like California and Texas, ensuring comprehensive services reach communities nationwide.",
      buttonText: "Learn More",
      href: "/services",
      image: "/assets/luminox3.jpg",
      bg: "#fff",
    },
  ];

  //  keep Contact Us section unchanged
  const contactSection = {
    tagline: "Contact Us",
    title: "Get In Touch.",
    description:
      "Have questions or ready to start your journey to better mental well-being? Reach out to Luminox Healthcare Services today—we look forward to connecting with you.",
    buttonText: "Get In Touch",
    modal: true,
    image: "/assets/featsec-two.jpg",
    bg: "#f9fafb",
  };

  // ⏳ rotate only if not paused
  useEffect(() => {
    if (paused) return; // stop when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingSections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]); // re-run when paused changes

  // ⏳ rotate the first section every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Newsletter modal timer
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowNewsletter(true);
      const hideTimer = setTimeout(() => setShowNewsletter(false), 10000);
      return () => clearTimeout(hideTimer);
    }, 5000);
    return () => clearTimeout(showTimer);
  }, []);

  // Contact modal handler
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
      <div className="bg-black text-white mb-20">
        <FeaturedBlog limit={3} />
      </div>

      {/*  Pass only current rotating section + contact section */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <FeaturedSection sections={[rotatingSections[currentIndex], contactSection]} />
      </div>

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
