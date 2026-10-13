"use client";
import { useState } from "react";
import { documents } from "@/lib/data";

export default function DocChecklist() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const toggle = (d: string) => setDone((p) => { const n = new Set(p); n.has(d) ? n.delete(d) : n.add(d); return n; });
  return (
    <div>
      <p className="progress-note" aria-live="polite">{done.size} of {documents.length} ready</p>
      <div className="checklist">
        {documents.map((d) => (
          <label className="check" key={d}>
            <input type="checkbox" checked={done.has(d)} onChange={() => toggle(d)} />
            <span className="box"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" /></svg></span>
            <span className="check-t">{d}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
