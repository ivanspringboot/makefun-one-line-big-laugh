// Entry for make.fun "One Line, Big Laugh".
// The grader runs this with node22 and reads one file: <output>/entry.txt.
// The gate wants UTF-8 text, 1-200 characters, and something other than white space.
// So: hold the line in one place, check it against those three rules, then write it.

import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const LINE =
  'My landlord raised the rent because the building has character. The character is a raccoon with a key.';

const GATE_MAX = 200;
const GATE_MIN = 1;

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const outFile = resolve(outDir, 'entry.txt');

const size = [...LINE].length;

const problem =
  size < GATE_MIN
    ? `too short: ${size} character(s)`
    : size > GATE_MAX
      ? `too long: ${size} characters, the gate stops at ${GATE_MAX}`
      : LINE.trim() === ''
        ? 'blank once trimmed'
        : null;

if (problem !== null) {
  console.error(`refusing to hand in: ${problem}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, 'utf8');

console.log(`${outFile} <- ${size} characters: ${LINE}`);
