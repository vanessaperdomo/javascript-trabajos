/*
name exrcice: ninth
description:Simulating an Object on an Inclined Plane
The force parallel to the surface of an inclined plane is F_paralela = m * g * sin(θ).
autor: Laura Vanessa Perez Perdomo
Date: March 18th, 2025
*/


let number = parseInt(prompt(" Enter the number of iterations (n):"));
let mass = parseFloat(prompt(" Enter the mass (kg):"));
let gravity = parseFloat(prompt(" Enter the acceleration due to gravity :"));
let angle = parseFloat(prompt(" Enter the angle (in radians):"));


if (number > 0 && mass > 0 && gravity > 0 && angle > 0) {
    for (let counter = 0; counter <= number; counter++) {
       
        let parallelForce = mass * gravity * angle;


        console.log(`Iteracion ${counter}: Fuerza Paralela (Parallel Force) = ${parallelForce.toFixed(2)} N`);
    }
} else {
    console.log("Todos los valores deben ser mayores que 0. / All values must be greater than 0.");
}
