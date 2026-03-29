export interface Undefined {
  type: "undefined";
}

export interface Variable<TName extends string> {
  type: "variable";
  name: TName;
}

export interface Integer<TValue extends number = number> {
  type: "integer";
  value: TValue;
}

export interface Fraction<
  TNumerator extends MathExpr = MathExpr,
  TDenominator extends MathExpr = MathExpr,
> {
  type: "fraction";
  numerator: TNumerator;
  denominator: TDenominator;
}

export interface Exponent<
  TBase extends MathExpr = MathExpr,
  TPower extends MathExpr = MathExpr,
> {
  type: "exponent";
  base: TBase;
  power: TPower;
}

export interface Sum<TSummands extends MathExpr[] = MathExpr[]> {
  type: "sum";
  summands: TSummands;
}

export interface Product<TFactors extends MathExpr[] = MathExpr[]> {
  type: "product";
  factors: TFactors;
}

export type MathExpr =
  | Variable
  | Undefined
  | Integer
  | Fraction
  | Exponent
  | Sum
  | Product;
