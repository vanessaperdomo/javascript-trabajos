/*
  name exercice: Calculate force using Newton's second law.
  description: Request a mass (m) and acceleration (a) and calculate the force (F)
  by applying the formula: F=m×aF = m \times a. Additional conditions: The total 
  sum of all calculated forces must be accumulated, and the number of calculations 
  performed must be counted. The program ends when the user enters a negative mass 
  or acceleration.  
  author: Laura Vanessa Perez Perdomo. 
  date: March 20th, 2025
*/


let mass;
let acceleration;
let force;
let totalForce = 0;
let calculations = 0;

while (true) {
  mass = parseFloat(prompt("enter the mass (m):"));
  acceleration = parseFloat(prompt("enter the acceleration (a):"));

  if (mass > 0 && acceleration > 0) {
    force = mass * acceleration;
    console.log("the force is: " + force + "F");
    totalForce = totalForce + force;
    calculations++;
  } else {
    break;
  }
}

console.log("total sum of all forces: " + totalForce);
console.log("calculation of forces exerted: " + calculations);

