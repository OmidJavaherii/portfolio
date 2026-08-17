import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "tara-chain",
    company: "Tara Chain",
    position: "Frontend Engineer",
    start: "Sep 2025",
    end: "Jul 2026",
    period: "Sep 2025 — Jul 2026",
    location: "Tehran, Iran",
    summary:
      "Frontend for Web3 product surfaces: wallet connection, shared UI, gamification, and multi-language product experiences.",
    responsibilities: [
      "Implemented Web3 wallet flows with Wagmi and Viem — provider setup, wallet connection, API integration, and wallet switching across product features.",
      "Built gamification and product UI for Web3 surfaces including EpicOfCastles and Gas Station.",
      "Implemented i18n across English, Spanish, Russian, and Dutch.",
      "Developed reusable UI components and shared frontend patterns to reduce duplicated work across projects.",
    ],
    achievements: [
      "Shipped wallet-aware UI that could be reused across product features instead of re-implemented per screen.",
      "Brought Gas Station to a final pre-launch stage with a three-person frontend team.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Wagmi",
      "Viem",
      "i18n",
      "Tailwind CSS",
    ],
    selectedProjects: ["epic-of-castles", "shexon", "moonpad", "gas-station"],
  },
  {
    id: "desna",
    company: "Desna",
    position: "Frontend Engineer",
    start: "Jun 2024",
    end: "Sep 2025",
    period: "Jun 2024 — Sep 2025",
    location: "Tehran, Iran",
    summary:
      "Frontend engineering across brand and product sites, with a focus on performance, shared UI, and consistent form/state patterns.",
    responsibilities: [
      "Improved frontend performance across 4–5 web applications with rendering strategy updates, code splitting, and lazy loading.",
      "Standardized UI development with reusable component libraries, Zustand-based state patterns, and shared form architecture using React Hook Form and Zod.",
      "Collaborated with product, design, and backend to ship production features for brand and product sites including Ghajari Food and RoyalJeans.",
    ],
    achievements: [
      "Raised Lighthouse scores from around 30 to around 82 on the applications that received the performance work.",
      "Reduced duplicated UI and form logic by establishing shared component and state patterns.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
    ],
    selectedProjects: ["polaris", "royal-jeans", "ghajari-food"],
  },
  {
    id: "optionbaaz",
    company: "OptionBaaz",
    position: "Frontend Engineer",
    start: "Aug 2023",
    end: "Jun 2024",
    period: "Aug 2023 — Jun 2024",
    location: "Remote",
    summary:
      "Frontend on an Iranian stock-market platform — trader-facing views, admin tools, and real-time market data.",
    responsibilities: [
      "Contributed to the frontend of an existing trading architecture, delivering trader and admin-facing features.",
      "Built real-time market visualization and navigation using WebSocket data sync, with rendering tuned for active trading views.",
      "Developed unified admin and end-user dashboards to simplify operational workflows and surface key platform metrics.",
    ],
    achievements: [
      "Kept live market views usable under frequent WebSocket updates without rebuilding the surrounding product architecture.",
      "Gave operators and traders a more consistent dashboard model instead of separate, drifting interfaces.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "WebSocket",
      "Tailwind CSS",
    ],
    selectedProjects: [],
  },
];
