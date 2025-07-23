import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/user.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connectDB();


app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/users', async (req, res) => {
  try {

    const newUser = new User({
      name: "Usuario Teste",
      email: "usuario@teste.com", 
      password: "123456789"
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
