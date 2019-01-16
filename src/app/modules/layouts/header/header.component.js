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
    function headerController($rootScope, $state) {
        var vm = this;
        vm.searchInput = "";

        vm.searchEvents = function() {
          $state.go('Explorar').then(function() {
            $rootScope.$broadcast('filterEvents', vm.searchInput);
          });
        }
    }
})();
