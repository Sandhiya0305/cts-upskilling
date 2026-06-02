/*
5. Objects and Prototypes
Scenario: Each event is an object with properties and methods.
Objective: Model real-world entities using objects.
Task:
• Define Event constructor or class
• Add checkAvailability() to prototype
• List object keys and values using Object.entries()
*/

function Event(a, b, c) {
	this.name = a;
	this.seats = b;
	this.type = c;
}

Event.prototype.checkAvailability = function () {
	return this.seats > 0;
};

const a = new Event("Workshop", 5, "learn");
console.log(Object.entries(a));
console.log(a.checkAvailability());