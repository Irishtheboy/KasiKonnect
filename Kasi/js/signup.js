document.addEventListener("DOMContentLoaded", () => {
    const roleSelect = document.getElementById("role");
    const dynamicFields = document.getElementById("dynamicFields");

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
});
