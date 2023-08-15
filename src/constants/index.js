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
  // jayCoffee,
  // exams,
  // notes,
  // todoapp,
  // blog,
  // emailer,
  // db,
  // band,
  // designportfolio,
  threed,
  zerobot,
  zerosearch,
  meinkraft,
  pedv,
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

const projects = [
  {
    name: "PEDV - Website",
    description:
      "A website made for Pixelated Egg, using React Three Fiber, React Three Drei, TailwindCSS, and React Router.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "drei",
        color: "green-text-gradient",
      },
    ],
    image: pedv,
    source_code_link: "https://github.com/a-design-guy/pedv-website",
    live_link: "https://pedv-website.vercel.app",
  },
  {
    name: "MeinKraft - Alpha",
    description:
      "A Minecraft clone made using ReactJS, ThreeJS, R3F and drei. You can move around in the 3d space with a First-Person Perspective and create blocks",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "drei",
        color: "green-text-gradient",
      },
    ],
    image: meinkraft,
    source_code_link: "https://github.com/jayPreak/meinkraft-alpha",
    live_link: "https://meinkraft-alpha.vercel.app",
  },
  {
    name: "ZeroSearch",
    description:
      "A user search application built with Next.js, TypeScript, and GraphQL. The app fetches a list of users from a GraphQL API and dynamically displays search results as you type.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: zerosearch,
    source_code_link: "https://github.com/jayPreak/zerosearch",
    live_link: "https://zerosearch.vercel.app",
  },
  {
    name: "ZeroBot",
    description:
      "A Twitter bot that posts every frame of the anime 'Darling in the Franxx', one frame per hour. Made using python, tweepy and requesting images from github.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "tweepy",
        color: "blue-text-gradient",
      },
      {
        name: "requests",
        color: "pink-text-gradient",
      },
      {
        name: "bot",
        color: "blue-text-gradient",
      },
    ],
    image: zerobot,
    source_code_link: "https://github.com/jayPreak/zerobot",
    live_link: "https://twitter.com/zero2bot",
  },
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
    ],
    image: zerochat,
    source_code_link: "https://github.com/jayPreak/chat2",
    live_link: "https://zerojaychat.web.app/",
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
    live_link: "https://twozero.vercel.app/",
  },
  // {
  //   name: "Design Portfolio",
  //   description:
  //     "Explore my design portfolio, showcasing my UI/UX designs and graphics with sleek animations. Built with HTML, CSS, and JS, experience my creative vision in a clean and modern interface.",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: designportfolio,
  //   source_code_link: "https://github.com/jayPreak/portfolio",
  //   live_link: "https://jayesh.onrender.com/",
  // },
  // {
  //   name: "Current 3D Portfolio",
  //   description:
  //     "Check out my current portfolio featuring stunning 3D models built with Three.js and displayed with React. With a modern interface designed using Vite, Styled Components, and Framer Motion, browse my latest projects and experiences in an engaging and visually appealing way.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "vitejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "threejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "framer",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: threed,
  //   source_code_link: "https://github.com/jayPreak/3d",
  //   live_link: "https://jayeshbhushan.me/",
  // },
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
    live_link: "https://gaymge.vercel.app/",
  },
  // {
  //   name: "Notes App",
  //   description:
  //     "Organize your life with my versatile notes app, created with React and Node.js. Keep your thoughts and ideas in one place, and easily add, delete, or edit your notes on-the-go. With a sleek and intuitive user interface, managing your tasks has never been easier!",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: notes,
  //   source_code_link: "https://github.com/jayPreak/NoteApp",
  //   live_link: "https://github.com/jayPreak",
  // },
  // {
  //   name: "To-Do List App",
  //   description:
  //     "Get things done with my simple and efficient todo app, built with Node.js, HTML, JavaScript, EJS, and CSS. Create a list of tasks, mark them as completed with a satisfying checkmark, and easily delete them when you're finished. Stay on top of your to-do list and achieve your goals with ease using my intuitive and user-friendly app.",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: todoapp,
  //   source_code_link: "https://github.com/jayPreak/todoList",
  //   live_link: "https://github.com/jayPreak/",
  // },
];

export { services, technologies, experiences, projects };
