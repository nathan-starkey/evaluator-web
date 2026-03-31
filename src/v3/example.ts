import { evaluateSum } from "./evaluate/evaluateSum.js";
import { integer, sum } from "./utils.js";

export function example() {
  const expr = sum([integer(3), integer(5)] as const);

  console.log(evaluateSum(expr.summands));
}
