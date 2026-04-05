import { isPrime } from "./utils/isPrime.js";

export function example() {
  for (let i = 0; i < 100; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
