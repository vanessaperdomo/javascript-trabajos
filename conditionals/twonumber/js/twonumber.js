/*
	Name exercise: Two numbers.
	Description: read two numbers and print if they are 
        equal or not equal print the largest.
	Author: Laura Vanessa Perez Perdomo.
	Date: march 15th 2025
*/

let numberOne;
let numberTwo;


numberOne = parseFloat(prompt("enter the number one"));
numberTwo = parseFloat(prompt("enter the number two"));
console.log("number one:" + numberOne);
console.log("number two:" + numberTwo);


if(numberOne==numberTwo){
	console.log("Are equals");
}
else if(numberOne>numberTwo){
	console.log("Number One is greater");
}
else{
	console.log("Number Two is greater");
}




