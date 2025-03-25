/*
  name exrcice: Calculation of the net force on a body with multiple applied forces.
  description: Ask the user for three forces applied in different directions, calculate      
  the net force with the formula and display the result.
  author: Laura Vanessa Perez Perdomo. 
  date: March 15th, 2025
*/


let appliedForceOne;
let appliedForceTwo;
let appliedForceThree;
let netForce;


appliedForceOne = parseFloat(prompt("enter the applied force 1 (N):"));
appliedForceTwo = parseFloat(prompt("enter the applied force 2 (N):"));
appliedForceThree = parseFloat(prompt("enter the applied force 3 (N):"));
console.log("force one:" + appliedForceOne);
console.log("force two:" + appliedForceTwo);
console.log("force three:" + appliedForceThree);

netForce = appliedForceOne + appliedForceTwo + appliedForceThree;


console.log("the net force is: " + netForce + "N");