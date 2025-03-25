/*
	Name exercise: Comparison of two bodies in free fall.
	Description: receives the mass of two bodies in free fall, calculates 
        the gravitational force of each, and determines. Which body exerts 
        greater gravitational force and whether both forces are equal. Formula 
        (Newton's Second Law considering gravity): Where g = 9.81 m/s² (Earth 
        gravity).
	Autor: Laura Vanessa Perez Perdomo
	Date: march 15th 2025
*/

let massOne;
let massTwo;
let gravity=9.81;
let forceOne;
let forceTwo;

massOne = parseFloat(prompt("enter the mass 1 (kg):"));
massTwo = parseFloat(prompt("enter the mass 2 (m/s2):"));
console.log("first mass entered:" + massOne);
console.log("seconds mass entered:" + massTwo);


forceOne= massOne*gravity;
forceTwo= massTwo*gravity;
console.log("force one:" + forceOne);
console.log("force two:" + forceTwo);



if(forceOne==forceTwo){
	console.log("Are equals forces");
}
else if(forceOne>forceTwo){
	console.log("force one majeure");
}
else{
	console.log("force two majeure");
}




