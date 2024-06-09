import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB

app.use(cors());
app.use(express.json()); // Allows parsing JSON data from request body

// Define API endpoints (routes)

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});