const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 25, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://medium.com/@harshbajani7/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it-6a4fa44b0312",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Nov 25, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://medium.com/@harshbajani7/the-ultimate-guide-to-mastering-gsap-animations-8dd233afa124",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "GSAP", "Framer-motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
  {
    category: "Cloud Tools",
    items: ["AWS"],
  },
  {
    category: "3D",
    items: ["Threejs", "React-fiber"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/harshbajani",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://portfolio-updated-chi-hazel.vercel.app/",
  },
  {
    id: 3,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/harsh-bajani-9689a0172?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU5S4oiqRQAmFBeDASCpFNw%3D%3D",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nodebase",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-7", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nodebase.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Nodebase is a modern workflow automation platform built from the ground up with a visual drag-and-drop interface.",
            "Design, automate, and manage multi-step processes using trigger nodes, AI integrations, messaging, and scalable background jobs.",
            "Imagine building your own Zapier-like flows with enterprise-grade features—auth, payments, error monitoring, and a sleek, responsive UI.",
            "Built on Next.js, React Flow, Prisma, and Neon, it’s production-ready with secure authentication, subscriptions, and AI-powered code reviews.",
          ],
        },
        {
          id: 2,
          name: "nodebase.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nodebase.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Resumind - An AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Resumind.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "https://resumind-three.vercel.app/",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://resumind-three.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "resumind.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Track - A project management tool",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-5 left-96",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Track.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Track is a powerful project management platform inspired by Jira, designed for seamless team collaboration and task tracking.",
            "Manage everything with workspaces, flexible boards, advanced filtering, user roles, analytics, and secure, robust authentication.",
            "Imagine having your own Jira-style workspace—customizable, visually versatile, and optimized for effortless teamwork on any device.",
            "Crafted with Next.js 14, Shadcn UI, TailwindCSS, and Appwrite, Track is fully mobile-ready and built for security and performance.",
          ],
        },
        {
          id: 2,
          name: "https://track-navy-chi.vercel.app/",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://track-navy-chi.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "track.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: "PrepWise - An AI Interviewer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-80",
      windowPosition: "top-[50vh] left-7",
      children: [
        {
          id: 1,
          name: "prepwise.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-32",
          description: [
            "PrepWise is an AI-powered interview coach designed to help you master job interviews with cutting-edge voice simulations and feedback.",
            "Practice with realistic mock interviews, personalized progress tracking, and instant insights—accessible anytime, anywhere.",
            "Think of it as your personal interview training partner, making practice as interactive and insightful as working with a professional coach.",
            "Built with Next.js, Firebase, TailwindCSS, and Vapi voice agents, PrepWise combines secure authentication and a seamless, mobile-friendly experience for confident interview prep.",
          ],
        },
        {
          id: 2,
          name: "https://prep-wise-ivory.vercel.app/",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://prep-wise-ivory.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "prepwise.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
      ],
    },
    // ▶ Project 5
    {
      id: 9,
      name: "Echo",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-44",
      windowPosition: "top-[65vh] left-7",
      children: [
        {
          id: 1,
          name: "echo.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-32",
          description: [
            "Echo is a production-ready B2B SaaS template that delivers AI-powered customer support with real-time chat and voice assistants that understand your documents and escalate to humans when needed.",
            "Provide smart, stateful conversations powered by Convex Agents and VAPI voice support, plus a knowledge base that uses embeddings for accurate answers.",
            "Imagine a plug-and-play AI support brain embedded into any app or website, offering 24/7 assistance, auto-resolving or escalating tickets for faster, happier customer service.",
            "Built with Next.js 15, React 19, Tailwind v4, shadcn/ui, using Clerk for auth, AWS Secrets Manager, Sentry for error tracking, and support for leading AI models including OpenAI, Anthropic, Grok, and Gemini.",
          ],
        },
        {
          id: 2,
          name: "https://echo-web-zeta.vercel.app/",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://echo-web-zeta.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "https://echo-widget-red.vercel.app/",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://echo-widget-red.vercel.app/",
          position: "top-50 right-20",
        },
        {
          id: 4,
          name: "echo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-5.jpg",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "harsh.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/harsh.jpg",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/harsh.jpg",
      description: [
        "Hey! I’m Harsh 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, watching F1 🏁, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
