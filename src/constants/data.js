
import cardImages from "./cardImages";
import missionImages from "./missionImages";

import aboutCardsImages from "./aboutCardsImages";
import aboutImages from "./aboutImages";
import serviceImages from "./serviceImages";

import megaMenuImages from "./megaMenuImages";
import pricingImages from "./pricingImages";
import formHeroImages from "./formHeroImages";

import onlineFormImages from "./onlineFormImages";
import downloadFormImages from "./downloadFormImages";
import { Pill, Baby, Activity, HeartPulse, ArrowRight, SlidersHorizontal } from "lucide-react";

import blogFeatImages from "./blogFeatImages"



export const blogHeroData = {
  icon: "BookOpen",
  label: "Read Our Blog",
  title: "Explore Our Insights.",
  description:
    "Dive into our latest articles for expert advice, industry trends, and valuable perspectives.",
};


export const blogData = [
  {
    id: 1,
    title: "Where to Find Mental Health Support in Virginia That Makes a Difference?",
    description:
      "Struggles with mental health often creep in silently, rarely announcing themselves with clarity or predictability. You might have noticed it...",
    image: blogFeatImages.blogfeatOne,
    date: "June 30, 2025",
    author: "Digital Guider",
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
    author: "Digital Guider",
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
    author: "Digital Guider",
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
    author: "Digital Guider",
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
    author: "Digital Guider",
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
    author: "Digital Guider",
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
];


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



export const downloadFormsData = [
  {
    id: 1,
    title: "Client Safety Contract",
    description: "Click “Fill form” to fill and submit the form below.",
    image: downloadFormImages.safety,
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Patient Consent for Telehealth tx and Services.",
    description: "Click “Fill form” to fill and submit the form below with.",
    image: downloadFormImages.informed,
    bgColor: "bg-[#ebe2f8]",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "Informed Consent for Psychotropic Medications.",
    description: "Click “Fill form” to fill and submit the form below with.",
    image: downloadFormImages.telehealth,
    bgColor: "bg-[#000000]",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Notice of Privacy Practices.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    id: 5,
    title: "Consent to Mental Health Services.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    id: 6,
    title: "Notice of Privacy Practices.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    id: 7,
    title: "Consent to Mental Health Services.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    id: 8,
    title: "Notice of Privacy Practices.",
    description: "Luminox Healthcare Services, Inc",
    image: null,
    bgColor: "bg-white",
    textColor: "text-black",
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






