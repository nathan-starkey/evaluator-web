export type Factor = Prime | Variable | Expression;

export enum Sign {
  Positive = 1,
  Negative = -1,
}

export interface Prime {
  type: "prime";
  value: number;
}

export interface Variable {
  type: "variable";
  name: string;
}

export interface FactorWithExponent {
  base: Factor;
  power: Expression;
}

export interface Term {
  sign: Sign;
  factors: FactorWithExponent[];
}

export interface Expression {
  type: "expression";
  terms: Term[];
}
