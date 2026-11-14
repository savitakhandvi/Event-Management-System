
// Check Admin Login
if (sessionStorage.getItem("admin") !== "true") {
    window.location.href = "index.html";
}

// Get Events from LocalStorage
let events = JSON.parse(localStorage.getItem("events")) || [];

// READ - Display Events
function displayEvents() {

    let list = document.getElementById("eventList");

    list.innerHTML = "";

    events.forEach((event, index) => {

        list.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${event.name}</td>
                <td>${event.date}</td>
                <td>${event.location}</td>

                <td>
                    <button onclick="editEvent(${index})">
                        Edit
                    </button>

                    <button onclick="deleteEvent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// CREATE and UPDATE
document.getElementById("eventForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    let id = document.getElementById("eventId").value;

    let event = {
        name: document.getElementById("eventName").value,
        date: document.getElementById("eventDate").value,
        location: document.getElementById("eventLocation").value
    };

    if (id === "") {

        // CREATE
        events.push(event);

        alert("Event Added Successfully!");

    } else {

        // UPDATE
        events[Number(id)] = event;

        alert("Event Updated Successfully!");
    }

    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById("eventForm").reset();

    document.getElementById("eventId").value = "";

    document.getElementById("submitBtn").innerText = "Add Event";

    displayEvents();

});

// EDIT
function editEvent(index) {

    let event = events[index];

    document.getElementById("eventId").value = index;

    document.getElementById("eventName").value = event.name;

    document.getElementById("eventDate").value = event.date;

    document.getElementById("eventLocation").value = event.location;

    document.getElementById("submitBtn").innerText = "Update Event";

}

// DELETE
function deleteEvent(index) {

    if (confirm("Are you sure you want to delete this event?")) {

        events.splice(index, 1);

        localStorage.setItem("events", JSON.stringify(events));

        displayEvents();

        alert("Event Deleted Successfully!");

    }
}

// LOGOUT
function logout() {

    sessionStorage.removeItem("admin");

    window.location.href = "index.html";

}

// Initial Display
displayEvents();
