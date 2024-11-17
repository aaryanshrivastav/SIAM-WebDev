// Modal Controls
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Form Submission (Optional: Add functionality)
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will respond shortly.");
    closeModal();
});
