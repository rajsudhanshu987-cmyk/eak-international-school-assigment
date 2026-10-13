"use client";
import { useRef, useState } from "react";
import { day } from "@/lib/data";
import Scene from "./Scene";

export default function DaySchedule() {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const cur = day[i];

  const onKey = (e: React.KeyboardEvent) => {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % day.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + day.length) % day.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = day.length - 1;
    else return;
    e.preventDefault();
    setI(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="day">
      <div className="day-top">
        <h2>A day at EAK</h2>
        <span>Tap a period</span>
      </div>
      <div className="day-tabs" role="tablist" aria-label="School day timetable" onKeyDown={onKey}>
        {day.map((d, n) => (
          <button
            key={d.time}
            ref={(el) => { refs.current[n] = el; }}
            role="tab"
            id={`day-tab-${n}`}
            aria-selected={n === i}
            aria-controls="day-panel"
            tabIndex={n === i ? 0 : -1}
            className="day-tab"
            onClick={() => setI(n)}
          >
            <b>{d.time}</b>
            <span>{d.ampm}</span>
          </button>
        ))}
      </div>
      <div className="day-panel" role="tabpanel" id="day-panel" aria-labelledby={`day-tab-${i}`}>
        <Scene kind={cur.scene} photoKey={cur.photo} priority />
        <div className="day-body">
          <h3>{cur.name}</h3>
          <p>{cur.text}</p>
        </div>
      </div>
      <div className="day-progress" aria-hidden="true"><i style={{ width: `${((i + 1) / day.length) * 100}%` }} /></div>
    </div>
  );
}
