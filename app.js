
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 0;
let cantidadIntentosMaximos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    // Verificar si se ha alcanzado el máximo de intentos
    if (intentos > cantidadIntentosMaximos) {
        asignarTextoElemento('p', `Has superado el número de intentos permitidos. El número secreto era ${numeroSecreto}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        return;
    }

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} intento${(intentos === 1) ? '' : 's'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es mayor');
    } else {
        asignarTextoElemento('p', 'El número secreto es menor');
    }
    intentos++;
    limpiarCaja();
    return;
}

 

function condicionesIniciales() {
    numeroMaximo = generarNumeroMaximos();
    cantidadIntentosMaximos = generarIntentosMaximos();
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    document.getElementById('valorUsuario').removeAttribute('disabled'); // Habilitar la entrada
}   

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroMaximos() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarIntentosMaximos() {
     return Math.floor(Math.random() * 10) + 1;
}    





function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    asignarTextoElemento ('p', `Se ha generado un numero secreto entre 1 y ${numeroMaximo} . Tienes ${cantidadIntentosMaximos} ${cantidadIntentosMaximos == 1? 'intento' : 'intentos' } y debes adivinarlo.`);
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
    console.log(cantidadIntentosMaximos);
     if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.');    
    } else {
            // Asegurarse que el número no haya sido generado antes. Si lo ha sido, generar uno nuevo.
       if (listaNumerosSorteados.includes(numeroGenerado)) {
                    return generarNumeroSecreto();
        } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }           
    }
    
}


condicionesIniciales();

