import { MathExpr } from "../types.js";
import { integer, nothing } from "../utils.js";
import { evaluate } from "./index.js";

export function evaluateSum(summands: MathExpr[]): MathExpr {
  if (summands.length == 0) {
    return nothing();
  }

  let integerValue = 0;

  for (const summand of summands) {
    const expr = evaluate(summand);

    switch (expr.type) {
      case "nothing":
        break;
      case "undefined":
        return expr;
      case "integer":
        integerValue += expr.value;
        break;
      default:
        throw new Error("not implemented");
    }
  }

  return integer(integerValue);
}
