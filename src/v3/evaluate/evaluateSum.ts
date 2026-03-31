import { Integer } from "../types.js";
import { integer } from "../utils.js";

export function evaluateSum(summands: Integer[]): Integer {
  let value = 0;

  for (const summand of summands) {
    value += summand.value;
  }

  return integer(value);
}
