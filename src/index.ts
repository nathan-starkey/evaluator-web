import { evaluateExpr } from "./evaluate.js";
import { MathExpr } from "./types.js";

const expr: MathExpr = {
  type: "exponent",
  base: {
    type: "product",
    factors: [
      {
        type: "integer",
        value: 2,
      },
      {
        type: "integer",
        value: 3,
      },
    ],
  },
  power: {
    type: "sum",
    summands: [
      {
        type: "integer",
        value: -3,
      },
      {
        type: "integer",
        value: 5,
      },
    ],
  },
};

console.log(evaluateExpr(expr));
