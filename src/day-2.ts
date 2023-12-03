import { readInput } from "./utils";

(async function part1() {
  let sum = 0;
  for await (const line of readInput('/day-2-input.txt'))
    if (!line.match(/((1[3-9]|[2-9][0-9]) red)|((1[4-9]|[2-9][0-9]) green)|((1[5-9]|[2-9][0-9]) blue)/g))
      sum += Number(line.match(/Game (\d+)\:/)?.at(1))
  console.log(`Part 1: ${sum}`);
})();

(async function part2() {
  let sum = 0;
  for await (const line of readInput('/day-2-input.txt')) {
    const red = Math.max(...Array.from(line.matchAll(/(\d+) red/g), (m) => Number(m[1])));
    const green = Math.max(...Array.from(line.matchAll(/(\d+) green/g), (m) => Number(m[1])));
    const blue = Math.max(...Array.from(line.matchAll(/(\d+) blue/g), (m) => Number(m[1])));
    sum += red * green * blue;
  }
  console.log(`Part 1: ${sum}`);
})();