import express from 'express';
import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from './model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const router = Router();
dotenv.config();

router.get('/', async (req, res) => {

  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/profile', async (req, res) => {
  const {token} = req.cookies;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({ user: decoded.user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.json({ user: null });
  }
});



router.post('/', async (req, res) => {

  try {
    const { name, email, password } = req.body; // ← PEGA do body!

    // Verifica se já existe usuário com esse e-mail
    const existingUser = await User.findOne({ email });
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (existingUser) {
      return res.status(409).json({ error: "E-mail já cadastrado!" });
    }

    const newUser = new User({ name, email, password: hashedPassword }); // ← Usa os dados recebidos!
    const savedUser = await newUser.save();

    const { name: userName, _id } = savedUser;
    const newUserObject = { name: userName, email, _id };
    const token = jwt.sign({ user: newUserObject }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ user: newUserObject });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "E-mail ou senha inválidos!" });
    const { name, _id } = user;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "E-mail ou senha inválidos!" });
    }

    const newUserObject = { name, email, _id };
    const token = jwt.sign({ user: newUserObject }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    return res.status(200).json({ message: "Login realizado com sucesso!", user: { name, _id } });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar usuário!" });
  }
});



export default router;
