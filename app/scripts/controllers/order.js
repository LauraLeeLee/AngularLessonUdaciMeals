'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('OrderCtrl', ['orderManager', function (orderManager) {
    this.list = orderManager.getOrders(); //set the list property of the controller to the ordres returned by  the order manager

    this.setActiveDay = function(day) {
      orderManager.setActiveDay(day);
    };
  }]);
