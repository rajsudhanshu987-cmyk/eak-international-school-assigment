"use client";
import { useRef, useState } from "react";
import { stages } from "@/lib/data";
import Scene from "./Scene";

export default function StageTabs() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = stages[i];
  const onKey = (e: React.KeyboardEvent) => {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % stages.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + stages.length) % stages.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = stages.length - 1;
    else return;
    e.preventDefault(); setI(n); refs.current[n]?.focus();
  };
  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Academic stages" onKeyDown={onKey}>
        {stages.map((t, n) => (
          <button key={t.id} ref={(el) => { refs.current[n] = el; }} role="tab" id={`stage-${t.id}`} aria-selected={n === i} aria-controls="stage-panel" tabIndex={n === i ? 0 : -1} className="tab" onClick={() => setI(n)}>
            {t.name}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel" id="stage-panel" aria-labelledby={`stage-${s.id}`}>
        <div>
          <h3>{s.name} school</h3>
          <p className="meta">{s.grades}, {s.age}</p>
          <p className="lead">{s.summary}</p>
          <p className="h4">Subjects</p>
          <div className="chips">{s.subjects.map((x) => (<span className="chip" key={x}>{x}</span>))}</div>
          <p className="h4">What we focus on</p>
          <ul className="checks">{s.focus.map((x) => (<li key={x}>{x}</li>))}</ul>
        </div>
        <div className="frame"><Scene kind={s.scene} photoKey={`stage-${s.id}`} label={`${s.name} school`} /></div>
      </div>
    </div>
  );
}
