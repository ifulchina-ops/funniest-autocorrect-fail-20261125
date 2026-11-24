// Funniest Autocorrect Fail — make.fun entry (program/v1).
// Writes one line, under 200 characters, that reads as a hilarious
// autocorrect fail, to /output/entry.txt. Deterministic, no network,
// no environment secrets, no model calls.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Why this line wins a blind vote: one clean slip, salad -> Satan, so the
// wrong word is both shocking and instantly clear; then the fallout
// escalates twice (uninvited from Thanksgiving, booked for an exorcism),
// and the whole joke lands on first read with no setup to parse.

const ENTRY =
  "Autocorrect changed 'I'll bring the salad' to 'I'll bring the Satan' " +
  "\u2014 now I'm uninvited from Thanksgiving and booked for an exorcism.";

const OUT = "/output/entry.txt";

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > 199) {
    throw new Error(`entry is ${ENTRY.length} chars, must be 1-199`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, ENTRY, "utf8");
  const back = readFileSync(OUT, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt does not hold the entry");
  }
  if ([...back].length < 1 || [...back].length > 199 || back.trim().length === 0) {
    throw new Error("read-back gate failed: entry.txt is not 1-199 non-blank chars");
  }
  console.log(`wrote ${ENTRY.length} chars to ${OUT}`);
}

main();
