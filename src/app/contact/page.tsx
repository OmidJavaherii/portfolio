import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/animations/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { site, socialLinks } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: `Contact ${site.name} — ${site.email}`,
  path: "/contact",
});

export default function ContactPage() {
  const details = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` },
    { label: "Location", value: site.location },
  ];

  return (
    <main>
      <PageHeader
        label="Contact"
        title="Let's build something useful."
        description="Frontend roles, product collaborations, contract work. Email is the fastest way to reach me."
      />

      <div className="container-wide grid gap-16 px-[var(--space-gutter)] pb-[var(--space-section)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal>
          <ul className="divide-y divide-border border-y border-border">
            {details.map((item) => (
              <li key={item.label} className="flex flex-col gap-1 py-5">
                <span className="spec-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} className="text-lg">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-lg">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-5">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono-label text-[11px] uppercase tracking-[0.16em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="spec-label mb-6">Message</p>
          <ContactForm />
        </Reveal>
      </div>
    </main>
  );
}
