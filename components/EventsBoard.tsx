"use client";
import { useMemo, useState } from "react";
import { events, news } from "@/lib/data";
import { DateBlock, parts } from "./ui";

const PAGE = 4;
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const newsCats = ["All", ...Array.from(new Set(news.map((n) => n.cat)))];
const eventCats = ["All", ...Array.from(new Set(events.map((e) => e.cat)))];

const matcher = (term: string) => (s: string) => !term || s.toLowerCase().includes(term);
const monthKey = (iso: string) => iso.slice(0, 7);
const eventMonths = Array.from(new Set(events.map((e) => monthKey(e.date))));

export default function EventsBoard() {
  const [q, setQ] = useState("");
  const [nCat, setNCat] = useState("All");
  const [eCat, setECat] = useState("All");
  const [month, setMonth] = useState("all");
  const [nShown, setNShown] = useState(PAGE);
  const [eShown, setEShown] = useState(PAGE);

  const term = q.trim().toLowerCase();
  const nList = useMemo(() => {
    const hit = matcher(term);
    return news.filter((n) => (nCat === "All" || n.cat === nCat) && (hit(n.title) || hit(n.text)));
  }, [nCat, term]);
  const eList = useMemo(() => {
    const hit = matcher(term);
    return events.filter((e) => (eCat === "All" || e.cat === eCat) && (month === "all" || monthKey(e.date) === month) && (hit(e.title) || hit(e.text)));
  }, [eCat, month, term]);

  const reset = () => { setQ(""); setNCat("All"); setECat("All"); setMonth("all"); setNShown(PAGE); setEShown(PAGE); };

  return (
    <div>
      <div className="toolbar">
        <div className="field">
          <label htmlFor="q">Search notices and events</label>
          <div className="search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            <input id="q" type="search" value={q} placeholder="Try “exam”, “bus” or “concert”" onChange={(e) => { setQ(e.target.value); setNShown(PAGE); setEShown(PAGE); }} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="month">Event month</label>
          <select id="month" value={month} onChange={(e) => { setMonth(e.target.value); setEShown(PAGE); }}>
            <option value="all">All months</option>
            {eventMonths.map((m) => { const [y, mm] = m.split("-").map(Number); return <option key={m} value={m}>{MONTH_NAMES[mm - 1]} {y}</option>; })}
          </select>
        </div>
        <div className="field">
          <span className="hint">&nbsp;</span>
          <button className="btn btn-line dark btn-sm" onClick={reset}>Clear all filters</button>
        </div>
      </div>

      <div className="split-lists">
        <section aria-labelledby="notices-h" id="notices">
          <h2 id="notices-h" className="board-h">Notices and circulars</h2>
          <div className="pill-row" role="group" aria-label="Filter notices by type">
            {newsCats.map((c) => (<button key={c} className="pill" aria-pressed={nCat === c} onClick={() => { setNCat(c); setNShown(PAGE); }}>{c}</button>))}
          </div>
          <p className="results" aria-live="polite">{nList.length} {nList.length === 1 ? "notice" : "notices"}</p>
          {nList.length === 0 ? (
            <div className="empty"><h3>No notices match</h3><p className="small">Try a different word, or clear the filters.</p><button className="btn btn-green btn-sm" onClick={reset}>Clear filters</button></div>
          ) : (
            <div className="news-list">
              {nList.slice(0, nShown).map((n) => (
                <article className="news-row" key={n.id}>
                  <DateBlock iso={n.date} />
                  <div><span className={`tag t-${n.cat}`}>{n.cat}</span><h3>{n.title}</h3><p>{n.text}</p></div>
                </article>
              ))}
            </div>
          )}
          {nShown < nList.length && <div className="more"><button className="btn btn-green btn-sm" onClick={() => setNShown((s) => s + PAGE)}>Load more notices</button></div>}
        </section>

        <section aria-labelledby="events-h" id="events">
          <h2 id="events-h" className="board-h">Upcoming events</h2>
          <div className="pill-row" role="group" aria-label="Filter events by type">
            {eventCats.map((c) => (<button key={c} className="pill" aria-pressed={eCat === c} onClick={() => { setECat(c); setEShown(PAGE); }}>{c}</button>))}
          </div>
          <p className="results" aria-live="polite">{eList.length} {eList.length === 1 ? "event" : "events"}</p>
          {eList.length === 0 ? (
            <div className="empty"><h3>No events match</h3><p className="small">Pick another month or event type.</p><button className="btn btn-green btn-sm" onClick={reset}>Clear filters</button></div>
          ) : (
            <div className="event-grid one">
              {eList.slice(0, eShown).map((e) => (
                <article className="event" key={e.id}>
                  <DateBlock iso={e.date} />
                  <div>
                    <span className="tag">{e.cat}</span>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                    <p className="where">{parts(e.date).d} {parts(e.date).mon} at {e.time}, {e.place}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          {eShown < eList.length && <div className="more"><button className="btn btn-green btn-sm" onClick={() => setEShown((s) => s + PAGE)}>Load more events</button></div>}
        </section>
      </div>
    </div>
  );
}
