'use strict';

/**
 * @ngdoc function
 * @name cavyrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cavyrApp
 */
angular.module('cavyrApp')
  .controller('MainCtrl', ['navService', '$location', '$scope', function (navService, $location, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$on('$locationChangeSuccess', function () {
	    $scope.active = navService.getPosition();
    });

  }]);

