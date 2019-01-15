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

		$urlRouterProvider.otherwise('/explorar');
		$stateProvider
			.state('Explorar', {
				url: '/explorar',
				templateUrl: 'src/app/modules/views/eventos/eventos.template.html',

				controller: 'EventosController',
				controllerAs: 'vm'
			});
	}

	runBlock.$inject = ['$rootScope', '$state'];

	function runBlock($rootScope, $state) {
		'use strict';
		$rootScope.state = $state;
	}
})();
