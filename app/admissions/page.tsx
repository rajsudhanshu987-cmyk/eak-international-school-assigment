import type { Metadata } from "next";
import AdmissionSteps from "@/components/AdmissionSteps";
import DocChecklist from "@/components/DocChecklist";
import EnquiryForm from "@/components/EnquiryForm";
import { Faqs, PageHead, SecHead, longDate } from "@/components/ui";
import { admissionsNote, dates, eligibility, extraFees, faqs, fees, school } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admissions",
  description: "How to apply to EAK International School: the five steps, eligibility, documents, dates, fees and answers to common questions.",
};

export default function Admissions() {
  return (
    <>
      <PageHead
        title="Admissions, step by step"
        lead={`${admissionsNote}. Here is everything you need, from the first enquiry to the first day.`}
        crumb="Admissions"
      />

      <section className="section" id="process">
        <div className="wrap">
          <SecHead title="How admission works" lead="Tap a step to see what happens and how long it takes." />
          <AdmissionSteps />
          <p className="after-steps"><Link href="#apply" className="btn btn-bus">Apply now</Link></p>
        </div>
      </section>

      <section className="section section-white" id="eligibility">
        <div className="wrap two-col">
          <div>
            <h2>Eligibility</h2>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">Eligibility by grade</caption>
                <thead><tr><th scope="col">Grade</th><th scope="col">Age or entry</th><th scope="col">How we assess</th></tr></thead>
                <tbody>
                  {eligibility.map((e) => (
                    <tr key={e.grade}><td>{e.grade}</td><td>{e.age}</td><td>{e.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div id="documents">
            <h2>Documents you will need</h2>
            <DocChecklist />
          </div>
        </div>
      </section>

      <section className="section" id="dates">
        <div className="wrap">
          <SecHead title="Important dates for 2027–28" />
          <div className="dates">
            {dates.map((d) => (
              <div className="date-row" key={d.label}>
                <time dateTime={d.date}>{longDate(d.date)}</time>
                <div><b>{d.label}</b><span>{d.detail}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="fees">
        <div className="wrap">
          <SecHead title="Fees for 2027–28" lead="Tuition is paid termly. The full fee sheet comes with the prospectus." />
          <div className="two-col">
            <div className="table-wrap">
              <table>
                <caption className="sr-only">Tuition by stage</caption>
                <thead><tr><th scope="col">Stage</th><th scope="col">Grades</th><th scope="col">Tuition a year</th></tr></thead>
                <tbody>
                  {fees.map((f) => (<tr key={f.stage}><td>{f.stage}</td><td>{f.grades}</td><td>{f.tuition}</td></tr>))}
                </tbody>
              </table>
            </div>
            <div className="table-wrap">
              <table>
                <caption className="sr-only">Other charges</caption>
                <thead><tr><th scope="col">Charge</th><th scope="col">Amount</th><th scope="col">Note</th></tr></thead>
                <tbody>
                  {extraFees.map((f) => (<tr key={f.item}><td>{f.item}</td><td>{f.amount}</td><td>{f.note}</td></tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="info">
        <div className="wrap">
          <SecHead title="Admission information" />
          <div className="strengths">
            <div className="strength"><span className="mark" /><h3>Seats</h3><p>Four sections of 28 in each grade. Seats in Grades 9 to 12 depend on transfers.</p></div>
            <div className="strength"><span className="mark" /><h3>Scholarships</h3><p>Merit scholarships from Grade 6 and need-based support at every grade. Apply with your form.</p></div>
            <div className="strength"><span className="mark" /><h3>Talk to a person</h3><p>Write to <a href={`mailto:${school.admissionsEmail}`} className="link">{school.admissionsEmail}</a> or call {school.phone[0]}.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="faq">
        <div className="wrap">
          <SecHead title="Frequently asked questions" />
          <Faqs items={faqs} />
        </div>
      </section>

      <section className="section" id="apply">
        <div className="wrap split">
          <div>
            <h2>Start with an enquiry</h2>
            <p className="lead">Tell us who is applying and how to reach you. We will send the prospectus, the fee sheet and an invitation to the next open house.</p>
            <ul className="checks">
              <li>It takes about two minutes.</li>
              <li>No documents are needed at this stage.</li>
              <li>We reply within one working day.</li>
            </ul>
          </div>
          <div className="form-card"><EnquiryForm /></div>
        </div>
      </section>
    </>
  );
}
