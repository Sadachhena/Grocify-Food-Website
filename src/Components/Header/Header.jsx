import React from "react";
import { FaHeart, FaSearch, FaBars } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";

export default function Header() {

  const NavData = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Process" },
    { name: "Contact Us" },
  ];

  return (
    <header className="shadow-md bg-white">
      <section className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">

          {/* Logo */}
          <h2 className="text-2xl font-bold text-zinc-800 cursor-pointer">
            Gr<span className="text-orange-500">O</span>cify
          </h2>

          {/* Nav (Hidden on Mobile) */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium text-gray-600">
              {NavData.map((item, i) => (
                <li
                  key={i}
                  className={`cursor-pointer transition duration-200
                    ${item.name === "Home"
                      ? "text-orange-400"
                      : "hover:text-orange-400"}
                  `}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Search */}
            <div className="hidden md:flex items-center border-2 border-orange-400 rounded-full px-2 py-1">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-transparent px-3 text-sm w-36"
              />
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400 text-white cursor-pointer">
                <FaSearch className="text-sm" />
              </span>
            </div>

            {/* Icons */}
            <FaHeart className="text-xl cursor-pointer hover:text-orange-500 transition duration-200" />
            <IoBagCheck className="text-xl cursor-pointer hover:text-orange-500 transition duration-200" />

            {/* Mobile Menu Icon */}
            <FaBars className="text-xl cursor-pointer md:hidden" />

          </div>
        </div>
      </section>
    </header>
  );
}