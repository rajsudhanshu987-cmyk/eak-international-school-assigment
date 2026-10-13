import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "EAK International School | Grades 1 to 12, Gurugram", template: "%s | EAK International School" },
  description: "EAK International School is a day and boarding school for Grades 1 to 12 with small classes, hands-on learning and safe, tracked transport.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "EAK International School",
    title: "EAK International School | Grades 1 to 12, Gurugram",
    description: "A day and boarding school for Grades 1 to 12 with small classes, hands-on learning and safe, tracked transport.",
  },
};
export const viewport: Viewport = { themeColor: "#0e3b2f", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
