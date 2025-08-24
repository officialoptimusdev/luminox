import { missionVisionData } from "@/constants/data";
import MissionVisionCard from "../Cards/MissionVisionCard";

export default function FeaturedAbout() {
  return (
    <section className="w-full py-16 px-6 sm:px-10 lg:px-20">
      {/* Header (unchanged) */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold mb-4">About Luminox!</h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Luminox Healthcare Services offers compassionate, accessible,
          and comprehensive remote mental health services, empowering individuals
          and families on their journey to emotional well-being. We deliver evidence-based, individualized care wherever
          and whenever you need it, ensuring effective and up-to-date treatment for better health outcomes.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="space-y-10">
        <MissionVisionCard {...missionVisionData[0]} />
        <MissionVisionCard {...missionVisionData[1]} reverse />
      </div>

    </section>
  );
}
