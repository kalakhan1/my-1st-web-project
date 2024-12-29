// script.js for User Authentication System
document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error during sign-up:', error);
    }
});

document.getElementById('signin-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    try {
        const response = await fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error during sign-in:', error);
    }
});

document.getElementById('forgot-password-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('forgot-password-email').value;

    try {
        const response = await fetch('http://localhost:3000/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error('Error during password reset:', error);
    }
});
