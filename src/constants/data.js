
import missionImages from "./missionImages";

import aboutCardsImages from "./aboutCardsImages";
import aboutImages from "./aboutImages";
import serviceImages from "./serviceImages";


import pricingImages from "./pricingImages";
import formHeroImages from "./formHeroImages";

import onlineFormImages from "./onlineFormImages";



import blogFeatImages from "./blogFeatImages"

import megaMenuImages from "./megaMenuImages";

import { Pill, Baby, Activity, HeartPulse, ArrowRight, SlidersHorizontal } from "lucide-react";

import downloadFormImages from "./downloadFormImages";




export const pricingData = [
  {
    id: 1,
    title: "Initial Assessment",
    price: "$375",
    description: "Click 'Book Session' to get assessment.",
    image: pricingImages.assessment,
    bgColor: "bg-[#ffe2be]",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "Suboxone Induction",
    price: "$350",
    description: "Comprehensive induction session for Suboxone treatment.",
    image: pricingImages.suboxone,
    bgColor: "bg-[#F5E4E6]",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "Suboxone Maintenance Therapy/Routine Follow-up visits",
    price: "$275",
    description: "Ongoing therapy and regular follow-up visits.",
    image: pricingImages.maintenance,
    bgColor: "bg-[#a2b9e1]",
    textColor: "text-black",
  },
  {
    id: 4,
    title: "Telephone Consultation Calls",
    price: "$225/20 mins",
    description: "Quick telephonic consultations for follow-ups and support.",
    image: pricingImages.call,
    bgColor: "bg-[#1b2745]",
    textColor: "text-white",
  },
  {
    id: 5,
    title: "Others",
    price: "$50 - $100",
    description: "Paperwork, forms, and temporary disability support.",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
  },
];



export const megaMenuData = [
  {
    id: 1,
    title: "Depression",
    slug: "depression",
    description: `At Luminox Healthcare Services LLC, we provide personalized, evidence-based depression treatment through secure telepsychiatry services — serving eligible patients in Maryland, Washington D.C., and Virginia.`,
    image: megaMenuImages.addiction,
    bgColor: "bg-[#cb6c6e]",
    textColor: "text-black",       
    descriptionColor: "text-black",
  },
  {
    id: 2,
    title: "Anxiety",
    slug: "anxiety",
    description: `Anxiety can make everyday life feel overwhelming. At Luminox Healthcare Services LLC, we provide personalized anxiety evaluation, treatment, and medication management through convenient telepsychiatry.`,
    image: megaMenuImages.child,
    bgColor: "bg-[#dad4ec]",
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 3,
    title: "PTSD",
    slug: "ptsd",
    description: `Traumatic experiences can continue affecting your thoughts, emotions, and sleep long after the event. We provide compassionate, individualized PTSD evaluation, treatment, and medication management.`,
    image: megaMenuImages.education,
    bgColor: "bg-[#553f99]",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 4,
    title: "OCD",
    slug: "ocd",
    description: `Unwanted thoughts, persistent fears, and repetitive behaviors can become exhausting. We provide comprehensive OCD evaluation, treatment planning, and medication management through telepsychiatry.`,
    image: megaMenuImages.refills,
    bgColor: "bg-black",
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 5,
    title: "Eating Disorders",
    slug: "eating-disorders",
    description: `Eating disorders are serious mental and physical health conditions that can affect people of different ages and backgrounds. We provide psychiatric evaluation and mental health treatment for eating-related concerns.`,
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 6,
    title: "ADHD",
    slug: "adhd",
    description: `We provide comprehensive ADHD evaluation, treatment, and medication management through telepsychiatry for children, adolescents, and adults — helping identify whether ADHD or another condition contributes to your difficulties.`,
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
  {
    id: 7,
    title: "Smoking & Alcohol Cessation",
    slug: "smoking-alcohol-cessation",
    description: `We provide individualized psychiatric support for patients who want to quit smoking, stop nicotine use, reduce alcohol consumption, or better understand the role substances play in their mental health.`,
    textColor: "text-white",     
    descriptionColor: "text-white",
  },
  {
    id: 8,
    title: "Insomnia",
    slug: "insomnia",
    description: `We evaluate and treat insomnia and sleep difficulties that may be associated with psychiatric conditions, medications, stress, or lifestyle factors — developing a treatment plan based on your individual needs.`,
    textColor: "text-black",     
    descriptionColor: "text-black",
  },
];
  // {
  //   id: 9,
  //   title: "Provider Collaboration",
  //   description:
  //     "We coordinate with your healthcare providers to ensure holistic and integrated care.",
  //   textColor: "text-white",     
  //   descriptionColor: "text-white",
  // },

  // {
  //   id: 10,
  //   title: "Psychiatric Assessments",
  //   description:
  //     "Comprehensive assessments to accurately diagnose and guide personalized care.",
  //   textColor: "text-white",     
  //   descriptionColor: "text-white",
  // },
  // {
  //   id: 11,
  //   title: "Psychotherapy (Individual, Group, Family)",
  //   description:
  //     "Our therapy services address diverse needs through tailored sessions for individuals, families, or groups.",
  //   textColor: "text-black",     
  //   descriptionColor: "text-black",
  // },
  // {
  //   id: 12,
  //   title: "Second Opinion",
  //   description:
  //     "We provide a second opinion to help you feel confident about your diagnosis and treatment options.",
  //   textColor: "text-black",     
  //   descriptionColor: "text-black",
  // },
  // {
  //   id: 13,
  //   title: "Stress Management",
  //   description:
  //     "Guidance and coping strategies to help manage stress effectively in daily life.",
  //   textColor: "text-black",     
  //   descriptionColor: "text-black",
  // },
  // {
  //   id: 14,
  //   title: "Support for Specific Conditions",
  //   description:
  //     "Personalized telepsychiatry for depression, anxiety, mood disorders, ADHD, and PTSD.",
  //   textColor: "text-white",     
  //   descriptionColor: "text-white",
  // },
  // {
  //   id: 15,
  //   title: "Treatment Planning",
  //   description:
  //     "Collaborative treatment plans tailored to your needs, goals, and lifestyle.",
  //   textColor: "text-black",     
  //   descriptionColor: "text-black",
  // },
// ];




export const onlineFormsData = [
  {
    id: 1,
    title: "Client Safety Contract",
    description: "Agreement ensuring client safety and therapeutic guidelines.",
    image: onlineFormImages.safety,
    bgColor: "bg-blue-600",
    textColor: "text-white",
    url: "/forms/client-safety",  
  },
  {
    id: 2,
    title: "Informed Consent for Counseling",
    description: "Outlines rights, responsibilities, and counseling procedures.",
    image: onlineFormImages.informed,
    bgColor: "bg-[#ebe2f8]",
    textColor: "text-black",
    url: "/forms/informed",
  },
  {
    id: 3,
    title: "Patient Consent for Telehealth",
    description: "Consent form for online and remote therapy sessions.",
    image: onlineFormImages.telehealth,
    bgColor: "bg-neutral-900",
    textColor: "text-white",
    url: "/forms/tele-health",
  },
  {
    id: 4,
    title: "Authorization for Release of Information",
    description: "Allows sharing of information between authorized parties.",
    image: onlineFormImages.release,
    bgColor: "bg-[#fff9ec]",
    textColor: "text-black",
    url: "/forms/authorization-release",
  },
];


export const servicesData = [
  {
    id: 1,
    title: "Depression",
    slug: "depression",
    description: `At Luminox Healthcare Services LLC, we provide personalized, evidence-based depression treatment through secure telepsychiatry services — serving eligible patients in Maryland, Washington D.C., and Virginia.`,
    image: megaMenuImages.addiction,
    bgColor: "bg-[#cb6c6e]",
    textColor: "text-black",
    descriptionColor: "text-black",
  },
  {
    id: 2,
    title: "Anxiety",
    slug: "anxiety",
    description: `Anxiety can make everyday life feel overwhelming. At Luminox Healthcare Services LLC, we provide personalized anxiety evaluation, treatment, and medication management through convenient telepsychiatry.`,
    image: megaMenuImages.child,
    bgColor: "bg-[#dad4ec]",
    textColor: "text-black",
    descriptionColor: "text-black",
  },
  {
    id: 3,
    title: "PTSD",
    slug: "ptsd",
    description: `Traumatic experiences can continue affecting your thoughts, emotions, and sleep long after the event. We provide compassionate, individualized PTSD evaluation, treatment, and medication management.`,
    image: megaMenuImages.crisis,
    bgColor: "bg-[#ffdde1]",
    textColor: "text-black",
    descriptionColor: "text-black",
  },
  {
    id: 4,
    title: "Insomnia",
    slug: "insomnia",
    description: `We evaluate and treat insomnia and sleep difficulties that may be associated with psychiatric conditions, medications, stress, or lifestyle factors — developing a treatment plan based on your individual needs.`,
    image: megaMenuImages.education,
    bgColor: "bg-[#553f99]",
    textColor: "text-white",
    descriptionColor: "text-white",
  },
  {
    id: 5,
    title: "Eating Disorders",
    slug: "eating-disorders",
    description: `Eating disorders are serious mental and physical health conditions that can affect people of different ages and backgrounds. We provide psychiatric evaluation and mental health treatment for eating-related concerns.`,
    image: megaMenuImages.followup,
    bgColor: "bg-[#2e3267]",
    textColor: "text-white",
    descriptionColor: "text-white",
  },
  {
    id: 6,
    title: "ADHD",
    slug: "adhd",
    description: `We provide comprehensive ADHD evaluation, treatment, and medication management through telepsychiatry for children, adolescents, and adults — helping identify whether ADHD or another condition contributes to your difficulties.`,
    image: megaMenuImages.geriatrics,
    bgColor: "bg-[#ecd4c8]",
    textColor: "text-black",
    descriptionColor: "text-black",
  },
  {
    id: 7,
    title: "OCD",
    slug: "ocd",
    description: `Unwanted thoughts, persistent fears, and repetitive behaviors can become exhausting. We provide comprehensive OCD evaluation, treatment planning, and medication management through telepsychiatry.`,
    image: megaMenuImages.refills,
    bgColor: "bg-black",
    textColor: "text-white",
    descriptionColor: "text-white",
  },
  {
    id: 8,
    title: "Smoking & Alcohol Cessation",
    slug: "smoking-alcohol-cessation",
    description: `We provide individualized psychiatric support for patients who want to quit smoking, stop nicotine use, reduce alcohol consumption, or better understand the role substances play in their mental health.`,
    image: megaMenuImages.medication,
    bgColor: "bg-[#4d8e92]",
    textColor: "text-white",
    descriptionColor: "text-white",
  },
];





export const blogHeroData = {
  icon: "BookOpen",
  label: "Read Our Blog",
  title: "The Wellness Journal.",
  description:
    "Practical advice and compassionate insights for everyday well-being.",
};


export const blogData = [
  {
    id: 1,
    title: "Where to Find Mental Health Support in Virginia That Makes a Difference?",
    description:
      "Struggles with mental health often creep in silently, rarely announcing themselves with clarity or predictability. You might have noticed it...",
    image: blogFeatImages.blogfeatOne,
    date: "June 30, 2025",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    <h2>Access Without the Commute</h2>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <h2>It’s Not Just Stress</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2>Final Thoughts</h2>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  `,
  },
  {
    id: 2,
    title:
      "Strengthening Mental Health with Medication Management in Maryland and Virginia",
    description:
      "When life starts throwing too much your way — deadlines, responsibilities, sleepless nights — your mental bandwidth can feel stretched thin...",
    image: blogFeatImages.blogfeatTwo,
    date: "June 30, 2025",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    <h2>Access Without the Commute</h2>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <h2>It’s Not Just Stress</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2>Final Thoughts</h2>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  `,
  },
  {
    id: 3,
    title:
      "Tailoring Medication Management Services in Virginia for Mental Health Care",
    description:
      "Mental health needs don’t come with a one-size-fits-all label. What works wonders for one person might barely scratch the surface for another...",
    image: blogFeatImages.blogfeatThree,
    date: "June 30, 2025",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    <h2>Access Without the Commute</h2>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <h2>It’s Not Just Stress</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2>Final Thoughts</h2>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  `,
  },

  {
    id: 4,
    title:
      "Maryland Behavioral Health Services That Integrate Online Psychiatry",
    description:
      "Mental health has taken center stage in conversations about overall well-being, and rightly so. Between busy schedules, social expectations, and personal struggles...",
    image: blogFeatImages.blogfeatFour,
    date: "June 30, 2025",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    <h2>Access Without the Commute</h2>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <h2>It’s Not Just Stress</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2>Final Thoughts</h2>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  `,
  },

  {
    id: 5,
    title:
      "Exploring the Essentials of Comprehensive Mental Health Care Management",
    description:
      "Managing mental health goes far beyond weekly therapy appointments or a quick chat with a doctor. It involves a thoughtful balance of emotional, physical...",
    image: blogFeatImages.blogfeatFive,
    date: "June 30, 2025",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    <h2>Access Without the Commute</h2>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <h2>It’s Not Just Stress</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2>Final Thoughts</h2>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  `,
  },

  {
    id: 6,
    title:
      "Strengthening Recovery Through Mental Health Support Services at Treatment Centers",
    description:
      "Let’s face it—life isn’t always sunshine and smooth sailing. Between personal pressures, family responsibilities, work stress, and a thousand other things pulling...",
    image: blogFeatImages.blogfeatSix,
    date: "June 30, 2025",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
    <h2>Access Without the Commute</h2>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    <h2>It’s Not Just Stress</h2>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <h2>Final Thoughts</h2>
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
  `,
  },

  {
    id: 7,
    title: "How to Know When It’s Time to Seek Professional Help",
    description:
      "Mental health challenges do not always begin with a crisis. Sometimes they appear gradually—as persistent worry, difficulty sleeping, low motivation, irritability, trouble concentrating, changes in appetite, or simply feeling unlike yourself...",
    image: blogFeatImages.blogfeatSeven,
    date: "September 2, 2026",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>Mental health challenges do not always begin with a crisis. Sometimes they appear gradually—as persistent worry, difficulty sleeping, low motivation, irritability, trouble concentrating, changes in appetite, or simply feeling unlike yourself.</p>
    <p>At other times, symptoms may begin after a major life change, traumatic experience, relationship difficulty, work-related stress, loss, or other challenging event.</p>
    <h2>Knowing When to Seek Help</h2>
    <p>Knowing when to seek professional help can make an important difference. Recognizing the signs, understanding your symptoms, and knowing your options is the first step toward feeling better.</p>
    <p>If you are looking for <a href="https://www.instagram.com/luminox_mental_health?igsi=Z3FwdnNsODFhNHUw" target="_blank" rel="noopener noreferrer">mental health services in Maryland</a>, understanding your symptoms and the types of care available can help you make a more informed decision about your next step.</p>
    <h2>Compassionate and Individualized Care</h2>
    <p>At <a href="https://www.psychologytoday.com/profile/1113818" target="_blank" rel="noopener noreferrer">Luminox Healthcare Services, LLC</a>, we believe mental health care should be compassionate, individualized, clinically responsible, and centered on the needs of each patient. Mental health treatment is not one-size-fits-all. Depending on your symptoms and circumstances, care may include a psychiatric evaluation, psychotherapy, medication management, telepsychiatry, or a combination of approaches.</p>
  `,
  },

  {
    id: 8,
    title: "Mental Health Is Part of Your Overall Health",
    description:
      "Mental health affects how we think, feel, behave, interact with others, manage stress, make decisions, and function in everyday life. Just as people seek medical care for persistent physical symptoms, emotional or behavioral symptoms may also deserve professional attention...",
    image: blogFeatImages.blogfeatEight,
    date: "September 2, 2026",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>Mental health affects how we think, feel, behave, interact with others, manage stress, make decisions, and function in everyday life.</p>
    <p>Just as people seek medical care for persistent physical symptoms, emotional or behavioral symptoms may also deserve professional attention.</p>
    <h2>Key Questions to Consider</h2>
    <p>Occasional stress, sadness, worry, frustration, or difficulty sleeping can be part of normal life. The important questions are often:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>How severe are the symptoms?</li>
      <li>How long have they been happening?</li>
      <li>Are they getting worse?</li>
      <li>Are they interfering with work, school, relationships, sleep, parenting, or daily responsibilities?</li>
      <li>Are you having difficulty coping on your own?</li>
    </ul>
    <p>You do not necessarily need to wait until symptoms become overwhelming before speaking with a mental health professional.</p>
  `,
  },

  {
    id: 9,
    title: "How Do I Know If I Need Mental Health Treatment?",
    description:
      "There is no single symptom that determines whether someone needs treatment. Instead, consider how your emotional or behavioral symptoms are affecting your ability to function...",
    image: blogFeatImages.blogfeatNine,
    date: "September 2, 2026",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>There is no single symptom that determines whether someone needs treatment.</p>
    <p>Instead, consider how your emotional or behavioral symptoms are affecting your ability to function.</p>
    <h2>Recognizing the Signs</h2>
    <p>You may benefit from talking with a mental health professional if you experience symptoms such as:</p>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Persistent sadness, hopelessness, or emptiness</li>
      <li>Excessive worry or fear</li>
      <li>Frequent panic attacks</li>
      <li>Irritability or significant mood changes</li>
      <li>Difficulty concentrating</li>
      <li>Loss of motivation</li>
      <li>Loss of interest in activities you previously enjoyed</li>
      <li>Significant changes in sleep</li>
      <li>Changes in appetite or weight</li>
      <li>Difficulty completing work, school, or household responsibilities</li>
      <li>Social withdrawal or isolation</li>
      <li>Difficulty managing anger</li>
      <li>Intrusive or unwanted thoughts</li>
      <li>Difficulty coping after trauma</li>
      <li>Persistent grief that significantly affects functioning</li>
      <li>Problems with attention, organization, or impulsivity</li>
      <li>Periods of unusually elevated or highly irritable mood</li>
      <li>Increased substance use as a way of coping</li>
      <li>Relationship difficulties related to emotional or behavioral symptoms</li>
    </ul>
    <h2>Duration and Impact of Symptoms</h2>
    <p>The duration and impact of symptoms are particularly important.</p>
    <p>The National Institute of Mental Health recommends considering professional help when severe or distressing symptoms persist for two weeks or longer, particularly when they interfere with sleep, concentration, enjoyment of activities, or the ability to complete usual responsibilities.</p>
    <p>However, you do not have to wait two weeks if symptoms are severe, rapidly worsening, or creating an immediate safety concern.</p>
  `,
  },

  {
    id: 10,
    title: "What Mental Health Conditions Can Be Treated?",
    description:
      "Mental health professionals evaluate and treat many different conditions. Depending on the provider's training, scope of practice, and the patient's individual needs, treatment may address conditions including Anxiety, Depression, ADHD, PTSD, Bipolar Disorder, and more...",
    image: blogFeatImages.blogfeatTen,
    date: "September 2, 2026",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>Mental health professionals evaluate and treat many different conditions.</p>
    <p>Depending on the provider's training, scope of practice, and the patient's individual needs, treatment may address conditions including:</p>
    
    <h2>Anxiety Disorders</h2>
    <p>Anxiety can involve persistent worry, nervousness, physical tension, difficulty sleeping, racing thoughts, avoidance, or fear that feels difficult to control.</p>
    <p>Some people experience generalized anxiety, while others experience panic attacks, social anxiety, phobias, or anxiety associated with another mental health condition.</p>
    <p>Professional anxiety treatment may include psychotherapy, behavioral strategies, medication when clinically appropriate, or a combination of approaches.</p>
    
    <h2>Depression</h2>
    <p>Depression is more than simply having a bad day.</p>
    <p>Symptoms may include persistent sadness, decreased motivation, loss of interest or pleasure, fatigue, changes in sleep or appetite, difficulty concentrating, feelings of guilt or worthlessness, and other emotional or physical symptoms.</p>
    <p>A mental health professional can evaluate whether symptoms are consistent with depression and recommend an individualized treatment plan.</p>
    
    <h2>ADHD</h2>
    <p>Attention-deficit/hyperactivity disorder can affect children, adolescents, and adults.</p>
    <p>Symptoms may involve difficulty sustaining attention, disorganization, forgetfulness, impulsivity, restlessness, procrastination, or difficulty completing tasks.</p>
    <p>Because several other conditions can produce symptoms that resemble ADHD, a comprehensive evaluation is important before establishing a diagnosis or treatment plan.</p>
    
    <h2>PTSD and Trauma-Related Conditions</h2>
    <p>Traumatic experiences can affect people in different ways.</p>
    <p>Some individuals develop intrusive memories, nightmares, avoidance, emotional numbness, heightened alertness, irritability, anxiety, sleep disturbances, or other symptoms following trauma.</p>
    <p>Trauma-informed mental health treatment focuses on understanding symptoms within the context of the individual's experiences while promoting safety, coping, and recovery.</p>
    
    <h2>Bipolar Disorder</h2>
    <p>Bipolar disorders involve significant changes in mood, energy, activity, and functioning.</p>
    <p>Because symptoms can sometimes overlap with depression, ADHD, anxiety, substance-related conditions, or other psychiatric disorders, an appropriate psychiatric assessment is important.</p>
    
    <h2>Other Mental Health Concerns</h2>
    <p>Professional behavioral health services may also help individuals experiencing obsessive-compulsive symptoms, panic attacks, stress-related problems, grief, sleep difficulties, relationship concerns, and other emotional or behavioral challenges.</p>
  `,
  },

  {
    id: 11,
    title: "Should I See a Therapist or a Psychiatric Provider?",
    description:
      "This is one of the most common questions people have when looking for mental health services. The right provider depends on your symptoms and treatment needs. Learn how therapists and psychiatric providers help...",
    image: blogFeatImages.blogfeatEleven,
    date: "September 2, 2026",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>This is one of the most common questions people have when looking for mental health services.</p>
    <p>The right provider depends on your symptoms and treatment needs.</p>

    <h2>A therapist may help with:</h2>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Developing coping strategies</li>
      <li>Processing difficult experiences</li>
      <li>Managing anxiety or stress</li>
      <li>Addressing relationship problems</li>
      <li>Improving emotional regulation</li>
      <li>Working through grief or trauma</li>
      <li>Changing unhelpful patterns of thinking or behavior</li>
    </ul>
    <p>Psychotherapy can take several forms, including individual therapy, family therapy, couples therapy, and specialized therapeutic approaches.</p>

    <h2>A psychiatric provider may help with:</h2>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Comprehensive psychiatric evaluation</li>
      <li>Diagnostic clarification</li>
      <li>Assessment of psychiatric symptoms</li>
      <li>Evaluation of whether medication may be appropriate</li>
      <li>Medication management</li>
      <li>Monitoring treatment response</li>
      <li>Adjusting psychiatric medications when clinically indicated</li>
      <li>Coordinating treatment with other healthcare professionals when appropriate</li>
    </ul>
    <p>Many patients benefit from both psychotherapy and psychiatric medication management.</p>
    <p>The decision depends on the person's diagnosis, symptoms, preferences, medical history, previous treatment, response to treatment, and other clinical factors.</p>
  `,
  },

  {
    id: 12,
    title: "What Happens During a Psychiatric Evaluation?",
    description:
      "If you have never had a psychiatric evaluation, you may wonder what to expect. A psychiatric evaluation is an opportunity for the provider to develop a more complete understanding of what you are experiencing...",
    image: blogFeatImages.blogfeatTwelve,
    date: "September 2, 2026",
    author: " Dr. Adurota",
    // href: "#",
    content: `
    <p>If you have never had a psychiatric evaluation, you may wonder what to expect.</p>
    <p>A psychiatric evaluation is an opportunity for the provider to develop a more complete understanding of what you are experiencing.</p>
    <h2>Your Provider May Ask About:</h2>
    <ul className="list-disc pl-6 space-y-2 mb-4">
      <li>Your current symptoms</li>
      <li>When the symptoms began</li>
      <li>How symptoms affect daily life</li>
      <li>Previous mental health treatment</li>
      <li>Current and previous medications</li>
      <li>Medical history</li>
      <li>Family psychiatric history</li>
      <li>Sleep</li>
      <li>Appetite</li>
      <li>Energy</li>
      <li>Concentration</li>
      <li>Substance use</li>
      <li>Major life events or stressors</li>
      <li>Trauma history when clinically relevant</li>
      <li>Social and occupational functioning</li>
      <li>Safety concerns</li>
    </ul>
    <h2>The Goal of an Evaluation</h2>
    <p>The goal is not simply to assign a diagnosis.</p>
    <p>A comprehensive evaluation helps the provider understand your symptoms, identify possible contributing factors, consider alternative explanations, and determine appropriate treatment recommendations.</p>
  `,
  },

  {
    id: 13,
    title: "What Is Medication Management?",
    description:
      "Psychiatric medication management involves more than writing a prescription. When medication is clinically appropriate, ongoing management may include reviewing symptoms, evaluating effectiveness, monitoring possible side effects, considering medication interactions, discussing adherence, and determining whether changes are needed.",
    image: blogFeatImages.blogfeatThirteen,
    date: "September 3, 2026",
    author: " Dr. Adurota",
    content: `
    <p>Psychiatric medication management involves more than writing a prescription.</p>
    <p>When medication is clinically appropriate, ongoing management may include reviewing symptoms, evaluating effectiveness, monitoring possible side effects, considering medication interactions, discussing adherence, and determining whether changes are needed.</p>
    <p>Medication decisions should be individualized.</p>
    <p>A medication that works well for one person may not be appropriate for another person with similar symptoms.</p>
    <h2>Your Psychiatric Provider May Consider Factors Such As:</h2>
    <ul>
      <li>Diagnosis</li>
      <li>Severity of symptoms</li>
      <li>Medical history</li>
      <li>Other medications</li>
      <li>Previous medication trials</li>
      <li>Treatment response</li>
      <li>Side effects</li>
      <li>Patient preferences</li>
      <li>Pregnancy or reproductive considerations when applicable</li>
      <li>Substance-use history</li>
      <li>Other relevant clinical factors</li>
    </ul>
    <p>Medication may be used independently in certain situations, but it is frequently one component of a broader treatment plan.</p>
  `,
  },

  {
    id: 14,
    title: "Can I Receive Mental Health Care Through Telepsychiatry?",
    description:
      "For many patients, yes. Telepsychiatry allows appropriate psychiatric services to be delivered remotely through secure telecommunications technology.",
    image: blogFeatImages.blogfeatFourteen,
    date: "September 3, 2026",
    author: " Dr. Adurota",
    content: `
    <p>For many patients, yes.</p>
    <p><a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680" target="_blank" rel="noopener noreferrer">Telepsychiatry</a> allows appropriate psychiatric services to be delivered remotely through secure telecommunications technology.</p>
    <p>Depending on clinical appropriateness, provider licensure, the patient's physical location at the time of the appointment, and applicable laws and regulations, virtual mental health services may include psychiatric evaluations, follow-up appointments, medication management, and certain therapy services.</p>
    <p>Telepsychiatry can be particularly useful for people who have demanding work schedules, transportation difficulties, caregiving responsibilities, mobility concerns, or limited access to nearby psychiatric providers.</p>
    <p>However, telepsychiatry is not appropriate for every situation. Your provider should determine whether virtual treatment is clinically suitable for your needs.</p>
  `,
  },

  {
    id: 15,
    title: "Finding Mental Health Services in Maryland",
    description:
      "When searching for a mental health clinic in Maryland, it can be tempting to simply type \u201cpsychiatrist near me\u201d or \u201cmental health clinic near me\u201d and select the first result. Location and convenience matter, but they should not be the only considerations.",
    image: blogFeatImages.blogfeatFifteen,
    date: "September 3, 2026",
    author: " Dr. Adurota",
    content: `
    <p>When searching for a <a href="https://www.psychologytoday.com/profile/1113818" target="_blank" rel="noopener noreferrer">mental health clinic in Maryland</a>, it can be tempting to simply type "psychiatrist near me" or "mental health clinic near me" and select the first result.</p>
    <p>Location and convenience matter, but they should not be the only considerations.</p>
    <p>Consider whether the practice offers the type of service you need and whether the provider has appropriate credentials and experience treating your concerns.</p>
    <h2>You May Also Want to Ask:</h2>
    <ul>
      <li>Does the practice provide psychiatric evaluations?</li>
      <li>Is medication management available?</li>
      <li>Are telepsychiatry appointments offered?</li>
      <li>Does the provider treat my age group?</li>
      <li>Does the provider commonly work with my condition?</li>
      <li>What insurance plans are accepted?</li>
      <li>Are self-pay options available?</li>
      <li>How are follow-up appointments scheduled?</li>
      <li>What should I do if I experience a mental health emergency?</li>
    </ul>
    <p>Finding the right provider may take some research, but establishing a therapeutic relationship in which you feel heard and respected is an important part of care.</p>
  `,
  },

  {
    id: 16,
    title: "Mental Health Services in Virginia and Washington, D.C.",
    description:
      "Access to virtual mental health care has made it possible for some patients to receive treatment without regularly traveling to a traditional office.",
    image: blogFeatImages.blogfeatSixteen,
    date: "September 3, 2026",
    author: " Dr. Adurota",
    content: `
    <p>Access to virtual mental health care has made it possible for some patients to receive treatment without regularly traveling to a traditional office.</p>
    <p>For individuals searching for <a href="https://www.psychologytoday.com/profile/1113818" target="_blank" rel="noopener noreferrer">mental health services in Virginia or mental health services in Washington, D.C.</a>, telepsychiatry may provide another way to access professional care when services are offered by a provider appropriately authorized to practice where the patient is physically located.</p>
    <p>Patients should always confirm service availability, provider licensure, insurance participation, and telehealth eligibility before scheduling.</p>
  `,
  },

  {
    id: 17,
    title: "What Should I Look for in a Mental Health Provider?",
    description:
      "A strong patient-provider relationship should involve communication, collaboration, professionalism, and respect.",
    image: blogFeatImages.blogfeatSeventeen,
    date: "September 3, 2026",
    author: " Dr. Adurota",
    content: `
    <p>A strong patient-provider relationship should involve communication, collaboration, professionalism, and respect.</p>
    <h2>Consider Looking for a Provider Who:</h2>
    <ul>
      <li>Listens carefully to your concerns</li>
      <li>Explains diagnoses and recommendations clearly</li>
      <li>Discusses treatment options rather than assuming one approach</li>
      <li>Reviews the potential benefits and risks of treatment</li>
      <li>Encourages appropriate questions</li>
      <li>Considers your preferences</li>
      <li>Monitors your response to treatment</li>
      <li>Coordinates with other healthcare professionals when appropriate</li>
      <li>Respects privacy and confidentiality</li>
      <li>Practices within their professional scope and qualifications</li>
    </ul>
    <p>Mental health treatment should be collaborative whenever possible.</p>
    <p>You should understand what is being recommended and why.</p>
  `,
  },

  {
    id: 18,
    title: "Frequently Asked Questions About Mental Health Treatment",
    description:
      "Answers to common questions regarding psychiatric evaluation, crisis levels, anxiety, depression, telepsychiatry, and what to expect at your first appointment.",
    image: blogFeatImages.blogfeatEighteen,
    date: "September 3, 2026",
    author: " Dr. Adurota",
    content: `
    <h2>When should I see a psychiatrist?</h2>
    <p>Consider a psychiatric evaluation if emotional, behavioral, attention, or mood symptoms are persistent, severe, worsening, affecting daily functioning, or if you want to determine whether medication or other psychiatric treatment may be appropriate.</p>
    <h2>Do I need to be in crisis before seeking mental health treatment?</h2>
    <p>No. Mental health treatment can be appropriate before symptoms reach crisis level. Earlier assessment may help identify problems and establish appropriate treatment before symptoms become more disruptive.</p>
    <h2>Can anxiety be treated?</h2>
    <p>Yes. Anxiety disorders are treatable. Treatment may involve psychotherapy, medication, behavioral interventions, lifestyle modifications, or a combination of approaches depending on the individual.</p>
    <h2>Can depression be treated?</h2>
    <p>Yes. Depression treatment may include psychotherapy, medication, or other evidence-based interventions depending on the type and severity of depression and the patient's individual circumstances.</p>
    <h2>Can I see a psychiatric provider online?</h2>
    <p>Telepsychiatry may be available for appropriate patients. Eligibility depends on several factors, including the patient's location, the provider's licensure, clinical appropriateness, and applicable regulations.</p>
    <h2>What should I expect at my first mental health appointment?</h2>
    <p>Your first appointment typically focuses on understanding your symptoms, history, concerns, goals, and previous treatment. Be prepared to discuss your medical and psychiatric history and provide an accurate list of medications and supplements you currently take.</p>
  `,
  },

  {
    id: 19,
    title: "When Mental Health Symptoms Require Immediate Attention",
    description:
      "Some situations should not wait for a routine mental health appointment. Recognize when symptoms require immediate attention and learn about available crisis resources.",
    image: blogFeatImages.blogfeatNineteen,
    date: "September 3, 2026",
    author: " Dr. Adurota",
    content: `
    <p>Some situations should not wait for a routine mental health appointment.</p>
    <p>Seek immediate help if you or someone you know is experiencing suicidal thoughts, an urge or plan to harm themselves or another person, severe behavioral changes creating an immediate safety risk, or another life-threatening psychiatric emergency.</p>
    <p>In the United States, call or text <strong>988</strong> to reach the 988 Suicide & Crisis Lifeline. Call <strong>911</strong> or go to the nearest emergency department when there is an immediate life-threatening emergency.</p>
    <h2>Take the Next Step Toward Better Mental Health</h2>
    <p>Recognizing that you may need support is an important first step.</p>
    <p>Whether you are dealing with anxiety, depression, ADHD, trauma-related symptoms, mood changes, stress, or another mental health concern, an appropriate professional evaluation can help clarify what you are experiencing and identify potential treatment options.</p>
    <p><strong>Luminox Healthcare Services, LLC</strong> provides patient-centered mental health services, including psychiatric evaluations, medication management, and telepsychiatry services for appropriate patients.</p>
    <p>If you are searching for <strong>mental health services in Maryland, Virginia, or Washington, D.C.</strong>, contact <a href="mailto:contact@luminoxmentalhealth.com" target="_blank" rel="noopener noreferrer">Luminox Healthcare Services, LLC</a> to learn about available services and determine whether an appointment is appropriate for your needs.</p>
    <p className="text-sm italic text-gray-600 mt-6"><strong>Medical Disclaimer:</strong> This article is intended for general educational purposes only and is not a substitute for individualized medical advice, diagnosis, or treatment. Always consult an appropriately qualified healthcare professional regarding your individual circumstances. If you are experiencing a medical or psychiatric emergency, call 911 or seek immediate emergency care.</p>
  `,
  },
];




export const downloadFormsData = [
  {
    id: 1,
    title: "Benzodiazepine, Stimulant, and Hypnotic Medication Agreement",
    description: "Click “Fill form” to fill and submit the form below.",
    image: downloadFormImages.safety,
    bgColor: "bg-blue-600",
    textColor: "text-white",
    url:"/assets/Benzodiazepine-Stimulant-and-Hypnotic-Medication-Agreement.pdf"
  },
  {
    id: 2,
    title: "Client Safety Contract",
    description: "Click “Fill form” to fill and submit the form below with.",
    image: downloadFormImages.informed,
    bgColor: "bg-[#ebe2f8]",
    textColor: "text-black",
    url:"/assets/Client-Safety-Contract.pdf"
  },
  {
    id: 3,
    title: "Consent to Mental Health Services",
    description: "Click “Fill form” to fill and submit the form below with.",
    image: downloadFormImages.telehealth,
    bgColor: "bg-[#000000]",
    textColor: "text-white",
    url:"/assets/Consent-to-Mental-Health-Services.pdf"
  },
  {
    id: 4,
    title: "Informed Consent for Administration of Psychotropics.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
    url:"/assets/Informed-Consent-for-Administration-of-Psychotropics.pdf"
  },
  {
    id: 5,
    title: "Notice of Privacy Practices.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
    url:"/assets/Notice-of-Privacy-Practices.pdf"
  },
  {
    id: 6,
    title: "Patient Information.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
    url:"assets/Patient-Information.pdf"
  },
  {
    id: 7,
    title: "Practice Policies and Procedures Handbook",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
    url:"/assets/Practice-Policies-and-Procedures-Handbook.pdf"
  },
];


export const formHeroData = {
  icon: "SlidersHorizontal", 
  label: "Forms",
  title: "Start Your Journey Here.",
  description:
    "Complete your forms conveniently online, or download soft copies to fill out at your leisure.",
  buttonText: "Need Help?",
  imageDesktop: formHeroImages.formHero2, 
  imageMobile: formHeroImages.formHero,  
};




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
      "Our mission is to provide compassionate, personalized, and evidence-based mental health care that fosters healing, resilience, and hope. Guided by our core values of Connection, Compassion, and Care, we are committed to creating a supportive and culturally responsive environment where individuals of all ages feel seen, understood, and empowered. Our dedication is to walk alongside each person on their journey to wellness, ensuring access to high-quality care that nurtures both mind and spirit.",
    image: aboutCardsImages.aboutOne,
    buttonLabel: "See Services",
    buttonVariant: "default",
    buttonType: "internal",    
    buttonHref: "/services", 
  },
  {
    id: 2,
    title: "Our Vision.",
    description:
      "Our vision is to lead the telepsychiatry field by setting the standard for compassionate, connection-focused, and caring mental health services. We aspire to break down the boundaries that limit access to mental healthcare, making our services available to anyone in need anytime, anywhere. We envision a world where individuals, regardless of their location, can easily access the support and guidance they require to achieve emotional and psychological well-being.",
    image: aboutCardsImages.aboutTwo,
    buttonLabel: "Need Help?",
    buttonVariant: "outline",
    buttonType: "external", 
    buttonHref: "https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680",
  },
];




export const missionData = [
  {
    id: 1,
    title: "Insurance Accepted",
    description:
      "Luminox Mental Health is committed to accessible, affordable care, accepting a wide range of insurance plans across VA, MD, and D.C. We continuously expand our accepted plans. If you have questions about coverage, contact us; our staff will help you understand your options and avoid financial burden.",
    image: missionImages.missionOne,
    buttonText: "See more",
    icon: ArrowRight
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







// export const servicesData = [
//   {
//     id: 1,
//     title: "Addiction Treatment",
//     description:
//       "Addiction can negatively affect every aspect of your life, from relationships to overall well-being. We recognize that addiction is a deep personal struggle. That's why we provide you with comprehensive support, including evidence-based interventions, addiction tele-psychiatry services, and relapse prevention.",
//     image: cardImages.featOne,
//     icon: Pill,
//     bgColor: "bg-red-200 text-white", // light background for the big left illustration card
//   },
//   {
//     id: 2,
//     title: "Child & Adolescent",
//     description:
//       "We provide specialized telepsychiatry for children and adolescents in a safe, nurturing environment. Our expert team offers personalized support for anxiety, depression, behavioral disorders, and ADHD.",
//     image: cardImages.featTwo,
//     icon: Baby,
//     bgColor: "bg-purple-200 text-white",
//   },
//   {
//     id: 3,
//     title: "Follow-Up & Monitoring",
//     description:
//       "Continuous support is vital for lasting mental wellness. We provide ongoing, accessible virtual psychiatry through regular check-ins and assessments, ensuring your progress and adjusting treatment as needed.",
//     image: cardImages.featThree,
//     icon: Activity,
//     bgColor: "bg-indigo-300 text-white",
//   },
//   {
//     id: 4,
//     title: "Support for Specific Conditions",
//     description:
//       "We offer personalized telepsychiatry services for diverse mental health conditions including depression, anxiety, mood disorders, ADHD, and PTSD. Using clinically proven techniques, we address your unique challenges in a safe, nurturing, and virtual environment.",
//     image: cardImages.featFour,
//     icon: HeartPulse,
//     bgColor: "bg-gray-900 text-white", // dark card
//   },
// ];