/*
4. Functions, Scope, Closures, Higher-Order Functions
Scenario: Create reusable functions for event operations.
Objective: Encapsulate logic and use closures.
Task:
• Create addEvent(), registerUser(), filterEventsByCategory()
• Use closure to track total registrations for a category
• Pass callbacks to filter functions for dynamic search
*/

const a = [];

function addEvent(b, c) {
	a.push({ b: b, c: c, s: 0 });
}

function registerUser(b) {
	b.s++;
}

function filterEventsByCategory(b, c) {
	return b.filter(function (d) {
		return c(d.c);
	});
}

function makeTracker() {
	let b = 0;
	return function () {
		b++;
		return b;
	};
}

addEvent("Workshop", "learn");
addEvent("Music Night", "fun");
registerUser(a[0]);

const c = makeTracker();
console.log(c());
console.log(c());
console.log(filterEventsByCategory(a, function (b) { return b === "fun"; }));