(function () {
    'use strict';

    angular
			.module('comgress')
    	.factory('EventoFactory', EventoFactory);

    /** @ngInject */
    function EventoFactory($http, $rootScope, $q) {
      var vm = {};

      function fetchEventos() {
        return $http.get('src/app/data/eventos.json').then(function(response) {
          return response.data.eventos;
        });
      }

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
