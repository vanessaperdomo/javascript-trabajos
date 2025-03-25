/*
  name exrcice: calculating the weight of an object on Earth.
  description: ask the user for the mass and use the Earth's
  gravity to calculate the weight and display the result.
  author: Laura Vanessa Perez Perdomo. 
  date: March 15th, 2025
*/


let massObject;
let gravityEarth = 9.81;
let weightObject;


massObject = parseFloat(prompt("enter the mass objecto (N):"));

weightObject = massObject / gravityEarth;


console.log("the weight of the object is: " + weightObject);