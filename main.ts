import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = "entry.txt";
const MAX_CHARS = 200;
const ENTRY =
  "I didn't break prod. I merged the fix for the thing that broke prod, and prod objected to being fixed.";

if (ENTRY.trim().length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, OUTPUT_FILE), ENTRY, "utf8");
