import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample route (optional)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
