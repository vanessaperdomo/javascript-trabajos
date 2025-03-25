/*
  name exrcice: Newton's third law (action and reaction). 
  description: Calculate the reaction force when pushing an object. Calculate 
  the force applied to the object using Newton's third law formula and show the 
  result.
  author: Laura Vanessa Perez Perdomo. 
  date: March 15th, 2025
*/


let reactionForce;
let appliedForce;


appliedForce = parseFloat(prompt("enter the applied force (N):"));
reactionForce = - appliedForce;


console.log("the reaction force is: " + reactionForce + "N");
