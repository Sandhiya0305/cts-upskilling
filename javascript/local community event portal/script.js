/* ==============================
   JavaScript Exercise: Local Community Event Portal
   ============================== */

// Task 1: JavaScript Basics & Setup
console.log("Welcome to the Community Portal");
window.addEventListener("load", () => {
    alert("Welcome to the Community Portal - page fully loaded!");
});


// Task 2: Syntax, Data Types, and Operators
const eventName = "Community Bake Sale";
const eventDate = "2026-06-15";
let seatsAvailable = 20;

const eventInfo = `${eventName} on ${eventDate} - ${seatsAvailable} seats left`;
console.log(eventInfo); // template literal


// Task 3: Conditionals, Loops, and Error Handling
function registerForEvent(eventId) {
    try {
        const event = events.find(e => e.id === eventId);
        if (!event) {
            console.error("Event not found");
            return;
        }

        const eventDateObj = new Date(event.date);
        const today = new Date();

        if (eventDateObj < today) {
            console.log("This event has already passed.");
            return;
        }

        if (event.seats <= 0) {
            console.log("Sorry, this event is full.");
            return;
        }

        event.seats--;
        console.log(`Registered! ${seatsAvailable} seats remaining.`);
        renderEvents(); // update UI
    } catch (error) {
        console.error("Registration error:", error.message);
    }
}


// Initial mock events data (for when API is not available)
let events = [
    { id: 1, name: "City Marathon", date: "2026-07-10", category: "sports", seats: 50, location: "Central Park" },
    { id: 2, name: "Summer Music Fest", date: "2026-08-05", category: "music", seats: 0, location: "Amphitheater" },
    { id: 3, name: "Baking Workshop", date: "2026-06-20", category: "workshop", seats: 15, location: "Community Center" },
    { id: 4, name: "Tech Talk: AI", date: "2026-09-12", category: "tech", seats: 30, location: "Library Hall" },
    { id: 5, name: "Jazz Night", date: "2026-07-22", category: "music", seats: 25, location: "Rooftop Lounge" }
];

// Task 4: Functions, Scope, Closures, Higher-Order Functions
function addEvent(name, date, category, seats, location) {
    const newEvent = {
        id: Date.now(),
        name,
        date,
        category: category.toLowerCase(),
        seats: Number(seats),
        location
    };
    events.push(newEvent);
    renderEvents(events);
    return newEvent;
}

function registerUser(eventId, userName) {
    const event = events.find(e => e.id === eventId);
    if (!event || event.seats <= 0) return false;
    event.seats--;
    return true;
}

function filterEventsByCategory(category) {
    if (category === "all") return [...events];
    return events.filter(e => e.category === category);
}

function createCategoryCounter() {
    let totalRegistrations = 0;

    return {
        register: function(category) {
            totalRegistrations++;
            console.log(`Category "${category}" has ${totalRegistrations} total registrations.`);
        },
        getTotal: function() {
            return totalRegistrations;
        }
    };
}

const musicCounter = createCategoryCounter();

function dynamicSearch(eventsArray, searchTerm, callback) {
    const results = eventsArray.filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase()));
    callback(results);
}


// Task 6: Arrays and Methods
function addNewEvent(name, date, category, seats, location) {
    const newEvent = { id: Date.now(), name, date, category: category.toLowerCase(), seats: Number(seats), location };
    events.push(newEvent);
    return newEvent;
}

function getMusicEvents() {
    return events.filter(e => e.category === "music");
}

function formatEventCards() {
    return events.map(e => `${e.name} on ${e.date} (${e.category}) - ${e.seats} seats`);
}


// Task 5: Objects and Prototypes
function Event(name, date, category, seats, location) {
    this.name = name;
    this.date = date;
    this.category = category.toLowerCase();
    this.seats = Number(seats);
    this.location = location || "TBD";
}

Event.prototype.checkAvailability = function() {
    return this.seats > 0 ? `Yes - ${this.seats} seats left` : "Sold out";
};

Event.prototype.getDetails = function() {
    return `${this.name} | ${this.date} | ${this.category}`;
};

function listEventKeys(eventObj) {
    return Object.keys(eventObj);
}

function listEventValues(eventObj) {
    return Object.values(eventObj);
}

function listEventEntries(eventObj) {
    return Object.entries(eventObj);
}


// Task 9: Async JS, Promises, Async/Await
const MOCK_API_URL = "https://jsonplaceholder.typicode.com/posts"; // mock endpoint

function fetchEventsMock() {
    // Simulating an API call with a Promise
    return new Promise((resolve) => {
        setTimeout(() => resolve([...events]), 800);
    });
}

async function loadEvents() {
    const loader = document.getElementById("eventsContainer");
    if (loader) {
        loader.innerHTML = '<div class="loader">Loading events...</div>';
    }

    try {
        const data = await fetchEventsMock();
        events = data;
        renderEvents(events);
    } catch (error) {
        if (loader) {
            loader.innerHTML = `<div class="error">Failed to load events: ${error.message}</div>`;
        }
    }
}


// Task 7: DOM Manipulation
function renderEvents(eventsArray) {
    const container = document.getElementById("eventsContainer");
    if (!container) return;

    container.innerHTML = "";

    eventsArray.forEach((event, index) => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.style.animationDelay = `${index * 50}ms`;

        const isFull = event.seats <= 0;
        const today = new Date();
        const eventDateObj = new Date(event.date);
        const isPast = eventDateObj < today;

        card.innerHTML = `
            <h3>${event.name}</h3>
            <span class="category">${event.category}</span>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Seats:</strong> ${event.seats}</p>
            ${isPast ? '<p style="color:#dc2626; font-weight:bold;">Event has passed</p>' : ''}
            ${isFull ? '<p style="color:#dc2626; font-weight:bold;">Event is full</p>' : ''}
            <button onclick="registerForEvent(${event.id})" ${isPast || isFull ? 'disabled' : ''}>
                ${isPast ? 'Closed' : isFull ? 'Full' : 'Register'}
            </button>
            <button onclick="showEventDetails(${event.id})" style="background:#6b7280; margin-top:8px;">Details</button>
        `;

        container.appendChild(card);
    });

    const countEl = document.getElementById("eventCount");
    if (countEl) {
        countEl.textContent = eventsArray.length;
    }
}

function showEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const entries = listEventEntries(event);
    alert(entries.map(([k, v]) => `${k}: ${v}`).join("\n"));
}


// Task 8: Event Handling
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

if (categoryFilter) {
    categoryFilter.addEventListener("change", () => {
        const cat = categoryFilter.value;
        const filtered = filterEventsByCategory(cat);
        renderEvents(filtered);
    });
}

if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const term = searchInput.value;
            dynamicSearch(events, term, (results) => renderEvents(results));
        }
    });
}


// Task 11: Working with Forms
const registrationForm = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
    submitBtn.addEventListener("click", handleRegistration);
}

function handleRegistration(e) {
    if (e) e.preventDefault();

    const nameInput = document.getElementById("regName");
    const emailInput = document.getElementById("regEmail");
    const eventSelect = document.getElementById("regEvent");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const submitError = document.getElementById("submitError");

    let valid = true;

    if (!nameInput || !nameInput.value.trim()) {
        if (nameError) nameError.style.display = "block";
        valid = false;
    } else {
        if (nameError) nameError.style.display = "none";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput || !emailRegex.test(emailInput.value)) {
        if (emailError) emailError.style.display = "block";
        valid = false;
    } else {
        if (emailError) emailError.style.display = "none";
    }

    if (!valid) {
        if (submitError) {
            submitError.style.display = "block";
            submitError.textContent = "Please fix the errors above.";
        }
        return;
    }

    if (submitError) submitError.style.display = "none";

    const selectedEventId = eventSelect ? eventSelect.value : "";
    if (!selectedEventId) return;

    submitUserRegistration(nameInput.value, emailInput.value, selectedEventId);
}


// Task 12: AJAX & Fetch API
function submitUserRegistration(name, email, eventId) {
    const messageArea = document.getElementById("messageArea");
    if (messageArea) {
        messageArea.innerHTML = '<div class="loader">Submitting registration...</div>';
    }

    const payload = { name, email, eventId };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => {
        if (messageArea) {
            messageArea.innerHTML = '<div class="success">Registration submitted successfully!</div>';
        }
        console.log("Server response:", data);
        const event = events.find(e => e.id == eventId);
        if (event && event.seats > 0) {
            event.seats--;
            renderEvents(filterEventsByCategory(
                categoryFilter ? categoryFilter.value : "all"
            ));
            populateEventSelect();
        }
    })
    .catch(error => {
        if (messageArea) {
            messageArea.innerHTML = `<div class="error">Registration failed: ${error.message}</div>`;
        }
        console.error("Fetch error:", error);
    });
}


// Task 13: Debugging and Testing
function debugRegistrationFlow() {
    console.group("Debug: Registration Flow");
    console.log("Events:", events);
    const form = document.getElementById("registrationForm");
    if (form) console.log("Form visible:", form.style.display !== "none");
    const fetchBtn = document.getElementById("submitBtn");
    console.log("Submit button exists:", !!fetchBtn);
    console.groupEnd();
}

function inspectPayload() {
    const name = document.getElementById("regName");
    const email = document.getElementById("regEmail");
    const eventSelect = document.getElementById("regEvent");

    const payload = {
        name: name ? name.value : null,
        email: email ? email.value : null,
        eventId: eventSelect ? eventSelect.value : null,
        timestamp: new Date().toISOString()
    };

    console.log("Form submission payload:", payload);
    return payload;
}

// Expose debug functions for console access
window.debugRegistrationFlow = debugRegistrationFlow;
window.inspectPayload = inspectPayload;


// Task 14: jQuery usage (CDN loaded in HTML)
$(document).ready(function() {
    $("#registerBtn").click(function() {
        console.log("jQuery: Register button clicked");
        $(".event-card").fadeIn(400);
    });

    $(".event-card").hover(
        function() { $(this).fadeTo(200, 0.9); },
        function() { $(this).fadeTo(200, 1); }
    );
});


// ========== Initialization ==========
function populateEventSelect() {
    const eventSelect = document.getElementById("regEvent");
    if (!eventSelect) return;

    eventSelect.innerHTML = "";
    events.forEach(event => {
        const option = document.createElement("option");
        option.value = event.id;
        option.textContent = `${event.name} (${event.seats} seats)`;
        eventSelect.appendChild(option);
    });
}

function openRegistrationForm(eventId) {
    const form = document.getElementById("registrationForm");
    const eventSelect = document.getElementById("regEvent");

    if (form && eventSelect) {
        populateEventSelect();

        if (eventId) {
            eventSelect.value = eventId;
        }

        form.scrollIntoView({ behavior: "smooth" });
        form.style.display = "block";
        const nameInput = document.getElementById("regName");
        if (nameInput) nameInput.focus();
    }
}

function updateCategoryFilter() {
    const categories = [...new Set(events.map(e => e.category))];
    const select = document.getElementById("categoryFilter");
    if (!select) return;

    const currentValue = select.value;
    select.innerHTML = '<option value="all">All</option>';
    categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        select.appendChild(option);
    });
    select.value = currentValue || "all";
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded - Local Community Event Portal");
    loadEvents().then(() => {
        updateCategoryFilter();
    });
});
