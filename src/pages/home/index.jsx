import React, { useEffect, useState } from "react";
import FeaturedBlog from "@/components/Featured/FeaturedBlog";
import FeaturedSection from "@/components/Featured/FeaturedSection";
import FeaturedServices from "@/components/Featured/FeaturedServices";
import Hero from "@/components/Hero/HomeHero";
import MissionStatement from "@/components/Sections/MissionStatement";
import ReviewSection from "@/components/Sections/ReviewSection";
import NewsLetterModal from "@/components/Modals/NewsLetterModal";
import ContactFormModal from "@/components/Modals/ContactFormModal";
import { fetchBlogs } from "@/lib/fetchBlogs";
import BlogSkeleton from "@/components/Atoms/Skeletons/BlogSkeleton";

const Home = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch latest blogs for homepage
  useEffect(() => {
    fetchBlogs()
      .then((data) => setBlogs(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // rotating sections
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

  // rotating logic
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingSections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  
// newsletter modal
useEffect(() => {
  const showTimer = setTimeout(() => {
    setShowNewsletter(true);
  }, 5000);

  return () => clearTimeout(showTimer);
}, []);


  // contact modal handler
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
        {loading ? (
          <BlogSkeleton count={3} />
        ) : (
          <FeaturedBlog blogs={blogs} limit={3} />
        )}
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <FeaturedSection
          sections={[rotatingSections[currentIndex], contactSection]}
        />
      </div>

      {/* <ReviewSection /> */}

      {/* Elfsight Google Reviews | Untitled Google Reviews  */}
     
      <div class="elfsight-app-69750553-1868-4fd5-b5dd-fd4fd6bfc806" data-elfsight-app-lazy></div>

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
