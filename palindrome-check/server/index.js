const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all requests
app.use(
	cors({
		origin: ['https://your-frontend-domain.com'], // Replace with your frontend domain
	})
);

// Parse JSON request body
app.use(express.json());

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, '../build')));

// API endpoint for palindrome checking
app.get('/api/check-palindrome', (req, res) => {
	const { text } = req.query;
	if (!text) {
		return res.status(400).json({ error: 'Text parameter is required' });
	}

	const cleanStr = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const reverseStr = cleanStr.split('').reverse().join('');
	const isPalindrome = cleanStr === reverseStr;

	res.json({ text, isPalindrome });
});

// For any other request, send back React's index.html file
app.get('*', (req, res) => {
	const indexPath = path.join(__dirname, '../build/index.html');
	res.sendFile(indexPath, (err) => {
		if (err) {
			console.error('Error sending index.html file:', err);
			res.status(500).send('Internal Server Error');
		}
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
