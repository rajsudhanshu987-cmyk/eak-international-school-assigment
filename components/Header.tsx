"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { admissionsNote, nav, school } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  const links = nav.filter((n) => n.href !== "/contact");
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>{admissionsNote}</span>
          <a href={`tel:${school.phone[0].replace(/\s/g, "")}`}>{school.phone[0]}</a>
        </div>
      </div>
      <div className="wrap nav-row">
        <Link href="/" aria-label="EAK International School, home"><Logo /></Link>
        <nav aria-label="Main" className={`nav ${open ? "is-open" : ""}`} id="main-nav">
          <ul>
            {links.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
            </li>
          </ul>
          <Link href="/admissions#apply" className="btn btn-bus nav-cta">Apply now</Link>
        </nav>
        <Link href="/admissions#apply" className="btn btn-bus btn-sm apply-mobile">Apply</Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
