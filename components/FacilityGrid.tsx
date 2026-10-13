"use client";
import { useState } from "react";
import { facilities } from "@/lib/data";
import Scene from "./Scene";

const cats = ["All", ...Array.from(new Set(facilities.map((f) => f.cat)))];

export default function FacilityGrid() {
  const [cat, setCat] = useState("All");
  const list = facilities.filter((f) => cat === "All" || f.cat === cat);
  return (
    <div>
      <div className="pill-row roomy" role="group" aria-label="Filter facilities">
        {cats.map((c) => (
          <button key={c} className="pill" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <p className="results" aria-live="polite">{list.length} {list.length === 1 ? "facility" : "facilities"}</p>
      <div className="tile-grid">
        {list.map((f) => (
          <article className="tile" key={f.id}>
            <Scene kind={f.id} label={`${f.name} illustration`} />
            <div className="tile-body">
              <span className="tag">{f.cat}</span>
              <h3>{f.name}</h3>
              <p>{f.text}</p>
              <p className="detail">{f.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
