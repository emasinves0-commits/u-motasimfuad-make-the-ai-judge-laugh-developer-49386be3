import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

const LINE =
  "I didn't break prod. I merged the fix for the thing that broke prod, and prod objected to being fixed.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line length ${LINE.length} outside 1-200`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE);
