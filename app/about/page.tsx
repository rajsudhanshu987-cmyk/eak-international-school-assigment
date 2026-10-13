import type { Metadata } from "next";
import Link from "next/link";
import Portrait from "@/components/Portrait";
import Scene from "@/components/Scene";
import { CtaBand, PageHead, SecHead } from "@/components/ui";
import { achievements, facilities, principal, stats, timeline, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "The story of EAK International School: how it began in 2005, what we believe, and who leads it.",
};

const campusIds = ["field", "library", "auditorium"];

export default function About() {
  const campus = campusIds.flatMap((id) => facilities.find((f) => f.id === id) ?? []);
  return (
    <>
      <PageHead
        title="A school that started with a mango tree"
        lead="EAK opened in 2005 with 210 children. Twenty-one years later the classes are still small, and the questions are still welcome."
        crumb="About"
      />

      <section className="section">
        <div className="wrap split">
          <div className="frame"><Scene kind="campus" label="Illustration of the EAK main building and green quad" /></div>
          <div>
            <h2>Who we are</h2>
            <p className="lead">EAK International School is a day and boarding school for Grades 1 to 12 in Gurugram, affiliated to CBSE.</p>
            <ul className="checks">
              <li>Classes never exceed 28 students, so every child is known by name.</li>
              <li>Every term ends in a project that students build, test and present.</li>
              <li>Seven of our twelve acres are green, with open-air classrooms.</li>
            </ul>
            <Link href="/academics" className="btn btn-green">See how we teach</Link>
          </div>
        </div>
      </section>

      <section className="section section-white" id="history">
        <div className="wrap">
          <SecHead title="Twenty-one years, five turning points" lead="The school has grown, but the rule on class size has never moved." />
          <ol className="timeline">
            {timeline.map((t) => (
              <li className="tl" key={t.year}>
                <b>{t.year}</b>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-dark" id="vision">
        <div className="wrap">
          <div className="vm">
            <div>
              <h2 className="sr-only">Vision and mission</h2>
              <h3>Our vision</h3>
              <p>A school where every child learns to think clearly, act kindly and keep asking questions.</p>
            </div>
            <div>
              <h3>Our mission</h3>
              <p>To teach by asking and making, in classes small enough for every child to be known, on a campus that is safe, green and open to its city.</p>
            </div>
          </div>
          <h2 className="h4">Core values</h2>
          <div className="values">
            {values.map((v) => (
              <div className="value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="principal">
        <div className="wrap principal">
          <div className="portrait"><Portrait /></div>
          <div>
            <h2 className="sr-only">Principal&rsquo;s message</h2>
            <blockquote className="pquote">{principal.short}</blockquote>
            <div className="prose">
              {principal.long.map((p) => (<p key={p.slice(0, 24)}>{p}</p>))}
            </div>
            <p className="pname">{principal.name}<span>{principal.role}, EAK International School</span></p>
          </div>
        </div>
      </section>

      <section className="section section-white" id="numbers">
        <div className="wrap">
          <SecHead title="EAK in numbers" lead="The figures we check against every term." />
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.n}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="achievements">
        <div className="wrap">
          <SecHead title="Achievements" lead="Results from the exam hall, the sports field and the robotics floor." />
          <div className="ach">
            {achievements.map((a) => (
              <div className="ach-row" key={a.title}>
                <span className="ach-year">{a.year}</span>
                <h3>{a.title}</h3>
                <p>{a.detail}</p>
                <span className="tag">{a.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="campus">
        <div className="wrap">
          <SecHead
            title="Campus overview"
            lead="Twelve acres in Sector 21, with a central quad that every building opens onto."
            action={<Link href="/facilities" className="link">All facilities</Link>}
          />
          <div className="tile-grid">
            {campus.map((f) => (
              <article className="tile compact" key={f.id}>
                <Scene kind={f.id} label={`${f.name} illustration`} />
                <div className="tile-body">
                  <h3>{f.name}</h3>
                  <p>{f.text}</p>
                  <p className="detail">{f.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
