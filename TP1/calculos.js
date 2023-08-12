var $valor1 = document.getElementById("num1");
var $valor2 = document.getElementById("num2");
var $resultado = document.getElementById("resultado");
var $op = document.getElementById("op");

function calcular(){
var v1 = Number($valor1.value);
var v2 = Number($valor2.value);
var operacion = $op.value;
var res;
if (operacion == "sumar"){
    res = v1 + v2;
} else if( operacion == "restar"){
    res = valor1 - valor2;
} else if( operacion == "multiplicar"){
    res = valor1 * valor2;
} else if( operacion == "dividir" && valor2 !==0){
    res = valor1 / valor2;
} else {
    resultado.textContent = "Operacion no válida";
    return ;
}
resultado.textContent = "El resultado es: " + res.toString();
}
