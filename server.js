// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // To parse incoming JSON payloads

// NASA API key (stored in environment variables for security)
const NASA_API_KEY = process.env.NASA_API_KEY;

// NASA API endpoints
const NASA_API_URL = 'https://images-api.nasa.gov/search';  // NASA Media Library
const EPIC_API_URL = 'https://api.nasa.gov/EPIC/api/natural'; // NASA EPIC
const APOD_API_URL = 'https://api.nasa.gov/planetary/apod';   // NASA APOD (Astronomy Picture of the Day)

// Route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the NASA API Media Server! This API provides data from NASA EPIC, APOD, and the NASA Media Library.');
});

// Route to fetch NASA Media based on a search query
app.get('/api/nasa-media', async (req, res) => {
  const query = req.query.query || ''; // Default to an empty string if no query parameter is provided
  
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    // Make the request to NASA's Image and Video Library API
    const response = await axios.get(NASA_API_URL, {
      params: { q: query, media_type: 'image,video', api_key: NASA_API_KEY },
    });

    const items = response.data.collection.items;
    if (items.length === 0) {
      return res.status(404).json({ message: 'No results found for your query.' });
    }

    res.json({ collection: { items } });
  } catch (error) {
    console.error('Error fetching data from NASA API:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from NASA API' });
  }
});

// Route to fetch EPIC (Earth Polychromatic Imaging Camera) data
app.get('/api/epic', async (req, res) => {
  try {
    const response = await axios.get(`${EPIC_API_URL}?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching EPIC data:', error.message);
    res.status(500).json({ error: 'Failed to fetch EPIC data' });
  }
});

// Route to fetch APOD (Astronomy Picture of the Day) data
app.get('/api/apod', async (req, res) => {
  try {
    const response = await axios.get(`${APOD_API_URL}?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching APOD data:', error.message);
    res.status(500).json({ error: 'Failed to fetch APOD data' });
  }
});

// Route to fetch EPIC image data by date (optional, if user provides a date)
app.get('/api/epic/image', async (req, res) => {
  const date = req.query.date;
  if (!date) {
    return res.status(400).json({ error: 'Date parameter is required in the format YYYY-MM-DD' });
  }

  try {
    const response = await axios.get(`${EPIC_API_URL}/${date}?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching EPIC image by date:', error.message);
    res.status(500).json({ error: 'Failed to fetch EPIC image by date' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

