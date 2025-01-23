import express from 'express';
import router from './src/routes/postRoutes';
import connect from './src/config/dbConfig';


const app = express();

// Database connection
connect();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/posts', router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});