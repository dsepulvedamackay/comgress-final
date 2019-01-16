(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	//Inyeccion de dependencias de la aplicación
	var app = angular.module('comgress', [
		'ngResource',
		'ngAria',
		'ui.bootstrap',
	  'ngMaterial',
		'ngMdIcons',
		'ngMessages',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router'
	]);

	var _component = app.component;
	app.component = function (name, options) {
		return _component(name, angular.extend({ controllerAs: 'vm' }, options));
	};
})();
