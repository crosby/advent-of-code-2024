import { readInput } from "./utils";

type Coord = [number, number];
type Part = { n: number, coords: Coord[]};

(async function part1() {
  let sum = 0;
  let num = 0;
  let previous: Part[] = [];
  let current: Part[] = [];
  let symbols: Coord[] = []

  for await (const line of readInput('/day-3-input.txt')) {
    current = Array.from(line.matchAll(/\d+/g), (m) => {
      const part = { n: Number(m[0]), coords: coords(Number(m.index), num, m[0].length) };
      symbols.forEach((symbol) => { if (match(symbol, part)) sum += part.n })
      return part;
    });
    symbols = Array.from(line.matchAll(/(?![\d|\.])./g), (m) => {
      const symbol: Coord = [Number(m.index), num];
      [...previous, ...current].forEach((part) => { if (match(symbol, part)) sum += part.n })
      return symbol;
    });
    num++;
    previous = current;
    current = [];
  }

  console.log(`Part 1: ${sum}`);
})();

function coords(x: number, y:number, n: number) {
  let l2 = [...Array(n).keys()];
  return [
    [x-1, y-1], ...l2.map((l) => [x+l, y-1]), [x+n, y-1],
    [x-1, y], [x+n, y],
    [x-1, y+1], ...l2.map((l) => [x+l, y+1]), [x+n, y+1],
  ] as Coord[]
}

function match(symbol: Coord, part: Part) {
  return part.coords.some((coord) => JSON.stringify(coord) == JSON.stringify(symbol));
}

(async function part2() {
  let sum = 0;
  let num = 0;
  let previous: Part[] = [];
  let previous2: Part[] = [];
  let current: Part[] = [];
  let symbols: Coord[] = [];
  let symbols2: Coord[] = [];

  for await (const line of readInput('/day-3-input.txt')) {
    current = Array.from(line.matchAll(/\d+/g), (m) => ({ n: Number(m[0]), coords: coords(Number(m.index), num, m[0].length) }));
    symbols = Array.from(line.matchAll(/\*/g), (m) => ([Number(m.index), num]));

    symbols2.forEach((symbol) => {
      const parts = [...previous, ...previous2, ...current].filter((part) => match(symbol, part));
      if (parts.length === 2) sum += parts[0].n * parts[1].n
    })

    num++;
    previous2 = previous;
    previous = current;
    current = [];
    symbols2 = symbols;
  }

  console.log(`Part 2: ${sum}`);
})();