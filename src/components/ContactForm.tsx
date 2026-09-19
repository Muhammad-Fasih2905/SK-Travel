"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-deep/10 bg-white/70 p-8 text-center">
        <p className="font-display text-xl font-semibold text-deep">
          Thanks — we&apos;ve got it.
        </p>
        <p className="mt-2 text-[15px] text-ink/65">
          We&apos;ll reply within one business day. For anything urgent, call or
          WhatsApp us directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-deep/10 bg-white/70 p-7 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-ink/75">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="rounded-lg border border-deep/15 bg-white px-4 py-2.5 text-[15px] outline-none focus:border-deep"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-ink/75">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="rounded-lg border border-deep/15 bg-white px-4 py-2.5 text-[15px] outline-none focus:border-deep"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="destination" className="text-sm font-medium text-ink/75">
          Destination or package
        </label>
        <input
          id="destination"
          name="destination"
          placeholder="e.g. Canada visa, Southeast Asia tour"
          className="rounded-lg border border-deep/15 bg-white px-4 py-2.5 text-[15px] outline-none focus:border-deep"
        />
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink/75">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="resize-none rounded-lg border border-deep/15 bg-white px-4 py-2.5 text-[15px] outline-none focus:border-deep"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 text-[15px] font-semibold text-linen hover:bg-coral-dark"
      >
        Send message
        <Send className="h-4 w-4" strokeWidth={1.75} />
      </button>
    </form>
  );
}
