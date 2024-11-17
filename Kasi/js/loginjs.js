document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission

        // Get form values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Load users from localStorage
        const usersData = JSON.parse(localStorage.getItem("users"));
        const users = usersData ? usersData.users : [];

        // Check if the email and password match any user
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            // Successful login
            alert("Login successful!");

            // Redirect based on the role
            switch (user.role) {
                case "customer":
                    window.location.href = "CustomerPage.html"; // Redirect to Customer dashboard
                    break;
                case "vendor":
                    window.location.href = "VenderPage.html"; // Redirect to Vendor dashboard
                    break;
                case "driver":
                    window.location.href = "DriverPage.html"; // Redirect to Driver dashboard
                    break;
                default:
                    window.location.href = "index.html"; // Default redirect if no role matches
                    break;
            }
        } else {
            // Failed login
            alert("Invalid email or password. Please try again.");
        }
    });
});
