import React, { useState } from "react";
import { FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";

export default function Header() {
  const [Pshow, setPshow] = useState(false);
  const [search, setSearch] = useState("");

  const NavData = [
    { name: "Home" },
    { name: "About Us" },
    { name: "Process" },
    { name: "Contact Us" },
  ];

  // ✅ Search JSX (Reusable – Duplicate Removed)
  const searchInput = (textColor = "", placeholderColor = "") => (
    <div className="flex items-center border-2 border-orange-400 rounded-full px-2 py-1">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className={`outline-none bg-transparent px-3 text-sm flex-1 ${textColor} ${placeholderColor}`}
      />
      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400 text-white">
        <FaSearch className="text-sm" />
      </button>
    </div>
  );

  return (
    <header className="shadow-md bg-white relative">
      
      {/* Mobile Overlay */}
      <div
        onClick={() => setPshow(false)}
        className={`fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center transition-all duration-300 md:hidden z-50
          ${Pshow ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* Menu Box */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`w-[320px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white relative transition-all duration-300
            ${Pshow ? "scale-100" : "scale-95"}
          `}
        >
          <FaTimes
            className="absolute top-4 right-4 cursor-pointer text-xl hover:text-orange-400 transition"
            onClick={() => setPshow(false)}
          />

          {/* Nav Links */}
          <ul className="flex flex-col gap-6 text-lg font-medium text-center mt-6">
            {NavData.map((item, i) => (
              <li
                key={i}
                className={`cursor-pointer transition
                  ${item.name === "Home"
                    ? "text-orange-400"
                    : "hover:text-orange-400"}
                `}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* ✅ Mobile Search (Using Same JSX) */}
          <div className="mt-8">
            {searchInput("text-white", "placeholder-white")}
          </div>
        </div>
      </div>

      <section className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <h2 className="text-2xl font-bold text-zinc-800 cursor-pointer">
            Gr<span className="text-orange-500">O</span>cify
          </h2>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 font-medium text-gray-600">
              {NavData.map((item, i) => (
                <li
                  key={i}
                  className={`cursor-pointer transition
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

            {/* ✅ Desktop Search (Same JSX Reused) */}
            <div className="hidden md:flex">
              {searchInput()}
            </div>

            <FaHeart className="text-xl cursor-pointer hover:text-orange-500 transition" />
            <IoBagCheck className="text-xl cursor-pointer hover:text-orange-500 transition" />

            <FaBars
              className="text-xl cursor-pointer md:hidden"
              onClick={() => setPshow(true)}
            />
          </div>
        </div>
      </section>
    </header>
  );
}