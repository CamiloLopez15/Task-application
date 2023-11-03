# Task Application.

Este es un proyecto de grado para el técnico de aplicaciones informáticas en System Center, esto es una aplicación de tareas en la cual puedes añadir tareas, editarlas, eliminarlas, crear tu cuenta en la aplicación, iniciar sesión, editar tu cuenta y cerrar sesión.

## Tabla de contenido…

1.  <a href="#tecnologia-usadas">Tecnologías usadas y descripción de estas</a>
2.  <a href="#codigo">Explicación del código de la aplicación</a>
3.  <a href="#instalacion">¿Como instalarlo?</a>
4.  <a href="#autores">Autores</a>

<h2 id="tecnologia-usadas">Tecnología usadas y descripción de estas</h2>
Para la realización de este proyecto se usó tecnologías para agilizar la producción de este, estas tecnologías son:

### Front-end.

1.  #### Vite JS.
    Es una herramienta para el desarrollo de lado del **Front-end**, estás nos permite instalar las dependencias necesarias para un proyecto con un **Framework**, en esta caso **React**, aparte de esta instalación, nos proporciona un servidor para ver a tiempo real los cambios en la web que ocurran en nuestro código y por último, nos permite llevar nuestro código a producción.
2.  #### React
    Es un **Framework** que permite desarrollar de forma más fácil aplicaciones e interfaces del usuario del lado del **Front-end**, esta facilita la creación de aplicaciones webs en una sola página.
3.  #### React DOM
    En palabras simples, esta librería se encarga de renderizar los componentes de React en la web.
4.  #### React Router DOM
    Esta librería que nos permite y nos facilita definir rutas dentro de la aplicación para una mejor navegación del usuario.
5.  #### React Icons
    Es una librería para **React** que nos permite importar iconos a nuestra aplicación y colocarlos como componentes.
6.  #### React Hook Form
    Es una librería de **React** que nos permite recibir datos de los del formularios, cambiar eventos dentro de estos, como en evento de cambio en los _inputs_ o el envío del formulario. Esta nos facilita los el trabajo al momento de manejar un formulario.
7.  #### Prop-Types
    Esta librería nos permite definir el tipo de datos que reciben los componentes como _props_, esto se hace para evitar errores dentro de la aplicación.
8.  #### Js-Cookie
    Es una librería que nos permite manejar de forma sencilla las cookies con **JavaScript** del navegador.
9.  #### Axios
    Es una **_API HTTP_** que nos permite realizar llamadas **_API REST_** con retorno **_JSON_**.
10. #### Tailwind Css
    Es un **Framework** de _CSS_ que nos permite evitar escribir _CSS_ y estilizar toda la aplicación o componente usando únicamente con clases.
11. #### React Intersection Observer
    Esta librería se usa para saber que tiene el usuario en su pantalla y así poder ejecutar las animaciones en el momento indicado
12. #### Framer Motion
    Una librería de **React** para hacer animaciones complejas para los componentes de este.

### Back-end.

13. #### Bcryptjs
    Es una librería de Node Js la cual se utiliza para encriptar contraseñas y datos.
14. #### Cookie Parser
    Es una librería que se usa para tratar las _cookies_ del lado del **Back-end**
15. #### Cors
    Se usa para modificar el _Cors_ de **Back-end** y se pueda solicitar peticiones a este desde distintos lugares que no son del mismo origen.
16. #### Express
    Se usa como Framework principal del **Back-end**, para definir código de las solicitudes, entre otras funciones.
17. #### Jsonwebtoken
    Es una librería usada para generar tokens para que los usuarios puedan mantener su sesión iniciada.
18. #### Mongoose
    Librería usada para conectarse con **MongoDB**, esta se usa para generar los campos, esquemas, etc.
19. #### Morgan
    Se usa para generar mensajes en la consola del **Back-end** sobre las peticiones que se hacen a este.
20. #### Zod
    Se usa para facilitar la creación de esquemas al momento de modelar los datos.
    <h2 id="codigo">Explicación del código de la aplicación</h2>

El código se divide en dos carpetas principales **_src_** y **_client_**.

### Src

En esta carpeta se desarrolla todo el código de Back-end, en esta se define varias carpetas, acá te explicaremos que tipo de código contiene cada una.

- **Controllers:** Acá encontrarás todas las funciones que se ejecutan al llamar los distintos _Endpoint_ de la API del **Back-end**, esta se divide en dos archivos, los _Endpoints_ de los usuarios y los _Endpoints_ de las tareas.
- **Libs:** Acá encontrarás un archivo el cual se usa para crear los _tokens_.
- **Middlewares:** Encontrarás dos archivos, uno que se utiliza para validar los _tokens_ sin son válidos o no, en el otro archivo estarán las validaciones de los esquemas de los datos.
- **Models:** Acá están todos los archivos que se usan para generar los modelos de datos que se alojaran en la base de datos.
- **Routes:** Los archivos de esta carpetas son las rutas de las APIs y la llamada de sus funciones.
- **Schemas:** En esta carpeta se alojan los archivos que definen los esquemas de cada modelo de la base de datos.

Los demás archivos en esta carpeta son la inicialización de la aplicación, la llamada a la base de datos y el archivo de configuración donde se almacenan las variables privadas.

### Client

Acá encontraremos todos los archivos y carpetas que estén relacionados con el Front-end de la aplicación. Estos son:

- **Public:** Acá se almacenan todas las imágenes que se usa en la aplicación.
- **Src:** Acá van todos los componentes y partes importantes de la aplicación. Estos son: 
    - **Api:** Se definen todas las llamadas de las APIs y ajustes de _axios_.
    - **Components:** Acá se almacenan todos los componentes reutilizables en toda la aplicación.
    - **Context:** Acá se crea todos estados que se usan frecuentemente en toda la aplicación, como la autenticación del usuario, errores, etc. 
    - **Pages:** Se almacenan todas las páginas de la aplicación que van cambiando con la URL.
  Los otros archivos son la inicialización del _CSS_, _HTML_, React, protección de rutas, configuración de librerías, _frameworks_, etc.

<h2 id="instalacion">¿Como instalarlo?</h2>

Para instalar el proyecto necesitas seguir los siguientes pasos:

- Clonar el repositorio de Github en tu máquina.
- Abrir en el terminal, entrar en la carpeta raíz y escribir **_npm install_**.
- Luego entrar en la carpeta desde la terminal **_client_** y escribir **_npm install_**.
- Luego en la carpeta **_src_** una vez ahí, crear un archivo llamado **_config.js_** , define ahí las siguientes variables y exportarlas: 
    - **TOKEN_SECRET:** La clave del token, intenta que sea de 32 caracteres. 
    - **URI_BACKEND:** crear una base de datos en MongoDB atlas y coloca el url aquí.

<h2 id="autores">Autores</h2>

Este proyecto fue **realizado** por [Camilo López](https://github.com/CamiloLopez15)
