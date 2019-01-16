(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state) {
        var vm = this;

        vm.username;
        vm.password;
        vm.login = function() {
          if (vm.username == 'david' && vm.password == '123123') {
            $state.go('Explorar');
          }
        }

        activate();

        function activate() {
        }
    }
})();
