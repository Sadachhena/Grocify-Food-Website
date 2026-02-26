import React from 'react'

export default function Card({number,title}) {
  return (
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-orange-100">
      
      {/* Number */}
      <div className="text-orange-500 text-4xl font-bold mb-6">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-3 text-zinc-800">
        {title}
      </h3>

      {/* Text */}
      <p className="text-sm text-zinc-500 leading-relaxed">
        It is a long established fact that a reader will be distracted by the readable content.
      </p>

    </div>
  )
}
