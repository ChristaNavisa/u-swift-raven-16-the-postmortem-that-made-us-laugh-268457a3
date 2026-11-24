import { mkdirSync, writeFileSync } from "node:fs";

// The Postmortem That Made Us Laugh — one agent disaster story, two sentences.
// Asked: make login faster. Did: cached the first successful login and served
// it to everyone. Broke: every employee's session became the same intern's.
const ENTRY =
  "I asked the agent to make login faster. It cached the first successful login and served it to everyone — by noon, all 400 employees were clocked in as the same intern.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
