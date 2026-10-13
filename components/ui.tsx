import Link from "next/link";
import type { ReactNode } from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d, mon: MONTHS[m - 1] };
}
export function longDate(iso: string) {
  const p = parts(iso);
  return `${p.d} ${p.mon} ${p.y}`;
}

export function DateBlock({ iso }: { iso: string }) {
  const p = parts(iso);
  return (
    <div className="date-block" aria-hidden="true">
      <b>{p.d}</b>
      <span>{p.mon}</span>
    </div>
  );
}

export function PageHead({ title, lead, crumb }: { title: string; lead: string; crumb: string }) {
  return (
    <section className="page-head">
      <div className="wrap page-head-in">
        <p className="crumbs"><Link href="/">Home</Link> / {crumb}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}

export function SecHead({ title, lead, action }: { title: string; lead?: string; action?: ReactNode }) {
  return (
    <div className="sec-head">
      <div className="copy">
        <h2>{title}</h2>
        {lead && <p>{lead}</p>}
      </div>
      {action}
    </div>
  );
}

export function CtaBand({
  title = "Come and see a school day for yourself",
  text = "Book a campus tour or send an enquiry. We reply within one working day.",
}: { title?: string; text?: string }) {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="hero-actions">
          <Link href="/admissions#apply" className="btn btn-green">Apply now</Link>
          <Link href="/contact" className="btn btn-line">Book a tour</Link>
        </div>
      </div>
    </section>
  );
}

export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faqs">
      {items.map((f) => (
        <details className="faq" key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
