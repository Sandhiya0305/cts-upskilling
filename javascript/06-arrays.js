/*
6. Arrays and Methods
Scenario: Manage an array of all community events.
Objective: Use array methods for CRUD operations.
Task:
• Add new events using .push()
• Use .filter() to show only music events
• Use .map() to format display cards (e.g., "Workshop on Baking")
*/

const a = ["Workshop on Baking", "Music Night"];
a.push("Art Fair");

const b = [
	{ n: "Workshop on Baking", t: "music" },
	{ n: "Music Night", t: "music" },
	{ n: "Coding Session", t: "tech" }
];

console.log(b.filter(function (c) { return c.t === "music"; }));
console.log(a.map(function (c) { return c; }));