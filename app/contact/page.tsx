import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import { PageHead } from "@/components/ui";
import { school, social } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Address, phone, email and office hours for EAK International School in Gurugram, and a form to send a message.",
};

function Item({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="info-item">
      <span className="info-ico" aria-hidden="true"><svg viewBox="0 0 24 24">{icon}</svg></span>
      <div><h3>{title}</h3>{children}</div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <PageHead
        title="Come and see us"
        lead="Call, write or visit. The office is open six days a week and replies to messages within one working day."
        crumb="Contact"
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="info">
              <h2 className="sr-only">Contact details</h2>
              <Item title="Address" icon={<><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>}>
                <address>{school.address.map((l) => (<span key={l}>{l}<br /></span>))}</address>
              </Item>
              <Item title="Phone" icon={<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />}>
                <p>{school.phone.map((p) => (<span key={p}><a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a><br /></span>))}</p>
              </Item>
              <Item title="Email" icon={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>}>
                <p>
                  <a href={`mailto:${school.email}`}>{school.email}</a><br />
                  <a href={`mailto:${school.admissionsEmail}`}>{school.admissionsEmail}</a>
                </p>
              </Item>
              <Item title="Office hours" icon={<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}>
                <div className="hours">
                  {school.hours.map((h) => (<div key={h.day}><span>{h.day}</span><b>{h.time}</b></div>))}
                </div>
              </Item>
              <Item title="Follow us" icon={<><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" /></>}>
                <p>
                  {social.map((s, i) => (
                    <span key={s.name}>{i > 0 && " · "}<a href={s.href} target="_blank" rel="noopener noreferrer">{s.name}</a></span>
                  ))}
                </p>
              </Item>
            </div>

            <div className="form-card">
              <h2 className="form-title">Send us a message</h2>
              <ContactForm />
            </div>
          </div>

          <div className="map" role="img" aria-label="Map placeholder showing the school in Sector 21, Gurugram">
            <svg viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="800" height="420" fill="#e9f0ea" />
              <rect x="470" y="40" width="250" height="150" rx="14" fill="#cfe5dc" />
              <rect x="60" y="250" width="180" height="120" rx="14" fill="#cfe5dc" />
              <path d="M0 210h800M0 330h800M200 0v420M560 0v420" stroke="#fff" strokeWidth="18" />
              <path d="M0 120L800 300" stroke="#fff" strokeWidth="12" />
              <path d="M0 210h800M0 330h800M200 0v420M560 0v420M0 120L800 300" stroke="#d6e0d9" strokeWidth="2" strokeDasharray="10 12" />
            </svg>
            <div className="map-pin">
              <span>EAK International School</span>
              <svg viewBox="0 0 40 52" aria-hidden="true"><path d="M20 0C9 0 0 9 0 20c0 15 20 32 20 32s20-17 20-32C40 9 31 0 20 0z" fill="#D8453B" /><circle cx="20" cy="20" r="8" fill="#fff" /></svg>
            </div>
            <p className="map-note">Map placeholder. A live map embed goes here in production.</p>
          </div>
        </div>
      </section>
    </>
  );
}
