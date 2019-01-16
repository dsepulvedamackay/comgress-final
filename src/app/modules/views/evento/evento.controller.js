(function() {
    'use strict';

    angular
        .module('comgress')
        .controller('EventoController', EventoController);

    /** @ngInject */
    function EventoController($http, $state, EventoFactory, UserFactory) {
        var vm = this;
        vm.evento;

        activate();

        function activate() {
          EventoFactory.getEvento($state.params.id).then(function(data) {
            vm.evento = data;
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
    }
})();
