document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        // Email validation
        const email = document.getElementById('email').value;
        const email2 = document.getElementById('email2').value;

        if (email.trim() === '' || email2.trim() === '' || email !== email2) {
            alert('Please enter valid and matching email addresses.');
            event.preventDefault();
            return;
        }

        // Password validation
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;

        if (password.trim() === '' || password2.trim() === '' || password !== password2) {
            alert('Please enter valid and matching passwords.');
            event.preventDefault();
            return;
        }

        
    });
});