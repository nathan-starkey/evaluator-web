import { MathExpr } from "../types.js";
import { integer, nothing } from "../utils.js";
import { evaluate } from "./index.js";

export function evaluateProduct(factors: MathExpr[]): MathExpr {
  if (factors.length == 0) {
    return nothing();
  }

  let integerValue = 1;

  for (const factor of factors) {
    const expr = evaluate(factor);

    switch (expr.type) {
      case "nothing":
        break;
      case "undefined":
        return expr;
      case "integer":
        integerValue *= expr.value;
        break;
      default:
        throw new Error("not implemented");
    }
  }

  return integer(integerValue);
}
