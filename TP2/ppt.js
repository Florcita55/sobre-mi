let $nombreJugador = document.getElementById("nombre");
let $puntajeJugador = document.getElementById("jugadorCount");
let $puntajePC = document.getElementById("pcCount");
let $reiniciar = document.getElementById("reiniciar");
$reiniciar.addEventListener("click", reiniciar);

let $botonPiedra = document.getElementById("piedra");
$botonPiedra.addEventListener("click", () => jugar("piedra"));

let $botonPapel = document.getElementById("papel");
$botonPapel.addEventListener("click", () => jugar("papel"));

let $botonTijera = document.getElementById("tijera");
$botonTijera.addEventListener("click", () => jugar("tijera"));


let jugadorCount = 0;
let pcCount= 0;

function agregarNombre(){
    let nombre= $nombreJugador.value;
    if(nombre.trim() !== ""){
        console.log(nombre);
    }
}

function obtenerJugadaComputadora() {
    let numAleatorio =  Math.floor(Math.random() * 3);
    if (numAleatorio === 0){
        return "piedra";
    } else if (numAleatorio === 1){
        return "papel";
    }else if (numAleatorio === 2){
        return "tijera";
    }
}

function jugar(id){
jUsuario= id;
jComputadora = obtenerJugadaComputadora();
determinarGanador(jUsuario, jComputadora);
}

function determinarGanador(jUsuario, jComputadora){
    if (jComputadora ===  jUsuario){
        document.getElementById("res").innerHTML = "Empate";
    }
    else if (
        (jComputadora ===  "piedra" && jUsuario === "tijera") ||
        (jComputadora ===  "tijera" && jUsuario === "papel") ||
        (jComputadora ===  "papel" && jUsuario === "piedra")
    ){
         pcCount++;
         $puntajePC.innerHTML = pcCount;
         document.getElementById("res").innerHTML = "Gana la PC";
    } else {
        jugadorCount++; 
        $puntajeJugador.innerHTML = jugadorCount; 
        document.getElementById("res").innerHTML = "Gana " + $nombreJugador.value; 
    }
    if (jugadorCount >=3 || pcCount >=3){
        
        if (jugadorCount >=3 ){
            alert("Ganador de la partida: " + $nombreJugador.value);
        }else if (pcCount >= 3){
            alert("Ganador de la partida: PC");
        }

    $reiniciar.style.display = "block";
    }
}

function reiniciar(){
    jugadorCount = 0;
    pcCount = 0;
    $puntajeJugador.innerHTML = jugadorCount;
    $puntajePC.innerHTML = pcCount;
    $reiniciar.style.display = "none";
}