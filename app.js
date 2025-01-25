let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//TODO: Como implementar una variable adicional para limitar la cantidad de veces que se puede jugar antes de reiniciar el juego.
//Manipulando el DOM (document Object Model)
//Funcion que recibe dos parametros (un elemento html como p h1, etc y el texto que queremos ponerle al elemento html)
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//funcion que genera un número entre 1 y 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearón todos los números posibles.')
    }else{
        // si el numero generedo esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
}

function verificarIntento(){
    let intentoUsuario = parseInt(document.getElementById('input-valor').value); //paeseInt convierte el string en number
    
    if (numeroSecreto === intentoUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }else{
        //en caso de no acertar doy una pista al ususario
        if(intentoUsuario > numeroSecreto){
            asignarTextoElemento('p',`El número secreto es menor `);
        }else{
            asignarTextoElemento('p',`El número secreto es mayor `);
        }
        limpiarCaja();
    }
    intentos++;
    console.log(intentos);
}

function limpiarCaja(){
    document.querySelector('#input-valor').value = ''; //querySelector por id #asipasoelid
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensajes de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');

}

condicionesIniciales();