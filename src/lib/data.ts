export const profile = {
  name: "Kazi Radwan Ahamed",
  headline: "Software Engineer & AI Engineer",
  // Rotating roles for the animated hero
  roles: [
    "AI Engineer",
    "Agentic-AI Builder",
    "ML Researcher",
    "Full-stack Developer",
  ],
  tagline:
    "I build agentic-AI systems and full-stack products — from runtime safety for autonomous agents to on-device language models.",
  location: "Dhaka, Bangladesh",
  status: [
    "AI Engineer",
    "SE @ DIU (Batch 41)",
    "AI & Automation Secretary, DIU Data Science Club",
  ],
  email: "ahamedkaziradwan@gmail.com",
  github: "https://github.com/kaziradwanahamed",
  githubUser: "kaziradwanahamed",
  // LinkedIn intentionally omitted until a URL is provided.
  linkedin: "",
  photo: "/kazi.jpg",
};

export const about = [
  "I'm an AI/Software Engineer and a final-year Software Engineering student at Daffodil International University (DIU, Batch 41). My work sits where research meets shipping — I like taking an unproven idea, proving it out, and turning it into something people actually use.",
  "My focus is agentic AI and LLM tool-use (including MCP), reinforcement learning, and ML research — alongside the full-stack and mobile engineering needed to put those models in front of real users. Recently that's meant everything from runtime safety for autonomous agents to accessibility tooling and on-device language models.",
];

export type SkillGroup = {
  label: string;
  tag: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / ML",
    tag: "01",
    items: ["PyTorch", "LLMs & Tool-use", "MCP", "Reinforcement Learning", "Model Training", "NLP"],
  },
  {
    label: "Languages",
    tag: "02",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C", "Dart"],
  },
  {
    label: "Full-stack & Mobile",
    tag: "03",
    items: ["React / Next.js", "Node.js", "Android", "Flutter", "PHP", "REST APIs"],
  },
  {
    label: "Tools & Infra",
    tag: "04",
    items: ["Git", "Docker", "Firebase", "Linux", "VS Code Ext.", "CI/CD"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  github?: string;
  live?: string;
  // "research" projects not yet public get a status pill instead of a dead link
  status?: string;
  featured: boolean;
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    title: "TRACER-Shielded TriCEGAR",
    blurb:
      "Runtime-verification and active safety-shielding framework for agentic AI — applied to UAV trajectory planning with MCP tool discovery over 6G-edge networks. My flagship research project.",
    tags: ["Agentic AI", "RL", "Formal Verification", "MCP"],
    status: "Research · private",
    featured: true,
    flagship: true,
  },
  {
    title: "RCPT — Regime-Conditioned Policy Transfer",
    blurb:
      "ML research on task-level LLM routing under non-stationarity, with tool-use benchmark experiments. Aimed at a top ML venue.",
    tags: ["LLM Routing", "ML Research", "RL"],
    github: "https://github.com/kaziradwanahamed/Research-ML",
    featured: true,
  },
  {
    title: "VS Code AI Assistant",
    blurb:
      "An AI-powered coding-assistant extension for Visual Studio Code — bringing model-backed help directly into the editor.",
    tags: ["TypeScript", "VS Code API", "LLM", "DX"],
    github: "https://github.com/kaziradwanahamed/vscode-ai-assistant",
    featured: true,
  },
  {
    title: "NLP Writing Assistant",
    blurb:
      "An AI writing assistant built on NLP techniques to help draft, refine, and improve text.",
    tags: ["NLP", "AI", "Python"],
    github: "https://github.com/kaziradwanahamed/nlp-writing-assistant",
    featured: true,
  },
  {
    title: "Vocavly",
    blurb:
      "A language-learning app for English (IELTS), German and Spanish — with lesson management and an admin panel. Being extended toward an on-device small language model (SLM) I train myself.",
    tags: ["SLM", "NLP", "Web App", "PHP"],
    github: "https://github.com/kaziradwanahamed/Vocavly",
    featured: true,
  },
  {
    title: "BalanceFlow",
    blurb:
      "A personal finance / ledger app for tracking everyday and informal transactions in one clean place.",
    tags: ["Product", "Full-stack", "Fintech"],
    status: "In progress",
    featured: true,
  },
];

export type SecondaryProject = {
  title: string;
  blurb: string;
  lang: string;
  github: string;
};

export const secondaryProjects: SecondaryProject[] = [
  {
    title: "Nimo-Bazar",
    blurb: "A cross-platform mobile e-commerce marketplace with Firebase.",
    lang: "Flutter",
    github: "https://github.com/kaziradwanahamed/Nimo-Bazar-",
  },
  {
    title: "Bus Ticket Reservation",
    blurb: "A console-based bus ticket reservation system.",
    lang: "C",
    github: "https://github.com/kaziradwanahamed/Bus-Ticket-Reservation-System",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    org: "",
    period: "Present",
    current: true,
    points: [
      "Build production AI & automation systems for enterprise clients — document-compliance automation, CRM implementation, and POS data pipelines.",
      "Take AI features from prototype to production, wiring models into real workflows and data.",
      "Also coordinate recruiting and hiring for the team.",
    ],
  },
  {
    role: "AI & Automation Secretary · Data Science Lab Associate",
    org: "DIU Data Science Club",
    period: "Daffodil International University",
    points: [
      "Lead AI & automation initiatives for the club and support lab activities.",
      "Help fellow students get hands-on with ML, automation, and data science tooling.",
    ],
  },
  {
    role: "B.Sc. in Software Engineering (final year)",
    org: "Daffodil International University — Batch 41",
    period: "Student",
    points: [
      "Final-year Software Engineering student focused on AI/ML and full-stack systems.",
      "Capstone and research work in agentic AI, LLM routing, and accessibility.",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Work", href: "#work", num: "03" },
  { label: "Experience", href: "#experience", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];
