import {
  Factor,
  Fraction,
  Integer,
  MathExpr,
  Summand,
  Undefined,
} from "./types.js";

export function evaluateExpr(expr: MathExpr): Undefined | Integer | Fraction {
  switch (expr.type) {
    case "undefined":
      return expr;
    case "integer":
      return expr;
    case "sum":
      return evaluateSum(expr.summands);
    case "product":
      return evaluateProduct(expr.factors);
    case "exponent":
      return evaluateExponent(expr.base, expr.power);
    default:
      throw new Error("not implemented");
  }
}

function evaluateSum(summands: Summand[]): Undefined | Integer | Fraction {
  const sum: Integer = {
    type: "integer",
    value: 0,
  };

  for (const summand of summands) {
    const expr = evaluateExpr(summand);

    switch (expr.type) {
      case "undefined":
        return expr;
      case "integer":
        sum.value += expr.value;
        break;
      default:
        throw new Error("not implemented");
    }
  }

  return sum;
}

function evaluateProduct(factors: Factor[]): Undefined | Integer | Fraction {
  const product: Integer = {
    type: "integer",
    value: 1,
  };

  for (const factor of factors) {
    const expr = evaluateExpr(factor);

    switch (expr.type) {
      case "undefined":
        return expr;
      case "integer":
        product.value *= expr.value;
        break;
      default:
        throw new Error("not implemented");
    }
  }

  return product;
}

function evaluateExponent(
  base: MathExpr,
  power: MathExpr,
): Undefined | Integer | Fraction {
  base = evaluateExpr(base);
  power = evaluateExpr(power);

  if (base.type == "undefined" || power.type == "undefined") {
    return {
      type: "undefined",
    };
  }

  if (base.type == "integer" && power.type == "integer") {
    return {
      type: "integer",
      value: base.value ** power.value,
    };
  }

  throw new Error("not implemented");
}
