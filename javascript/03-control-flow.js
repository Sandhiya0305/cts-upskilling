/*
3. Conditionals, Loops, and Error Handling
Scenario: Only show valid events and limit registrations.
Objective: Apply conditions and handle invalid data.
User Story: As a user, I want only upcoming events with seats to be displayed.
Task:
• Use if-else to hide past or full events
• Loop through the event list and display using forEach()
• Wrap registration logic in try-catch to handle errors
*/

const a = [
	{ n: "Workshop", p: false, s: 5 },
	{ n: "Seminar", p: true, s: 0 },
	{ n: "Talk", p: false, s: 3 }
];

a.forEach(function (b) {
	if (b.p || b.s <= 0) {
		console.log(`${b.n} hidden`);
	} else {
		console.log(`${b.n} shown`);
	}
});

try {
	function c(b) {
		if (b.s <= 0) throw new Error("Full");
		b.s--;
		console.log(`${b.n} registered`);
	}
	c(a[0]);
} catch (b) {
	console.log(b.message);
}