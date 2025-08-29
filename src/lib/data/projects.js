// data/projects.js (normalized with `scopes` instead of `features`)

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description // short teaser (1–2 sentences)
 * @property {string} summary      // longer overview for detail page
 * @property {{cover?: string, demo?: string, gallery?: string[]}} media
 * @property {{site?: string, repo?: string}} links
 * @property {{frontEnd?: string[], backEnd?: string[], tools?: string[]}} stack
 * @property {string[]} scopes // previously `features`
 * @property {boolean=} featured
 * @property {string=} when      // human string e.g. "Feb 2025 — ~3 weeks"
 * @property {{start?: string, end?: string}=} timeline // optional machine-ish dates
 */

/** @type {Project[]} */
export const projects = [
  {
    id: "susanAi",
    type: "project",
    title: "Susan AI",
    description:
      "Your new AI companion utilizing Gemini. Sign up to make calls.",
    summary:
      "ChatGPT‑inspired assistant powered by Gemini Flash 2.0. Built as an AI alternative for times when I ran out of free ChatGPT calls. Users can sign up, chat, ask questions, and generate code. Responses render in Markdown with built‑in syntax highlighting for a clean reading experience.",
    media: { cover: "", demo: "/demos/susanAI.mp4" },
    links: {
      site: "https://susan-ai-one.vercel.app/",
      repo: "https://github.com/anthonynuge/susan-ai",
    },
    stack: {
      frontEnd: [
        "React",
        "Vite",
        "TypeScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Framer Motion",
      ],
      backEnd: ["Appwrite (Auth, Database)", "Node.js", "Gemini API"],
      tools: ["Vercel", "GitHub", "VS Code"],
    },
    scopes: [
      "AI‑powered chat",
      "User authentication",
      "Code generation",
      "Syntax highlighting",
      "Gemini integration",
      "Responsive design",
    ],
    featured: true,
    when: "Feb 2025 — ~3 weeks",
    timeline: { start: "2025-02-01" },
  },

  {
    id: "portfolioWebsite",
    type: "project",
    title: "Portfolio Website",
    description:
      "Yes — you're in it right now. A site showcasing my work and skills.",
    summary:
      "This site is a collection of my projects and milestones. Built with what I find cool, in a way I think looks cool. As I grow as a developer, the site evolves with me.",
    media: { cover: "", demo: "/demos/portfoliov2.mp4" },
    links: {
      site: "https://www.avqn.dev/",
      repo: "https://github.com/anthonynuge/avqn-dev-v2",
    },
    stack: {
      frontEnd: [
        "React",
        "Vite",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Framer Motion",
      ],
      backEnd: ["Node.js", "Express"],
      tools: ["Vercel", "GitHub", "VS Code"],
    },
    scopes: [
      "Personal branding",
      "Interactive UI/UX",
      "Performance optimization",
      "Responsive design",
    ],
    featured: false,
    when: "Feb 2025 — ~2 weeks",
    timeline: { start: "2025-02-01" },
  },

  {
    id: "fruitVision",
    title: "Fruit Vision",
    description:
      "Is that a kiwi or an apple? CNN trained to identify fruits from images.",
    summary:
      "Commissioned project using Python and machine learning. A standalone app where users input fruit images and receive classifications with confidence reports. Images are vectorized and a convolutional neural network learns patterns to make predictions. Though built for fruit, the model can classify any images with enough training data.",
    media: { cover: "/images/portfolio.png", demo: "/demos/fruitVision.mp4" },
    links: { repo: "https://github.com/anthonynuge/Fruit-Identification-CNN" },
    stack: {
      frontEnd: ["Tkinter", "Matplotlib"],
      backEnd: ["Python", "TensorFlow", "Scikit‑learn", "NumPy"],
      tools: ["Jupyter Notebook", "VS Code", "GitHub"],
    },
    scopes: [
      "Image classification",
      "Data augmentation & processing",
      "GUI with batch processing",
      "Model training & evaluation",
    ],
    featured: true,
    when: "Nov 2024 — Dec 2024",
    timeline: { start: "2024-11-01", end: "2024-12-15" },
  },

  {
    id: "mazeSolver",
    type: "project",
    title: "Maze Solver",
    description: "Java desktop app to visualize pathfinding algorithms.",
    summary:
      "Built during winter break after studying DSA to visualize how different algorithms traverse a grid. Implemented a maze generator to avoid hand‑drawing mazes. Entirely in Java; Swing/JavaFX for UI.",
    media: { cover: "/covers/maze.webp", demo: "/demos/spedMaze.mp4" },
    links: { repo: "https://github.com/anthonynuge/pathfinding_visualization" },
    stack: {
      frontEnd: ["Java Swing", "JavaFX", "AWT"],
      backEnd: ["Java"],
      tools: ["IntelliJ IDEA", "Maven", "GitHub"],
    },
    scopes: ["GUI application", "Algorithm visualization", "Interactive UI"],
    featured: false,
  },

  {
    id: "fakeNewsOrNah",
    type: "project",
    title: "Fake News or Nah",
    description:
      "ML app that analyzes text and predicts whether news is fake or real.",
    summary:
      "A capstone tackling misinformation. Using classical ML and NLP, I trained a model to analyze articles and predict fake news.",
    media: { cover: "/images/portfolio.png", demo: "/demos/fakeNewsDemo.mp4" },
    links: { repo: "https://github.com/anthonynuge/fake-news-detection-app" },
    stack: {
      frontEnd: ["Tkinter", "Matplotlib", "Seaborn"],
      backEnd: ["Python", "Scikit‑learn", "NumPy"],
      tools: ["Jupyter Notebook", "VS Code", "GitHub"],
    },
    scopes: [
      "Proposal & budgeting",
      "Data processing & NLP",
      "Trend analysis & visualization",
      "Model training & evaluation",
    ],
    featured: true,
    when: "Mar 2024 — May 2024",
    timeline: { start: "2024-03-01", end: "2024-05-31" },
  },

  {
    id: "e-commerceStore",
    title: "E‑commerce Dashboard",
    description: "Modern dashboard with secure payments (proof‑of‑concept).",
    summary:
      "An admin dashboard to unify sales, inventory, and customer insights. Real‑time analytics, order tracking, and dynamic visualizations help store owners make better decisions.",
    media: {
      cover: "/images/ecommerce.png",
      demo: "/demos/inventory30fps.mp4",
    },
    links: { repo: "https://github.com/anthonynuge/inventory-management" },
    stack: {
      frontEnd: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Redux",
        "HTML",
        "CSS",
        "Recharts",
      ],
      backEnd: ["Node.js", "Express", "PostgreSQL"],
      tools: ["VS Code", "GitHub", "Postman"],
    },
    scopes: [
      "Product management",
      "User authentication",
      "Payment integration",
      "Analytics & reporting",
    ],
    featured: false,
  },
];

// Helpers
export const featuredProjects = projects.filter((p) => p.featured);

/** Flatten all tech tags for simple filtering/search */
export const tagIndex = projects.map((p) => ({
  id: p.id,
  tags: [
    ...(p.stack.frontEnd || []),
    ...(p.stack.backEnd || []),
    ...(p.stack.tools || []),
  ],
}));
