const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.post('/upload', (req, res) => {
    const jsonData = req.body;

    if (!jsonData) {
        return res.status(400).json({ message: 'No JSON data received' });
    }

    res.json({ message: 'JSON received successfully', data: jsonData });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
