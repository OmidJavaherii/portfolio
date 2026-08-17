import type { PhilosophyItem } from "@/types";

export const philosophy: PhilosophyItem[] = [
  {
    title: "Simple systems scale better",
    body: "Shared UI and clear state patterns beat clever abstractions when a small team has to keep shipping.",
  },
  {
    title: "Performance is a product feature",
    body: "How a page renders is how it feels. Splitting, caching, and lazy loading belong in the first version, not the cleanup.",
  },
  {
    title: "Reuse without over-engineering",
    body: "Extract what actually repeats. Leave the rest. A design system should speed delivery, not freeze it.",
  },
  {
    title: "Build for people, not just tickets",
    body: "Traders, operators, and players do not care about the stack. They care if the next action is obvious and fast.",
  },
];
