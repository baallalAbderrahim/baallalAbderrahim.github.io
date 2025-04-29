const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const port = 3000;

// Configure multer to handle file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Read file content
    fs.readFile(req.file.path, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }

        try {
            const jsonData = JSON.parse(data);
            res.json({ message: 'Upload successful', data: jsonData });
        } catch (error) {
            res.status(400).json({ message: 'Invalid JSON format' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
