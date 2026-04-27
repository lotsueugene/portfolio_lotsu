// Edit this file, save, reload the browser.

// Profile
export const PROFILE = {
  name: "Eugene Lotsu",
  monogram: "EL",
  title: "The Workbench of Eugene Lotsu",
  issue: ["Liberty, MO", "Student · Engineer", "Open Source · AWS · AI"],

  // Photo: drop into ./assets/portrait/ and update src
  portrait: {
    src: "./assets/portrait/eugene.jpg",
    alt: "Portrait of Eugene Lotsu",
    caption: "Eugene Lotsu"
  },

  meta: [
    { label: "Located",    value: "Liberty, Missouri" },
    { label: "Studying",   value: "B.S. Computer Science · W. Jewell" },
    { label: "Available",  value: "Internships, full-time roles & collaborations" }
  ],

  about: [
    "I am a computer science student at William Jewell College who is passionate about developing software that solves real-world problems. I am also interested in AI research and how my contributions to AI systems can create meaningful impact, improve decision-making, and expand access to innovative technologies. I aim to build solutions that are not only technically sound but also practical, scalable, and beneficial to diverse communities."
  ],

  tools: [
    { name: "TypeScript · JavaScript · Python",    note: "Languages" },
    { name: "Next.js · React · Node.js · Express", note: "Stack" },
    { name: "PostgreSQL · Prisma · MongoDB",       note: "Data" },
    { name: "AWS · Lambda · S3 · Bedrock",         note: "Cloud" },
    { name: "Stripe · Resend · NextAuth",          note: "Services" },
    { name: "Claude Code · Git · Vercel",          note: "Tools" }
  ],

  email: "lotsueugene@gmail.com",

  // Footer text. {email} becomes the mailto link.
  colophon: "If any of this resonates, {email}.",
  emailLinkLabel: "write to me",

  socials: [
    { label: "Email",    href: "mailto:lotsueugene@gmail.com" },
    { label: "GitHub",   href: "https://github.com/lotsueugene" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lotsueugene" },
    { label: "Call",     href: "tel:+18169775825" }
  ]
};

// Projects
// size: "feature" | "tall" | "wide" | "small" | "square" | "long" | "swatch"
export const PROJECTS = [
  {
    id: "forma",
    title: "Forma : forms that feel like a conversation",
    tag: "Flagship · Open Source · 2026",
    size: "feature",
    stamp: "Open Source · Live",
    snippet: "An open-source Typeform alternative. A drag-and-drop form builder with Stripe payments, bookings, AI form generation, email automations, and analytics. Built alongside Claude Code over a few weeks.",
    chips: ["Next.js 16", "Postgres", "Stripe", "Bedrock"],
    specs: {
      "Role":    "Full-stack Engineer",
      "Scope":   "Product design, system architecture, full implementation",
      "Stack":   "Next.js 16 (App Router, React 19, TS), PostgreSQL + Prisma, NextAuth.js, Stripe Connect, Resend, AWS S3, Amazon Bedrock (Claude Haiku 4.5), Tailwind v4",
      "Live at": "withforma.io",
      "Repo":    "github.com/lotsueugene/forma (MIT)",
      "Year":    "2026"
    },
    body: [
      "Forma is an open-source form builder I've been shipping over the last few weeks. The brief is simple: the best parts of Typeform and Google Forms without per-submission pricing, lock-in, or bloat. Every submission is yours.",
      "The builder ships with 18+ field types (including Stripe payments, bookings, file uploads, ratings, and terms & conditions), a Typeform-style one-question-at-a-time conversational mode, and an AI form generator (Claude Haiku 4.5 via Amazon Bedrock) that turns a sentence into a complete form. Submissions flow out through Slack, Google Sheets, and custom webhooks, while an email automation layer fires auto-replies, follow-up sequences, and broadcast campaigns via Resend.",
      "Forma handles its own commerce too: Stripe Connect wires straight into the builder for paid forms, while a separate Stripe subscription layer bills Forma itself. On top sits an analytics dashboard (funnel conversion, drop-off analysis, peak-hour breakdowns), team workspaces with role-based access (owner, manager, editor, viewer), and white-label custom domains with managed SSL.",
      "Built with Next.js 16 (App Router) and React 19, backed by Prisma and PostgreSQL. Authentication is handled with NextAuth.js using credentials, Google, and GitHub providers. File storage is powered by S3, and the UI is styled with Tailwind CSS v4.",
      "I am the sole author of this project, responsible for product design, system architecture, and full implementation. I used modern development tools, including AI-assisted coding, as part of my workflow to move faster while maintaining full ownership of all technical decisions and direction. The project is live at <strong>withforma.io</strong> and open sourced under the MIT License on GitHub."
    ],
    images: [
      { src: "./assets/images/forma/forma-1.png?v=1", alt: "Forma marketing homepage", caption: "Landing page" },
      { src: "./assets/images/forma/forma-2.png?v=1", alt: "Forma sign in page", caption: "Authentication" },
      { src: "./assets/images/forma/forma-3.png?v=1", alt: "Forma dashboard", caption: "Dashboard" },
      { src: "./assets/images/forma/forma-4.png?v=1", alt: "Forma form builder", caption: "Form builder" },
      { src: "./assets/images/forma/forma-5.png?v=1", alt: "Forma analytics", caption: "Analytics" },
      { src: "./assets/images/forma/forma-6.png?v=1", alt: "Forma settings page", caption: "Settings" }
    ],
    links: [
      { label: "Visit withforma.io", href: "https://withforma.io", primary: true },
      { label: "GitHub",             href: "https://github.com/lotsueugene/forma" }
    ]
  },

  {
    id: "build4me",
    title: "Build4Me : AI construction verification",
    tag: "AWS 10,000 AIdeas · Semifinalist",
    size: "tall",
    stamp: "AIDEAS 2025 Hackathon",
    snippet: "A serverless AI verification platform for diaspora-funded construction projects. Computer vision, LLM reasoning, GPS validation, and trust-based escrow. Semifinalist in AWS's 10,000 AIdeas competition (top 1,000 of 10,000 builders).",
    chips: ["AWS", "Next.js", "Bedrock", "Rekognition", "Amazon Location Services", "Amazon SES", "DynamoDB", "Cognito", "S3"],
    specs: {
      "Role":        "Full-stack Engineer",
      "Scope":       "Serverless architecture, AI verification pipeline, full-stack interface",
      "Stack":       "Next.js, TypeScript, AWS Lambda, API Gateway, DynamoDB(Database), S3, Cognito, Bedrock, Rekognition, Location Service, Amazon SES",
      "Built with":  "Kiro + AWS Free Services (Free Tier)",
      "Live at":     "build4me.app",
      "Year":        "2025 / 2026",
      "Recognition": "Semifinalist · AWS 10,000 AIdeas Competition · $200 AWS credits awarded"
    },
    body: [
      "Build4Me is a serverless verification platform for diaspora-funded construction projects. The people funding a house in Ghana from Houston, and the contractor on the ground in Accra, often cannot see each other. The system tries to stand in that gap.",
      "The core is an AI verification pipeline that combines computer vision (Amazon Rekognition), LLM reasoning (Claude via Amazon Bedrock), and GPS validation (Amazon Location Service) to assess whether a claimed milestone is real. A fraud-detection layer analyzes image metadata and computes label-similarity scores (Jaccard) to flag recycled or manipulated progress photos.",
      "Milestones move through a structured lifecycle (PENDING → FUNDED → BUILDING → SUBMITTED → APPROVED/REJECTED) which gates a trust-based escrow release. On top of that sits a role-based Next.js interface for contractors, project owners, and inspectors, with Cognito authentication, JWT authorization, and pre-signed S3 uploads for scalable media handling.",
      "Build4Me was selected as a <strong>semifinalist</strong> in AWS's <strong>10,000 AIdeas</strong> competition (the top 1,000 of roughly 10,000 submissions), and was built using Kiro and the AWS Free Tier. AWS recognized the project with $200 in builder credits to continue developing it."
    ],
    images: [
      { src: "./assets/images/build4me/build4me-1.png", alt: "Build4Me marketing landing page", caption: "Landing page" },
      { src: "./assets/images/build4me/build4me-2.png", alt: "Build4Me sign in screen", caption: "Authentication" },
      { src: "./assets/images/build4me/build4me-3.png", alt: "Project owner dashboard", caption: "Project owner dashboard" },
      { src: "./assets/images/build4me/build4me-4.png", alt: "Contractor dashboard", caption: "Contractor dashboard" },
      { src: "./assets/images/build4me/build4me-5.png", alt: "Manager dashboard", caption: "Manager dashboard" }
    ],
    links: [
      { label: "Visit Build4Me",              href: "https://www.build4me.app", primary: true },
      { label: "Read on AWS Builder Center",  href: "https://builder.aws.com/content/39lcvNcook9iyiDyyxoi7PYNFsa/aideas-build4me" },
      { label: "GitHub",                      href: "https://github.com/lotsueugene" },
      { label: "10,000 AIdeas",               href: "https://aws.amazon.com/builder/10000-aideas/" }
    ]
  },

  {
    id: "build4me-api",
    title: "Build4Me API : the production backend",
    tag: "Backend · REST · 2026",
    size: "square",
    snippet: "REST API for Build4Me. Uses JWT for authentication. Includes role-based access (client, contractor, inspector, admin), a four-model domain (users, projects, updates, inspections), and end-to-end Jest + Supertest testing.",
    chips: ["Node.js", "Express", "Sequelize", "JWT", "PostgreSQL"],
    specs: {
      "Role":     "Backend Engineer",
      "Scope":    "API design, authentication, role-based authorization, data modeling, testing",
      "Stack":    "Node.js, Express, Sequelize, PostgreSQL / SQLite, JWT, bcrypt, express-validator, Jest, Supertest",
      "Models":   "Users · Projects · Updates · Inspections",
      "Repo":     "github.com/lotsueugene/build4me_api",
      "API Docs": "Postman collection",
      "Year":     "2026"
    },
    body: [
      "Developed the Build4Me API, a backend service that manages construction project workflows, including funding, progress updates, and inspection-based payment release.",
      "Implemented secure authentication with JWT and bcrypt, along with role-based authorization for clients, contractors, inspectors, and admins. Built RESTful endpoints using Node.js, Express, and Sequelize, supporting PostgreSQL (production) and SQLite (development/testing).",
      "Designed relational data models (User, Project, Update, Inspection) with enforced constraints. Wrote integration tests using Jest and Supertest, and provided a Postman collection for API documentation and testing."
    ],
    links: [
      { label: "GitHub",            href: "https://github.com/lotsueugene/build4me_api", primary: true },
      { label: "API Documentation", href: "https://documenter.getpostman.com/view/51612020/2sBXqCPPa6" }
    ]
  },

  {
    id: "automation-agent",
    title: "Configurable Automation Agent",
    tag: "Agent Framework · 2025",
    size: "square",
    snippet: "A prompt-driven Python agent framework on Google Gemini with multi-step reasoning, tool/function calling, and a sandboxed execution loop. Demonstrated end-to-end on a real CLI calculator the agent can read, fix, and verify.",
    chips: ["Python", "Gemini", "Agents", "uv"],
    specs: {
      "Role":   "AI / Backend Engineer",
      "Scope":  "Agent runtime, tool system, sandboxed execution",
      "Stack":  "Python, Google Gemini, uv",
      "Tools":  "Read / write files, list directories, execute Python",
      "Repo":   "github.com/lotsueugene/ai-agent-gemini",
      "Year":   "2025"
    },
    body: [
      "A configurable Python agent framework built on Google Gemini. The agent reasons, plans actions, calls tools, observes results, and iterates until the task is complete. Change the system prompt and the same engine becomes a coding assistant, a documentation generator, or a general-purpose automation agent.",
      "The runtime implements a bounded multi-step loop with iteration limits, tool/function calling for structured actions (list directories, read files, write files, execute Python), and full conversation and tool-call history maintained across iterations so the model can course-correct.",
      "To make the system concrete, I shipped it alongside a small CLI calculator that outputs structured JSON. The agent can inspect the calculator, reason about operator precedence bugs, patch the code, and verify the fix by running the program and reading the JSON output. The constraint is the feature: a narrow toolset and a sandboxed working directory force the agent to work the way you want it to."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/lotsueugene/ai-agent-gemini", primary: true }
    ]
  },

  {
    id: "jwt-api",
    title: "MERN Auth API",
    tag: "Backend · 2024",
    size: "square",
    snippet: "A Node.js + Express authentication API with JWT authorization, bcrypt hashing, middleware-protected routes, and a Jest test suite. Small on purpose.",
    chips: ["Node.js", "Express", "MongoDB", "JWT"],
    specs: {
      "Role":   "Backend Engineer",
      "Scope":  "API design, auth middleware, testing",
      "Stack":  "Node.js, Express, Mongoose, MongoDB, JWT, bcrypt, Jest",
      "Repo":   "github.com/lotsueugene/mern-auth-api",
      "Year":   "2024",
      "Status": "Backend complete · frontend planned"
    },
    body: [
      "A secure authentication service I built to understand, end-to-end, how to do it properly: user registration, login, and protected routes behind JWT and bcrypt.",
      "The shape is straightforward. An Express server, Mongoose models in MongoDB, a middleware authorization layer, and a Jest test suite alongside Postman runs covering the usual edge cases (bad credentials, missing tokens, expired tokens, duplicate signups). Nothing novel, which was the point. The MERN frontend is planned next."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/lotsueugene/mern-auth-api", primary: true }
    ]
  }
];

// Experience
export const EXPERIENCE = [
  {
    when:  "Aug to Dec 2025",
    org:   "African Student Union",
    role:  "Vice President",
    place: "William Jewell College",
    what:  "Coordinated cultural and educational campus events promoting African heritage and student engagement. Led executive board planning sessions and managed committees, budgets, and partnerships to expand organization participation."
  },
  {
    when:  "Aug to Sept 2025",
    org:   "Excelerate",
    role:  "Data Analyst Associate Intern · Project Lead",
    place: "w/ Saint Louis University",
    what:  "Led a cross-functional analytics project across multi-source datasets using Python (Pandas) and SQL. Built interactive dashboards in Looker Studio and Seaborn to surface KPI trends, coordinated weekly deliverables across a distributed global team, and translated raw data into recommendations for academic stakeholders."
  },
  {
    when:  "2024 to 2028",
    org:   "William Jewell College",
    role:  "B.S. Computer Science · GPA 3.88",
    place: "Liberty, MO",
    what:  "Undergraduate studies in computer science. Coursework spans programming foundations, data structures, web development, data visualization, and discrete mathematics. Expected graduation May 2028."
  },
  {
    when:  "2024 to Now",
    org:   "ColorStack",
    role:  "Member",
    place: "Community",
    what:  "Active member of ColorStack, a national community of Black and Latinx computer science students. Participates in technical workshops, peer mentorship, and career programming."
  }
];
