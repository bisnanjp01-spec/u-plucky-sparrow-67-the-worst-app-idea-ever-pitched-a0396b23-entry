// SnoreSync — the worst app idea ever pitched.
// Writes one sentence (197 chars) pitching a useless app to /output/entry.txt.
// Revised: comment only; the entry text and output are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "SnoreSync live-streams your snoring to strangers who rate each snore on a leaderboard, because your sleep deserved an audience, a subscription, and nightly judgment from people you will never meet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
