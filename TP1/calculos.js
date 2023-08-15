var $valor1 = document.getElementById("num1");
var $valor2 = document.getElementById("num2");
var $resultado = document.getElementById("res");
var $op = document.getElementById("operacion");
//Aquí se declaran las variables para utilizar los valores ingresados por el usuario.

function calcular(){

var v1 = Number($valor1.value); //Aqui se accede a las variables anteriores, y se convierte su valor en tipo númerico para poder realizar las operaciones martemáticas.
var v2 = Number($valor2.value);
var op = $op.value; 
var res; //Se define la variable que luego acumulara el resultado segun la operacon realizada.
if (op == "sumar"){ //Con formato condicional se define la operacion a realizar segun lo que haya decidido el usuario.
    res = v1 + v2;
} else if( op == "restar"){
    res = v1 - v2;
} else if( op == "multiplicar"){
    res = v1* v2;
} else if( op == "dividir" && v2 !==0){
    res = v1 / v2;
} else {
    alert("Operacion no valida. No es posible dividir por 0.") //Sale alerta si se divide por 0, como indicaba el TP.
} 
let pow=10;

document.getElementById("res").innerHTML = "El resultado es: " + String(res) ; //Se modifica el valor de id"res" de la hoja HTML por una linea de texto junto al resultado convertido en texto.
}


