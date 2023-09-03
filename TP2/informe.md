# Juego de piedra, papel o tijera

_Este proyecto es el resultado del segundo trabajo práctico del curso "Páginas web con Componentes Dinámicos" del programa nacional de formación y capacitación "Argentina Programa" dictado por profesores de FAMAF- UNC_

## Comenzando 🚀

Este proyecto es una propuesta del juego tradicional del "piedra,  papel o tijera" entre el usuario y la PC que juega de manera aleatoria. 

La manera de utlizarla es muy intuitiva: 
Se presentan un campo de texto en el que el usuario debe ingresar su nombre. Luego se encuentran 3 botones, que son las opciones de jugada para el usuario, debajo de dichos botones se muestra el resultado de la jugada, y con ello cambia tambien el contador de las victorias. 
Una vez alcanzadas 3 victorias de cualquiera de los dos oponentes se comunica con una alerta el ganador del juego.
En ese caso aparece un boton de Reiniciar para poder regresar  de cero las jugadas. _


## Descripcion del proceso ⚙️

Con el trabajo practico numero 1 innové en la utlilizacion de HTML, CSS y Javascript de manera vinculada y si bien esa fue un punto de partida en la practica, esta conllevo nuevos desafios. 

### HTML 🔩

Inicie con una hoja HTML, con el formato predeterminado de HTML5, segui el formato de la calculadora para luego poder utilizar algunos formatos de css,

La estructura fue bastante simple:

* Empece con el div de clase caja en el cual incorporé todos los elementos;

* Le indique un título y un imput para el ingresi del nombre del jugador;

* Las opciones de jugada las indique como botones;

* Agregué el contador de las victorias;

* Agregué el boton de reiniciar;

* Siguiendo indicaciones de un tutorial agregué las imágenes de los botones;

* Por último agregué un campo de texto para que el usuario pueda ver el resutado de cada jugada.


### CSS ⌨️
Como base tomé la hoja de estilo de la calculadora del primer práctico, dejé los formatos del body, de la caja, del título, de los campos de texto y del boton de reiniciar, cambiando los colores.
Agregué estilos a:
* El contador: para que quedara centrado modifiqué los valores de los márgenes. Imagino que habra mejores posibilidades para hacerlo de manera más prolija y exacta pero las desconozco, seria algo para mejorar.

* A los botones de las jugadas: les agregué una transicion de color verde para que el usuario pueda reconocer sobre qué botón esta situado.
Me gustaría agregarle mayores animaciones que lo hagan más atractivo.


### JS ⌨️

Esta  es nuevamente la parte que más me cuesta resolver. Principalmente porque el modelo de la calculadora ya no me resultaba muy útil, aunque si tomé como base la hoja de Javascript que creamos en otra instancia del curso Argentina Programa. 

Conservé:
* La funcion de obtener una jugada aleatoria de la computadora;
* La lógica de la funcion de determinar el ganador,  con modificaciones: 
    * Agregué primero la impresion por consola del resultado y luego lo cambié para que ese resultado sea visible para el usuario en un cuadro de texto.
    * Con formato condicional agregué la condicion de finalizar las jugadas cuando alguno de los oponentes consiga 3 victorias, tambien hice que en primera instancia lo imprimiera por consola, y lugo lo cambie a una aerta para que pueda verlo con facilidad el usuario
    * Como final de ese condicional quise indicar que aparezca el boton de reiniciar que no deberia verse antes de que algun oponente gane al menos 3 partidas, para eso seguí la indicacion que se dio en la clase práctica, aunque no la entiendo muy bien. 

Agregué/ modifiqué:
* Declare las variables para capturar el nombre ingresado por el jugador, el contador, los botones de las jugadas y el boton de reiniciar utilizando "document.getElementById".
* Incorporé una funcion para agregar el nombre para establecer la condicion de que no quede vacio ese campo de texto. Para probarlo le agregue un console log. 
Usé:
```
 if(nombre.trim() !== "");
```
(Me lo recomendó Chat GPT )
* Agregue la funcion de jugar que recupera la jugada elegida por el usuario y la generada aleatoriamente por la computadora, y determina el ganador. (tambien la pobé usando console log, que luego quité)
* Agregué la funcion de reiniciar que regresa a cero los contadores. Lo hice con las indicaciones de la clase práctica.


## Pruebas⚙️
* Para lograr la hoja Javascript como lo indique arriba tuve que resolver varios errores, que fueron: 
```
A: let $reiniciar = document.getElementById("click", () => reiniciar());

Lo cambie por: 
let $reiniciar = document.getElementById("click");
$reiniciar.addEventListener("click", reiniciar);

```
Me salian en la consola dos advertencias de : 
"Incorrect use of <label for=FORM_ELEMENT>
The label's for attribute doesn't match any element id. This might prevent the browser from correctly autofilling the form and accessibility tools from working correctly.
To fix this issue, make sure the label's for attribute references the correct id of a form field."

Chat GPT me respondio que: "Para solucionar esta advertencia, asegúrate de que el valor del atributo for en tus etiquetas <label> coincida con el id del elemento de formulario que deseas asociar."
Yo tenia el codigo así:

```
<label for="jugadorCount">Jugador</label><p id="jugadorCount">0</p>
<label for="pcCount">PC</label><p id="pcCount">0</p

```
Chat GPT me recomendó quitar el imput, lo hice dejandolo así:
```
<p>Jugador: <span id="jugadorCount">0</span></p>
<p>PC: <span id="pcCount">0</span></p>
```

Y también me salian en la consola los errores:
   * "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" 
   * "Uncaught SyntaxError: Identifier '$nombreJugador' has already been declared".

 Consulté a chat GPT las posibilidades para resolverlo y me indicó: 
    
    1) Asegúrate de que no estés incluyendo el archivo JavaScript dos veces en tu página HTML.

    2) Asegúrate de que no tengas declaraciones duplicadas de variables en tu archivo "ppt.js".
    
    3)Para el error "Cannot read properties of null," asegúrate de que los elementos HTML con los IDs que estás intentando seleccionar existan en tu HTML y que sus IDs coincidan exactamente con los que estás utilizando en tu JavaScript.

Siguiendo esas recomendaciones borré una de las dos 
```
 <script src = "ppt.js"></script>" 
 ```
 que tenía (una antes del body y una justo antes de finalizarlo, dejé la última) y asi dejaron de aparecer los errores.


* Luego de esas correcciones seguia sin funcionar y cuando cambié la estructura del boton piedra, para agregarle la imagen empezó a funcionar, asi que realice el mismo formato para el resto de los botones y asi funciono correctamente.
Entiendo que el problema era no haberle declarado al boton el "type="button"".

* Cuando intenté que en la alerta de ganador me indicara el nombre ingresado por el usuario me salio: Ganador de la partida: [object HTMLInputElement]"
```
alert("Ganador de la partida: " +nombre);

Alerta: Ganador de la partida: [object HTMLInputElement]"
```
Lo corregi así:
```
alert("Ganador de la partida: " + $nombreJugador.value);

```
Noté que sin poner ningun nombre se ejecutaba igual, lo cual no deberia pasar, por como lo indica la consigna. Me queda pendiente lograr esa mejora.

* Noté que podia ver por impresion de pantalla en la consola quien ganaba cada jugada, pero el usuario solo veia el cambio en el contador, lo cual no permite ver el empate, etonces agregué un campo de texto que indicara ese resultado.



## Construido con 🛠️


* [Visual Estudio Code ](http://www.dropwizard.io/1.0.2/docs/) - Editor de código fuente


## Consultado 📖

Me fue de gran utilidad las explicaciones de Javascript y CSS de [w3schools](https://www.w3schools.com/)

En numerosas oportunidades consulté dudas al [Chat GPT](https://chat.openai.com/)

Para agregarle imágenes a los botones consulté en Youtube los videos de [divcode](https://www.youtube.com/watch?v=yeSj7xGDtIg).

Para agregarle una transición a los botones consulté en Youtube los videos de [jonyl](https://www.youtube.com/watch?v=p4HCZYJdzZo).

Fueron fundamentales las clases teóricas y prácticas del curso.


## Autora ✒️


* **Milagros Florencia Chavez** - *Estudiante del "Argentina Programa"* - [Florcita55](https://github.com/Florcita55)

---

