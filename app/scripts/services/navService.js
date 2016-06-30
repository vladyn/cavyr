'use strict';
/*
 @ngdoc function
 @name cavyrApp:navService
 @description Serivce returning active position of the menu
*/

angular.module('cavyrApp')
	.factory('navService', function ($location) {
		function getPosition() {
			var current = $location.url(),
				active = null;

				switch (current) {
					case '/':
					active = 'home';
					break;
					case '/products':
					active = 'products';
					break;
					case '/about':
					active = 'about';
					break;
					case '/contact':
					active = 'contact';
					break;
				}

				return active;

		}
	
		return {
			getPosition: getPosition
		};
	});
