import AboutHero from "@/components/Hero/AboutHero";
import BrandsSection from "@/components/BrandsSection";
import FeaturedAbout from "@/components/Featured/FeaturedAbout";
import MeetTheTeam from "@/components/Sections/MeetTheTeam";

const About = () => {
   return (
      <main className="w-full">
         <AboutHero />
         <FeaturedAbout />
         <BrandsSection />
         <MeetTheTeam />
      </main>
   );
};

export default About;
