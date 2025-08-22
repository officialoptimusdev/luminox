import FeaturedBlog from "@/components/FeaturedBlog";
import FeaturedSection from "@/components/FeaturedSection";
import FeaturedServices from "@/components/FeaturedServices";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";

const Home = () => {
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

  return (
    <main className="w-full">
      <Hero />
      <FeaturedServices />
      <MissionStatement />

      {/* Blog sits on black bg */}
      <FeaturedBlog />

      {/* First section starts with top curve blending into black */}
      <FeaturedSection sections={sections} />
    </main>
  );
};

export default Home;
