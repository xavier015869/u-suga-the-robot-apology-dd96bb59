// The Robot Apology — u-suga-the-robot-apology-dd96bb59
// Writes a two-line robot confession to /output/entry.txt:
// line 1 owns one specific mistake, line 2 names the lesson
// and the changed behaviour that follows from that mistake.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm sorry — I watered the plastic fern on the top shelf twice this week while the real orchid by the window went thirsty.\n" +
  "I learned to check the tag before the can, so from now on I read every label before I pour a drop.\n";

// Self-check against the competition gate: UTF-8 text, 1–400 characters,
// not only white space. Fail loudly rather than write an invalid entry.
const body = ENTRY.replace(/\n$/, "");
if (body.length < 1 || body.length > 400 || body.trim().length === 0) {
  throw new Error(`entry fails the gate: ${body.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
