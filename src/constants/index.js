import {
  node1,
  react,
  figma1,
  kry,
  javascript,
  ps,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  adg,
  coffee,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: react,
  },
  {
    title: "UI/UX Designer",
    icon: figma1,
  },
  {
    title: "Backend Developer",
    icon: node1,
  },
  {
    title: "Graphic Designer",
    icon: ps,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Photoshop",
    icon: ps,
  },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Kryoss Softtech",
    icon: kry,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Created daily logos and posters for multiple clients and helped develop the frontend of various client websites.",
      "Built the logic for a streamlined ad-serving platform, improving the client's ability to target ads effectively.",
      "Consistently met project milestones and delivered high-quality work that aligned with client expectations.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Designer & Developer",
    company_name: "Caffena Coffee",
    icon: coffee,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Designed eye-catching banners and posters for the company's exhibit using Photoshop and Illustrator to showcase the brand and products.",
      "Created dynamic web pages using HTML, CSS, and JavaScript to highlight the company's products and services.",
      "Collaborated with the web development team to streamline the company's online sales by developing a complete e-commerce website using Shopify and Webflow.",
      "Gained valuable skills in graphic design, web development, and e-commerce, and learned how to effectively communicate with clients, meet tight deadlines, and use various design and development tools such as Photoshop, Illustrator, HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "Web Developer & UI/UX Designer",
    company_name: "ADesignGuy",
    icon: adg,
    iconBg: "#383E56",
    date: "Apr 2021 - Present",
    points: [
      "Graphic design and web development work: created posters, banners, animations, and landing pages using various tools such as Photoshop, Illustrator, HTML, CSS, JavaScript, and React.",
      "Developed a complete e-commerce website for coffee makers, utilizing Shopify and Webflow to streamline online sales process and increase revenue.",
      "Creating animations and landing pages for the company's main website, using various tools and technologies such as HTML, CSS, JavaScript, and React",
      "Worked with a team to understand client needs, provide regular updates, and deliver high-quality work.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
