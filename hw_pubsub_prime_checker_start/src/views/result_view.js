const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {
};


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
  this.displayResult(event.detail);
  });
};


ResultView.prototype.displayResult = function (result) {

   const resultElement = document.querySelector('#result');
   const displayRes = this.isPrimeOrNotText(result);
   resultElement.textContent = displayRes;
};

ResultView.prototype.isPrimeOrNotText = function (result) {
  let displayRes;
  if (result === true){
    displayRes =  `Yes! It's a prime number`;
  }else{
    displayRes = `No! It's not a  prime number`;
  }
  return displayRes;
};


module.exports = ResultView;
