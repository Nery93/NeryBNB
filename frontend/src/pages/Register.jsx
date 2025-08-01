import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
/* import axios from 'axios'; */

const Register = ({ setUser }) => {
  // trabalhando com variaveis de estado
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [redirect, setRedirect] = useState(false); //para redirecionar o usuário após o registro

  const handleSubmit = async (e) => { 
    e.preventDefault(); // previne o comportamento padrão do formulário de recarregar a página

    const userData = { email, password, name }; 
    if (email && password && name) {
      try {
        const response = await axios.post('/users', userData);
        // O backend retorna o usuário criado diretamente
        if (response.data && response.data.user && response.data.user._id) {
          setUser(response.data.user);
          setRedirect(true);
        } else {

          alert("Registro realizado, mas resposta inesperada do servidor.");
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          alert("E-mail já cadastrado. Tente outro e-mail.");
        } else if (error.response && error.response.status === 400) {
          alert("Dados inválidos. Verifique os campos e tente novamente.");
        } else {
          alert("Erro ao realizar registro. Por favor, tente novamente.");
        }
        console.error("Erro ao realizar registro:", error);
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }

  if (redirect)  return <Navigate to="/" />; // redireciona para a página inicial após o registro

  
  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='w-full max-w-md mx-auto flex flex-col gap-6 p-8 bg-white rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>Faça seu cadastro</h1>

        <form action="" className='flex flex-col gap-5 w-full' onSubmit={handleSubmit}> {/* //aprendi hoje aula 4 */}
          <input className='border border-gray-300 rounded-4xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent' type="text" placeholder="Digite seu nome" required
          value={name} onChange={(e) => setName(e.target.value)}/>
          <input className='border border-gray-300 rounded-4xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent' type="email" placeholder="Digite seu email" required
          value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className='border border-gray-300 rounded-4xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent' type="password" placeholder="Digite sua senha" required 
          value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className='bg-primary-400 text-white rounded-4xl px-6 py-4 text-lg font-semibold hover:bg-primary-500 transition-colors duration-200 cursor-pointer' type="submit">Registrar</button>
        </form>

        <p className='text-center text-gray-600'>Já tem uma conta? <Link to="/login" className='text-primary-400 hover:underline font-medium'>Faça login</Link></p>
        </div>
    </section>
  )
}

export default Register;