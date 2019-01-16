(function () {
    'use strict';

    angular
			.module('comgress')
    	.factory('UserFactory', UserFactory);

    /** @ngInject */
    function UserFactory($rootScope) {
      var vm = {};

      vm.getUser = function() {
        return $rootScope.user;
      };

      vm.userJoinEvent = function(eventoId) {
        $rootScope.user.eventosId.push(eventoId);
      };

      vm.userLeaveEvent = function(eventoId) {
        _.remove($rootScope.user.eventosId, function(data) {
          return data == eventoId;
        })
      };

      return vm;
    }
})();
