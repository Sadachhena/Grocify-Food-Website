import React from "react";
import Heading from "../Heading/Heading";

export default function Process() {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-24 bg-orange-50">
      
      {/* Heading */}
      <div className="mb-16">
        <Heading highlight="Our" text="Process" />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-8">

        <Card number="01" title="Sourcing" />
        <Card number="02" title="Manufacturing" />
        <Card number="03" title="Quality Control" />
        <Card number="04" title="Logistics" />

      </div>
    </section>
  );
}

function Card({ number, title }) {
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
  );
}