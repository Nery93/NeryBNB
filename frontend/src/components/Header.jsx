import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ user }) => {
    return (

        <header className='shadow-md'>

            <div className='flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto text-black'>

                <Link to='/' className="flex items-center">
                    <img className="h-8 md:h-10"
                        src="https://cdn.prod.website-files.com/61b9e0dd381626819c8d4f83/65e2198d48039ba6444f602b_logo%20hashtag%20-%20h.webp" alt="Header Image" />
                    <p className='font-bold text-xl md:text-2xl text-primary-400'>NeryBNB</p>
                </Link>

                {/* Search bar for desktop */}
                <Link to='/' className="hidden lg:flex items-center border border-gray-300 rounded-full overflow-hidden px-4 pl-6 py-2 shadow-md">
                    <p className='border-r border-r-gray-300 pr-4'>Qualquer Lugar</p>
                    <p className='border-r border-r-gray-300 px-4'>Qualquer Semana</p>
                    <p className='px-4'>Hospedes</p>

                    <div className='bg-primary-400 rounded-full p-2 ml-4 hover:bg-primary-500 transition-colors cursor-pointer text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </Link>

                {/* Compact search for mobile/tablet */}
                <Link to='/login' className="flex lg:hidden items-center border border-gray-300 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <span className="text-sm text-gray-600">Buscar</span>
                </Link>

                <Link to={user ? '/account/profile' : '/login'} className='flex items-center gap-1 md:gap-2 rounded-full border border-gray-300 py-2 pr-2 md:pr-4 pl-3 md:pl-6'>
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-5 text-gray-500" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    {user ? <p className="block">{user.name}</p> : <p className="block">Visitante</p>}

                </Link>

            </div>

        </header>

    )
}
export default Header