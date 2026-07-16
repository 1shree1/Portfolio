"use client";

import { FormEvent, useId, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { buttonClassName } from "@/component/Button";
import { site } from "@/lib/site-data";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const projectTypes = [
  "Business website",
  "Landing page",
  "Web application",
  "Website redesign",
  "Internship or remote opportunity",
  "Collaboration",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const messageId = useId();
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();

    if (company) {
      setFormState({
        status: "error",
        message: "Something went wrong. Please email Shree directly instead.",
      });
      return;
    }

    if (!name || !email || !projectType || !description) {
      setFormState({
        status: "error",
        message: "Please complete every required field before starting the conversation.",
      });
      return;
    }

    if (!isValidEmail(email)) {
      setFormState({
        status: "error",
        message: "Please enter a valid email address so Shree can reply.",
      });
      return;
    }

    setFormState({ status: "loading", message: "Preparing your message..." });

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        "",
        "Project description:",
        description,
      ].join("\n"),
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setFormState({
        status: "success",
        message: "Your email client should open with the project details ready to send.",
      });
      form.reset();
    }, 350);
  };

  return (
    <form
      className="grid gap-5"
      noValidate
      onSubmit={handleSubmit}
      aria-describedby={formState.message ? messageId : undefined}
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-black uppercase tracking-[0.14em] text-white">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="min-h-12 rounded-md border border-white/12 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-[#929292] focus:border-[#FF2A1A] focus:ring-2 focus:ring-[#FF2A1A]/30"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-black uppercase tracking-[0.14em] text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-h-12 rounded-md border border-white/12 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-[#929292] focus:border-[#FF2A1A] focus:ring-2 focus:ring-[#FF2A1A]/30"
          placeholder="you@domain.com"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="projectType" className="text-sm font-black uppercase tracking-[0.14em] text-white">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="min-h-12 rounded-md border border-white/12 bg-[#111111] px-4 text-white outline-none transition focus:border-[#FF2A1A] focus:ring-2 focus:ring-[#FF2A1A]/30"
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="description" className="text-sm font-black uppercase tracking-[0.14em] text-white">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          className="min-h-36 resize-y rounded-md border border-white/12 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-[#929292] focus:border-[#FF2A1A] focus:ring-2 focus:ring-[#FF2A1A]/30"
          placeholder="Tell me what you are building, who it is for, and what result you need."
        />
      </div>

      {formState.message ? (
        <p
          id={messageId}
          role={formState.status === "error" ? "alert" : "status"}
          className={
            formState.status === "error"
              ? "rounded-md border border-[#FF2A1A]/50 bg-[#E10600]/12 px-4 py-3 text-sm font-bold text-white"
              : "rounded-md border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-bold text-[#D5D5D5]"
          }
        >
          {formState.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={formState.status === "loading"}
        className={buttonClassName("primary", "w-full disabled:cursor-not-allowed disabled:opacity-70")}
      >
        {formState.status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        Start a Conversation
      </button>
    </form>
  );
}
