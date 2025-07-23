import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const { MONGO_URL } = process.env;

// Validação da URL do MongoDB
if (!MONGO_URL) {
  console.error(' MONGO_URL não encontrada no arquivo .env');
  process.exit(1);
}

// Conexão assíncrona com o MongoDB
const connectDB = async () => {
  try {
    // Conecta sem opções deprecated
    await mongoose.connect(MONGO_URL);
    
    console.log('MongoDB connected successfully!');
    console.log(`Database: ${mongoose.connection.name}`);
    console.log(`Host: ${mongoose.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Eventos de conexão
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed gracefully');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    process.exit(1);
  }
});

// Conecta ao banco
connectDB();

export default connectDB;
