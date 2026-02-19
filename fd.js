// Alert Button
function showAlert() {
    alert("JavaScript is working perfectly 🚀");
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Form Validation
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
    } else {
        message.style.color = "green";
        message.textContent = "Form submitted successfully!";
        form.reset();
    }
});
