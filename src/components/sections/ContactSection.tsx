"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedElement } from "../ui/AnimatedSection";

export function ContactSection() {
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
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-20 bg-gradient-to-b from-background via-accent/5 to-background"
      animation="fadeIn"
      delay={0.1}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Get in Touch
            </h2>
            <p className="text-muted text-center mb-12">
              Have a question or want to work together? I&apos;d love to hear
              from you!
            </p>
          </AnimatedElement>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatedElement animation="slideUp" delay={0.3}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.4}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.5}>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder-gray-400"
                  placeholder="Your message..."
                />
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.6}>
              <div className="flex flex-col items-center gap-4">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={status === "loading"}
                  className="w-full md:w-auto"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {status === "success" && (
                  <p className="text-green-500 text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
              </div>
            </AnimatedElement>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
