(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('EventoController', EventoController);

    /** @ngInject */
    function EventoController($http, $state) {
        var vm = this;

        activate();

        function activate() {
            $http.get('src/app/data/eventos.json').then(function(response) {
                angular.forEach(response.data.eventos, function(evento) {
                  if (evento.id == $state.params.id) {
                    vm.evento = evento;
                  }
                });
            });
        }
    }
})();
