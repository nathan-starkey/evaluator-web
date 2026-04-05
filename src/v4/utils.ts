export function isPrime(number: number): boolean {
  if (number == 2 || number == 3) {
    return true;
  }

  if (
    !Number.isInteger(number) ||
    number < 2 ||
    number % 2 == 0 ||
    number % 3 == 0
  ) {
    return false;
  }

  const upperBound = Math.sqrt(number);

  for (let factor = 5; factor < upperBound; factor += 5) {
    if (number % factor == 0 || number % (factor + 2) == 0) {
      return false;
    }
  }

  return true;
}

export function* eachPrime(): Generator<number, void, undefined> {
  yield 2;
  yield 3;

  for (let n = 5; true; n += 6) {
    if (isPrime(n)) {
      yield n;
    }

    if (isPrime(n + 2)) {
      yield n + 2;
    }
  }
}

export function factoriseInteger(integer: number): Map<number, number> {
  if (!Number.isInteger(integer) || integer < 1) {
    throw new Error("provided must be an integer greater than 0");
  }

  const factors = new Map<number, number>();

  for (const prime of eachPrime()) {
    if (integer == 1 || prime > integer) {
      break;
    }

    let power = 0;

    while (integer % prime == 0) {
      integer /= prime;
      power++;
    }

    if (power) {
      factors.set(prime, power);
    }
  }

  return factors;
}
