let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`¡Felicidades! haz ganado en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario falló
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','Mucho ojo cuate, el número es menor.');
        } else{
            asignarTextoElemento('p','El número es mayor');
        }
    intentos++;
    limipiarInput();
    }
    return;
}

function limipiarInput() {
    let estadoCaja = document.querySelector('#valorUsuario');
    estadoCaja.value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','El Capi Secreto');
    asignarTextoElemento('p',`Introduce un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limipiarInput();
    //Indicar el intervalo de entrada 
    //Generar nuevo número 
    //Reiniciar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón de nuevo
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

function generarAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si llegamos al máximo de numeros posibles
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','¡Finalizaste el Juego!');
    } else {
        //Si el número generado está incluido en la lista entonces...
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarAleatorio();
        } else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();
