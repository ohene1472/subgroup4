document.addEventListener('DOMContentLoaded', function() {

    // Open registration modal
    const registerBtn = document.getElementById('register-btn');
    const modal = document.getElementById('register-modal');
    const closeModal = document.querySelector('.close-btn');

    registerBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Perform your login logic here (e.g., AJAX request)
        console.log('Logging in with:', username, password);

        // You can redirect or show a message after login success
        alert('Login successful!');
    });

    // Handle registration form submission
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('register-username').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Perform your registration logic here (e.g., AJAX request)
        console.log('Registering with:', username, email, password);

        // You can redirect or show a message after registration success
        alert('Registration successful!');
        modal.style.display = 'none'; // Close the modal after successful registration
    });

    // Smooth scroll for footer navigation links
    document.querySelectorAll('.footer-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Handle search functionality
    const searchContainer = document.querySelector('.search-container');
    const searchInput = searchContainer.querySelector('input[type="text"]');
    const searchButton = searchContainer.querySelector('button');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();

        if (query) {
            // You can replace this alert with actual search logic (e.g., AJAX search)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search query.');
        }
    });

});
