import React from 'react'

export default function Button(props) {
  return (
   <button className='text-white bg-gradient-to-t from-orange-400 to-red-400 p-2 rounded-lg px-2 hover:scale-110 hover:bg-gradient-to-t hover:to-red-400 hover:from-orange-500'>
    {props.title}
   </button>
  )
}
