const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for serving the contact.html file
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
const port = 3000; // You can change the port number if needed
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


    // Save the form data to a file
    fs.writeFile('form_data.json', jsonData, (err) => {
        if (err) {
            console.error(err);
            // Handle the error appropriately
            res.status(500).send('An error occurred while saving the form data.');
        } else {
            console.log('Form data saved successfully.');
            // Send a success response to the client
            res.send('Form submitted and data saved successfully!');
        }
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

