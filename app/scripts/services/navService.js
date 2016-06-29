'use strict';
/*
 @ngdoc function
 @name cavyrApp:navService
 @description Serivce returning active position of the menu
*/

angular.module('cavyrApp')
	.factory('navService', function ($routeProvider, $location) {
		function getPosition() {
			console.log($routeProvider);
			console.log($location);
		}
	
		return {
			getPosition: getPosition
		};
	});
