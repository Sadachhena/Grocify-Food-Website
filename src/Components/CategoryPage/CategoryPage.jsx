import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../Products/ProductData/ProductData"; // adjust path if needed

export default function CategoryPage() {
  const { name } = useParams();

  // exact match filtering (important)
  const filteredProducts = data.filter(
    (item) => item.Category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-16 mt-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        {name.toUpperCase()}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
            >
              <img
                src={item.Image}
                alt={item.Name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-center mt-4 font-semibold text-lg">
                {item.Name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}