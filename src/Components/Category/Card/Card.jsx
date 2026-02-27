import React from 'react'
import { data } from '../CardData/CardData'
import Button from '../../Button/Button'
import { Link } from 'react-router'

export default function Card() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      
      {/* Grid Layout */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        
        {data.map((item, i) => (
          <div 
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img 
                src={item.image} 
                alt={item.title}
                className="h-40 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {item.p}
            </p>

            {/* Button */}
         <Link to={`/category/${item.slug}`}>
  <Button title="See All" />
</Link>

          </div>
        ))}

      </div>
    </section>
  )
}