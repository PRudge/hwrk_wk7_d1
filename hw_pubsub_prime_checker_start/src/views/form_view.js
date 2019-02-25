const PubSub = require('../helpers/pub_sub.js');
const FormView = function () {

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNum = event.target.number.value;
    // #when this form is submitted publish out to whole channel the inputtedNum
    PubSub.publish('FormView:num-submitted', inputtedNum);
  });


};

module.exports = FormView;
