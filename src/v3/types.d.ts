export interface Nothing {
  type: "nothing";
}

export interface Undefined {
  type: "undefined";
}

export interface Variable<TName extends string = string> {
  type: "variable";
  name: TName;
}

export interface Integer<TValue extends number = number> {
  type: "integer";
  value: TValue;
}

export interface Sum<TSummands extends MathExpr[] = MathExpr[]> {
  type: "sum";
  summands: TSummands;
}

export interface Product<TFactors extends MathExpr[] = MathExpr[]> {
  type: "product";
  factors: TFactors;
}

export interface Fraction<
  TNumerator extends MathExpr = MathExpr,
  TDenominator extends MathExpr = MathExpr,
> {
  type: "fraction";
  numerator: TNumerator;
  denominator: TDenominator;
}

export interface Power<
  TBase extends MathExpr = MathExpr,
  TPower extends MathExpr = MathExpr,
> {
  type: "power";
  base: TBase;
  power: TPower;
}

export interface Root<
  TDegree extends MathExpr = MathExpr,
  TRadicand extends MathExpr = MathExpr,
> {
  type: "root";
  degree: TDegree;
  radicand: TRadicand;
}

export type MathExpr =
  | Nothing
  | Undefined
  | Variable
  | Integer
  | Sum
  | Product
  | Fraction
  | Power
  | Root;
