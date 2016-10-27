angular.module('rate1', [])
.controller('RateController', function RateController() {
  this.cost = 2;
  this.inCurr = 'JPY';
  this.currencies = ['JPY', 'GBP'];
  this.usdToForeignRates = {
    JPY: 128.029,
    GBP: 1
  };

  this.total = function total(outCurr) {
    return this.convertCurrency(1 * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };
  this.pay = function pay() {
    window.alert('Thanks!');
  };
});
