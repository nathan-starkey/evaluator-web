import { term } from "./test.js";
import { Expression, Sign } from "./types.js";

function one(): Expression {
  return {
    type: "expression",
    terms: [
      {
        sign: Sign.Positive,
        factors: [],
      },
    ],
  };
}

export function example() {
  console.log(
    term(1, [
      {
        base: {
          type: "prime",
          value: 2,
        },
        power: one(),
      },
      {
        base: {
          type: "prime",
          value: 2,
        },
        power: {
          type: "expression",
          terms: [
            {
              sign: Sign.Positive,
              factors: [
                {
                  base: {
                    type: "prime",
                    value: 3,
                  },
                  power: one(),
                },
              ],
            },
          ],
        },
      },
    ]),
  );
}
