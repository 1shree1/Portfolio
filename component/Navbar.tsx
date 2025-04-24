'use client';

import Image from "next/image";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa"; // Importing eye icon
import HackAndHorrorPage from "@/component/theme-toggle"; // Import the Hack and Horror Page component

const navItems = ["My Work", "Services", "About"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHackPage, setShowHackPage] = useState(false); // State to toggle Hack page visibility

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Function to open Hack and Horror Page
  const openHackPage = () => {
    setShowHackPage(true); // Change state to show Hack page
  };

  return (
    <nav className="w-full fixed top-0 px-4 lg:px-6 py-0.5 flex items-center justify-between z-50 bg-black/80 backdrop-blur-md shadow-lg text-white transition-colors duration-300 border-b border-red-700">
      {/* Logo - keeping it to the left */}
      <a href="#top" className="transition-transform duration-300 hover:scale-105">
        <Image
          src="/logo.png"
          alt="Logo"
          width={112}
          height={40}
          className="cursor-pointer"
          priority
        />
      </a>

      {/* Desktop Nav - Centering Navigation Items */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold mx-auto">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`${item.toLowerCase().replace(/\s+/g, "")}`}
              className="relative text-gray-300 group transition-all duration-300 hover:text-red-700"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Actions - Horror Page Button and Mobile Menu Button */}
      <div className="flex items-center gap-5">
        {/* Button to open Horror Page */}
        <button
          onClick={openHackPage} // Correct function call to show Hack page
          className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-800 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-110"
        >
          <FaEye size={24} className="text-white" /> {/* Red Eye Icon */}
          <span className="font-bold"> Mystry</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="block md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={112}
            height={40}
            className="cursor-pointer glow-logo"
            priority
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-40 transform transition-transform duration-300 border-l border-red-700 text-white ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="absolute top-5 right-5 text-white"
          aria-label="Close mobile menu"
        >
          <Image src="/bx-exit.svg" alt="Close" width={32} height={32} />
        </button>

        <ul className="flex flex-col mt-20 gap-6 px-6 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                onClick={closeMenu}
                className="block hover:text-red-700 transition duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Conditionally render the HackAndHorrorPage component */}
      {showHackPage && <HackAndHorrorPage />}
    </nav>
  );
};

export default Navbar;
