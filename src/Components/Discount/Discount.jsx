import React from "react";
import Button from "../Button/Button";

export default function Discount() {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-24">
      
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl p-16 text-white relative overflow-hidden">
        
        {/* Soft Glow Effect */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-widest text-sm opacity-80">
              Limited Time Offer
            </p>

            <h2 className="text-5xl font-bold mt-4 leading-tight">
              Get <span className="text-yellow-200">20% Off</span>  
              <br /> On Your First Order
            </h2>

            <p className="mt-6 max-w-lg text-white/90">
              Fresh groceries delivered to your doorstep. 
              Fast shipping. Premium quality. No compromises.
            </p>
          </div>

          {/* Right Side Button */}
          <div>
            <Button title="Claim Discount" />
          </div>

        </div>

      </div>
    </section>
  );
}