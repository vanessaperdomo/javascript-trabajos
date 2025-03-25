/*
    Name exercise: calculo de la fuerza resultante
    Description: calculo de la fuerza resultante
    Autor: Laura Vanessa Perez Perdomo
    Date: March 19th, 2025
*/

let numberOfCalculations = parseInt(prompt("¿Cuántos cálculos deseas realizar?"), 10); //cantidad de cálculos

for (let counter = 1; counter <= numberOfCalculations; counter++) {
    let mass = parseFloat(prompt(`Ingresa la masa para el cálculo ${counter}:`)); //Masa
    let acceleration = parseFloat(prompt(`Ingresa la aceleración para el cálculo ${counter}:`)); //aceleración

    let force = mass * acceleration; // Calcula la fuerza
    console.log(`Cálculo ${counter}: La fuerza resultante es ${force} N`); // Muestra el resultado
}
