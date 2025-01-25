//Desafios:
// 1. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";
// 2. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function clickButton (){
    alert("El botón fue clicado!");
}
// 3. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
// Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function mensaje(){
    let ciudad = prompt("Ingresa el nombre de una ciudad de Brasil ");
    alert(`Estuve en ${ciudad} y me acordé de ti <3.`);
}
// 4. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function alerta(){
    alert("Yo amo JS <3.")
}
// 5. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma(){
    let num1= Number( prompt("Ingrese el primer valor : "));
    let num2 = Number(prompt("Ingrese el segundo valor :"));
    
    alert(`El resultado de ${num1} + ${num2} es : ${num1 + num2}`);
}
