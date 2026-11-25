import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
const joke = 'My favorite part of agile standup is watching everyone passionately rehearse what they did yesterday while someone else is talking.';
writeFileSync(join(out, 'entry.txt'), joke, 'utf8');

