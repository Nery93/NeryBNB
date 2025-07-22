import React from 'react'

const Item = () => {
  return (
    <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
        <img 
            src="https://source.unsplash.com/400x300/?house,home,apartment" 
            alt="Casa em Lisboa" 
            className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3>Casa em Lisboa</h3>
        <p>4 quartos • 2 banheiros</p>
        <p>
         <span className='font-semibold'>€550 por noite</span>
        </p>
    </div>
  )
}

export default Item