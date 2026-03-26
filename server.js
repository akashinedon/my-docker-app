// This is the entire app. A simple web server.

const express = require('express');
const app = express();
const PORT = 3000;

// When someone visits the homepage, say hello
app.get('/', (req, res) => {
  res.send('Hello! My app is running! 🎉');
});

// Health check (important later for checking if app is alive)
app.get('/health', (req, res) => {
  res.send('OK');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});