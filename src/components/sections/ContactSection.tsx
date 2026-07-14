"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { footerData } from "@/data/footer";
import { fadeUp, staggerContainer } from "@/lib/motion";

const contactDetails = [
  { icon: MapPin, label: "Location", value: "Tehran, Iran" },
  {
    icon: Mail,
    label: "Email",
    value: "omidjavaheri.eng@gmail.com",
    href: "mailto:omidjavaheri.eng@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+98 913 810 0702",
    href: "tel:+989138100702",
  },
];

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SectionShell
      id="contact"
      label="Contact"
      index={5}
      title="Start a conversation"
      description="Open to frontend roles, freelance projects, and collaborations."
    >
      <div className="grid gap-px bg-border lg:grid-cols-2">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="panel bg-card p-6 md:p-10"
        >
          <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-primary">
            Status
          </p>
          <p className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Available for front-end work.
          </p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Email is fastest for recruiter outreach. Or use the form — I reply
            within 48 hours.
          </p>

          <Button size="lg" asChild className="mt-8">
            <Link href="mailto:omidjavaheri.eng@gmail.com">
              <Mail className="h-4 w-4" />
              omidjavaheri.eng@gmail.com
            </Link>
          </Button>

          <div className="mt-10 space-y-5 border-t border-border pt-8">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <Link
                      href={href}
                      className="mt-1 block text-sm font-medium transition-colors hover:text-primary"
                    >
                      {value}
                    </Link>
                  ) : (
                    <p className="mt-1 text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-2 border-t border-border pt-8">
            {footerData.socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                aria-label={`Visit my ${link.platform} profile`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="panel bg-card p-6 md:p-10"
        >
          <p className="mb-6 font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Send a message
          </p>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-mono-label text-[10px] uppercase tracking-wider">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono-label text-[10px] uppercase tracking-wider">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono-label text-[10px] uppercase tracking-wider">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about the role or project..."
                className="min-h-[140px]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </Button>

            <div aria-live="polite" aria-atomic="true">
              {status === "success" && (
                <p className="font-mono-label text-xs text-primary">
                  Sent — I&apos;ll reply soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">{errorMessage}</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
}
