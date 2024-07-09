// Basics
let nyMane = "PorsakenBeanutFutter"
const pi = 3; // engineer moment
let death = "unavoidable";
let myArr = [1, 2, 3, 4, 5];
myArr = [2, 3, 4, 5, 6];
let semicolon = false;

console.log(nyMane);
console.log(pi);
console.log(death);
console.log(myArr);
console.log(semicolon);

// Playing with numbers
let a = (5 + 7) * 2;
let b = (5 - 7) / 3;
let c = 5 ** 7;
let d = 123 % 45;
console.log(a, b, c, d)

let e = Math.E;
let f = Math.round(123.12836182);
let g = Math.cos(Math.PI);
let h = Math.random();
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// Strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let nameLength = fullName.length;
console.log(fullName + ", Length: " + nameLength);

let language = "JavaScript";
console.log(language[0]);
console.log(language.substring(2,5))
console.log(language.toUpperCase());
console.log(language.replace("Java", "Type"))
console.log(language.includes("Java"))

// use string literals
console.log(`Imagine not knowing this is ${language.includes("Java")}`)
