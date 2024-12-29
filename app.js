// Node.js backend for User Authentication System
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Mock database
const users = [];

// Signup endpoint
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email already registered!' });
    }
    users.push({ username, email, password });
    res.status(200).json({ message: 'User registered successfully!' });
});

// Signin endpoint
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password!' });
    }
    res.status(200).json({ message: 'Sign-in successful!' });
});

// Forgot Password endpoint
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Email not found!' });
    }
    res.status(200).json({ message: 'Password reset link sent to your email!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
