import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import Perks from './Perks'

const NewPlace = () => {
  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [photos, setPhotos] = useState('')
  const [description, setDescription] = useState('')
  const [information, setInformation] = useState('')
  const [price, setPrice] = useState('')
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const { user } = useUserContext()

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('city', city)
    formData.append('photos', photos)
    formData.append('user', user)
    formData.append('description', description)


  }

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col w-full gap-4 px-8'>

      <div className='flex flex-col gap-2'>
        <label htmlFor='title' className='text-2xl font-bold px-2'>Titulo</label>
        <input type="text" placeholder='Digite o titulo' className='rounded-full border border-gray-300 py-2 px-4 pr-2 '
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-2 mt-8'>
        <label htmlFor='city' className='text-2xl font-bold px-2'>País</label>
        <input type="text" placeholder='Digite o país' className='rounded-full border border-gray-300 py-2 px-4 pr-2 '
          id='city'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-2 mt-8'>
        <label htmlFor='photos' className='text-2xl font-bold px-2'>Fotos</label>

        <div className='flex gap-2'>
          <input type="text" placeholder='Adicione suas fotos' className='rounded-full border grow border-gray-300 py-2 px-4 pr-2 '
            id='photos'
            value={photos}
            onChange={e => setPhotos(e.target.value)} />
          <button type="button" className=' hover:bg-gray-200 transition rounded-full border border-gray-300 
                                                   bg-gray-100 cursor-pointer py-2 px-4 pr-2'>
            Enviar foto
          </button>
        </div>

      </div>

      <div className='grid grid-cols-5 gap-2'>
        <label htmlFor="file" className='aspect-square cursor-pointer rounded-2xl border border-gray-300 flex items-center justify-center gap-2'>
          <input type="file" name="" id="file" className='hidden' />

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
          </svg>
          <span className='text-sm'>Upload</span>

        </label>

      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='description' className='text-2xl font-bold px-2'>Descrição</label>
        <textarea placeholder='Digite a descrição' className='rounded-2xl border border-gray-300 py-2 px-4 pr-2 h-56 resize-none '
          rows={4}
          id='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-2 p-4'>
        <label htmlFor='perks' className='text-2xl font-bold px-2'>Comodidades</label>
        <Perks />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='information' className='text-2xl font-bold px-2'>Informações extras</label>
        <textarea placeholder='Digite as informações extras' className='rounded-2xl border border-gray-300 py-2 px-4 pr-2 h-56 resize-none '
          rows={4}
          id='information'
          value={information}
          onChange={e => setInformation(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="ml-2 text-2xl font-bold">Restrições e Preço</h2>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="ml-2 text-xl font-bold">
              Preço
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              id="price"
              placeholder="500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="checkin" className="ml-2 text-xl font-bold">
              Checkin
            </label>
            <input
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              type="text"
              id="checkin"
              placeholder="16:00"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="checkout" className="ml-2 text-xl font-bold">
              Checkout
            </label>
            <input
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              type="text"
              id="checkout"
              placeholder="12:00"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="guests" className="ml-2 text-xl font-bold">
              N° Convidados
            </label>
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              type="number"
              id="guests"
              placeholder="6"
            />
          </div>
        </div>
      </div>

      <button className="bg-primary-400 rounded-full text-white">
        Salvar informações
      </button>

    </form>
  )
}

export default NewPlace

