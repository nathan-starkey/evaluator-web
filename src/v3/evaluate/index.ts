import { MathExpr } from "../types.js";
import { evaluateProduct } from "./product.js";
import { evaluateSum } from "./sum.js";

export function evaluate(expr: MathExpr): MathExpr {
  switch (expr.type) {
    case "undefined":
      return expr;
    case "integer":
      return expr;
    case "variable":
      return expr;
    case "sum":
      return evaluateSum(expr.summands);
    case "product":
      return evaluateProduct(expr.factors);
    default:
      throw new Error("not implemented");
  }
}
