/*
    Name exercise: Cálculo del peso de un objeto en diferentes planetas
    Description: Cálculo del peso de un objeto en diferentes planetas P = m * g
    Autor: Laura Vanessa Perez Perdomo
    Date: March 20th, 2025
*/

let mass = parseFloat(prompt("Ingresa la masa del objeto (en kg):"));

	if (isNaN(mass) || mass <= 0) {
    alert("Por favor ingresa un número válido para la masa.");
} else {
    const gravities = {
        "Tierra": 9.8,
        "Marte": 3.7,
        "Júpiter": 24.8,
        "Luna": 1.6
    };

    for (let planet in gravities) {
        let gravity = gravities[planet]; // Gravedad del planeta actual
        let weight = mass * gravity; // Cálculo del peso
        console.log(`El peso del objeto en ${planet} es ${weight} N`); // Muestra el resultado
    }
}
