import {
  node1,
  react,
  figma1,
  kry,
  javascript,
  ps,
  typescript,
  canvas2d,
  twozero,
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
  zerochat,
  threejs,
  adg,
  coffee,
  jayCoffee,
  exams,
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
    name: "ZeroChat",
    description:
      "Experience seamless real-time communication with my MERN-based chat application, powered by Socket.io. Connect with others instantly and stay connected in real-time.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: zerochat,
    source_code_link: "https://github.com/jayPreak/chat2",
  },
  {
    name: "TwoZero",
    description:
      "Enhance your website's user experience with my JavaScript-powered chatbot, utilizing OpenAI's powerful API to deliver intelligent and engaging conversations with your visitors. Experience the future of customer support and engagement today.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: twozero,
    source_code_link: "https://github.com/jayPreak/twozero",
  },
  {
    name: "2D Canvas Game",
    description:
      "Embark on an exciting adventure with my 2D side-scrolling game, built using JavaScript and rendered on a dynamic canvas.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "gamedev",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: canvas2d,
    source_code_link: "https://github.com/jayPreak/Canvas2DGame",
  },
  {
    name: "jayCoffee",
    description:
      "Experience the cozy charm of a coffee shop from the comfort of your own screen with my imaginative landing page for an imaginary coffee shop. Built using HTML, CSS, JavaScript, and PHP, immerse yourself in a delightful world filled with enticing aromas, friendly greetings, and a relaxing ambiance that's perfect for coffee lovers everywhere.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: jayCoffee,
    source_code_link: "https://github.com/jayPreak/jayCoffee",
  },
  {
    name: "Examination",
    description:
      "Unlock your full potential with my PHP-powered landing page for an examination course company. Discover comprehensive courses designed to help you succeed in your exams, with a user-friendly interface that makes learning easy and accessible. Join our community today and achieve your academic goals!",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
    ],
    image: exams,
    source_code_link: "https://github.com/jayPreak/php-examination",
  },
  {
    name: "Notes App",
    description:
      "Organize your life with my versatile notes app, created with React and Node.js. Keep your thoughts and ideas in one place, and easily add, delete, or edit your notes on-the-go. With a sleek and intuitive user interface, managing your tasks has never been easier!",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      // {
      //   name: "html",
      //   color: "blue-text-gradient",
      // },
    ],
    image: exams,
    source_code_link: "https://github.com/jayPreak/NoteApp",
  },
  Get things done with my simple and efficient todo app, built with Node.js, HTML, JavaScript, EJS, and CSS. Create a list of tasks, mark them as completed with a satisfying checkmark, and easily delete them when you're finished. Stay on top of your to-do list and achieve your goals with ease using my intuitive and user-friendly app.
];

export { services, technologies, experiences, testimonials, projects };
