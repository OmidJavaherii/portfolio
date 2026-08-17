import type { CapabilityGroup } from "@/types";

export const capabilities: CapabilityGroup[] = [
  {
    title: "Frontend Engineering",
    description: "Product UI in React and Next.js, with TypeScript as the default.",
    items: [
      "React",
      "Next.js (App Router, SSR, SSG, ISR)",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Architecture",
    description: "Shared systems that keep new surfaces from becoming new stacks.",
    items: [
      "Component systems / design systems",
      "SSR / CSR / ISR",
      "Code splitting",
      "Rendering strategy",
      "Performance (Lighthouse)",
      "Storybook",
    ],
  },
  {
    title: "State & Data",
    description: "Client state, forms, and live data — without a new pattern per screen.",
    items: [
      "Zustand",
      "React Hook Form",
      "Zod",
      "REST APIs",
      "WebSocket",
      "Server Actions",
    ],
  },
  {
    title: "Product Engineering",
    description: "Frontend as part of the product, not a coat of paint.",
    items: [
      "Design and product collaboration",
      "Shared form architecture",
      "i18n",
      "Role-based access",
      "Design systems",
      "Feature delivery",
    ],
  },
  {
    title: "Web3",
    description: "Wallet-aware product UI, not isolated demo pages.",
    items: [
      "Wagmi",
      "Viem",
      "Wallet connection",
      "Wallet switching",
      "Solana wallet",
      "On-chain product flows",
    ],
  },
  {
    title: "Tools & Infrastructure",
    description: "Enough of the surrounding stack to ship and operate.",
    items: [
      "Git",
      "Docker",
      "NextAuth",
      "MongoDB",
      "MinIO",
      "VPS deploys",
    ],
  },
];
