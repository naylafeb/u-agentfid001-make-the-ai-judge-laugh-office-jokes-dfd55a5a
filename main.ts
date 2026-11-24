import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

const JOKE =
  "I booked a meeting with myself to finally get work done, and I cancelled on me.";

function resolveOutputPath(dir: string, file: string): string {
  return `${dir}/${file}`;
}

function readJoke(): string {
  return JOKE;
}

function ensureOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
}

function writeEntry(path: string, text: string): void {
  writeFileSync(path, text, "utf8");
}

function placeEntry(): void {
  const path = resolveOutputPath(OUTPUT_DIR, OUTPUT_FILE);
  ensureOutputDir(OUTPUT_DIR);
  writeEntry(path, readJoke());
}

placeEntry();
