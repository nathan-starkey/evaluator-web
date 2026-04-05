import { factoriseInteger } from "./utils.js";

export function example() {
  const n = Math.floor(Math.random() * 999) + 2;

  console.log(n, factoriseInteger(n));
}
