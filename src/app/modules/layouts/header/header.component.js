/*
Este es un componente, el componente header. Conecta al controlador headerController con la vista indicada en templateUrl
*/
(function () {
    'use strict';

    angular
    	.module('comgress')
			.component('header', {
        templateUrl: 'src/app/modules/layouts/header/header.template.html',
        controller: headerController,
        controllerAs: 'vm'
      });

    /** @ngInject */
    /*
    Este es el controlador. Tiene una funcion por ahora: manejar la búsqueda de eventos (con el buscador que esta arribita a la derecha)
    */
    function headerController($rootScope, $state) {
        var vm = this;
        vm.searchInput = "";

        /*
        Esta funcion es parte de "vm" porque después es llamada por el botón del buscador en el html. Fíjate que el boton tiene un
        "ng-click='vm.searchEvents()'". Solo pueden ser llamadas si las funciones son conectadas a vm, que es como decidimos llamar a nuestro
        controlador en el archivo app.config.js.
        */
        vm.searchEvents = function() {
          $state.go('Explorar').then(function() { //Cuando apretas buscar, te redirecciona al estado Explorar (.../explorar)
            $rootScope.$broadcast('filterEvents', vm.searchInput);
            //Then (entonces), emite un evento llamado filterEvents, y pasa lo escrito en el buscador como parametro.
            /*
            Los eventos emitidos pueden ser escuchados por otros controladores. En nuestro caso, fijate en el archivo
            src -> app -> modules -> views -> explorar -> explorar.controller.js

            Dentro de la función activate(), el bloque que diec $rootScope.$on('filterEvents', function(event, searchInput) es para escuchar
            ese evento. Cada vez que se emite el evento filterEvents (o sea, cada vez que el usuario busa algo), el contrlador de la vista
            "explorar" escucha este evento y recibe el parametro pasado (vm.searchInput, o sea lo que buscó el usuario). Con esto, el
            controlador puede trabajar. Si te fijas en el archivo, lo que hace es filtrar los eventos segun el vm.serachInput.
            */
          });
        }
    }
})();
