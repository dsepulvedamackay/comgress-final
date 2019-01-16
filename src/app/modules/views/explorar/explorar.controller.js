(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('ExplorarController', ExplorarController);

    /** @ngInject */
    function ExplorarController($http, $rootScope, EventoFactory, UserFactory) {
        var vm = this;
        vm.filteredEventos = [];

        activate();

        function activate() {
          //Aquí escucha al evento filterEvents como te decía en el archivo header.component.js
          $rootScope.$on('filterEvents', function(event, searchInput) {
            vm.searchInput = searchInput;
            vm.filteredEventos = filterEvents(vm.searchInput); //luego filtra los eventos utilizando filterEvents() (esta mas abajo esa funcion)
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

        //Funcion simmple para filtrar eventos
        function filterEvents(filter) {
          var filteredEventos = _.filter(vm.eventos, function(evento) { //Filta los eventos en vm.eventos
            return _.includes(_.lowerCase(evento.nombre), _.lowerCase(filter)); //Incluye solo los que tengan un nombre que incluya la palabra o letas pasadas en el parametro "filter"
          });

          return filteredEventos;
        }
    }
})();
