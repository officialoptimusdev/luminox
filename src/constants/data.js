import { Pill, Baby, Activity, HeartPulse, ArrowRight, SlidersHorizontal } from "lucide-react";
import cardImages from "./cardImages";
import missionImages from "./missionImages";
import blogFeatImages from "./blogFeatImages"
import aboutCardsImages from "./aboutCardsImages";
import megaMenuImages from "./megaMenuImages";
import aboutImages from "./aboutImages";
import serviceImages from "./serviceImages";

export const aboutHeroData = {
  icon: "User2", // lucide-react icon name (can be swapped dynamically)
  label: "About Us",
  title: "Meet Luminox Healthcare.",
  description:
    "Luminox Healthcare Services (Mental Health Services) believes in breaking down barriers to mental health care. That is why we offer compassionate, accessible, and comprehensive remote mental health services.",
  buttonText: "Book Session",
  imageDesktop: aboutImages.aboutHero2, 
  imageMobile: aboutImages.aboutHero,  
};


export const servicesHeroData = {
  icon: "SlidersHorizontal", // lucide-react icon name (can be swapped dynamically)
  label: "Services",
  title: "Empowering Your Health Journey.",
  description:
    "Discover our range of services designed to support your, mental well-being, financial convenience and more.",
  buttonText: "Book Session",
  imageDesktop: serviceImages.serviceHero2, 
  imageMobile: serviceImages.serviceHero,  
};


export const missionVisionData = [
  {
    id: 1,
    title: "Our Mission.",
    description:
      "At our telepsychiatry clinic, our mission is to provide compassionate, accessible, and high-quality mental healthcare to individuals seeking support, regardless of geographical barriers. We are dedicated to fostering genuine connections with our patients and delivering personalized care that addresses their unique needs. Our commitment to 'Compassion, connection, and care' drives us to empower individuals on their journey towards mental well-being, promoting healthier and happier lives.",
    image: aboutCardsImages.aboutOne,
    buttonLabel: "See Services",
    buttonVariant: "default",
  },
  {
    id: 2,
    title: "Our Vision.",
    description:
      "Our vision is to lead the telepsychiatry field by setting the standard for compassionate, connection-focused, and caring mental health services. We aspire to break down the boundaries that limit access to mental healthcare, making our services available to anyone in need anytime, anywhere. We envision a world where individuals, regardless of their location, can easily access the support and guidance they require to achieve emotional and psychological well-being.",
    image: aboutCardsImages.aboutTwo,
    buttonLabel: "Need Help?",
    buttonVariant: "outline",
  },
];


export const megaMenuData = [
  {
    id: 1,
    title: "Addiction Treatment",
    description:
      "Addiction can negatively affect every aspect of your life. We provide comprehensive support including evidence-based interventions, telepsychiatry, and relapse prevention.",
    image: megaMenuImages.addiction,
    bgColor: "bg-[#cb6c6e]",
    textColor: "text-black",       
    descriptionColor: "text-black",
  },
  {
    id: 2,
    title: "Child & Adolescent",
    description:
      "Specialized telepsychiatry for children and adolescents, offering personalized support for anxiety, depression, ADHD, and behavioral disorders.",
    image: megaMenuImages.child,
    bgColor: "bg-[#dad4ec]",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 3,
    title: "Crisis Intervention",
    description:
      "We provide immediate psychiatric intervention and safety planning during mental health crises.",
    image: megaMenuImages.crisis,
    bgColor: "bg-[#ffdde1]",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 4,
    title: "Education & Psychoeducation",
    description:
      "Psychoeducation empowers individuals and families to better understand mental health conditions and treatment strategies.",
    image: megaMenuImages.education,
    bgColor: "bg-[#553f99]",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 5,
    title: "Follow-Up & Monitoring",
    description:
      "Ongoing check-ins and assessments ensure continuous support for your progress and treatment plan.",
    image: megaMenuImages.followup,
    bgColor: "bg-[#2e3267]",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 6,
    title: "Geriatric Psychiatry",
    description:
      "Expert psychiatric care for older adults, focusing on age-related conditions and overall wellness.",
    image: megaMenuImages.geriatrics,
    bgColor: "bg-[#ecd4c8]",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 7,
    title: "Medication Management",
    description:
      "Our psychiatrists provide safe and effective medication management for a wide range of conditions.",
    image: megaMenuImages.medication,
    bgColor: "bg-[#4d8e92]",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 8,
    title: "Medication Refills",
    description:
      "Convenient, reliable prescription refills to help you stay on track with your treatment.",
    image: megaMenuImages.refills,
    bgColor: "bg-black",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 9,
    title: "Provider Collaboration",
    description:
      "We coordinate with your healthcare providers to ensure holistic and integrated care.",
    image: megaMenuImages.provider,
    bgColor: "bg-[#292f8c]",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 10,
    title: "PTSD Treatment",
    description:
      "Evidence-based treatment approaches for individuals coping with trauma and PTSD.",
    image: megaMenuImages.ptsd,
    bgColor: "bg-white",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 11,
    title: "Psychiatric Assessments",
    description:
      "Comprehensive assessments to accurately diagnose and guide personalized care.",
    image: megaMenuImages.assessments,
    bgColor: "bg-[#4d8e92]",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 12,
    title: "Psychotherapy (Individual, Group, Family)",
    description:
      "Our therapy services address diverse needs through tailored sessions for individuals, families, or groups.",
    image: megaMenuImages.psychotherapy,
    bgColor: "bg-white",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 13,
    title: "Second Opinion",
    description:
      "We provide a second opinion to help you feel confident about your diagnosis and treatment options.",
    image: megaMenuImages.secondOpinion,
    bgColor: "bg-[#dbe8ea]",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 14,
    title: "Stress Management",
    description:
      "Guidance and coping strategies to help manage stress effectively in daily life.",
    image: megaMenuImages.stress,
    bgColor: "bg-white",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 15,
    title: "Support for Specific Conditions",
    description:
      "Personalized telepsychiatry for depression, anxiety, mood disorders, ADHD, and PTSD.",
    image: megaMenuImages.support,
    bgColor: "bg-[#000]",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 16,
    title: "Treatment Planning",
    description:
      "Collaborative treatment plans tailored to your needs, goals, and lifestyle.",
    image: megaMenuImages.treatment,
    bgColor: "bg-[#ffe6d1]",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
];


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






