import React from 'react'

const Item = () => {
  return (
    <a href='/' className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
        <img 
            src="https://source.unsplash.com/400x300/?house,home,apartment" 
            alt="Casa em Lisboa" 
            className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3>Casa em Lisboa</h3>
        <p className="truncate text-gray-600">
          Uma linda casa localizada no coração de Lisboa, perfeita para férias em família ou uma escapada romântica.

        </p>
        <p>
         <span className='font-semibold'>€550 por noite</span>
        </p>
    </a>
  )
}

export default Item