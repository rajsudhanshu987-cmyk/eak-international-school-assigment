import type { Metadata } from "next";
import FacilityGrid from "@/components/FacilityGrid";
import Scene from "@/components/Scene";
import { CtaBand, PageHead, SecHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Smart classrooms, laboratories, a library, sports complex, auditorium, cafeteria, medical room, transport and boarding at EAK.",
};

const around = [
  { kind: "campus" as const, name: "The main quad", text: "Every building opens onto it. Assembly, lunch games and the Diwali mela all happen here." },
  { kind: "art" as const, name: "The art studio", text: "North-facing light, long tables and a kiln, open to every grade through the week." },
  { kind: "field" as const, name: "The playing field", text: "Floodlit evenings in winter, with a running track around the football pitch." },
];

export default function Facilities() {
  return (
    <>
      <PageHead
        title="Spaces built for daily use"
        lead="Ten facilities across twelve acres. Filter by what matters to your family, or browse them all."
        crumb="Facilities"
      />

      <section className="section" id="all">
        <div className="wrap">
          <h2 className="sr-only">All facilities</h2>
          <FacilityGrid />
        </div>
      </section>

      <section className="section section-white" id="around-campus">
        <div className="wrap">
          <SecHead title="Around campus" lead="Three places students mention first when they describe the school." />
          <div className="tile-grid">
            {around.map((a) => (
              <article className="tile compact" key={a.name}>
                <Scene kind={a.kind} label={`${a.name} illustration`} />
                <div className="tile-body">
                  <h3>{a.name}</h3>
                  <p>{a.text}</p>
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
