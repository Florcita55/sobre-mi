# Calculadora Simple

_Este proyecto es el resultado del primer trabajo práctico del curso "Páginas web con Componentes Dinámicos" del programa nacional de formación y capacitación "Argentina Programa" dictado por profesores de FAMAF- UNC_

## Comenzando 🚀

Esta calculadora permite realizar tan solo 4 operaciones: sumar, restar, mnultiplicar y dividir

La manera de utlizarla es muy intuitiva: 
Se presentan 2 campos de textos en los cuales el usuario puede ingresar los valores que desea calcular mediado por un listado de las operaciones mencionadas. Una vez completadas estas acciones se uede apretar el botón "calcular" que arrojará el resultado. _


## Descripcion del proceso ⚙️

A pesar de la simpleza de la actividad es la primera vez que utilizo HTML, CSS y Javascript de manera vinculada, y ello me llevó grandes dificultades 

### HTML 🔩

_Inicie con una hoja HTML, en la cual copie la utilizada en la clase de la calculadora de edad, y fui probando y googleando a que hacía referencia cada parte que quiza no habiamos visto en clase. Por ejemplo la etiqueta form._

Algunos de los cambios realizados fueron:

* Cambié los nombres de las clases y las id por palabras en español que hicieran referencia a la calculadora;

* Cambié el valor que podia ingresarse en el campo de texto de "text" a "number";

* Agregué un select con las opciones para calcular;

* El boton de Calcular solo le cambié el nombre de la funcion a realizar en javascript;

* La ultima modificación fue agregarle el contador de caracteres, el cual lo hice de manera interna en esta misma hoja. 


### CSS ⌨️
Para iniciar mi formato en CSS Tomé la hoja de estilo de la calculadora de edad y fui probando y modificando valores.

Algunos de los cambios:

→ Primero tuve que cambiar los selectores para que coincidan con los cambios de los nombres de las clases y las id realizados en html.

→ Cambié algunos colores, tamaños de letra y márgenes para que la disposición de cada elemento fuera abajo de la anterior y no al costado como el modelo.

→ Agregué comentarios en la hoja sobre qué significan cada linea, las cuales google o consulté al chat GPT.

→ Sumé un cuadro de texto para el resultado. Y el formato lo copié de los cuadros de textos que tenia para que quedara igual.

→ Sumé el formato del select, con ayuda de chat GPT jugando con los valores hasta que logré uno que me gustó.


### JS ⌨️

Esta fue la parte que más me costó resolver. Principalmente porque el modelo de la calculadora de edad ya no me resultaba muy útil.

Aquí fue muy importante la clase práctica donde consulté cómo utilizar los valores que ingresaban los usuarios usando getElementById para buscarlo en funcion de la id, y con la recomendacion del profe de nombrar la variable con un símbolo "$" adelante y luego en la funcion poder usar su valor con ".value". 

En esa clase tambien entendi que necesitaba crear una variable para almacenar el valor de las operaciones realizadas.

Asi construí las 4 opciones con el formato condicional del "if".
Y lo que más tiempo me costó resolver (fueron varios días y muchos enojos) que fue la linea que modificara el valor del último campo de texto donde deberia indicar el resultado.


Pensé que la forma de hacerlo era usando text.Content y convirtiendo a texto con toString:

```
resultado.textContent = "El resultado es: " + res.toString();
```
Pero no lograba que arrojara un resultado. Entonces volví a ver el modelo de la calculadora de edad e intenté conseguirla con mis valores.

```
document.getElementById("age").innerHTML = "Tenes " + y + " años y " + m + " meses con " + d + " días de Edad.";
```
Así cambie el nombre "age" por "res" y a res lo tranforme en texto con String().

_Y para mi gran alegría así funcionó!_

## Pruebas⚙️
* Antes de corregir el último erros que mencioné, probe todas las operaciones con distintos valores y no lograba que resultados arrojara nada.
* Cuando lo solucioné, comencé intentando sumar distintos valores y funcionaba bien. No logré configurar que si falta un valor en alguno de los campos me tire una advertencia.
* Generé una alerta si el usuario intenta dividir por cero, como inficaba el práctico.
* No entendí como limitar un resultado demasiado grande o demasiado chico, pero si busqué como limitar la cantidad de valores que pueden ser ingresados, y eso limita excesos. Ya que si multiplico los mayores números posibles (999999999) se alcanza el valor: 9999999998000000000o, que se puede ver e interpretar con claridad.


## Construido con 🛠️


* [Visual Estudio Code ](http://www.dropwizard.io/1.0.2/docs/) - Editor de código fuente


## Consultado 📖

Me fue de gran utilidad las explicaciones de Javascript y CSS de [w3schools](https://www.w3schools.com/)

En numerosas oportunidades consulté dudas al [Chat GPT](https://chat.openai.com/)

Clases teóricas y prácticas del curso.


## Autora ✒️


* **Milagros Florencia Chavez** - *Estudiante* - [Florcita55](https://github.com/Florcita55)

---

