import { MathExpr } from "../types.js";
import { integer } from "../utils.js";
import { evaluate } from "./index.js";

export function evaluateSum(summands: MathExpr[]): MathExpr {
  let integerValue = 0;

  for (const summand of summands) {
    const expr = evaluate(summand);

    switch (expr.type) {
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
