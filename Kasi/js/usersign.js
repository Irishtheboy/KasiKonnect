// Initialize localStorage with JSON data if not already present
const initialUsers = {
    users: [
        { email: "customer@example.com", password: "customer123", role: "customer" },
        { email: "vendor@example.com", password: "vendor123", role: "vendor" },
    ],
};

// Check if users exist in localStorage, otherwise initialize it
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(initialUsers));
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value; // Now directly using the email input field
    const name = document.getElementById("name")?.value; // Will dynamically add for vendor/driver
    const password = document.getElementById("password").value;

    // Load users from localStorage
    const usersData = JSON.parse(localStorage.getItem("users"));
    const existingUsers = usersData.users;

    // Check if the email already exists
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
        alert("User already exists! Please log in.");
        return;
    }

    // Create new user object
    const newUser = { email, password, role };
    if (name) newUser.name = name; // Add name if applicable for vendor/driver

    // Add new user to existing users array
    existingUsers.push(newUser);

    // Save updated users back to localStorage
    usersData.users = existingUsers;
    localStorage.setItem("users", JSON.stringify(usersData));

    alert("Signup successful! Redirecting to login page...");
    window.location.href = "index.html"; // Redirect to login
});

// Dynamic fields based on role selection
document.getElementById("role").addEventListener("change", function () {
    const dynamicFields = document.getElementById("dynamicFields");
    dynamicFields.innerHTML = ""; // Clear previous fields

    const role = this.value;

    if (role === "vendor" || role === "driver") {
        // Add name field for vendors and drivers if not already present
        if (!document.getElementById("name")) {
            const nameField = `
                <div class="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required>
                </div>
            `;
            dynamicFields.innerHTML += nameField;
        }
    } else {
        // If role is not vendor or driver, ensure name field is not present
        const nameField = document.getElementById("name");
        if (nameField) {
            dynamicFields.innerHTML = ""; // Clear name field if it exists
        }
    }

    if (role === "customer") {
        // Ensure customer email field is present
        const emailField = `
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required>
            </div>
        `;
        dynamicFields.innerHTML = emailField; // Overwrite with the correct email input for customer
    }
});
