'use strict';

/**
 * @ngdoc function
 * @name cavyrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cavyrApp
 */
angular.module('cavyrApp')
  .controller('MainCtrl', function (navService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.active = false;

    navService.getPosition();

  });

