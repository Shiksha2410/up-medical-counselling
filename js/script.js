document.addEventListener("DOMContentLoaded", function () {
    // Govt. Order Auto-Scrolling
    const slider = document.querySelector(".slider");
    let scrollHeight = slider.scrollHeight;

    function autoScroll() {
        slider.style.transform = `translateY(-${scrollHeight}px)`;
        setTimeout(() => {
            slider.style.transition = "none";
            slider.style.transform = `translateY(0)`;
        }, 10000);
    }

    setInterval(autoScroll, 11000);

    // Registration Form Validation
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let messageBox = document.getElementById("message");

        // Email validation pattern
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phonePattern = /^[6-9]\d{9}$/; // Matches 10-digit Indian phone numbers

        if (!name || !email || !phone) {
            messageBox.textContent = "All fields are required!";
            messageBox.style.color = "red";
            return;
        }

        if (!email.match(emailPattern)) {
            messageBox.textContent = "Enter a valid email address!";
            messageBox.style.color = "red";
            return;
        }

        if (!phone.match(phonePattern)) {
            messageBox.textContent = "Enter a valid 10-digit phone number!";
            messageBox.style.color = "red";
            return;
        }

        // Successful registration
        messageBox.textContent = "Registration successful!";
        messageBox.style.color = "green";
        document.getElementById("registrationForm").reset();

        // Optional: Simulate submission (e.g., send data to backend)
        setTimeout(() => {
            messageBox.textContent = "";
        }, 3000);
    });
});
