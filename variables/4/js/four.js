/*
   name exrcice: Newton's first law. 
   description: Calculates the force applied to an object at rest to move it.
   author: Laura Vanessa Perez Perdomo. 
   date: March 15th, 2025
*/


let mass;
let acceleration;
let appliedForce;

mass = parseFloat(prompt("enter the mass (kg):"));
acceleration = parseFloat(prompt("enter the acceleration (m/s2):"));
console.log("mass:" + mass);
console.log("acceleration:" + acceleration);

appliedForce = mass * acceleration;

console.log("the applied force is: " + appliedForce + " N");

