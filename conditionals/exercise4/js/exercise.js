/*
	Name exercise: Calculating the acceleration of an object subjected to a force.
	Description: receives three notes and performs the following       
        calculations:
        - Calculate the percentages of each grade:
        - Grade 1 → 20%
        - Grade 2 → 35%
        - Grade 3 → 45%
        - Add the percentages of the grades and classify the final grade:
        - Greater than 4.5 → top grade
        - Between 3.5 and 4.5 → Good Grade
        - Between 3 and 3.5 → Average Grade
        - Less than 3 → Bad Grade
	Autor: Laura Vanessa Perez Perdomo
	Date: march 18th 2025
*/

let gradeOne;
let gradeTwo;
let gradeThree;
let gradeOnePorc=0.2;
let gradeTwoPorc=0.35;
let gradeThreePorc=0.45;
let porcOne;
let porcTwo;
let porcThree;
let gradeFi;


gradeOne = parseFloat(prompt("enter grade 1:"));
gradeTwo = parseFloat(prompt("enter grade 2:"));
gradeThree = parseFloat(prompt("enter grade 3:"));

console.log("first note:" + gradeOne);
console.log("seconds note:" + gradeTwo);
console.log("third note:" + gradeThree);


porcOne= gradeOne*gradeOnePorc;
porcTwo= gradeTwo*gradeTwoPorc;
porcThree= gradeThree*gradeThreePorc;

console.log("first grade percentage:" + porcOne);
console.log("seconds grade percentage:" + porcTwo);
console.log("third grade percentage:" + porcThree);


gradeFi= porcOne+porcTwo+porcThree;

console.log("add percentages:" + gradeFi);


if(gradeFi>4.5){
	console.log("top grade");
}
else if(gradeFi>3.5 && gradeFi<4.5){
	console.log("good grade");
}
else if(gradeFi>3 && gradeFi<3.5){
        console.log("avarage grade");
}
else{ 
        console.log("bad grade");
}


     


