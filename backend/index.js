import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import UserRoutes from './domains/users/routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/users', UserRoutes);

connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// o que entendi desse código:
// - Importa express e dotenv para configurar variáveis de ambiente
// - Importa a função connectDB para conectar ao MongoDB
// - Importa as rotas de usuários
// - Configura o servidor para usar JSON no corpo das requisições
// - Define a rota base para usuários
// - Conecta ao banco de dados MongoDB
// - Inicia o servidor na porta definida nas variáveis de ambiente
// - Exibe uma mensagem no console quando o servidor está rodando