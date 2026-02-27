import React from 'react'

export default function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className='text-white bg-gradient-to-t from-orange-400 to-red-400 p-2 rounded-lg px-4 hover:scale-110 transition duration-300'
    >
      {title}
    </button>
  )
}