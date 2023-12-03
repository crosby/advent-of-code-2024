import { readInput } from "./utils";

(async function part1() {
  let sum = 0;
  for await (const line of readInput('/day-1-input.txt')) {
    const {0:p1, length:l, [l-1]:p2} = line.match(/\d/g) as string[];
    sum += Number(p1 + p2);
  }
  console.log(`Part 1: ${sum}`);
})();

(async function part2() {
  let sum = 0;
  for await (let line of readInput('/day-1-input.txt')) {
    const {0:p1, length:l, [l-1]:p2} = Array.from(line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g), (m: any) => m[1]) as string[];
    const r = (p: string) => String({ one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9 }[p] || p);
    sum += Number(r(p1) + r(p2));
  }
  console.log(`Part 2: ${sum}`);
})();