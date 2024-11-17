// Manage Clock In/Out Button
let clockButton = document.getElementById("clock-button");
let clockStatus = document.getElementById("clock-status");

clockButton.addEventListener("click", function() {
    if (clockStatus.innerText === "Clock In") {
        clockStatus.innerText = "Clocked In";
        clockButton.innerText = "Clock Out";
        clockButton.style.backgroundColor = "#f44336"; // Red color for clock out
    } else {
        clockStatus.innerText = "Clock In";
        clockButton.innerText = "Clock In";
        clockButton.style.backgroundColor = "#4CAF50"; // Green color for clock in
    }
});

// You can also add more functionality for Pickup/Drop-off buttons
let pickupButtons = document.querySelectorAll('.btn-pickup');
let dropoffButtons = document.querySelectorAll('.btn-dropoff');

// Example: Starting pickup request
pickupButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Pickup request started!");
    });
});

// Example: Starting drop-off request
dropoffButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Drop-off request started!");
    });
});
