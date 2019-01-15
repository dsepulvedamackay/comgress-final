(function () {
    'use strict';

    angular
    	.module('comgress')
			.component('header', {
        templateUrl: 'src/app/modules/layouts/header/header.template.html',
        controller: headerController,
        controllerAs: 'vm'
      });

    /** @ngInject */
    function headerController($scope) {
        var vm = this;
    }
})();
