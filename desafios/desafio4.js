//Desafíos
// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

console.log(listaGenerica);
// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos:
//  'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
console.log(lenguajesDeProgramacion);
// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
console.log(lenguajesDeProgramacion);
// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`Elemento ${i} ${lista [i]}`);
    }
}

mostrarLista(lenguajesDeProgramacion);
// 5. Crea una función que muestre en la consola todos los elementos de la lista 
// "lenguagesDeProgramacion en orden inverso.
function mostrarInverso(lista) {
    console.log("Lista recorrida del ultimo elemento:");
    for(let i = lista.length -1; i >= 0 ; i--){
        console.log(`Elemento ${i} ${lista [i]}`);
    }
}

mostrarInverso(lenguajesDeProgramacion);
// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio(lista){
    let promedio=0;
    lista.forEach(element => {
        promedio += element/lista.length;
    });
    return promedio;
}

console.log(promedio([1,2,3,4,5,6]));
// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMaxyMin(lista) {
    let max = lista[0]; //inicializamos en el primer elemento 
    let min = lista[0]; //inicializamos en el primer elemento
    for (let i = 0; i < lista.length; i++) {
        if(min > lista[i]){
            min = lista[i];
        }
        if(max < lista[i]){
            max= lista[i];
        }
    }
    console.log("El número más grande contenido es : " +max);
    console.log("El número más pequeño contenido es : " +min);
}

mostrarMaxyMin([6,23,90,3,6,9,10,1]);
// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(lista){
    let suma = 0;
    lista.forEach(Num => {
        suma +=Num;
    });
    return suma;
}

console.log(sumarElementos([1,2,3,4,5,6,7,8,9,10]));

// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro,
//  o -1 si no existe en la lista.
function devolverPosicion(lista , buscado){
    for (let i = 0; i < lista.length; i++) {
        if (buscado == lista[i]){
            return i;
        }
    }
    return -1;
}
console.log(devolverPosicion([1,2,3,4,5,6,7,8,9,10], 6));
console.log(devolverPosicion([1,2,3,4,5,6,7,8,9,10], 11));

// 10. Crea una función que reciba dos listas de números del mismo tamaño y 
// devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2){
    let nuevaLista= [];
    
    if(lista1.length == lista2.length){
        for (let i = 0; i < lista1.length; i++) {
            nuevaLista[i]= lista1[i]+lista2[i];
        }
    }
    return nuevaLista; //retorna una lista vacia en casa de que las listas no sean de la misma longitud
}

let lista1= [1,2,3];
let lista2= [4,5,6];

console.log(sumarListas(lista1,lista2));
lista1.push(5);
console.log(sumarListas(lista1,lista2)); //devuelve una lista vacia

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista){
//El método map()crea un nuevo array con los resultados de la 
// llamada a la función indicada aplicadas a cada uno de sus elementos.
    return lista.map(num => num ** 2);
}
console.log(lista1)
console.log(cuadradoLista(lista1)); 