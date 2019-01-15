(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('EventosController', EventosController);

    /** @ngInject */
    function EventosController($http, $uibModal) {
        var vm = this;
        vm.options = {
            templateUrl: "src/app/modules/views/eventos/eventos.crearEvento.template.html"
        }
        vm.openModal = function() {
            $uibModal.open(vm.options);
        }

        activate();

        function activate() {
          $http.get('src/app/data/eventos.json').then(function(response) {
            vm.eventos = response.data.eventos;
            angular.forEach(vm.eventos, function(evento) {
              evento.userJoined = false;
            });
          });
        }

        vm.userJoin = function(evento, join) {
          if (!join) {
            evento.cupos = evento.cupos + 1;
            evento.userJoined = false;
          } else {
            evento.cupos = evento.cupos - 1;
            evento.userJoined = true;
          }
        }
    }
})();
