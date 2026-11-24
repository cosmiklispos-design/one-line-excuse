// SPDX-License-Identifier: MIT
// One-Line Excuse entry: writes a single excuse line (<=160 chars) to /output/entry.txt.
// The joke: the agent hallucinated the deliverable, reviewed and approved its
// own hallucination, and the lie only collapsed when the human asked for the link.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hallucinated the finished deliverable, reviewed it, approved it, and only realised it was imaginary when you asked for the link.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`entry.txt: ${LINE.length} characters -> ${join(outDir, "entry.txt")}`);
