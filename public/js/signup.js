document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const enviar = document.querySelector('#enviar');
    
    enviar.addEventListener('click', function (event) {
        event.preventDefault();

        // Check if it's the first step
        if (!form.classList.contains('completed')) {
            // Email validation
            const email = document.getElementById('email').value;
            const email2 = document.getElementById('email2').value;

            if (email.trim() === '' || email2.trim() === '' || email !== email2 || !/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('email').style.borderColor = 'red';
                document.getElementById('email2').style.borderColor = 'red';
                document.getElementById('email').insertAdjacentHTML('afterend', '<div class="error">Please enter valid and matching email addresses.</div>');
                return;
            }

            // Password validation
            const password = document.getElementById('password').value;
            const password2 = document.getElementById('password2').value;

            if (password.trim() === '' || password2.trim() === '' || password !== password2 || /\s/.test(password)) {
                document.getElementById('password').style.borderColor = 'red';
                document.getElementById('password2').style.borderColor = 'red';
                document.getElementById('password').insertAdjacentHTML('afterend', '<div class="error">Please enter valid and matching passwords</div>');
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
            username.name = 'username'; 
            username.placeholder = 'Create a username';
            username.required = true;

            form.insertBefore(username, enviar);

            // Change the submit button value and functionality
            enviar.value = 'Continue';
            form.classList.add('completed'); // Mark the first step as completed
        } else {
            // Second step - Additional validation for the username
            const username = document.getElementById('username').value;

            if (username.trim() === '') {
                document.getElementById('username').style.borderColor = 'red';
                document.getElementById('username').insertAdjacentHTML('afterend', '<div class="error">Please enter a valid username.</div>');
                return;
            }

            // Allow the form to submit after validating the username
            form.submit();

            setTimeout(() => {
                window.location.href = "./login.html";
            }, 2000);
        }
    });

    form.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
});
