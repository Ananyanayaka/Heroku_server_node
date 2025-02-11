const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Use the environment variable PORT, or fallback to 5000 for local development
const port = process.env.PORT || 5000; // Ensure the app listens on the port Heroku provides

// Middleware
app.use(cors());

// NASA API endpoint
const NASA_API_URL = 'https://images-api.nasa.gov/search';

// Route to get NASA media based on a search query
app.get('/api/nasa-media', async (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const response = await axios.get(NASA_API_URL, {
      params: { q: query, media_type: 'image,video' },
    });

    const items = response.data.collection.items;
    res.json({ collection: { items } });
  } catch (error) {
    console.error('Error fetching data from NASA API:', error);
    res.status(500).json({ error: 'Failed to fetch data from NASA API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
