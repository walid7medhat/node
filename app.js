const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = 3001;

// Set the directory for static files
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
