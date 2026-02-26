import React from 'react'

export default function Testimonial({ name, role, text }) {
  return (
     <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-orange-100">
      
      {/* Top Section */}
      <div className="flex items-center gap-4 mb-6">
        
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-orange-200 flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold text-zinc-800">{name}</h4>
          <p className="text-sm text-zinc-500">{role}</p>

          {/* Stars */}
          <div className="flex text-yellow-400 text-sm mt-1">
            ★ ★ ★ ★ ★
          </div>
        </div>

      </div>

      {/* Text */}
      <p className="text-sm text-zinc-600 leading-relaxed">
        {text}
      </p>

    </div>
  )
}
