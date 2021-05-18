const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.quarySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to log in');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefULT();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name & email & password) {
        const reply = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (reply.ok) {
            document.location.replace('/profile');
        } else {
            alert(reply.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);