/*
	Name exercise: tabla 1-5 for
	Description: Tabla de multiplicar del 1-5
	Autor: Laura Vanessa Perez Perdomo
	Date: March 19th, 2025
*/

let number =5;


    for (let number = 1; number <= 5; number++) {
    console.log(`Tabla del ${number}:`);
    // Multiplique cada número (1-5) del 1 al 5 por los números del 1 al 5
    for (let counter = 1; counter <= 5; counter++) {
        let product = number * counter;
        let type = (product % 2 === 0) ? "buzz" : "bass";
        console.log(`${number} x ${counter} = ${product} (${type})`);
    }
    console.log();  // para separar
}