document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (!name || !email || !phone) {
        document.getElementById("message").textContent = "All fields are required!";
        return;
    }

    document.getElementById("message").textContent = "Registration successful!";
});
