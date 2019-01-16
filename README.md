Hola buen amigo. Te quiero mucho.

Paso 1, instalar dependencias de npm:
`npm install`

Paso 2, hacerlo correr:
`grunt dev`

Paso 3, ser feliz con el donki kon:
`serfelizconlabestiakong --run --save`

Paso por ti a las 23.
Besos.


------------------------------------------------------------------------------
*Para el login: username: deips y password: 123123*
 
Tecnologías:
- La app está desarrollada con AngularJS 1.6.1, porque es una versión de angularjs estable.
- Se utilizó bower y npm como gestor de dependencias.
- Se utilizó Grunt para la automatización de inyección de dependencias y para montar el live-server
- Se utilizó SASS como procesador de CSS.
- Se utilizó angular-material y bootstrap para manejar los estilos y la estructura del html.
- Se utilizó ui-router para manejar las rutas y los estados de la aplicación.

Estructura y archivos importantes:
- Gruntfile.js: Aquí se encuentran las opciones para automatizar procesos de inyeccion de dependencias, utilizar SASS, correr el live-server y permitir que el mismo "escuche" los cambios en los archivos para actualizar el navegador de manera automática.
- index.html: Es la página principal de la aplicación. Contiene el layout de la aplicación y las dependencias.

- plugins: Nada importante (por ahora)
- src -> app -> assets: Contiene los "bienes" de la aplicacion. Imagenes, CSS, fuentes, ese tipo de cosas van ahí.
- src -> app -> data: Contiene archivos *json* con datos. En este caso, fake data de eventos en *eventos.json*.
- src -> app -> modules -> layouts: Contiene *componentes* que conforman el layout de la aplicación. Estos componentes son luego insertados en el index.html. En este caso son el *header* y el *sidenav*.
- src -> app -> modules -> shared: Contiene *servicios* que manejarían las *peticiones* del backend. Por ahora utilizan datos falsos del archivo *eventos.json*.
- src -> app -> modules -> views: Contiene las *vistas* de la aplicación, sus controladores y su scss. Las vistas son el contenido dinamico que va cambiando en la aplicación, no como los del layout que se mantienen fijos aunque cambies de página.

- src -> app -> app.config.js: Es el archivo que configura y da inicio a la aplicación. Ahí se configuran los "states" o estados de la aplicación, y se asocia cada state a una vista y a su controlador.
- src -> app -> app.js: Es el modulo principal de la aplicación, y dentro del cual se agregan como dependencias todas las sub-aplicaciones que utiliza (bootstrap, angular material, ui-router, etc)
- src -> app -> main.scss: Estilos generales de la aplicación. También, este archivo importa todos los demás archivos .scss en la aplicación. O sea, es el archivo .scss global.

Esa es la explicación de cada carpeta y qué hace. Lee los comentarios en cada archivo para más detalles.
