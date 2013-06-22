var fs = require('fs');

var outfile = "prime_numbers.txt";


var primeNumbers = getPrimeNumbers(100);
var content = primeNumbers.join(', ');
fs.writeFileSync(outfile, content);  

console.log("Script: " + __filename + "\nWrote some numbers To: " + outfile);

function getPrimeNumbers(n){
  if (n < 2) return [];
  var result = [2];
  var i = 3;
  while (result.length < 100) {
    var notMultiple = false;
    for (var j in result) { 
      notMultiple = notMultiple || (0 === i % result[j]); 
    }

    if (!notMultiple) {
      result.push(i);
      console.log("Script: getPrimeNumbers added" + i + " to the list");
    }
    i++;
  }

  return result;
}

