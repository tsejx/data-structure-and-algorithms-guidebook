function isPrime1(n) {
  if (n <= 3) {
    return true;
  } else {
    for (var i = 2; i < Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}
