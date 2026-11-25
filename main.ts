// main.ts — entrypoint the grader runs (node22). The whole program.
//
// This bounty's deliverable is one funny line of at most 200 characters, written to /output/entry.txt. The sealed
// gate reads that file: UTF-8 text, 1 to 200 characters, not only white space.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = 'My landlord raised the rent because the building has character. The character is a raccoon with a key.';

const MAX_CHARS = 200;

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

console.log(`handed in (${[...ENTRY].length} chars): ${ENTRY}`);
