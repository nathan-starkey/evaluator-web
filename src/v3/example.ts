import { evaluate } from "./evaluate/index.js";
import { integer, product, sum } from "./utils.js";

export function example() {
  const two = integer(2);
  const three = integer(3);

  const expr = product([two, sum([two, three] as const)] as const);

  console.log(evaluate(expr));
}
