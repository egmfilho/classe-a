'use strict';

angular.module('classe_a.controllers', [ ]);

angular.module('classe_a', [
		'ngAnimate',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'classe_a.controllers',
		'ngParallax'
	])
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
	}])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				name: 'home',
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'home'
			})
			.when('/sobre', {
				name: 'about',
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.otherwise({
				redirectTo: '/'
			});

	}])
	.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
		
		$rootScope.getNumber = function(num) {
			return new Array(Math.max(0, Math.ceil(num)));
		};

		$rootScope.setCarouselInterval = function(selector, interval) {
			jQuery(selector).carousel({
				interval: interval
			});
		};

		$rootScope.$on('$routeChangeStart', function(event, next, current) {
			$rootScope.currentPath = $location.path();
		});

		$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
			var header = jQuery('nav.navbar.navbar-default');

			if (!previous || !previous.name) {
				jQuery(header).find('ul.nav li').removeClass('active');
			} else {
				jQuery(header).find('ul.nav li[name="' + previous.name + '"]').removeClass('active');
			}
			jQuery(header).find('ul.nav li[name="' + current.name + '"]').addClass('active');
		});

		angular.element($window).bind("scroll", function(e) {
			var navbar = jQuery('nav.navbar.navbar-default');

			if ($window.scrollY >= 1) {
				navbar.addClass('navbar-opaque');
			} else {
				navbar.removeClass('navbar-opaque');
			}
		});

	}]);
