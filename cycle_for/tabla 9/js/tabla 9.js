/*
	Name exercise: tabla 9 for
	Description: Tabla de multiplicar del 9
	Autor: Laura Vanessa Perez Perdomo
	Date: March 19th, 2025
*/

let number =9;

for (let counter = 1; counter <= 5; counter++) {
    let product = number * counter;
    let type = (product % 2 === 0) ? "odd" : "even";
    console.log(`${number} x ${counter} = ${product} (${type})`);
}

 