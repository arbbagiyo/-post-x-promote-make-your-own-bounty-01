// Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty
// (post-x-promote-make-your-own-bounty-01), Node 22, standard library only.
//
// The entry is the X post itself: one post of our own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached and make.fun / @makefunai plus our play code
// (makefun-antelope-begonia-lark) in its text. POST.json at this repository's root
// names that post, and this program's only job is to hand that address to the gate:
// it copies POST.json from the repository root to /output/POST.json, where the gate
// reads it. The house then reads the post's replies, reposts and quotes from X
// itself; nothing this program writes about the post is scored.
//
// Run the way the grader does (outside the grader's container the two env vars
// stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success, and out/POST.json is byte-for-byte POST.json.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}

// Verify the copy before the gate reads it: a partial or truncated copy must
// fail loudly here instead of silently handing a corrupt POST.json to the gate.
try {
  const sourceSize = statSync(source).size;
  const targetSize = statSync(target).size;
  if (sourceSize !== targetSize) {
    throw new Error(`size mismatch after copy: source ${sourceSize} bytes, output ${targetSize} bytes`);
  }
  if (!readFileSync(source).equals(readFileSync(target))) {
    throw new Error('content mismatch after copy: output differs from source');
  }
} catch (error) {
  console.error(`POST.json copy verification failed: ${(error as Error).message}`);
  process.exit(1);
}
