import {
  node1,
  react,
  kry,
  javascript,
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
  zerofighter,
  pedv,
  logo,
  adeyaar,
  duorathi,
  minecraftoneshot,
  allfitgym,
  weddingfiles
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Backend Developer',
    icon: node1
  },
  {
    title: 'Full Stack Developer',
    icon: react
  },
  {
    title: 'Cloud & DevOps',
    icon: docker
  }
]

const technologies = [
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'Node JS', icon: nodejs },
  { name: 'React JS', icon: reactjs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Three JS', icon: threejs },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Docker', icon: docker },
  { name: 'git', icon: git }
]

const experiences = [
  {
    title: 'Software Developer (SDE2), Backend',
    company_name: 'PolicyBazaar AE',
    icon: logo,
    iconBg: '#383E56',
    date: 'Jan 2026 - Present',
    points: [
      'Built insurer API integrations in Node.js and Express.js across quote, purchase and policy flows, with validation, retries and error handling.',
      'Built durable email workflows on Restate (durable sleep, awakeables, scheduled tasks) for renewal and cancellation series.',
      'Added agentic tool loops, harness engineering and new skills that automate work and improve the QA and developer experience.',
      'Owned production reliability on AWS EC2, PM2, Redis and MongoDB, and built a Redis session-expiry endpoint (SCAN, not KEYS) so QA can self-serve.'
    ]
  },
  {
    title: 'Software Developer',
    company_name: 'Live Building Systems',
    icon: logo,
    iconBg: '#E6DEDD',
    date: 'Jul 2025 - Jan 2026',
    points: [
      'Built React frontends and Python services for internal products.',
      'Automated billing and reporting workflows in Python using headless Chromium.'
    ]
  },
  {
    title: 'Software Developer (SDE1)',
    company_name: 'AbhiLoans (KnabFinance)',
    icon: logo,
    iconBg: '#383E56',
    date: 'Jan 2024 - Jul 2025',
    points: [
      'Built Node.js and TypeScript services on AWS Lambda with SST for scheduled and on-demand jobs, with retries, logging and Baselime monitoring.',
      'Used MySQL with Drizzle ORM for type-safe data access, and added JWT authentication and authorization middleware to secure the APIs.',
      'Contributed to app.abhiloans.com, a loan management platform built with Next.js, TypeScript and SST.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company_name: 'ADesignGuy',
    icon: adg,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Jan 2024',
    points: [
      'Led Angular and React work on dashboards and admin tools for reviewing extracted Shopify data, backed by Express.js and NestJS.',
      'Built Node.js APIs on MongoDB (Mongoose) with indexing and query optimization, supporting data ingestion, normalization and deduplication.'
    ]
  }
]

const projects = [
  {
    name: 'AdeYaar 26',
    description:
      'A FIFA World Cup 2026 social betting app. Pick winners, place virtual bets on all 72 matches and the cup winner, and climb a live leaderboard with friends.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'react',
        color: 'pink-text-gradient'
      },
      {
        name: 'realtime',
        color: 'blue-text-gradient'
      }
    ],
    image: adeyaar,
    source_code_link: 'https://github.com/jayPreak/adeyaarbet26',
    live_link: 'https://adeyaar-next.vercel.app'
  },
  {
    name: 'Duorathi',
    description:
      'A free, gamified Marathi learning app modeled on Duolingo: bite-sized lessons, daily streaks, XP, hearts and gems.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient'
      },
      {
        name: 'auth',
        color: 'green-text-gradient'
      },
      {
        name: 'gamification',
        color: 'blue-text-gradient'
      }
    ],
    image: duorathi,
    source_code_link: 'https://github.com/jayPreak/duorathi',
    live_link: 'https://duorathi.vercel.app'
  },
  {
    name: 'Blockyard',
    description:
      'A pocket voxel sandbox where every texture, sound and world is generated in code. Fly, break and place blocks, with autosaved worlds.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient'
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient'
      },
      {
        name: 'procedural',
        color: 'green-text-gradient'
      },
      {
        name: 'gamedev',
        color: 'blue-text-gradient'
      }
    ],
    image: minecraftoneshot,
    source_code_link: 'https://github.com/jayPreak/minecraft-oneshot',
    live_link: 'https://minecraft-oneshot.vercel.app'
  },
  {
    name: 'All Fit Gym',
    description:
      'Client website for a Gurugram gym: services, reviews and one-tap WhatsApp enquiries. Shipped and deployed on Vercel.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient'
      },
      {
        name: 'vercel',
        color: 'green-text-gradient'
      }
    ],
    image: allfitgym,
    source_code_link: 'https://github.com/jayPreak/all-fit-gym',
    live_link: 'https://all-fit-gym.vercel.app'
  },
  {
    name: 'The Wedding Files',
    description:
      'Client website for a documentary-style wedding photographer, with portfolio and WhatsApp booking.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient'
      },
      {
        name: 'vercel',
        color: 'green-text-gradient'
      }
    ],
    image: weddingfiles,
    source_code_link: 'https://github.com/jayPreak/the-wedding-files',
    live_link: 'https://the-wedding-files.vercel.app'
  },
  {
    name: 'ZeroFigter',
    description:
      'ZeroFinder: Infinite Runner Game 🚀 - A ReactJs app powered by ThreeJs, you pilot a spaceship shooting your way through cosmic challenges. Take on the universe – play now! 🌟',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'drei',
        color: 'green-text-gradient'
      }
    ],
    image: zerofighter,
    source_code_link: 'https://github.com/jayPreak/ZeroFighter',
    live_link: 'https://zerofighter.vercel.app'
  },
  {
    name: 'PEDV - Website',
    description:
      'A website made for Pixelated Egg, using React Three Fiber, React Three Drei, TailwindCSS, and React Router.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'drei',
        color: 'green-text-gradient'
      }
    ],
    image: pedv,
    source_code_link: 'https://github.com/a-design-guy/pedv-website',
    live_link: 'https://pedv-website.vercel.app'
  },
  {
    name: 'MeinKraft - Alpha',
    description:
      'A Minecraft clone made using ReactJS, ThreeJS, R3F and drei. You can move around in the 3d space with a First-Person Perspective and create blocks',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient'
      },
      {
        name: 'drei',
        color: 'green-text-gradient'
      }
    ],
    image: meinkraft,
    source_code_link: 'https://github.com/jayPreak/meinkraft-alpha',
    live_link: 'https://meinkraft-alpha.vercel.app'
  },
  {
    name: 'ZeroSearch',
    description:
      'A user search application built with Next.js, TypeScript, and GraphQL. The app fetches a list of users from a GraphQL API and dynamically displays search results as you type.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'graphql',
        color: 'pink-text-gradient'
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'blue-text-gradient'
      }
    ],
    image: zerosearch,
    source_code_link: 'https://github.com/jayPreak/zerosearch',
    live_link: 'https://zerosearch.vercel.app'
  },
  {
    name: 'ZeroBot',
    description:
      "A Twitter bot that posts every frame of the anime 'Darling in the Franxx', one frame per hour. Made using python, tweepy and requesting images from github.",
    tags: [
      {
        name: 'python',
        color: 'green-text-gradient'
      },
      {
        name: 'tweepy',
        color: 'blue-text-gradient'
      },
      {
        name: 'requests',
        color: 'pink-text-gradient'
      },
      {
        name: 'bot',
        color: 'blue-text-gradient'
      }
    ],
    image: zerobot,
    source_code_link: 'https://github.com/jayPreak/zerobot',
    live_link: 'https://twitter.com/zero2bot'
  },
  {
    name: 'ZeroChat',
    description:
      'Experience seamless real-time communication with my MERN-based chat application, powered by Socket.io. Connect with others instantly and stay connected in real-time.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient'
      },
      {
        name: 'socketio',
        color: 'blue-text-gradient'
      }
    ],
    image: zerochat,
    source_code_link: 'https://github.com/jayPreak/chat2',
    live_link: 'https://zerojaychat.web.app/'
  },
  {
    name: 'TwoZero',
    description:
      "Enhance your website's user experience with my JavaScript-powered chatbot, utilizing OpenAI's powerful API to deliver intelligent and engaging conversations with your visitors. Experience the future of customer support and engagement today.",
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient'
      },
      {
        name: 'css',
        color: 'green-text-gradient'
      },
      {
        name: 'openai',
        color: 'pink-text-gradient'
      }
    ],
    image: twozero,
    source_code_link: 'https://github.com/jayPreak/twozero',
    live_link: 'https://twozero.vercel.app/'
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
    name: '2D Canvas Game',
    description:
      'Embark on an exciting adventure with my 2D side-scrolling game, built using JavaScript and rendered on a dynamic canvas.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient'
      },
      {
        name: 'gamedev',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      },
      {
        name: 'html',
        color: 'blue-text-gradient'
      }
    ],
    image: canvas2d,
    source_code_link: 'https://github.com/jayPreak/Canvas2DGame',
    live_link: 'https://gaymge.vercel.app/'
  }
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
]

export { services, technologies, experiences, projects }
