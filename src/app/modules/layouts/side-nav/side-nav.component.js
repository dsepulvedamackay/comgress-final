(function () {
    'use strict';

    angular
			.module('comgress')
    	.component('sideNav', {
        templateUrl: 'src/app/modules/layouts/side-nav/side-nav.template.html',
        controller: SideNavController,
        controllerAs: 'vm',
      });

    /** @ngInject */
    function SideNavController(UserFactory) {
      var vm = this;
      //Este es simple. Solo obtiene el usuario para poder mostrarlo en el html
      vm.user = UserFactory.getUser();
    }
})();
