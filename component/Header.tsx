"use client";

import { motion } from "framer-motion";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Header = () => {
  return (
    <section
      id="top"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 bg-gradient-to-br from-black via-[#0d0d0d] to-[#1a1a1a] text-center text-white relative overflow-hidden"
    >
      {/* Fog effect (you can replace with canvas or Three.js for realism) */}
      <div className="absolute inset-0 bg-[url('/fog.gif')] bg-cover bg-center opacity-10 z-0" />

      {/* Eerie Ambient Glow */}
      <div className="absolute top-0 w-full h-2 blur-md bg-gradient-to-r from-red-800 via-transparent to-purple-800 animate-pulse" />

      {/* Profile Picture with Glitch Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 py-3 z-10 relative"
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-red-600 animate-glitch">
          <img
            src="/shree.jpg"
            alt="Shree Subedi"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Creepy Intro */}
      <motion.h3
        className="text-sm sm:text-base font-medium text-gray-300 mb-4 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to the Labyrinth of
        <span className="text-red-500 font-semibold"> Shree Subedi</span>
      </motion.h3>

      {/* Animated Main Title */}
      <motion.h1
        className="text-3xl sm:text-5xl font-extrabold leading-snug text-white mb-6 tracking-wide z-10 animate-flicker"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Horror-Inspired Web Artisan<br />
        from the Shadows of Nepal
      </motion.h1>

      {/* Distorted Description */}
      <motion.p
        className="max-w-2xl text-gray-400 text-sm sm:text-base mb-10 font-normal z-10 animate-textFade"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I conjure interactive, eerie, and immersive web experiences drawn from my love for the gothic, strange, and sublime. Let’s make the web thrillingly uncanny.
      </motion.p>

      {/* Haunted CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10"
      >
        <a
          href="/contactme"
          className="px-8 py-2.5 text-sm bg-red-600 text-white font-medium rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 animate-pulse"
        >
          Summon Me
        </a>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-10 z-10 animate-bounce text-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <BsArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Header;
