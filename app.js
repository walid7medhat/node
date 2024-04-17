const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const FormData = require('./models/mydataSchema');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

mongoose.connect('mongodb+srv://walidmedhat185:u3TTc8y2RtIFiGL4@cluster0.31hi4vn.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
});

app.post('/submit-form', async (req, res) => {
    const { name } = req.body;

    try {
        // Validate data before saving (optional)
        if (!name) {
            throw new Error('Name is required');
        }

        const formData = new FormData({ name });
        const savedData = await formData.save();
        console.log('Data inserted:', savedData);
        res.redirect('/');
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        res.status(500).send('Error inserting data into MongoDB');
    }
});

app.get('/favicon.ico', (req, res) => res.status(204).end());
