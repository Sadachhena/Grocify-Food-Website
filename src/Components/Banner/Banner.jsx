import React from "react";
import Button from "../Button/Button";
import BannerImage from'../../Image/ChatGPT Image Feb 24, 2026, 07_42_34 AM.png'

export default function Hero() {
  return (
    <section className="w-full bg-[#fdf8f3]">
      
      {/* Same container width as Header */}
      <div className="max-w-[1400px] mx-auto px-10 min-h-[70vh] flex items-center">
        
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">
          
          {/* LEFT */}
          <div className="space-y-6">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-[16px] font-semibold">
              Export Best Quality
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Tasty Organic <br />
              <span className="text-orange-500">
                Fruits & Veggies
              </span>{" "}
              <br />
              In Your City
            </h1>

            <p className="text-gray-600 max-w-md">
              Bred for a high content of beneficial substances.
              Our products are all fresh and healthy.
            </p>

            <Button title="Shop Now" />
          </div>

          {/* RIGHT */}
        <div className="flex justify-center items-center mr-20 md:justify-end">
            <img
              src={BannerImage}
              alt="Groceries"
              className="w-full max-w-[800px] object-contain hover:scale-105 "
            />
          </div>

        </div>
      </div>
    </section>
  );
}