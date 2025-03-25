/*
    Name exercise:  verificacion de la Primera Ley de Newton
    Description: verificacion de la Primera Ley de Newton
    Autor: Laura Vanessa Perez Perdomo
    Date: March 20th, 2025
*/


let n = parseInt(prompt("¿Cuántos valores de fuerzas netas deseas ingresar?"), 10); 

for (let i = 1; i <= n; i++) {
    let force = parseFloat(prompt(`Ingresa el valor de la fuerza neta en el cálculo ${i}:`)); 

    if (force === 0) {
        console.log(`Cálculo ${i}: El objeto permanece en reposo.`); 
    } else {
        console.log(`Cálculo ${i}: El objeto está en movimiento uniforme.`); 
    }
}


