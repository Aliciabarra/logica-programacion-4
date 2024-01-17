let numero=parseInt(prompt("Ingrese un numero igual o mayor a 1: "));
//ingrese numero valido
while (isNaN(numero) || numero < 1) {
    numero=parseInt(prompt("Ingrese un numero valido (igual o mayor a 1"));
}
const secuenciaFib= fibonacci (numero);

function fibonacci(n) {
    let fibArray = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
  
    return fibArray.slice(0, n);
  }
// Crear un elemento de párrafo para mostrar la serie Fibonacci
const resultadoParrafo = document.createElement("p");
resultadoParrafo.textContent = "Serie Fibonacci: " + secuenciaFib.join(", ");
// Añadir el elemento de párrafo al contenedor
resultadoDiv.appendChild(resultadoParrafo);

