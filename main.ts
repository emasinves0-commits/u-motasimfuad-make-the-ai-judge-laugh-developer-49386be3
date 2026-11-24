import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;
const MAX_LENGTH = 200;

const ENTRY_TEXT =
  "Resolved merge conflict with 'theirs' and overwrote the production JWT signing key.";

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_LENGTH) {
    throw new Error(`entry length ${text.length} outside 1-${MAX_LENGTH}`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY_TEXT);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_TEXT);
}

main();
