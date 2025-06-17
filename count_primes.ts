function countPrimes(n: number): number {
    if (n <= 2) return 0;

    const isPrime: boolean[] = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
        }
    }

    return isPrime.filter(Boolean).length;
}

// Example usage
console.log(countPrimes(10)); // Output: 4 (primes: 2, 3, 5, 7)
