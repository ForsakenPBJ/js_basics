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

// conditionals
let age = parseFloat(prompt("Please enter your age: "));

if (age >= 19){
    console.log("Wow, you're old!");
}
else if (age <= 12){
    console.log("Hello, child.");
}
else{
    console.log("Angsty teen coming by.");
}

console.log();

// for loop
let fruits = ["apple", "pinnaple", "pen", "coconut", "nut"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log();

for (let fruit of fruits){
    console.log(fruit);
}

console.log();

// while loop
console.log("Continue? ")
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}

console.log("You failed.")
console.log()
// Array (similar to Python lists)
let numbers = [123, 456, 789, 0];
let schools = ["RI", "ASR", "EJC", "ACJC"];
let mixed = [1.23, "Horn", [1, 2, 3, 4]];

console.log(numbers[0]);
console.log(schools.length);

schools.push("TMJC");
mixed.push('A');
console.log(schools);
schools.pop();
console.log(schools);

for (let i = 0; i < schools.length; i++){
    console.log(schools[i]);
}

// Objects (just straight up (Monty) Python shii)
let person = {
    firstName: "Johnny",
    lastName: "Deer",
    dead: true
}

console.log(person.firstName)

// Functions
function cube(x){
    return x ** 3;
}
console.log(cube(5));

// Arrow function
let magnitude =  (i, j, k) => Math.sqrt(i**2 + j**2 + k**2);
console.log(magnitude(1, 1, 1))
