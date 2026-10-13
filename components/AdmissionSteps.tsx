"use client";
import { useRef, useState } from "react";
import { admissionSteps } from "@/lib/data";

export default function AdmissionSteps() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = admissionSteps[i];
  const last = admissionSteps.length - 1;

  const onKey = (e: React.KeyboardEvent) => {
    let n = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = i === 0 ? last : i - 1;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = last;
    else return;
    e.preventDefault();
    setI(n);
    refs.current[n]?.focus();
  };

  return (
    <div>
      <div className="steps" role="tablist" aria-label="Admission process" onKeyDown={onKey}>
        {admissionSteps.map((st, n) => (
          <button
            key={st.title}
            ref={(el) => { refs.current[n] = el; }}
            role="tab"
            aria-selected={n === i}
            aria-controls="step-detail"
            id={`step-${n}`}
            tabIndex={n === i ? 0 : -1}
            className="step"
            onClick={() => setI(n)}
          >
            <span className="step-n">{n + 1}</span>
            <span className="step-t"><b>{st.title}</b><span>{st.time}</span></span>
          </button>
        ))}
      </div>
      <div className="step-detail" role="tabpanel" id="step-detail" aria-labelledby={`step-${i}`}>
        <h3>Step {i + 1}: {s.title}</h3>
        <p>{s.text}</p>
      </div>
    </div>
  );
}
