document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const enviar = document.querySelector('#enviar');
    enviar.addEventListener('click', function (event) {

        event.preventDefault();

        // Email validation
        const email = document.getElementById('email').value;
        const email2 = document.getElementById('email2').value;

        if (email.trim() === '' || email2.trim() === '' || email !== email2) {
            alert('Please enter valid and matching email addresses.');
            
            return;
        }

        // Email format validation (simple check for @ symbol)
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address.');
            
            return;
        }

        // Password validation
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;

        if (password.trim() === '' || password2.trim() === '' || password !== password2) {
            alert('Please enter valid and matching passwords.');
            
            return;
        }

        // Password format validation (no spaces in between)
        if (/\s/.test(password)) {
            alert('Password should not contain spaces.');
            
            return;
        }

        // Hide the first form fields
        document.getElementById('email').style.display = 'none';
        document.getElementById('email2').style.display = 'none';
        document.getElementById('password').style.display = 'none';
        document.getElementById('password2').style.display = 'none';

        // Create new field for username input and set attributes
        const username = document.createElement('input');
        username.type = 'text';
        username.id = 'username'; 
        username.placeholder = 'Create a username';
        username.required = true;

        form.insertBefore(username, form.querySelector('#enviar'));

        // Change the submit button value and functionality
        const submitButton = document.getElementById('enviar');
        submitButton.value = 'Continue';

        form.submit();
    });
});