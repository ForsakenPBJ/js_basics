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