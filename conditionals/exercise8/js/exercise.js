/*
	Name exercise: Calculating the acceleration of an object subjected to a force.
	Description: Design a flow chart that allows calculating the acceleration of an 
        object subjected to a force given its mass. Ask the user: Object mass (kg) and 
        applied force (N). Calculate acceleration with Newton's second law: Formula: 
        Determine whether acceleration is high or low according to a threshold of 5 m/s².
	Autor: Laura Vanessa Perez Perdomo
	Date: march 18th 2025
*/

let appliedForce;
let massObject;
let acceleration;

appliedForce = parseFloat(prompt("Ingrese la fuerza aplicada del objeto (N):"));
massObject = parseFloat(prompt("Ingrese la masa del objeto (kg):"));
console.log("applied force:" + appliedForce);
console.log("mass object:" + massObject);


acceleration = appliedForce / massObject;
console.log("acceleration:" + acceleration);


if (acceleration > 5) {
  console.log("acceleration is high");
} else {
  console.log("acceleration is low");
}