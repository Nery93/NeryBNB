import express from 'express';
import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from './model.js';

const router = Router();

router.get('/', async (req, res) => {

  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Route to create a new user
// Expects a JSON body with name, email, and password
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
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const {name, _id} = user;
    if (!user)  return res.status(401).json({ error: "E-mail ou senha inválidos!" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: "E-mail ou senha inválidos!" });

    // Se chegou aqui, login OK!
    res.status(200).json({ message: "Login realizado com sucesso!", user: { name, _id } });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar usuário!" });
  }
});

export default router;
