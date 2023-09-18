document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get user input
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Perform basic validation
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // Create a user object
        const user = {
            fullName,
            email,
            password,
        };

        // Send the user data to the backend for registration
        // You would typically use AJAX or fetch() to send this data to a backend API

        // For demonstration purposes, we'll just log the user object
        console.log('User registration data:', user);

        // Reset the form
        registrationForm.reset();
    });
});
