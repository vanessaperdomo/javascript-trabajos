/*
  name exercise: funcion aceleracion
  description: funcion que reciba fuerza y masa, y que devuelva aceleracion.
  autor: Laura Vanessa Perez Perdomo.
  date: march 26th 2025
*/


function calcularAcceleration (force,mass) {
 return force / mass;
}

let force = parseFloat(prompt("ingrese la fuerza"));
let mass = parseFloat(prompt("ingrese la masa"));

console.log(`the acceleration is: ${calcularAcceleration(force,mass)}`);


  





    
   