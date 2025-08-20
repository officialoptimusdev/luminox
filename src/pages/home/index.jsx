
import Hero from "@/components/Hero";
import heroImages from "@/constants/heroImages";
import FadeSlider from "@/components/FadeSlider";

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <FadeSlider images={heroImages} duration={5000} />
    </main>
  );
};

export default Home;
