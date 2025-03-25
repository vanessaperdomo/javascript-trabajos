/*
  name exercice: calculation of newton third law action and reaction.
  description: The user is asked for the applied force and with the given 
  formula, the result of the reaction force is shown, the total sum of all 
  the applied forces, calculations performed and the program ends when a 
  force of 0 is entered.
  author: Laura Vanessa Perez Perdomo. 
  date: March 20th, 2025
*/


let totalForce = 0;
let calculations = 0;

while (true) {
  let appliedForce = parseFloat(prompt("Enter the applied force:"));

  if (appliedForce <= 0) {
    break;
  } else {
    let reactionForce = -appliedForce;
    console.log("The reaction force is: " + reactionForce);
    totalForce = totalForce + appliedForce;
    calculations++;
  }
}

console.log("Total sum of all applied forces: " + totalForce);
console.log("Calculations made: " + calculations);


 
       
          
    


