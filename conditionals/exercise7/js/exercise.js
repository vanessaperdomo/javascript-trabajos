/*
	Name exercise: Calculating the Friction of an Object on a Surface.
	Description: calculates the frictional force between an object and 
        the surface on which it moves. ask the user: Object mass (kg),
        Coefficient of friction (mu), Gravitational acceleration (g). Calculate
        the normal force and frictional force: Formula: If the friction force is 
        greater than 50N, indicate that the friction is high. If it is less than 
        50N, indicate that the friction is low.
	Autor: Laura Vanessa Perez Perdomo
	Date: march 15th 2025
*/

let massObject;
let coeFriction;
let gravity=9.81;
let forceNor;
let forceFriction;

massObject = parseFloat(prompt("enter the mass object (kg):"));
coeFriction = parseFloat(prompt("enter the coefficient friction (m/s2):"));
console.log("the mass is:" + massObject);
console.log("the coefficient friction is:" + coeFriction);


forceNor= massObject*gravity;
forceFriction= coeFriction*forceNor;
console.log("result friction forcet:" + forceFriction);



if(forceFriction>50){
	console.log("the friction force is higt");
}
else{
	console.log("the friction force is low");
}
