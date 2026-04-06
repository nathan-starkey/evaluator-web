import { Expression, Factor, FactorWithExponent, Sign, Term } from "./types.js";

function compareFactors(a: Factor, b: Factor): boolean {
  switch (a.type) {
    case "prime":
      return b.type == "prime" && a.value == b.value;
    case "variable":
      return b.type == "variable" && a.name == b.name;
    case "expression":
      return b.type == "expression" && compareExpressions(a, b);
  }
}

function compareTerms(a: Term, b: Term): boolean {
  if (a.sign != b.sign) {
    return false;
  }

  const factorsA = [...a.factors];
  const factorsB = [...b.factors];

  for (let i = factorsA.length - 1; i >= 0; i--) {
    const factorA = factorsA[i]!;

    for (let j = factorsB.length - 1; j >= 0; j--) {
      const factorB = factorsB[j]!;

      if (!compareFactors(factorA.base, factorB.base)) {
        continue;
      }

      if (!compareExpressions(factorA.power, factorB.power)) {
        continue;
      }

      factorsA.splice(i, 1);
      factorsB.splice(j, 1);
      break;
    }
  }

  return factorsA.length == 0 && factorsB.length == 0;
}

function compareExpressions(a: Expression, b: Expression): boolean {
  let termsA = [...a.terms];
  let termsB = [...b.terms];

  for (let i = termsA.length - 1; i >= 0; i--) {
    const termA = termsA[i]!;

    for (let j = termsB.length - 1; j >= 0; j--) {
      const termB = termsB[j]!;

      if (!compareTerms(termA, termB)) {
        continue;
      }

      termsA.splice(i, 1);
      termsB.splice(j, 1);
      break;
    }
  }

  return termsA.length == 0 && termsB.length == 0;
}

export function factor(base: Factor, power: Expression): FactorWithExponent {
  return {
    base: base,
    power: power,
  };
}

export function term(sign: Sign, factors: FactorWithExponent[]): Term {
  // let simplifiedFactors: FactorWithExponent[] = [];

  for (let i = 0; i < factors.length; i++) {
    const factor = factors[i]!;
    const similar = factors.findIndex(
      (f, j) => i != j && compareFactors(factor.base, f.base),
    );

    if (similar != -1) {
      const fs = [...factors];
      const was = factors[similar]!;

      if (i > similar) {
        fs.splice(i, 1);
        fs.splice(similar, 1);
      } else {
        fs.splice(similar, 1);
        fs.splice(i, 1);
      }

      return term(sign, [
        ...fs,
        {
          base: factor.base,
          power: {
            type: "expression",
            terms: [...factor.power.terms, ...was.power.terms],
          },
        },
      ]);
    }
  }

  return {
    sign: sign,
    factors,
  };
}
