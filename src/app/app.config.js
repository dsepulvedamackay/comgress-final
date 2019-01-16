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
		.constant('_', window._)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		//Configuración de estados de la aplicación. Los estados son los distintos "url" que puede tomar la aplicación
		//También conecta cada controlador (controller) con su vista (templateUrl)
		//En este caso, si hay un estado que no existe o tratas de ir a un url que no existe en la app, vas a ser redireccionado a "/login"
		$urlRouterProvider.otherwise('/login');
		$stateProvider
			.state('Login', {
				url: '/login',
				templateUrl: 'src/app/modules/views/login/login.template.html',
				controller: 'LoginController',
				controllerAs: 'vm'
			})
			.state('Explorar', {
				url: '/explorar',
				templateUrl: 'src/app/modules/views/explorar/explorar.template.html',
				controller: 'ExplorarController',
				controllerAs: 'vm'
			})
			.state('Evento', {
				url: "/evento/{id}",
				templateUrl: "src/app/modules/views/evento/evento.template.html",
				controller: 'EventoController',
				controllerAs: 'vm'
			})
			.state('Mis eventos', {
				url: '/mis-eventos',
				templateUrl: 'src/app/modules/views/mis-eventos/mis-eventos.template.html',
				controller: 'MisEventosController',
				controllerAs: 'vm'
			});
	}

	runBlock.$inject = ['$rootScope', '$state'];

	function runBlock($rootScope, $state) {
		'use strict';
		$rootScope._ = window._;
		$rootScope.state = $state;
		$rootScope.user = { //Crear datos de usuario falso, globales para la app
			name: "David",
			role: "Front end developer",
			username: "david",
			password: "123123",
			eventosId: []
		}
	}
})();
