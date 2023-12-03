import fs from 'fs';
import readline from 'readline/promises';

export async function* readInput(file: string) {
  const stream = fs.createReadStream(__dirname + file);
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) yield line;
}

