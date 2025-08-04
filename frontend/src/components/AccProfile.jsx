import React from 'react'
import { useNavigate } from 'react-router-dom'

const AccProfile = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center gap-2'>
            <p>Logado como (Guilherme Nery)</p>

            <button className='bg-primary-400 text-white rounded-full px-6 py-2 font-medium hover:bg-primary-500 transition-colors' onClick={() => {
                navigate('/login')
            }}>
                Sair
            </button>
        </div>
    )
}

export default AccProfile