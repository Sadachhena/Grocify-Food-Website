import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import Testimonial from "./TestimonialCard/Testimonial";

export default function CustomerSaying() {
  const testimonials = [
    { name: "Emily Johnson", role: "Food Blogger", text: "Fresh products and fast delivery." },
    { name: "David Smith", role: "Chef", text: "Quality ingredients every time." },
    { name: "Alye Zahra", role: "Model", text: "Affordable and reliable service." },
    { name: "Michael Brown", role: "Restaurant Owner", text: "Bulk ordering made easy." },
    { name: "Sara Khan", role: "Working Mom", text: "Saves me hours weekly." },
    { name: "Daniel Lee", role: "Nutrition Coach", text: "Great organic variety." }
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - visibleCards;

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto px-10 py-24 bg-orange-50">

      <div className="mb-16 text-center">
        <Heading highlight="Customers" text="Saying" />
      </div>

      <div className="relative">

        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (110 / visibleCards)}%)`
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`shrink-0 ${
                  visibleCards === 1 ? "w-full" : "w-1/3"
                }`}
              >
                <Testimonial
                  name={item.name}
                  role={item.role}
                  text={item.text}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
        >
          ›
        </button>

      </div>
    </section>
  );
}