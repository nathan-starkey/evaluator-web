import {
  Fraction,
  Integer,
  MathExpr,
  Nothing,
  Power,
  Product,
  Root,
  Sum,
  Undefined,
  Variable,
} from "./types.js";

export function nothing(): Nothing {
  return {
    type: "nothing",
  };
}

export function und(): Undefined {
  return {
    type: "undefined",
  };
}

export function variable<TName extends string = string>(
  name: TName,
): Variable<TName> {
  return {
    type: "variable",
    name: name,
  };
}

export function integer<TValue extends number = number>(
  value: TValue,
): Integer<TValue> {
  if (!Number.isInteger(value)) {
    throw new Error("provided value is not an integer");
  }

  return {
    type: "integer",
    value: value,
  };
}

export function sum<TSummands extends MathExpr[] = MathExpr[]>(
  summands: TSummands,
): Sum<TSummands> {
  return {
    type: "sum",
    summands: summands,
  };
}

export function product<TFactors extends MathExpr[] = MathExpr[]>(
  factors: TFactors,
): Product<TFactors> {
  return {
    type: "product",
    factors: factors,
  };
}

export function fraction<
  TNumerator extends MathExpr = MathExpr,
  TDenominator extends MathExpr = MathExpr,
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

export function power<
  TBase extends MathExpr = MathExpr,
  TPower extends MathExpr = MathExpr,
>(base: TBase, power: TPower): Power<TBase, TPower> {
  return {
    type: "power",
    base: base,
    power: power,
  };
}

export function root<
  TDegree extends MathExpr = MathExpr,
  TRadicand extends MathExpr = MathExpr,
>(degree: TDegree, radicand: TRadicand): Root<TDegree, TRadicand> {
  return {
    type: "root",
    degree: degree,
    radicand: radicand,
  };
}
