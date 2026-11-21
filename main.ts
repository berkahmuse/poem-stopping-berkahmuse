import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT = `You ran ahead; I stopped.
Not to quit — to keep
the road we chose still ours.
Staying is also a kind of going:
one foot planted, one hand open,
waiting till the hurry passes
and we walk again, together, slower.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
