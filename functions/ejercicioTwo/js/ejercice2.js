/*
  name exercise: funcion saludar
  description: funcion que  reciba el nombre y la edad y devuelva el saludo.
  autor: Laura Vanessa Perez Perdomo.
  date: march 26th 2025
*/


function saludar(nombre, edad) {
  return `holaa, me llamo ${nombre} y tengo ${edad} anos de vida`;
}


let nombre = prompt("Ingrese su nombre:");
let edad = parseFloat(prompt("Ingrese su edad:"));

console.log(saludar(nombre,edad));

  





    
   