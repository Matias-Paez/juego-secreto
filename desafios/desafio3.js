// Desafíos:
// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a 
// partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(altura_mts, peso){
    // Formula IMC = peso / (altura 2)
    return(peso/altura_mts**2);
}

console.log(calcularIMC(1.72,65));

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(x){
    //fatorial = x(x-1).(x-2)...
    let result = 1;
    for (let i = 1 ; i < (x+1); i++) {
        result = i*result;
    }
    return result;
}

console.log(factorial(10));
//usando recursividad 
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
}


// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
// equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
// Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresRealaes(usd){
    let contizacionDolar = 4.80;
    return usd * contizacionDolar;
}

console.log( convertirDolaresRealaes(10));
// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
// utilizando la altura y la anchura que se proporcionarán como parámetros.
function AreaPerimetroRectangulo (alto , ancho){
    let area = alto*ancho;
    let perimetro = 2*(alto + ancho);
    
    console.log("Área : " +area +"\nPerímetro : "+perimetro);
}

AreaPerimetroRectangulo(2,4);
// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function AreaPerimetroCirulo (radio){
    let Pi = 3.14;
    let area = Pi*(radio**2);
    let perimetro = 2*Pi*radio;
    console.log("Área : " +area +"\nPerímetro : "+perimetro);
}

AreaPerimetroCirulo(4);

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaDeMultiplicar(x){
    console.log("Tabla del Multiplicar del " +x);
    for (let i = 0; i < 11 ; i++) {
        console.log(`${x} x ${i} : ${x*i}`);
    }
}

tablaDeMultiplicar(5);