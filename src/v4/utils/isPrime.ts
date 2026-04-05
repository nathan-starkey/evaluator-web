export function isPrime(n: number): boolean {
  if (n == 2 || n == 3) {
    return true;
  }

  if (!Number.isInteger(n) || n < 2 || n % 2 == 0 || n % 3 == 0) {
    return false;
  }

  const m = Math.sqrt(n);

  for (let f = 5; f < m; f += 5) {
    if (n % f == 0 || n % (f + 2) == 0) {
      return false;
    }
  }

  return true;
}
