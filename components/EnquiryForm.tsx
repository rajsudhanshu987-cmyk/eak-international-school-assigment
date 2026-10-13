"use client";
import { useEffect, useRef, useState } from "react";

type Errors = Partial<Record<"parent" | "child" | "grade" | "email" | "phone", string>>;

export default function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<string | null>(null);
  const done = useRef<HTMLDivElement>(null);
  useEffect(() => { if (sent) done.current?.focus(); }, [sent]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("parent")) next.parent = "Enter the parent or guardian's name.";
    if (!v("child")) next.child = "Enter your child's name.";
    if (!v("grade")) next.grade = "Choose the grade you are applying for.";
    if (!/^\S+@\S+\.\S+$/.test(v("email"))) next.email = "Enter an email like name@example.com.";
    const digits = v("phone").replace(/\D/g, "");
    if (!/^[+\d][\d\s()-]*$/.test(v("phone")) || digits.length < 10 || digits.length > 13) next.phone = "Enter a phone number with 10 digits, like +91 98100 22100.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setSent(v("parent"));
  };

  if (sent) {
    return (
      <div className="success" role="status" tabIndex={-1} ref={done}>
        <svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="22" fill="#0E3B2F" /><path d="M12 23l7 7 13-14" fill="none" stroke="#FFC531" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <h3>Thank you, {sent}. Your enquiry is in.</h3>
        <p>This is a frontend prototype, so nothing was sent. In the real flow, the admissions team would email a prospectus and an open-house invitation within one working day.</p>
        <button className="btn btn-green btn-sm" onClick={() => setSent(null)}>Send another enquiry</button>
      </div>
    );
  }

  const fld = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? (true as const) : undefined, "aria-describedby": errors[k] ? `${k}-err` : undefined });
  const err = (k: keyof Errors) => errors[k] && <span className="err" id={`${k}-err`}>{errors[k]}</span>;

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="form-grid two">
        <div className="field"><label htmlFor="parent">Parent or guardian name</label><input id="parent" name="parent" autoComplete="name" {...fld("parent")} />{err("parent")}</div>
        <div className="field"><label htmlFor="child">Child's name</label><input id="child" name="child" {...fld("child")} />{err("child")}</div>
        <div className="field">
          <label htmlFor="grade">Applying for</label>
          <select id="grade" name="grade" defaultValue="" {...fld("grade")}>
            <option value="" disabled>Choose a grade</option>
            {Array.from({ length: 12 }, (_, i) => (<option key={i}>Grade {i + 1}</option>))}
          </select>
          {err("grade")}
        </div>
        <div className="field"><label htmlFor="session">Session</label><select id="session" name="session" defaultValue="2027–28"><option>2027–28</option><option>2028–29</option></select></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" {...fld("email")} />{err("email")}</div>
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" {...fld("phone")} />{err("phone")}</div>
        <div className="field full"><label htmlFor="msg">Anything we should know? <span className="hint">(optional)</span></label><textarea id="msg" name="msg" /></div>
        <div className="full">
          <button type="submit" className="btn btn-green">Send enquiry</button>
          <p className="form-note">Prototype only. Your details are not stored or sent anywhere.</p>
        </div>
      </div>
    </form>
  );
}
