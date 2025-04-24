'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample Projects Data
const projects = [
  {
    title: "Haunted Portfolio",
    description: "A spooky, dark-themed personal portfolio built with Next.js, React, and Tailwind CSS.",
    githubLink: "https://github.com/your-username/haunted-portfolio",
    liveLink: "https://hauntedportfolio.com",
  },
  {
    title: "Online Bus Ticketing",
    description: "A BusTicketing web app from where people can book their Bus tickets in nepal, styled with CSS and JavaScript ,and backend with PHP and MySQL.",
    githubLink: "https://github.com/your-username/ghostly-weather-app",
    liveLink: "https://ghostlyweatherapp.com",
  },
  {
    title: "Shop Circuit",
    description: "An e-commerce platform built using react.js where people can buy their favorite products and sell as well.",
    githubLink: "https://github.com/1shree1/shopcircuit",
    liveLink: "https://phantomecommerce.com",
  },
];

const MyWork = () => {
  return (
    <section id="my-work" className="min-h-screen py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Fog */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-red-600 mb-12 animate-pulse"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Work
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-gray-800 p-6 rounded-xl shadow-xl transition-all hover:scale-105 hover:shadow-red-500"
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 2, 0] }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl z-0"></div>
            <h3 className="text-2xl font-semibold mb-4 text-red-600 group-hover:text-cyan-400 z-10 relative">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 z-10 relative">{project.description}</p>

            <div className="flex gap-4 z-10 relative">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition-all duration-300">
                <FaGithub size={24} />
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 transition-all duration-300">
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyWork;
