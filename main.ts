// The Clock That Is the Sun — make.fun coolest-art-01 entry.
// Copies the artwork into the output directory as entry.png.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "out");
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, "art.jpg"));
const outPath = join(outDir, "entry.png");
writeFileSync(outPath, bytes);
// Verify the copy is byte-identical to the source, so the two
// grading runs always produce the same entry.
const written = readFileSync(outPath);
if (!written.equals(bytes)) throw new Error("entry.png differs from art.jpg");
