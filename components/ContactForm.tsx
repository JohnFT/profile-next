"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";

const inputClass =
  "w-full rounded-lg border border-glass bg-surface-1 px-4 py-3 text-sm text-text placeholder:text-text-muted/70 outline-none transition-colors focus:border-accent";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:johnafonseca@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5 rounded-2xl border border-glass bg-surface-2 p-6 backdrop-blur-xl sm:p-8"
    >
      <div>
        <label htmlFor="name" className="font-label block text-xs font-semibold tracking-wide text-text-muted">
          {dict.mail.formName}
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="email" className="font-label block text-xs font-semibold tracking-wide text-text-muted">
          {dict.mail.formEmail}
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputClass} mt-2`}
        />
      </div>
      <div>
        <label htmlFor="message" className="font-label block text-xs font-semibold tracking-wide text-text-muted">
          {dict.mail.formMessage}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} mt-2 resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-shadow hover:shadow-[0_0_24px_-4px_var(--color-accent)]"
      >
        {dict.mail.formSubmit}
      </button>
    </form>
  );
}
