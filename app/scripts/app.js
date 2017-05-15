'use strict';

angular.module('classe_a.controllers', [ ]);

angular.module('classe_a', [
		'ngAnimate',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'classe_a.controllers',
		'egmfilho.inputFilters',
		'duParallax',
		'ngMap'
	])
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
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
			.when('/produtos', {
				name: 'produtos',
				templateUrl: 'views/products.html'
			})
			.when('/contato', {
				name: 'contato',
				templateUrl: 'views/contact.html',
				controller: 'ContactCtrl',
				controllerAs: 'contact'
			})
			.otherwise({
				redirectTo: '/'
			});

	}])
	.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
		
		$rootScope.loading = {
			count: 0,
			isLoading: function() { return this.count > 0 },
			load: function() { this.count++; },
			unload: function() { this.count--; this.count < 0 ? this.count = 0 : null; }
		};

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

		$window.onscroll = function() {
			$rootScope.scrollY = $window.scrollY;
			$rootScope.$apply();
		};

		// Esconde o navbar collapse ao clicar em um link
		jQuery('.navbar-header .navbar-brand, #navbar-collapse a').on('click', function() {
			if ($window.innerWidth < 768) {
				jQuery('.navbar-toggle').click();
			}
		});

	}]);
