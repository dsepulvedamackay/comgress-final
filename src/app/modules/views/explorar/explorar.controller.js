(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('ExplorarController', ExplorarController);

    /** @ngInject */
    function ExplorarController($http, $rootScope, EventoFactory, UserFactory) {
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

          EventoFactory.getEventos().then(function(data) {
            vm.eventos = data;
            vm.filteredEventos = filterEvents(vm.searchInput);
          });
        }

        vm.userJoin = function(evento, join) {
          if (!join) {
            UserFactory.userLeaveEvent(evento.id);
            evento.cupos = evento.cupos + 1;
            evento.userJoined = false;
          } else {
            UserFactory.userJoinEvent(evento.id);
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
