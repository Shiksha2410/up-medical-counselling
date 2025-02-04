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

    // Multi-Step Registration Form
    let currentStep = 1;
    const totalSteps = 4;

    function showStep(step) {
        document.querySelectorAll(".form-step").forEach((el) => {
            el.classList.remove("active");
        });
        document.querySelector(`#step-${step}`).classList.add("active");

        // Update Progress Bar
        document.querySelectorAll(".progress-bar div").forEach((el, index) => {
            if (index < step) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    }

    window.nextStep = function (step) {
        if (validateStep(step)) {
            currentStep++;
            showStep(currentStep);
        }
    };

    function validateStep(step) {
        let valid = true;
        document.querySelectorAll(`#step-${step} input, #step-${step} select`).forEach((input) => {
            if (!input.value) {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "1px solid #ccc";
            }
        });

        if (!valid) {
            alert("Please fill all required fields before proceeding.");
        }
        return valid;
    }

    // OTP Verification Placeholder (Can be extended with backend API)
    document.querySelector(".otp-btn").addEventListener("click", function () {
        const phoneInput = document.getElementById("phone");
        if (phoneInput.value) {
            alert("OTP Sent to Mobile! Enter OTP to Proceed.");
        } else {
            alert("Please enter your mobile number to receive OTP.");
        }
    });

    // Form Submission Validation
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let messageBox = document.getElementById("message");

        if (!validateStep(currentStep)) {
            messageBox.textContent = "Please fill all fields before submitting!";
            messageBox.style.color = "red";
            return;
        }

        messageBox.textContent = "Registration successful!";
        messageBox.style.color = "green";
        document.getElementById("registrationForm").reset();

        setTimeout(() => {
            messageBox.textContent = "";
        }, 3000);
    });

    showStep(currentStep);
});
