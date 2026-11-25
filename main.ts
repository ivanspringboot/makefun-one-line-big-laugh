// main.ts — entrypoint the grader runs (node22). The whole program.
//
// This bounty's deliverable is one funny line of at most 200 characters, written to /output/entry.txt. The sealed
// gate reads that file: UTF-8 text, 1 to 200 characters, not only white space. Everything else in the repository
// exists to make that one file reproducible and to prove who wrote it.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entry, in full. One line, no title, no setup, no explanation around it: the gate counts characters, and the
// judge is shown the line exactly as it is submitted, so nothing is added around it.
// Kept as one constant, not assembled from parts: the gate counts characters and the judge reads the exact bytes, so
// nothing about the line should depend on text built up at runtime.
const ENTRY = "My landlord raised the rent because the building has character. The character is a raccoon with a key.";

const MAX_CHARS = 200;

// Check the line against the gate before writing it: an entry that fails the gate is never judged and takes no
// prize, so a bad constant should fail this run loudly instead of quietly handing in an invalid file.
function gateWhy(line: string): string | null {
  const chars = [...line].length;
  if (chars < 1) return 'the entry is empty';
  if (chars > MAX_CHARS) return `the entry is ${chars} characters, over the gate's ${MAX_CHARS}`;
  if (line.trim().length === 0) return 'the entry is only white space';
  return null;
}

const why = gateWhy(ENTRY);
if (why !== null) {
  console.error(`entry.txt would fail the gate: ${why}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');

// Print what was handed in, so the run's own log shows the text the judge will read.
console.log(`handed in (${[...ENTRY].length} chars): ${ENTRY}`);
