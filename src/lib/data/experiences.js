// data/experiences.js (normalized with stack + scopes)

/**
 * @typedef {Object} Experience
 * @property {string} id
 * @property {string} company
 * @property {string} role
 * @property {string} description // short teaser
 * @property {string} summary      // longer overview
 * @property {string} image
 * @property {string} link
 * @property {string=} demo
 * @property {{frontEnd?: string[], backEnd?: string[], tools?: string[]}} stack
 * @property {string[]} scopes
 * @property {string} start // human-friendly date string
 * @property {string} end   // e.g. "Present"
 * @property {string[]} points // bullet achievements
 */

/** @type {Experience[]} */
export const experiences = [
  {
    id: "exp-midnite",
    type: "experience",
    company: "Midnite Agency",
    role: "Frontend Developer",
    description:
      "Delivered a high-performance marketing website with sleek UI, motion, and automation to drive engagement.",
    summary:
      "Midnite Agency, a Houston-based creative marketing firm, hired me to design and develop a custom site that communicates their service offerings with visual flair and technical polish. I delivered a scalable, performant website with integrated 3D visuals, animated UI, and automated email handling — all built with modern frontend tooling.",
    image: "/images/MidniteCover.png",
    link: "https://www.midnite-agency.com",
    demo: "",
    stack: {
      frontEnd: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Three.js",
      ],
      backEnd: [],
      tools: ["Vercel", "SEO", "Email Automation"],
    },
    scopes: [
      "Responsive frontend",
      "Motion design",
      "3D interactions",
      "SEO optimization",
      "Email automation",
      "Deployment & DNS",
    ],
    start: "Jul 2025",
    end: "Present",
    points: [
      "Developed a fully responsive, modern frontend using Next.js and TailwindCSS to reflect Midnite Agency's brand identity and creative edge.",
      "Implemented engaging motion design with Framer Motion and custom 3D background interactions using Three.js for an immersive user experience.",
      "Set up automated email workflows for lead capture and form submissions using transactional email services, streamlining client communications.",
      "Optimized SEO, performance, and accessibility, achieving high Lighthouse scores and ensuring fast page loads across all devices.",
      "Deployed to Vercel with custom domain and DNS configuration, managing the full development lifecycle from design handoff to production launch.",
    ],
  },

  {
    id: "exp-ngx",
    type: "experience",
    company: "National Grid X Consulting",
    role: "Developer",
    description:
      "Designed and launched a responsive website for a commercial energy firm; continued maintenance and optimization post-launch.",
    summary:
      "National Grid X is a commercial energy brokerage firm. I built and deployed their website from scratch and continue to provide maintenance and feature updates. The site streamlines lead generation and builds client trust.",
    image: "/images/NgxCover.png",
    link: "https://www.nationalgridx.com/",
    demo: "",
    stack: {
      frontEnd: ["Next.js", "React", "JavaScript", "TailwindCSS"],
      backEnd: [],
      tools: ["Vercel", "DNS"],
    },
    scopes: [
      "Responsive build",
      "Maintenance & updates",
      "Deployment & DNS",
      "Performance optimization",
      "Stakeholder collaboration",
    ],
    start: "Mar 2025",
    end: "Present",
    points: [
      "Translated designs into scalable, branded UI components in React/Next.js.",
      "Maintained and iterated post-launch with content updates and perf fixes.",
      "Handled deployment, domain registration, and DNS configuration.",
      "Collaborated with stakeholders via regular check-ins to refine features.",
    ],
  },

  {
    id: "exp-aesyn",
    type: "experience",
    company: "Aesyn",
    role: "Software Developer Intern",
    description:
      "Built a user analytics dashboard aggregating influencer metrics from social APIs.",
    summary:
      "Austin-based startup simplifying social media marketing for businesses. I helped build analytics, payments, and campaign tracking surfaces with a focus on data visualization and dashboard UX.",
    image: "/images/AesynPage.png",
    link: "https://www.aesyn.us/",
    demo: "",
    stack: {
      frontEnd: ["Next.js", "TypeScript", "React", "TailwindCSS", "JavaScript"],
      backEnd: ["MongoDB"],
      tools: ["Git", "Jira", "Recharts"],
    },
    scopes: [
      "Influencer analytics",
      "API integrations",
      "Data visualization",
      "Dashboard UX",
      "Bug fixing & optimization",
    ],
    start: "Jul 2024",
    end: "Jan 2025",
    points: [
      "Integrated social media APIs to centralize influencer performance metrics.",
      "Engineered visualizations with Recharts to surface engagement trends.",
      "Collaborated in a cross-functional team using Git/Jira for delivery.",
      "Transformed wireframes into responsive, accessible pages with Next.js and TailwindCSS.",
      "Resolved bugs and performance bottlenecks across the stack.",
    ],
  },
];

// Helpers
export const currentExperiences = experiences.filter((e) =>
  /present/i.test(e.end)
);

/** Flattened tags for quick search (derived from stack) */
export const experienceTagIndex = experiences.map((e) => ({
  id: e.id,
  tags: [
    ...(e.stack.frontEnd || []),
    ...(e.stack.backEnd || []),
    ...(e.stack.tools || []),
  ],
}));
