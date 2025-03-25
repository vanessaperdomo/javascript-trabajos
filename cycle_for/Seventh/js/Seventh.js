/*
name exrcice: seventh
description:Calculation of the Frictional Force
The frictional force is calculated with the equation: F_fricción = μ * N, where:
• μ is the coefficient of friction
• N is normal (N = m * g)
autor: Laura Vanessa Perez Perdomo
Date: March 18th, 2025
*/

let mass = parseFloat(prompt("Ingrese la masa del objeto (kg):"));
let gravity = parseFloat(prompt("Ingrese la aceleracion de la gravedad (m/s²):"));
let frictionCoefficient = parseFloat(prompt("Ingrese el coeficiente de friccion:"));


if (mass > 0 && gravity > 0 && frictionCoefficient > 0) {
   
    let normalForce = mass * gravity;

    let frictionForce = frictionCoefficient * normalForce;

   
    console.log(`Fuerza Normal: ${normalForce.toFixed(2)} N`);
    console.log(`Fuerza de Friccion: ${frictionForce.toFixed(2)} N`);
} else {
    console.log("Todos los valores deben ser mayores que 0 para realizar el calculo.");
}
