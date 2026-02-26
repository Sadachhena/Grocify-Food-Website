import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#fdf8f3] border-t">

      <div className="max-w-[1400px] mx-auto px-10 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Gro<span className="text-orange-500">cify</span>
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Bred for a high content of beneficial substances.
            Our products are all fresh and healthy.
          </p>

          <p className="text-gray-500 text-sm">
            2025 © All Rights Reserved
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">FAQ’S</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Support Center</li>
            <li className="hover:text-orange-500 cursor-pointer">Feedback</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>

          <p className="text-gray-600 text-sm mb-6">
            Questions or Feedback?
            <br />
            We’d love to hear from you.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 text-sm border rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600 transition">
              &gt;
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}