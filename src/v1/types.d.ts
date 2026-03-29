export type Summand = Exclude<MathExpr, Sum>;

export type Factor = Exclude<MathExpr, Product>;

export type Undefined = {
  type: "undefined";
};

export type Integer = {
  type: "integer";
  value: number;
};

export type Sum = {
  type: "sum";
  summands: Summand[];
};

export type Product = {
  type: "product";
  factors: Factor[];
};

export type Fraction = {
  type: "fraction";
  numerator: MathExpr;
  denominator: MathExpr;
};

export type Exponent = {
  type: "exponent";
  base: MathExpr;
  power: MathExpr;
};

export type Root = {
  type: "root";
  degree: MathExpr;
  radicand: MathExpr;
};

export type MathExpr =
  | Undefined
  | Integer
  | Sum
  | Product
  | Fraction
  | Exponent
  | Root;
