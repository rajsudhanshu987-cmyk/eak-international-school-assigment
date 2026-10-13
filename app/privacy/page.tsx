import type { Metadata } from "next";
import { PageHead } from "@/components/ui";
import { school } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy policy" };

const sections = [
  { h: "What we collect", p: "When you send an enquiry or a message, we ask for your name, email, phone number and your child's name and grade. We ask for nothing else." },
  { h: "How we use it", p: "We use these details only to reply to you, send a prospectus and invite you to open-house events. We do not sell or share them with advertisers." },
  { h: "How long we keep it", p: "Enquiries that do not lead to an application are deleted after twelve months. Application records follow the school's records policy." },
  { h: "Your choices", p: `You can ask us to see, correct or delete your details at any time by writing to ${school.admissionsEmail}.` },
];

export default function Privacy() {
  return (
    <>
      <PageHead title="Privacy policy" lead="What we collect when you contact us, and what we do with it." crumb="Privacy policy" />
      <section className="section">
        <div className="wrap prose">
          <p className="small">Sample policy for a fictional school. Last updated 12 October 2026.</p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
