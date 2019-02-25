const PubSub = require('../helpers/pub_sub.js');


const PrimeChecker = function () {
};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:num-submitted', (event) => {
    const inputtedNum = event.detail;
    const result = this.numberIsPrime(inputtedNum);
    // create an object with the true/false result and the actual inputted number
    PubSub.publish('PrimeChecker:result-calculated',
      {result: result,
      number: inputtedNum});
  });
};


PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};


module.exports = PrimeChecker;


// {
//   result: result,
//   number: inouttingnum
// }
