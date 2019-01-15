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
    function SideNavController() {
      var vm = this;
    }
})();
