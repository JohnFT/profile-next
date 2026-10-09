"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/dictionaries";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-text placeholder:text-text-subtle outline-none transition-colors focus:border-accent";

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
      className="space-y-5 rounded-2xl border border-line bg-card p-6 sm:p-8"
    >
      <div>
        <label htmlFor="name" className="block font-mono text-xs tracking-wider text-text-muted uppercase">
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
        <label htmlFor="email" className="block font-mono text-xs tracking-wider text-text-muted uppercase">
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
        <label htmlFor="message" className="block font-mono text-xs tracking-wider text-text-muted uppercase">
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
        className="w-full rounded-lg bg-accent px-5 py-3 font-mono text-xs font-semibold tracking-wider text-on-accent uppercase transition-colors hover:bg-accent-hover"
      >
        {dict.mail.formSubmit}
      </button>
    </form>
  );
}
