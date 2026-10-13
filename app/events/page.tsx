import type { Metadata } from "next";
import EventsBoard from "@/components/EventsBoard";
import { CtaBand, PageHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events and notices",
  description: "School circulars, exam and holiday notices, announcements and upcoming events at EAK International School.",
};

export default function Events() {
  return (
    <>
      <PageHead
        title="What is happening at EAK"
        lead="Circulars, exam and holiday notices, announcements and upcoming events. Search or filter to find what you need."
        crumb="Events and notices"
      />
      <section className="section">
        <div className="wrap">
          <EventsBoard />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
