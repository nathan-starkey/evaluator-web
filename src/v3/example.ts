import { fraction, integer } from "./utils.js";

export function example() {
  const expr = fraction(integer(2), integer(5));

  console.log(expr);
}
