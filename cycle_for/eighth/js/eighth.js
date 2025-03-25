/*
name exrcice: eighth
description:: Calculating Tension on a Rope
When an object hangs from a rope, the tension on the rope is calculated as T =
m*g, if there is no additional acceleration.
autor: Laura Vanessa Perez Perdomo
Date: March 18th, 2025
*/

let number = parseInt(prompt(" Enter the number of iterations (n):"));
let mass = parseFloat(prompt("Enter the mass (kg):"));
let gravity = parseFloat(prompt(" Enter the acceleration due to gravity (m/s²):"));


if (number > 0 && mass > 0 && gravity > 0) {
    for (let counter = 0; counter <= number; counter++) {
       
        let strain = mass * gravity;

    
        console.log(`Iteracion ${counter}: Deformacion (Strain) = ${strain.toFixed(2)} N`);
    }
} else {
    console.log(" All values must be greater than 0.");
}
