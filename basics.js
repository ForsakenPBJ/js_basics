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

// Html bs

// Add alert and Prompt
alert("Hello World");
let name = prompt("Enter your name: ");
alert(name);
if (name) {
	alert("Hello " + name + "!!!");
	document.getElementById("greeting").textContent = "Hello " + name + "!";
}
else {
	alert("Are you nameless????");
	document.getElementById("greeting").textContent = "Hello " + "noName";
}

// Time
let now = new Date();
let dateStr = now.toLocateDateString();
let timeStr = now.toLocateTimeString();      
document.getElementById("datetime").textContent = dateStr + timeStr;

// Step 1: Identify element by id
		const header = document.getElementById("header");
		const button = document.getElementById("colorButton");
		
		// Step 2: Define array of colours
		const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
		
		let index = 0;
		
		// Step 3: Define function to run when button is clicked
		function changeColour() {
			header.style.backgroundColor = colors[index];
			index++;
			if (index >= colors.length) {
				index = 0;
			}
		}
		
		// Step 4: Add event listener to the button
		button.addEventListener("click", changeColour);
		
		// Step 4: Add mouseover and mouseout effects using nameless functions
		button.addEventListener("mouseover", function(){
			button.style.backgroundColor = "teal";
			button.style.color = "orange";
			button.textContent = "Click me!";
		});
		button.addEventListener("mouseout", function(){
			button.style.backgroundColor = "transparent";
			button.style.color = "black";
			button.textContent = "Change Colour";
		});
