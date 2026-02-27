import React, { useState } from "react";
import { data } from "./ProductData/ProductData";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

export default function Tab() {
  const [tab, settab] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const categories = ["ALL", "Fruits", "Vegetables", "Meat", "Dairy"];

  // Filter Logic
  const filteredItems =
    tab === "ALL"
      ? data
      : data.filter((item) => item.Category === tab);

  // View All Logic
  const displayItems = showAll
    ? filteredItems
    : filteredItems.slice(0, 8);

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-10">
      <Heading highlight="Our" text="Products" />

      {/* Tabs */}
      <section className="flex flex-wrap gap-4 justify-center mb-10 mt-10">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => {
              settab(item);
              setShowAll(false); // reset when tab changes
            }}
            className={`px-6 py-2 font-bold rounded-full transition duration-300 ${
              tab === item
                ? "text-white bg-gradient-to-tr from-red-500 to-red-700 shadow-lg"
                : "bg-zinc-200 text-black hover:bg-red-100"
            }`}
          >
            {item}
          </button>
        ))}
      </section>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={product.Image}
                alt={product.Name}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">
                {product.Name}
              </h2>
            </div>

            <div className="flex items-center justify-center mb-6">
              <Button title="Shop Now" />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {filteredItems.length > 8 && (
        <div className="mt-10 flex justify-center items-center">
          <Button
            title={showAll ? "Show Less" : "View All"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      )}
    </div>
  );
}