# NASA_Image_Library

## Overview
This project is a backend server built using Node.js and Express to fetch data from NASA's Image and Library API and provide it to the frontend. The backend acts as an intermediary between the frontend and NASA's API, handling requests from the frontend and fetching the requested space-related images, and metadata.

## Features
- Fetches space images  from NASA's Image  Library API.
- Handles frontend requests and returns image data.
- Simple and lightweight Express-based server.
- CORS-enabled to allow frontend requests from different origins.
```
## Project Structure

```
/nasa-backend-library
    ├── /node_modules       # Backend dependencies
    ├── Server.js         # Main server file to set up Express
    ├── package.json        # Backend dependencies and metadata
    ├── .env                # Environment variables (for sensitive data like API key)
    ├── README.md           # Backend documentation
```

## GitHub Repositories
- Backend (Node.js API): [NASA Image and Library API Backend](https://github.com/Ananyanayaka/nasa-app-Backend-Library)

## How to Use

### 1. Clone the Repository
Clone the backend repository from GitHub:
```bash
git clone https://github.com/Ananyanayaka/nasa-app-Backend-Library.git
cd nasa-app-Backend-Library
```

### 2. Install Dependencies
Install the necessary dependencies using npm:
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory of the project and add your NASA API key:

```env
NASA_API_KEY=your-nasa-api-key
```

### How to Get a NASA API Key
To interact with NASA's Image and  Library API, you'll need to obtain an API key. Here's how you can get one:

1. Visit the [NASA API registration page](https://api.nasa.gov/).
2. Click on the "Get API Key" button.
3. Sign up for an account (or log in if you already have one).
4. Once signed in, you’ll be provided with your unique API key.
5. Copy the API key.

### 4. Launch the Server Locally (Optional)
If you want to run the backend server locally, use the following command:

```bash
node index.js
```
The server will be available on `http://localhost:5000` by default.

### 5. Use the Hosted Backend
If you prefer to use the already deployed backend on Heroku, you can access it directly using the following URL (no setup required for the backend):

- **Live Backend API:** [https://nasa-backend-ananya-8a0f587afdfc.herokuapp.com/](https://nasa-api-media-cbc610ffccef.herokuapp.com/)

## Acknowledgements
- Thanks to NASA for providing the Open APIs!
- Express.js for the backend framework.
- Heroku for making deployment easy.
```
