(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('comgress')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		$urlRouterProvider.otherwise('/');
		// $stateProvider
		// 	.state('home', {
		// 		url: '/',
		// 		templateUrl: 'public/partials/home-partial.html',
		// 		controller: 'HomeController'
		// 	})
		// 	.state('about', {
		// 		url: '/about',
		// 		templateUrl: 'public/partials/about-partial.html',
		// 		controller: 'AboutController'
		// 	});
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';
		console.log('AngularJS run() function...');
	}


})();
