/*
9. Async JS, Promises, Async/Await
Scenario: Fetch event data from a mock API.
Objective: Use asynchronous logic for remote operations.
Task:
• Fetch events from a mock JSON endpoint
• Use .then() and .catch() to handle results
• Rewrite using async/await and show loading spinner
*/

const a = "https://jsonplaceholder.typicode.com/todos/1";

fetch(a)
	.then(function (b) { return b.json(); })
	.then(function (b) { console.log(b); })
	.catch(function (b) { console.log(b.message); });

async function b() {
	try {
		console.log("Loading");
		const c = await fetch(a);
		const d = await c.json();
		console.log(d);
	} catch (e) {
		console.log(e.message);
	}
}

b();