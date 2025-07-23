import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='w-full max-w-md mx-auto flex flex-col gap-6 p-8 bg-white rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>Faça seu login</h1>

        <form action="" className='flex flex-col gap-5 w-full'>
          <input className='border border-gray-300 rounded-4xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent' type="email" placeholder="Digite seu email" required />
          <input className='border border-gray-300 rounded-4xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent' type="password" placeholder="Digite sua senha" required />
          <button className='bg-primary-400 text-white rounded-4xl px-6 py-4 text-lg font-semibold hover:bg-primary-500 transition-colors duration-200' type="submit">Login</button>
        </form>

        <p className='text-center text-gray-600'>Ainda não tem conta? <Link to="/register" className='text-primary-400 hover:underline font-medium'>Cadastre-se</Link></p>
        </div>
    </section>
  )
}

export default Login