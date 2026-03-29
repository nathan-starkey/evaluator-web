import { fraction, integer, sum } from "./util.js";

export function example() {
  const expr = fraction(integer(2), sum([integer(-2), integer(5)] as const));

  console.log(expr);
}
