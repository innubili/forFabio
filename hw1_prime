function getPrimeNumbers(n){
  if (n < 2) return [];
  var result = [2];
  for (var i = 3; i <= n; i++) {
    var notMultiple = false;
    
    for (var j in result) { 
      notMultiple = notMultiple || (0 === i % result[j]); 
    }

    if (!notMultiple) {
      result.push(i);
    }
  }

  return result;
}

function write100primeNumbersToFile(){
  var primeNumbers = getPrimeNumbers(100);
  var content = primeNumbers.join(', ');
  fs = ...
}
