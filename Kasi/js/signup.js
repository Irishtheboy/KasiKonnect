document.addEventListener("DOMContentLoaded", () => {
    const roleSelect = document.getElementById("role");
    const dynamicFields = document.getElementById("dynamicFields");

    // Handle role selection to show corresponding fields
    roleSelect.addEventListener("change", () => {
        dynamicFields.innerHTML = ""; // Clear previous fields

        switch (roleSelect.value) {
            case "customer":
                dynamicFields.innerHTML = `
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="Enter your address" required>
                    </div>
                `;
                break;

            case "vendor":
                dynamicFields.innerHTML = `
                    <div class="form-group">
                        <label for="businessName">Business Name</label>
                        <input type="text" id="businessName" name="businessName" placeholder="Enter your business name" required>
                    </div>
                    <div class="form-group">
                        <label for="businessType">Type of Business</label>
                        <input type="text" id="businessType" name="businessType" placeholder="E.g., Retail, Wholesale" required>
                    </div>
                    <div class="form-group">
                        <label for="businessLocation">Business Location</label>
                        <input type="text" id="businessLocation" name="businessLocation" placeholder="Enter your business location" required>
                    </div>
                `;
                break;

            case "driver":
                dynamicFields.innerHTML = `
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name" required>
                    </div>
                    <div class="form-group">
                        <label for="licenseNumber">License Number</label>
                        <input type="text" id="licenseNumber" name="licenseNumber" placeholder="Enter your license number" required>
                    </div>
                    <div class="form-group">
                        <label for="vehicleDetails">Vehicle Details</label>
                        <input type="text" id="vehicleDetails" name="vehicleDetails" placeholder="Enter your vehicle details" required>
                    </div>
                `;
                break;

            default:
                break;
        }
    });

    // Handle form submission
    document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form from submitting

        // Get form values
        const role = document.getElementById("role").value;
        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const address = document.getElementById("address")?.value; // Only for customer
        const businessName = document.getElementById("businessName")?.value; // Only for vendor
        const businessType = document.getElementById("businessType")?.value; // Only for vendor
        const businessLocation = document.getElementById("businessLocation")?.value; // Only for vendor
        const licenseNumber = document.getElementById("licenseNumber")?.value; // Only for driver
        const vehicleDetails = document.getElementById("vehicleDetails")?.value; // Only for driver
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

        // Create the user object based on the role
        const newUser = { email, password, role };

        // Add role-specific fields to the new user object
        if (role === "customer") {
            newUser.name = name;
            newUser.address = address;
        } else if (role === "vendor") {
            newUser.businessName = businessName;
            newUser.businessType = businessType;
            newUser.businessLocation = businessLocation;
        } else if (role === "driver") {
            newUser.name = name;
            newUser.licenseNumber = licenseNumber;
            newUser.vehicleDetails = vehicleDetails;
        }

        // Add new user to existing users array
        existingUsers.push(newUser);

        // Save updated users back to localStorage
        usersData.users = existingUsers;
        localStorage.setItem("users", JSON.stringify(usersData));

        alert("Signup successful! Redirecting to login page...");
        window.location.href = "index.html"; // Redirect to login
    });
});
