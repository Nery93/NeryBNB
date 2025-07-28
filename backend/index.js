import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import UserRoutes from './domains/users/routes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/users', UserRoutes);

connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
