(function () {
    'use strict';

    /*
    Esto es un servicio. La gracia de los servicios es que son un conjunto de funciones referentes a un modelo (en este caso, a evento).
    Entonces, en vez de leer el archivo json en cada controlador de cada vista, lo que hacemos es llamar a las funciones de este servicio
    cada vez que lo requerimos
    */

    angular
			.module('comgress')
    	.factory('EventoFactory', EventoFactory);

    /** @ngInject */
    function EventoFactory($http, $rootScope) {
      var vm = {};

      //Obtiene los eventos del archivo json de eventos.
      function fetchEventos() {
        return $http.get('src/app/data/eventos.json').then(function(response) {
          return response.data.eventos;
        });
      }

      /*
      - hace un fetchEventos (o sea que obtiene los datos de eventos.json)
      - Luego verifica si el usuario ya se unió o no a los eventos
      - luego retorna el array de eventos
      */
      vm.getEventos = function() {
        return fetchEventos().then(function(data) {
          angular.forEach(data, function(evento) {
            if (_.includes($rootScope.user.eventosId, evento.id)) {
              evento.userJoined = true;
            } else {
              evento.userJoined = false;
            }
          });
          return data;
        })
      };

      /*
      Obtiene un unico evento según id
      */
      vm.getEvento = function(eventoId) {
        return fetchEventos().then(function(data) {
          var evento = _.find(data, function(evento){
            return evento.id == eventoId;
          });
          if (_.includes($rootScope.user.eventosId, evento.id)) {
            evento.userJoined = true;
          }
          return evento;
        });
      };

      //Obtiene todos los eventos a los que el usuario ha apretado "UNIRSE"
      vm.getUserEventos = function() {
        var eventosId = $rootScope.user.eventosId;

        return fetchEventos().then(function(data) {
          var eventos = _.filter(data, function(evento){
            return _.includes(eventosId, evento.id);
          });
          return eventos;
        });
      };

      return vm;
    }
})();
