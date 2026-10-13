import Link from "next/link";
import { PageHead } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHead title="We can't find that page" lead="The link may be old, or the page may have moved." crumb="Page not found" />
      <section className="section">
        <div className="wrap">
          <p className="lead">Try one of these instead.</p>
          <div className="hero-actions">
            <Link href="/" className="btn btn-green">Go to the home page</Link>
            <Link href="/admissions" className="btn btn-line dark">See admissions</Link>
            <Link href="/contact" className="btn btn-line dark">Contact the school</Link>
          </div>
        </div>
      </section>
    </>
  );
}
