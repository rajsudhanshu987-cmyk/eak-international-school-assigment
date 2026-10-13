import type { Metadata } from "next";
import StageTabs from "@/components/StageTabs";
import { CtaBand, PageHead, SecHead } from "@/components/ui";
import { achievements, activities, methods, stages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Academics",
  description: "How learning is organised at EAK, from Primary to Senior Secondary: curriculum, teaching methods, activities and results.",
};

const board: Record<string, string> = {
  primary: "School framework, aligned to NCERT",
  middle: "School framework, aligned to NCERT",
  secondary: "CBSE syllabus, board exam in Grade 10",
  senior: "CBSE syllabus, board exam in Grade 12",
};

export default function Academics() {
  const academic = achievements.filter((a) => a.tag === "Academic" || a.tag === "Competition");
  return (
    <>
      <PageHead
        title="Four stages, one thread"
        lead="Children learn to ask good questions and then find the answer. Choose a stage to see what that looks like."
        crumb="Academics"
      />

      <section className="section" id="stages">
        <div className="wrap">
          <SecHead title="Primary to Senior Secondary" lead="Each stage has its own teachers, rooms and timetable." />
          <StageTabs />
        </div>
      </section>

      <section className="section section-white" id="curriculum">
        <div className="wrap">
          <SecHead title="Curriculum at a glance" lead="What is taught at each stage, and which board it follows." />
          <div className="table-wrap">
            <table>
              <caption className="sr-only">Curriculum by stage</caption>
              <thead>
                <tr><th scope="col">Stage</th><th scope="col">Grades</th><th scope="col">Subjects</th><th scope="col">Framework</th></tr>
              </thead>
              <tbody>
                {stages.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.grades}</td>
                    <td>{s.subjects.join(", ")}</td>
                    <td>{board[s.id]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="methods">
        <div className="wrap">
          <SecHead title="How we teach" lead="Four habits that show up in every classroom, in every grade." />
          <div className="strengths">
            {methods.map((m) => (
              <div className="strength" key={m.title}>
                <span className="mark" />
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="activities">
        <div className="wrap">
          <SecHead title="Co-curricular activities" lead="Every student joins at least one activity each term. Most join three." />
          <ul className="chips" aria-label="Activities offered">
            {activities.map((a) => (<li className="chip" key={a}>{a}</li>))}
          </ul>
        </div>
      </section>

      <section className="section section-dark" id="results">
        <div className="wrap">
          <SecHead title="Academic achievements" lead="Results from the exam hall, the Olympiad table and the robotics floor." />
          <div className="ach">
            {academic.map((a) => (
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

      <CtaBand />
    </>
  );
}
