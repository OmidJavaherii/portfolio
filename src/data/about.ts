import type { EducationItem } from "@/types";

export const about = {
  title: "From electronics to product frontend.",
  lead: "I started in electrical and electronics engineering, then completed a software engineering degree in Tehran. That background still shows: I think in constraints, interfaces, and what actually ships.",
  body: [
    "For the last three years I have built production React and Next.js apps — a stock-market platform, multi-brand product sites, and Web3 product surfaces.",
    "I care about the parts that hold a product together: shared components, forms that do not fight the user, loading states that tell the truth, and rendering choices that still work on a slow network.",
    "I like small teams where frontend sits next to product, design, and backend — not as a layer added at the end.",
  ],
  currently:
    "Going deeper on Web3 frontend (Wagmi, Viem, wallet UX) and on shared UI so a new surface does not mean a new system.",
  caresAbout: [
    "Interfaces that stay fast after more features land",
    "Shared UI a small team can actually maintain",
    "Wallet and trading flows that fail clearly",
    "Working close to product, not only to tickets",
  ],
  interests: [
    "Performance work you can measure",
    "Design systems that stay small",
    "Product UI that has to survive real users",
  ],
};

export const education: EducationItem[] = [
  {
    title: "Bachelor of Computer Software Engineering",
    school: "Islamic Azad University, Central Tehran Branch",
    period: "2023 — 2025",
    location: "Tehran, Iran",
  },
  {
    title: "Associate of Electrical and Electronics Engineering",
    school: "Esfahan Technical and Vocational College (Mohajer University)",
    period: "2021 — 2023",
    location: "Esfahan, Iran",
  },
];
