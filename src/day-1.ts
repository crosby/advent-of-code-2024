import { readInput } from "./utils";

(async function main() {
  let sum = 0;
  for await (const line of readInput('/day-1-input.txt')) sum += Number(line.charAt(line.search(/[0-9]/)) + line.charAt(line.length - 1 - line.split('').reverse().join('').search(/[0-9]/)));
  console.log(sum);
})();