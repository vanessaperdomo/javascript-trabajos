/*
Description:  Math operations
Autor: laura perez
Date: 26-march-2025
*/

let numberOne;
let numberTwo;
let addResult1;
let subtResult;
let multiResult;

function addition(numberOne, numberTwo){
	addResult=numberOne + numberTwo;
	return addResult;
}

function subtraction(numberOne, numberTwo){
	subtResult=numberOne-numberTwo;
	return subtResult;
}

function multi(numberOne, numberTwo){
	multiResult=numberOne*numberTwo;
	return multiResult;
}

addResult1 = addition(12, 23);
subtResult = subtraction(43, 11);
multiResult = multi(3, 5);

console.log(`Addition 1: ${addResult1}`);
console.log('Substraction: ' + subtResult);
console.log('Multiplication: ' + multiResult);

console.log(`Operactions: Add: ${addResult1} | Subst: ${subtResult} | Multi:${multiResult}`);

console.log('Operactions with +++ :'+ 'Add:'+ addResult1 +'| Subst:' + subtResult + '| Multi: ' + multiResult);
