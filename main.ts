import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office until Monday — my inbox is being watched by a houseplant, and it has already killed two follow-ups.";
const MAX_CHARS = 160;

const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > MAX_CHARS) {
  throw new Error(`line is ${trimmed.length} chars, must be 1..${MAX_CHARS}`);
}
if (trimmed.includes("\n")) throw new Error("line must be a single line");
if (!/office|inbox/i.test(trimmed)) {
  throw new Error("out-of-office reply must mention the office or the inbox");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");
