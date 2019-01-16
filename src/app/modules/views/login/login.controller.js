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

        /*
        Fake login. Solo busca que la cuenta sea deips y la contraseña 123123, segun lo indicado en el
        comienzo de la app en el archivo app.config.js en la funcion runBlock
        */
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
