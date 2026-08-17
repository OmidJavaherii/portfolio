"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

function openMailClient(data: { name: string; email: string; message: string }) {
  const subject = encodeURIComponent(`Portfolio message from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
  );
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (
        response.ok &&
        response.headers.get("content-type")?.includes("application/json")
      ) {
        setStatus("success");
        setStatusMessage("Sent. I will get back to you.");
        setFormData({ name: "", email: "", message: "" });
        return;
      }
    } catch {
      // Static export / local serve has no API route.
    }

    openMailClient(formData);
    setStatus("success");
    setStatusMessage(
      "Opening your email app. Send that message and I will get back to you."
    );
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="spec-label">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={formData.name}
          onChange={(event) =>
            setFormData((current) => ({ ...current, name: event.target.value }))
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="spec-label">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={(event) =>
            setFormData((current) => ({ ...current, email: event.target.value }))
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="spec-label">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
        />
      </div>
      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Send message
      </Button>
      {status === "success" && (
        <p className="text-sm text-foreground" role="status">
          {statusMessage}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {statusMessage}
        </p>
      )}
    </form>
  );
}
