var isPrime2 = (function() {
  //hash
  var hash = {};
  return function(n) {
    if (n <= 3) {
      return true;
    } else if (hash[n] !== undefined) {
      return hash[n];
    } else {
      for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
          return (hash[n] = false);
        }
      }
      return (hash[n] = true);
    }
  };
})();
