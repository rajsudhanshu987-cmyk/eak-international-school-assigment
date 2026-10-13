"use client";
import { useEffect, useRef, useState } from "react";

type K = "name" | "email" | "topic" | "message";

export default function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<K, string>>>({});
  const [sent, setSent] = useState(false);
  const done = useRef<HTMLDivElement>(null);
  useEffect(() => { if (sent) done.current?.focus(); }, [sent]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const n: Partial<Record<K, string>> = {};
    if (!v("name")) n.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v("email"))) n.email = "Enter an email like name@example.com.";
    if (!v("topic")) n.topic = "Choose what your message is about.";
    if (v("message").length < 10) n.message = "Write at least a sentence so we can help.";
    setErrors(n);
    if (Object.keys(n).length) { (e.currentTarget.elements.namedItem(Object.keys(n)[0]) as HTMLElement | null)?.focus(); return; }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="success" role="status" tabIndex={-1} ref={done}>
        <svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="22" fill="#0E3B2F" /><path d="M12 23l7 7 13-14" fill="none" stroke="#FFC531" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <h3>Message ready to send</h3>
        <p>This is a prototype, so nothing left your browser. In the live version, the office would reply within one working day.</p>
        <button className="btn btn-green btn-sm" onClick={() => setSent(false)}>Write another message</button>
      </div>
    );
  }
  const a = (k: K) => ({ "aria-invalid": errors[k] ? (true as const) : undefined, "aria-describedby": errors[k] ? `c-${k}-err` : undefined });
  const err = (k: K) => errors[k] && <span className="err" id={`c-${k}-err`}>{errors[k]}</span>;
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-grid two">
        <div className="field"><label htmlFor="c-name">Your name</label><input id="c-name" name="name" autoComplete="name" {...a("name")} />{err("name")}</div>
        <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" autoComplete="email" {...a("email")} />{err("email")}</div>
        <div className="field full">
          <label htmlFor="c-topic">What is this about?</label>
          <select id="c-topic" name="topic" defaultValue="" {...a("topic")}>
            <option value="" disabled>Choose a topic</option>
            <option>Admissions</option><option>Book a campus tour</option><option>Transport</option><option>Fees</option><option>Something else</option>
          </select>
          {err("topic")}
        </div>
        <div className="field full"><label htmlFor="c-message">Message</label><textarea id="c-message" name="message" {...a("message")} />{err("message")}</div>
        <div className="full">
          <button className="btn btn-green" type="submit">Send message</button>
          <p className="form-note">Prototype only. Your message is not stored or sent anywhere.</p>
        </div>
      </div>
    </form>
  );
}
