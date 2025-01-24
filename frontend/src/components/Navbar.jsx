import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-300 text-gray-800  shadow-md fixed w-full z-30 top-0 ">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6  ">
        {/* Logo */}
        <div className="">
          <img src="/logo-light.png" alt="Logo" className="h-8" />
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 ">
          <li
            className="hover:text-gray-500 cursor-pointer text-transform: uppercase"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </li>
          <li
            className="hover:text-gray-500 cursor-pointer text-transform: uppercase"
            onClick={() => {
              window.location.href = "#about";
            }}
          >
            About
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-transform: uppercase">
            Services
          </li>
          <li
            className="hover:text-gray-500 cursor-pointer text-transform: uppercase"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile/Tablet Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-700 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 transition-transform duration-500 ease-in-out`}
      >
        <div className="p-4 flex justify-end">
          <button className="text-white" onClick={() => setMenuOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6">
          <li
            className="cursor-pointer
          hover:bg-white hover:text-black p-2 rounded"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer
          hover:bg-white hover:text-black p-2 rounded"
            onClick={() => {
              window.location.href = "/about";
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer
          hover:bg-white hover:text-black p-2 rounded"
          >
            Services
          </li>
          <li
            className="cursor-pointer
          hover:bg-white hover:text-black p-2 rounded"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
