import Link from "next/link";
import Logo from "./Logo";
import { school, nav, social as socialLinks } from "@/lib/data";

const icons: Record<string, string> = {
  Instagram: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5.5-1.5h.01",
  Facebook: "M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8a1 1 0 011-1z",
  YouTube: "M3 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3zm7 1v6l5-3z",
  LinkedIn: "M4 9h4v11H4zM6 4a2 2 0 110 4 2 2 0 010-4zm5 5h4v2c1-1.5 2.4-2.2 4-2.2 3 0 4 2 4 5V20h-4v-5.5c0-1.5-.6-2.3-1.9-2.3-1.4 0-2.1 1-2.1 2.4V20h-4z",
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>Day school for Grades 1 to 12, with a boarding house from Grade 8. CBSE affiliated, affiliation no. 2730451.</p>
          <ul className="social" aria-label="Social media">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d={icons[s.name]} /></svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Explore</h2>
          <ul className="footer-list">
            {nav.map((n) => (<li key={n.href}><Link href={n.href}>{n.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Parents</h2>
          <ul className="footer-list">
            <li><Link href="/admissions#apply">Apply for admission</Link></li>
            <li><Link href="/admissions#fees">Fee structure</Link></li>
            <li><Link href="/events">Circulars and notices</Link></li>
            <li><Link href="/privacy">Privacy policy</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Visit us</h2>
          <address>
            {school.address.map((l) => (<span key={l}>{l}<br /></span>))}
          </address>
          <p className="footer-contact">
            <a href={`tel:${school.phone[0].replace(/\s/g, "")}`}>{school.phone[0]}</a><br />
            <a href={`mailto:${school.email}`}>{school.email}</a>
          </p>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© 2026 EAK International School. A fictional school created for a frontend assignment.</span>
      </div>
    </footer>
  );
}
