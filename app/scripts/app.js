'use strict';

/**
 * @ngdoc overview
 * @name cavyrApp
 * @description
 * # cavyrApp
 *
 * Main module of the application.
 */
angular
  .module('cavyrApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductCtrl',
        controllerAs: 'prod'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
