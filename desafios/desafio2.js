//Desafíos:

// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarHola() {
    console.log('¡Hola, mundo!');
}
mostrarHola();
// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaNombre('Matias');
// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function numeroDoble(num) {
    return num*2;
}
console.log(numeroDoble(2));
// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(x,y,z){
    return (x+y+z)/3;
}
console.log(promedio(4,5,6));
// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function devolverMayor(x,y){
    return x > y ? x : y;
}
console.log(devolverMayor(5,6));
// 6. Crear una función que reciba un número como parámetro 
// y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(x){
    return x*x;
}

console.log(cuadrado(3));