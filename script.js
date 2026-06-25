document
    .getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let fullname =
            document.getElementById("fullname").value;

        let email =
            document.getElementById("email").value;

        let age =
            document.getElementById("age").value;

        let technology =
            document.getElementById("technology").value;

        let terms =
            document.getElementById("terms").checked;

        let message =
            document.getElementById("message");

        message.className = "";

        if (fullname.trim() === "") {
            message.className = "error";
            message.textContent =
                "Full name is required.";
            return;
        }

        if (
            !email.includes("@")
        ) {
            message.className = "error";
            message.textContent =
                "Email is invalid.";
            return;
        }

        if (age <= 0) {
            message.className = "error";
            message.textContent =
                "Age must be greater than 0.";
            return;
        }

        if (age < 18) {
            message.className = "error";
            message.textContent =
                "Age must be at least 18.";
            return;
        }

        if (technology === "") {
            message.className = "error";
            message.textContent =
                "Please select a technology.";
            return;
        }

        if (!terms) {
            message.className = "error";
            message.textContent =
                "You must accept the terms.";
            return;
        }

        message.className = "success";

        message.innerHTML =
            fullname +
            " has been registered for the event.<br>" +
            "Technology: " +
            technology +
            "<br>" +
            "Age: " +
            age;
});