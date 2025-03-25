/*
   name exrcice: Newton's second law (force and acceleration). 
   description: Calculate the acceleration of a car and show the result.
   author: Laura Vanessa Perez Perdomo. 
   date: March 15th, 2025
*/


let appliedForce;
let mass;
let carAcceleration;


appliedForce = parseFloat(prompt("enter the force (N):"));
mass = parseFloat(prompt("enter the mass (kg):"));


carAcceleration = appliedForce / mass;


console.log("the acceleration of the car is: " + carAcceleration);