/*
	Name exercise: Determining the Strength of an Object and Comparing It to a Limit
	Description: calculates the force exerted by an object and determines whether it 
        is greater or less than a threshold value.
	Autor: Laura Vanessa Perez Perdomo
	Date: march 15th 2025
*/

let mass;
let acceleration;
let force;
let number= 100;

mass = parseFloat(prompt("enter the mass (kg):"));
acceleration = parseFloat(prompt("enter the acceleracion (m/s2):"));
console.log("mass:" + mass);
console.log("acceleration:" + acceleration);


force= mass*acceleration;
console.log("force:" + force);


if(force>=100){
	console.log("the force is higb");
}
else{
	console.log("the force is low");
}




