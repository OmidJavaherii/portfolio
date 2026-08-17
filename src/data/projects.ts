import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ghajari-food",
    title: "Ghajari Food",
    description:
      "A suite of Next.js apps for restaurant management, accounting, online ordering, menus, and kitchen operations.",
    role: "Frontend Engineer",
    company: "Desna",
    technologies: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "SignalR",
      ".NET",
      "Tailwind CSS",
    ],
    category: "Product",
    year: "2025",
    featured: true,
    image: "/images/project3.jpg",
    responsibilities: [
      "Built the frontend for restaurant operations: ordering, menus, kitchen, accounting, and management — as a suite, not separate one-off apps.",
      "Implemented NextAuth with role and permission-based access so staff, admin, and customer views shared one session model.",
      "Connected real-time kitchen and order workflows to a .NET backend over SignalR.",
      "Applied SSR, SSG, ISR, lazy loading, and caching per surface so public menus stayed fast and operational tools stayed current.",
      "Maintained a shared design system so forms, tables, and status UI did not drift across products.",
    ],
    achievements: [
      "Scaled one application to about 10K daily users and 500 online orders per day.",
      "Gave kitchen, admin, and customer flows the same UI system instead of three separate stacks.",
      "Made access control and live updates part of the product, not an afterthought.",
    ],
    links: {
      live: "https://ghajarifood.com/",
    },
  },
  {
    slug: "gas-station",
    title: "Gas Station",
    description:
      "A Web3 gaming platform with wallet-connected swap, P2P trading, marketplace, and gamification.",
    role: "Frontend Engineer",
    company: "Tara Chain",
    technologies: [
      "Next.js",
      "TypeScript",
      "Solana Wallet",
      "Sass",
      "i18n",
      "SSR",
    ],
    category: "Web3",
    year: "2026",
    featured: true,
    responsibilities: [
      "Built wallet-connected product UI with a three-person frontend team: swap, P2P trading, marketplace, multi-account, and in-game asset flows.",
      "Integrated Solana wallet connection so transactions ran through the product, not a mocked connect button.",
      "Implemented gamification — levels, rewards, missions, and achievements — on the same UI system as the economy features.",
      "Set up SSR/CSR with selective revalidation so public pages and wallet-aware views could coexist.",
      "Shipped i18n and responsive layouts for desktop, tablet, and mobile from the start.",
    ],
    achievements: [
      "Took the platform to the final pre-launch stage as one product, not a set of disconnected Web3 widgets.",
      "Kept wallet state, marketplace, and rewards on shared frontend patterns so new surfaces did not mean new stacks.",
      "Launch was later postponed by the client; the frontend was ready to ship.",
    ],
  },
  {
    slug: "polaris",
    title: "Polaris",
    description:
      "A logistics route system with map visualization, multi-stop planning, and driver-facing views.",
    role: "Frontend Engineer",
    company: "Desna",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mapbox",
      "Zustand",
      "REST API",
    ],
    category: "Logistics",
    year: "2025",
    featured: true,
    image: "/images/project1.jpg",
    responsibilities: [
      "Built the operations frontend for multi-stop route planning, live map tracking, and driver-facing views.",
      "Wrapped Mapbox in product components so map logic did not leak into every screen.",
      "Held planning and tracking state in Zustand instead of scattering it through the tree.",
      "Integrated REST APIs for routes and geolocation against a .NET backend.",
      "Kept list, table, and map UI in one mental model for operators.",
    ],
    achievements: [
      "Put planning and live tracking in one product instead of disconnected tools.",
      "Made map and route state reusable across operations and driver views.",
      "Reduced duplicated tracking logic that used to be copied per screen.",
    ],
    links: {
      live: "https://polarisapp.ir/live-preview/",
    },
  },
  {
    slug: "lonotech-community",
    title: "LonoTech Community",
    description:
      "A static site grown into a full-stack community platform with Next.js, MongoDB, MinIO, and Docker.",
    role: "Frontend Engineer",
    company: "Independent",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "MinIO",
      "Docker",
    ],
    category: "Community",
    year: "2026",
    responsibilities: [
      "Turned an existing static/base site into a full-stack Next.js application without throwing away the UI.",
      "Added Server Actions for writes instead of standing up a separate API for the first product features.",
      "Implemented MongoDB for persistence and MinIO for media uploads.",
      "Built reusable UI and admin workflows so later features did not mean new patterns.",
      "Containerized the app with Docker and deployed it on a VPS.",
    ],
    achievements: [
      "The community now runs as a real product with data, media, and admin tools.",
      "New features land on the same UI system instead of one-off pages.",
      "Deploys are repeatable on a VPS instead of a one-off server setup.",
    ],
  },
  {
    slug: "royal-jeans",
    title: "RoyalJeans",
    description:
      "A production e-commerce storefront for a clothing brand, shipped as part of Desna's multi-brand work.",
    role: "Frontend Engineer",
    company: "Desna",
    technologies: [
      "Next.js",
      "JavaScript",
      "Redux",
      "Bootstrap",
      "Mapbox",
    ],
    category: "Commerce",
    year: "2025",
    image: "/images/project2.jpg",
    responsibilities: [
      "Built the storefront from catalog through cart, checkout, and payment.",
      "Kept the frontend on the team's existing Next.js and state patterns so it was not a snowflake stack.",
      "Made catalog and checkout usable on phones as well as desktops.",
      "Applied the same performance and component work used across other Desna brand sites.",
    ],
    achievements: [
      "Shipped a live production storefront for the brand.",
      "UI and performance work transferred to sibling product sites instead of staying locked in this one.",
      "Checkout held together on small screens without a separate mobile app.",
    ],
    links: {
      live: "https://royaljeans.ir/",
    },
  },
  {
    slug: "epic-of-castles",
    title: "EpicOfCastles",
    description:
      "Gamification and product UI for a Web3 game surface at Tara Chain.",
    role: "Frontend Engineer",
    company: "Tara Chain",
    technologies: ["Next.js", "TypeScript", "Wagmi", "Viem", "i18n"],
    category: "Web3",
    year: "2026",
    responsibilities: [
      "Built game and gamification UI on Tara Chain's shared Wagmi and Viem wallet layer.",
      "Wired provider setup, wallet connection, and wallet switching so game screens did not invent their own connect flow.",
      "Reused shared UI components across game surfaces instead of forking the wallet experience.",
      "Implemented i18n so the product could ship in more than one language.",
    ],
    achievements: [
      "Shipped EpicOfCastles as a wallet-aware product, not a disconnected landing page.",
      "Kept wallet and UI patterns shared with the rest of the Tara Chain suite.",
      "New game screens could plug into the existing connection flow instead of rebuilding it.",
    ],
  },
  {
    slug: "shexon",
    title: "Shexon",
    description:
      "Product UI in Tara Chain's Web3 suite, on shared wallet and component patterns.",
    role: "Frontend Engineer",
    company: "Tara Chain",
    technologies: ["Next.js", "TypeScript", "Wagmi", "Viem"],
    category: "Web3",
    year: "2026",
    responsibilities: [
      "Implemented the Shexon frontend on the existing Wagmi/Viem wallet setup used across Tara Chain.",
      "Stayed on the shared UI system so connection, switching, and layout did not fork from sibling products.",
      "Delivered wallet-aware product surfaces that fit the same suite as EpicOfCastles and MoonPad.",
    ],
    achievements: [
      "Shipped as part of the Tara Chain frontend suite without a second wallet stack.",
      "Visual and interaction patterns stayed aligned with the other Web3 products.",
      "Later suite work could reuse the same connection and component layer.",
    ],
  },
  {
    slug: "moonpad",
    title: "MoonPad",
    description:
      "Web3 product UI at Tara Chain, using the same wallet and shared frontend as sibling products.",
    role: "Frontend Engineer",
    company: "Tara Chain",
    technologies: ["Next.js", "TypeScript", "Wagmi", "Viem"],
    category: "Web3",
    year: "2026",
    responsibilities: [
      "Built MoonPad on Tara Chain's shared provider setup, wallet switching, and component patterns.",
      "Integrated Wagmi and Viem so wallet connection matched EpicOfCastles and related surfaces.",
      "Avoided a parallel frontend — new product flows landed on the existing UI layer.",
    ],
    achievements: [
      "Delivered MoonPad as a selected Tara Chain project on the shared stack.",
      "Wallet and UI work transferred instead of being rewritten for this product.",
      "The suite stayed one system as another product surface was added.",
    ],
  },
  {
    slug: "pathfinding-visualizer",
    title: "Pathfinding Visualizer",
    description:
      "An interactive grid for watching pathfinding algorithms run, with speed control and a layout that works on a phone.",
    role: "Personal project",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Tools",
    year: "2024",
    secondary: true,
    image: "/images/project6.jpg",
    responsibilities: [
      "Built a Next.js client app that runs pathfinding on a grid with live playback.",
      "Added controls for algorithm choice and speed so comparisons are visible, not only theoretical.",
      "Kept the grid and controls usable on a phone, not only on a desktop.",
    ],
    achievements: [
      "Made algorithm behavior easy to see instead of only reading about it.",
      "Kept animation readable without locking the UI on larger grids.",
      "Published a small, focused tool rather than over-building a demo.",
    ],
    links: {
      live: "https://pathfinderalgorithm.netlify.app/",
      github: "https://github.com/OmidJavaherii/Path-finder-Algorithm/",
    },
  },
  {
    slug: "frontend-interview-questions",
    title: "Frontend Interview Questions",
    description:
      "A public set of frontend interview questions, published as Markdown on GitHub Pages.",
    role: "Personal project",
    technologies: ["Markdown", "GitHub Pages"],
    category: "Tools",
    year: "2024",
    secondary: true,
    image: "/images/project5.jpg",
    responsibilities: [
      "Collected frontend interview questions into a single readable Markdown source.",
      "Published the set on GitHub Pages without wrapping it in an unnecessary app.",
      "Kept the format easy to update so new questions do not need a rebuild pipeline.",
    ],
    achievements: [
      "Shipped a public, linkable question set instead of another overbuilt tool.",
      "Markdown stays the source of truth — simple to edit and host.",
      "The list is usable as a document, which is what interview prep actually needs.",
    ],
    links: {
      live: "https://omidjavaherii.github.io/frontend-interview-questions/",
      github: "https://github.com/OmidJavaherii/frontend-interview-questions/",
    },
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getPrimaryProjects() {
  return projects.filter((project) => !project.secondary);
}

export function getSecondaryProjects() {
  return projects.filter((project) => project.secondary);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const list = getPrimaryProjects();
  const index = list.findIndex((project) => project.slug === slug);
  if (index === -1) return list[0];
  return list[(index + 1) % list.length];
}
