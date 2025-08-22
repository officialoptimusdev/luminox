import { Pill, Baby, Activity, HeartPulse, ArrowRight } from "lucide-react";
import cardImages from "./cardImages";
import missionImages from "./missionImages";
import blogFeatImages from "./blogFeatImages"


export const blogData = [
  {
    id: 1,
    title: "Where to Find Mental Health Support in Virginia That Makes a Difference?",
    description:
      "Struggles with mental health often creep in silently, rarely announcing themselves with clarity or predictability. You might have noticed it...",
    image: blogFeatImages.blogfeatOne,
    date: "June 30, 2025",
    author: "Digital Guider",
    href: "#",
  },
  {
    id: 2,
    title:
      "Strengthening Mental Health with Medication Management in Maryland and Virginia",
    description:
      "When life starts throwing too much your way — deadlines, responsibilities, sleepless nights — your mental bandwidth can feel stretched thin...",
    image: blogFeatImages.blogfeatTwo,
    date: "June 30, 2025",
    author: "Digital Guider",
    href: "#",
  },
  {
    id: 3,
    title:
      "Tailoring Medication Management Services in Virginia for Mental Health Care",
    description:
      "Mental health needs don’t come with a one-size-fits-all label. What works wonders for one person might barely scratch the surface for another...",
    image: blogFeatImages.blogfeatThree,
    date: "June 30, 2025",
    author: "Digital Guider",
    href: "#",
  },
];


export const missionData = [
  {
    id: 1,
    title: "Insurance Accepted",
    description:
      "Luminox Mental Health is committed to accessible, affordable care, accepting a wide range of insurance plans across VA, MD, and D.C. We continuously expand our accepted plans. If you have questions about coverage, contact us; our staff will help you understand your options and avoid financial burden.",
    image: missionImages.missionOne,
 
  },
  {
    id: 2,
    title: "Submit Your Referrals",
    description:
      "Do you know someone who needs our services? Please submit your referrals by filling out the form below with their details. Thank you for choosing us!",
    image: missionImages.missionTwo,
    buttonText: "Refer Someone",
    icon: ArrowRight
  },
];




export const servicesData = [
  {
    id: 1,
    title: "Addiction Treatment",
    description:
      "Addiction can negatively affect every aspect of your life, from relationships to overall well-being. We recognize that addiction is a deep personal struggle. That's why we provide you with comprehensive support, including evidence-based interventions, addiction tele-psychiatry services, and relapse prevention.",
    image: cardImages.featOne,
    icon: Pill,
    bgColor: "bg-red-200 text-white", // light background for the big left illustration card
  },
  {
    id: 2,
    title: "Child & Adolescent",
    description:
      "We provide specialized telepsychiatry for children and adolescents in a safe, nurturing environment. Our expert team offers personalized support for anxiety, depression, behavioral disorders, and ADHD.",
    image: cardImages.featTwo,
    icon: Baby,
    bgColor: "bg-purple-200 text-white",
  },
  {
    id: 3,
    title: "Follow-Up & Monitoring",
    description:
      "Continuous support is vital for lasting mental wellness. We provide ongoing, accessible virtual psychiatry through regular check-ins and assessments, ensuring your progress and adjusting treatment as needed.",
    image: cardImages.featThree,
    icon: Activity,
    bgColor: "bg-indigo-300 text-white",
  },
  {
    id: 4,
    title: "Support for Specific Conditions",
    description:
      "We offer personalized telepsychiatry services for diverse mental health conditions including depression, anxiety, mood disorders, ADHD, and PTSD. Using clinically proven techniques, we address your unique challenges in a safe, nurturing, and virtual environment.",
    image: cardImages.featFour,
    icon: HeartPulse,
    bgColor: "bg-gray-900 text-white", // dark card
  },
];




