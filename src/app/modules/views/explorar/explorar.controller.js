(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('ExplorarController', ExplorarController);

    /** @ngInject */
    function ExplorarController($http, $rootScope) {
        var vm = this;
        vm.filteredEventos = [];
        vm.options = {
            templateUrl: "src/app/modules/views/explorar/explorar.crearEvento.template.html"
        }
        vm.openModal = function() {
            $uibModal.open(vm.options);
        }

        activate();

        function activate() {
          $rootScope.$on('filterEvents', function(event, searchInput) {
            vm.searchInput = searchInput;
            vm.filteredEventos = filterEvents(vm.searchInput);
          });

          $http.get('src/app/data/eventos.json').then(function(response) {
            vm.eventos = response.data.eventos;
            angular.forEach(vm.eventos, function(evento) {
              evento.userJoined = false;
            });
            console.log(vm.searchInput);
            vm.filteredEventos = filterEvents(vm.searchInput);
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

        function filterEvents(filter) {
          var filteredEventos = _.filter(vm.eventos, function(evento) {
            return _.includes(_.lowerCase(evento.nombre), _.lowerCase(filter));
          });

          return filteredEventos;
        }
    }
})();
