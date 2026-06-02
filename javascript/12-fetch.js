/*
12. AJAX & Fetch API
Scenario: Send user registration to the server.
Objective: Simulate backend communication.
Task:
• Use fetch() to POST user data to a mock API
• Show success/failure message after submission
• Use setTimeout() to simulate a delayed response
*/

const a = { n: "Asha", e: "asha@test.com" };

setTimeout(function () {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(a)
	})
		.then(function (b) { return b.json(); })
		.then(function () { console.log("Success"); })
		.catch(function () { console.log("Failure"); });
}, 500);