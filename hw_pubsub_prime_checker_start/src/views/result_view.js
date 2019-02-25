const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {
};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
  this.displayResult(event.detail);
  });
};


ResultView.prototype.displayResult = function (resultDets) {
   const resultElement = document.querySelector('#result');
   const largestPrime = document.querySelector("#largest-prime");
   const theFactors = document.querySelector("#factors");

   const displayRes = this.isPrimeOrNotText(resultDets);
   const displayLargestPrime = this.theLargestPrime(resultDets);
   const displayFactors = this.getTheFactors(resultDets);

   resultElement.textContent = displayRes;
   largestPrime.textContent = displayLargestPrime;
   theFactors.textContent = displayFactors;
};

ResultView.prototype.isPrimeOrNotText = function (resultDets) {
  let displayRes;
  if (resultDets.result === true){
    displayRes =  `Yes! ${resultDets.number} is a prime number`;
  }else{
    displayRes = `No! ${resultDets.number} is not a prime number`;
  }
  return displayRes;
};

ResultView.prototype.theLargestPrime = function (resultDets) {
  let largestPrime = "At 23,249,425 digits, the number, known as M77232917, is now the largest known prime";
  if (resultDets.result === false){
    largestPrime = "";
  }
  return largestPrime;
};

ResultView.prototype.getTheFactors = function (resultDets) {
  if (resultDets.result === false){
  const num = resultDets.number;
  const maxFactorNum = Math.floor(Math.sqrt(num));
    const factorArr = [];
    let count = 0;  //count of factors found < maxFactorNum.

    for (let i = 1; i <= maxFactorNum; i++) {
        //inserting new elements in the middle using splice
        if (num % i === 0) {
            factorArr.splice(count, 0, i);
            let otherFactor = num / i; //the other factor
            if (i != otherFactor) {
                //insert these factors in the front of the array
                factorArr.splice(-count, 0, otherFactor);
            }
            count++;
        }
    }

    //swapping first and last elements
    let lastIndex = factorArr.length - 1;
    let temp = factorArr[lastIndex];
    factorArr[lastIndex] = factorArr[0];
    factorArr[0] = temp;

    return `Factors of ${resultDets.number}  are : ${factorArr}`;
  }
};

module.exports = ResultView;
