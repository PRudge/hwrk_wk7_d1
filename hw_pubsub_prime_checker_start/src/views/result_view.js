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

   const displayRes = this.isPrimeOrNotText(resultDets);
   const displayLargestPrime = this.theLargestPrime(resultDets);

   resultElement.textContent = displayRes;
   largestPrime.textContent = displayLargestPrime;
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


module.exports = ResultView;
