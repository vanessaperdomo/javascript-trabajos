/*
  name exercise: funcion de par y impares
  description: funcion que reciba un numero y retorne si es para o impar.
  autor: Laura Vanessa Perez Perdomo.
  date: march 26th 2025
*/


function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return `el numero ${numero} es par`;
  } else {
    return `el numero ${numero} es impar`;
  }
}

let numero = parseFloat(prompt("Ingrese un numero"));

console.log(esParOImpar(numero));







    
   