/*
10. Modern JavaScript Features
Scenario: Refactor code to be concise and maintainable.
Objective: Use ES6+ features.
Task:
• Use let, const, default parameters in functions
• Use destructuring to extract event details
• Use spread operator to clone event list before filtering
*/

function a(b = "Event") {
	return b;
}

const c = { n: "Workshop", d: "2026-06-10", s: 5 };
const { n, d, s } = c;
const e = [{ n: "Music", t: "fun" }, { n: "Code", t: "tech" }];
const f = [...e].filter(function (g) { return g.t === "fun"; });

console.log(a());
console.log(n, d, s);
console.log(f);