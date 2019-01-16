(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state, $rootScope) {
        var vm = this;

        vm.username;
        vm.password;
        vm.login = function() {
          if (vm.username == $rootScope.user.username && vm.password == $rootScope.user.password) {
            $state.go('Explorar');
          }
        }

        activate();

        function activate() {
        }
    }
})();
