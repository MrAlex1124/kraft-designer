// Public-release guard: checks only files curated for this standalone application.
// Does not inspect or print secrets, and does not change legacy CAD format identifiers.
import { readFileSync } from "node:fs";

const files = [
  "README.md",
  "README.hu.md",
  "AGENTS.md",
  "apps/web/public/manifest.webmanifest",
  "apps/web/src/app/layout.tsx",
  "docker/compose.yml",
];
const forbidden = [
  { pattern: /3dkraft(?:\.hu|\/|[-_]internal)/i, reason: "business-specific host or identifier" },
  { pattern: /kraftprint/i, reason: "coupled service reference" },
  { pattern: /(?:password|api[_-]?key|secret|token)\s*[:=]\s*["'][^"']{8,}["']/i, reason: "possible embedded credential" },
];
let issues = 0;
for (const file of files) {
  const source = readFileSync(file, "utf8");
  for (const { pattern, reason } of forbidden) {
    if (pattern.test(source)) {
      console.error(`Public boundary check failed in ${file}: ${reason}`);
      issues += 1;
    }
  }
}
if (issues) process.exitCode = 1;
else console.log("Public boundary check passed.");
