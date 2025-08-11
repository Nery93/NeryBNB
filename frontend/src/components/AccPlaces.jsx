import React from 'react'
import { useUserContext } from '../contexts/UserContext'
import { Link, useParams } from 'react-router-dom'
import NewPlace from './NewPlace'


const AccPlaces = () => {
    const {action} = useParams()
    
    return (
        <div  className='w-full max-w-7x1'>
            {action !== "new" ? (
                <Link to="/account/places/new" className=' hover:bg-primary-500 flex items-center justify-center gap-2 bg-primary-400 text-white rounded-full px-6 py-2 mt-4 font-medium hover:bg-primary-500 transition-colors cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> 
                Adicionar novo lugar
            </Link>
            ) : (
                <NewPlace/>
            )}
            
        </div>
    )
}

export default AccPlaces
