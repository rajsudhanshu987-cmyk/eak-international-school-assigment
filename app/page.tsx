import Link from "next/link";
import DaySchedule from "@/components/DaySchedule";
import Scene from "@/components/Scene";
import Portrait from "@/components/Portrait";
import { CtaBand, DateBlock, SecHead } from "@/components/ui";
import { achievements, admissionsNote, events, facilities, news, school, stages, strengths, testimonials } from "@/lib/data";

export default function Home() {
  const homeIds = ["classroom", "lab", "library", "field", "computer", "bus"];
  const homeFacilities = homeIds.flatMap((id) => facilities.find((f) => f.id === id) ?? []);
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">{school.name} · Gurugram</p>
            <h1>{school.tagline}</h1>
            <p className="hero-sub">
              EAK is a day and boarding school for Grades 1 to 12 in Gurugram. Small classes, hands-on projects and teachers who know every child by name.
            </p>
            <div className="hero-actions">
              <Link href="/admissions#apply" className="btn btn-bus">Apply now</Link>
              <Link href="/admissions" className="btn btn-line">See how admission works</Link>
            </div>
            <p className="hero-facts">
              <span><b>1,240</b> students</span>
              <span><b>28</b> per class, at most</span>
              <span><b>CBSE</b> affiliated</span>
            </p>
          </div>
          <DaySchedule />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead title="Why families choose EAK" lead="Six things we promise, and check every term." />
          <div className="strengths">
            {strengths.map((s) => (
              <div className="strength" key={s.title}>
                <span className="mark" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap split">
          <div className="frame"><Scene kind="campus" label="Illustration of the EAK main building and green quad" /></div>
          <div>
            <h2>A 12-acre campus with room to run and room to read</h2>
            <p className="lead">EAK opened in 2005 with 210 children and a mango tree. Today it is 1,240 students, 96 teachers and a rule we have never changed: no class above 28.</p>
            <p>We teach the CBSE curriculum, but we start every lesson with a question, not a definition. Children here try first and explain after.</p>
            <Link href="/about" className="btn btn-green">Read more about EAK</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead
            title="Academic excellence at every stage"
            lead="Four stages, one thread: children learn to ask good questions and find out the answer."
            action={<Link href="/academics" className="link">Explore academics</Link>}
          />
          <div className="stage-grid">
            {stages.map((s) => (
              <article className="stage" key={s.id}>
                <Scene kind={s.scene} photoKey={`stage-${s.id}`} />
                <div className="stage-body">
                  <h3>{s.name}</h3>
                  <p className="grades">{s.grades}</p>
                  <p>{s.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SecHead
            title="Facilities built for daily use"
            lead="From a 25 m pool to a library that stays open at lunch."
            action={<Link href="/facilities" className="link">All facilities</Link>}
          />
          <div className="tile-grid">
            {homeFacilities.map((f) => (
              <article className="tile" key={f.id}>
                <Scene kind={f.id} />
                <div className="tile-body">
                  <h3>{f.name}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SecHead title="Recent achievements" lead="Proof that the approach works, on the field, in the lab and in the exam hall." />
          <div className="ach">
            {achievements.slice(0, 4).map((a) => (
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

      <section className="section">
        <div className="wrap principal">
          <div className="portrait"><Portrait /></div>
          <div>
            <blockquote className="pquote">
              A good school is not the one with the best results. It is the one where a child can be wrong in front of a teacher and still want to come back tomorrow.
            </blockquote>
            <p className="pname">Dr. Ananya Rao<span>Principal, EAK International School</span></p>
            <p className="principal-link"><Link href="/about#principal" className="link">Read the full message</Link></p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap split-lists">
          <div>
            <SecHead title="Latest news and notices" action={<Link href="/events" className="link">View all</Link>} />
            <div className="news-list">
              {news.slice(0, 4).map((n) => (
                <article className="news-row" key={n.id}>
                  <DateBlock iso={n.date} />
                  <div>
                    <span className={`tag t-${n.cat}`}>{n.cat}</span>
                    <h3>{n.title}</h3>
                    <p>{n.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SecHead title="Upcoming events" action={<Link href="/events#events" className="link">All events</Link>} />
            <div className="event-grid one">
              {events.slice(0, 3).map((e) => (
                <article className="event" key={e.id}>
                  <DateBlock iso={e.date} />
                  <div>
                    <span className="tag">{e.cat}</span>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                    <p className="where">{e.time}, {e.place}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SecHead title="What parents and students say" />
          <div className="quotes">
            {testimonials.map((t) => (
              <figure className="quote" key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <figcaption><b>{t.name}</b><span>{t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={admissionsNote}
        text="Start with a short enquiry today and we will send the prospectus, fee sheet and open-house invitation."
      />
    </>
  );
}
