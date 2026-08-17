import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Frontend engineering at Tara Chain, Desna, and OptionBaaz — Web3, product sites, and trading platforms.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <main>
      <PageHeader
        label="Experience"
        title="Three years in product teams."
        description="Web3 at Tara Chain, product sites at Desna, and a stock-market platform at OptionBaaz."
      />
      <ExperienceTimeline />
      <ContactCTA />
    </main>
  );
}
