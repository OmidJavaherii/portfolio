import { HomeHero } from "@/components/hero/HomeHero";
import { IntroSection } from "@/components/sections/IntroSection";
import { SelectedProjects } from "@/components/projects/SelectedProjects";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ExperienceSnapshot } from "@/components/sections/ExperienceSnapshot";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <IntroSection />
      <SelectedProjects />
      <CapabilitiesSection />
      <ExperienceSnapshot />
      <PhilosophySection />
      <ContactCTA />
    </main>
  );
}
