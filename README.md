# EAK International School: frontend redesign

Second-round assignment for EAK Pustak Pvt. Ltd. A fictional K–12 school website, frontend only, with hard-coded content.

**Stack:** Next.js 15 (App Router), React 19, TypeScript, plain CSS (no UI library). Fonts: Bricolage Grotesque (headings) and Figtree (body) via `@fontsource`, so they are self-hosted.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Deploy: import the repo into Vercel (zero config).

## Pages (all 7 from the brief)
| Route | What it does |
|---|---|
| `/` | Hero with a clickable "A day at EAK" timetable, strengths, about, stages, facilities, achievements, principal, news and events, testimonials, admissions CTA |
| `/about` | Timeline, vision and mission, values, principal's note, stats, campus overview |
| `/academics` | Tabs for the four stages, curriculum table, teaching methods, activities, achievements |
| `/admissions` | Interactive 5-step process, eligibility table, document checklist, dates, fee tables, admission information, FAQ accordion, validated enquiry form |
| `/facilities` | Category filter over 10 facilities, around-campus gallery |
| `/events` | Search, type filters, month filter, "Load more", empty states |
| `/contact` | Address, phone, email, office hours, social links, validated contact form, map placeholder |
| `/privacy` | Short sample privacy policy, linked from the footer |

## Design decisions
- **Who it is for:** a parent comparing schools on a phone. Admissions, dates, fees and contact are one tap from every page, and "Apply now" is always in the header, including a compact button beside the menu on phones.
- **Look:** bottle green and school-bus yellow instead of the usual navy and gold. The faint ruled lines and red margin line in the headers nod to an exercise notebook. The bus colour is the single accent, used for calls to action.
- **Memorable moment:** the hero is a school timetable you can step through (8:10 assembly to 3:30 dismissal). It answers "what is a day like?" within seconds.
- **Numbers only for sequences:** numbered markers appear only on the admission steps and the history timeline, where order is the content.
- **Imagery:** real photographs go in `public/images/` (see `PHOTOS.md`). Where a photo is missing, a flat SVG illustration in the school palette is shown instead, so the site never has a broken image. `scripts/photos.mjs` detects the files before `dev` and `build`, and `components/Scene.tsx` chooses photo or illustration.

## Responsiveness and accessibility
- Mobile-first CSS. Wide tables scroll inside their own container so the page itself never scrolls sideways. Check at 360, 390 and 1366 px before shipping.
- Slide-down mobile menu with `aria-expanded`, Escape to close, scroll lock.
- Skip link, visible focus rings, semantic landmarks, `aria-live` result counts, tablists with arrow-key support, labelled form fields with inline errors and focus on the first invalid field.
- `prefers-reduced-motion` respected.

## Content
Unknown URLs show a branded 404 page (`app/not-found.tsx`).

All names, numbers, fees and dates are dummy data in `lib/data.ts`. Forms do not send anything.

## Photo credits
List each photo here, for example: `classroom.jpg` by Name on Unsplash.
