import {
  Exponent,
  Fraction,
  Integer,
  MathExpr,
  Product,
  Sum,
  Undefined,
  Variable,
} from "./types.js";

export function und(): Undefined {
  return {
    type: "undefined",
  };
}

export function variable<TName extends string>(name: TName): Variable<TName> {
  return {
    type: "variable",
    name: name,
  };
}

export function integer<TValue extends number>(value: TValue): Integer<TValue> {
  return {
    type: "integer",
    value: value,
  };
}

export function fraction<
  TNumerator extends MathExpr,
  TDenominator extends MathExpr,
>(
  numerator: TNumerator,
  denominator: TDenominator,
): Fraction<TNumerator, TDenominator> {
  return {
    type: "fraction",
    numerator: numerator,
    denominator: denominator,
  };
}

export function exponent<TBase extends MathExpr, TPower extends MathExpr>(
  base: TBase,
  power: TPower,
): Exponent<TBase, TPower> {
  return {
    type: "exponent",
    base: base,
    power: power,
  };
}

export function sum<TSummands extends MathExpr[]>(
  summands: TSummands,
): Sum<TSummands> {
  return {
    type: "sum",
    summands: summands,
  };
}

export function product<TFactors extends MathExpr[]>(
  factors: TFactors,
): Product<TFactors> {
  return {
    type: "product",
    factors: factors,
  };
}
