(function() {
    'use strict';

    /*
    Esto es una vista. Maneja lo que pasa con la vista del evento singular.
    */
    angular
        .module('comgress')
        .controller('EventoController', EventoController);

    /** @ngInject */
    function EventoController($http, $state, EventoFactory, UserFactory) { //Esta linea dice que a usar esos recursos. También los servicios que creamos.
        var vm = this;
        vm.evento;

        activate();

        function activate() {
          //Utiliza el EventoFactory para obtener el evento singular correspondiente a los parametros del estado (eventoId)
          EventoFactory.getEvento($state.params.id).then(function(data) {
            vm.evento = data; //Asigna el dato obtenido a vm.evento. Acuerdate, lo que está asignado es vm es para mostrarlo en el html
          });
        }

        //Si el usuario se une, se uutiilza UserFactory.userJoinEvent para agregarlo a su lista de eventos. Sino, se borra
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
