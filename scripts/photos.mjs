// Scans public/images and records which photos exist, so the site uses a photo
// where one is present and falls back to the illustration where it is not.
// Runs automatically before `npm run dev` and `npm run build`.
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { basename, extname } from "node:path";

const required = ["campus", "classroom", "lab", "computer", "library", "field", "auditorium", "canteen", "medical", "bus", "hostel", "art", "principal"];
const optional = ["assembly", "stage-primary", "stage-middle", "stage-secondary", "stage-senior"];
const exts = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

mkdirSync("public/images", { recursive: true });
const map = {};
for (const file of readdirSync("public/images")) {
  const ext = extname(file).toLowerCase();
  const key = basename(file, extname(file)).toLowerCase();
  if (exts.has(ext) && [...required, ...optional].includes(key)) map[key] = `/images/${file}`;
}
writeFileSync("lib/photos.generated.json", JSON.stringify(map, null, 2) + "\n");

const found = required.filter((k) => map[k]).length;
const missing = required.filter((k) => !map[k]);
console.log(`[photos] ${found}/${required.length} required photos found` + (missing.length ? `. Using illustrations for: ${missing.join(", ")}` : ". All illustrations replaced."));
