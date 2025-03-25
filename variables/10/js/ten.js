/*
  name exrcice:  Calculation of a gun's recoil after firing. 
  description: I asked for the mass of the gun, the mass of the bullet, 
  and the bullet's  velocity. The recoil velocity of the weapon will be 
  calculated using a formula, and the result will be displayed.
  author: Laura Vanessa Perez Perdomo. 
  date: March 15th, 2025
*/


let weaponMass;
let massBullet;
let bulletSpeed;
let reverseSpeed;


weaponMass = parseFloat(prompt("enter the weapon mass (kg):"));
massBullet = parseFloat(prompt("enter the mass bullet (kg):"));
bulletSpeed = parseFloat(prompt("enter the bullet speed (m/s):"));
console.log("weapon mass: " + weaponMass + "kg");
console.log("mass bullet: " + massBullet + "kg");
console.log("bullet speed: " + bulletSpeed + "m/s");


reverseSpeed = (massBullet * bulletSpeed) / weaponMass;


console.log("the recoil speed of the weapon used is: " + reverseSpeed);
