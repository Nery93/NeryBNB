import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'

const NewPlace = () => {
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const { user } = useUserContext()

  return (
    <div className='w-full px-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='text-3xl font-bold px-2'>Titulo</h2>
            <input type="text" placeholder='Digite o titulo' className='rounded-full border border-gray-300 py-2 px-4 pr-2 ' 
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>

        <div className='flex flex-col gap-2 mt-8'>
            <h2 className='text-3xl font-bold px-2'>Endereço</h2>
            <input type="text" placeholder='Digite o endereço' className='rounded-full border border-gray-300 py-2 px-4 pr-2 ' 
            value={address}
            onChange={e => setAddress(e.target.value)}
            />
        </div>
    </div>
  )
}

export default NewPlace

