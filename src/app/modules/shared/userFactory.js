(function () {
    'use strict';

    /*
    Servicio de usuarios. Conjunto de funciones referentes al modelo Usuario
    */
    angular
			.module('comgress')
    	.factory('UserFactory', UserFactory);

    /** @ngInject */
    function UserFactory($rootScope) {
      var vm = {};

      //Obtiene los datos del usuario
      vm.getUser = function() {
        return $rootScope.user;
      };

      //Se une a un evento. Por lo tanto, agrega el id del evento al array de eventos personales del usuario (user.eventosId)
      vm.userJoinEvent = function(eventoId) {
        $rootScope.user.eventosId.push(eventoId);
      };

      //Deja un evento. Por lo tanto, borra el id del evento del array de eventos personales del usuario (user.eventosId)
      vm.userLeaveEvent = function(eventoId) {
        _.remove($rootScope.user.eventosId, function(data) {
          return data == eventoId;
        })
      };

      return vm;
    }
})();
