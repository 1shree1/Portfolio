'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    image: "/shree.jpg",
    description: "A sleek and modern personal portfolio using Next.js and Tailwind.",
    url: "https://yourportfolio.com",
  },
  {
    title: "Bus Ticketing App",
    image: "/bus.png",
    description: " A bus ticketing web app for booking tickets in Nepal.",
    url: "https://github.com/1shree1/Bus-Ticketing",
  },
  {
    title: "ShopCircuit",
    image: "/shop.png",  // Replace with your actual image path
    description: "A e-commerce platform for buying and selling products.",
    url: "https://github.com/1shree1/shopcircuit",
  },
  // {
  //   title: "Veggies Page",
  //   image: "/veggies.png",  // Replace with your actual image path
  //   description: "A platform for delivering fresh vegetarian meals every day.",
  //   url: "https://veggiespage.com",
  // },
  // {
  //   title: "See Car",
  //   image: "/seecar.png",  // Replace with your actual image path
  //   description: "Find your dream car – from new to used vehicles.",
  //   url: "https://seecar.com",
  // },
  // {
  //   title: "Movie Dashboard",
  //   image: "/movie-dashboard.png",  // Replace with your actual image path
  //   description: "A dynamic movie dashboard built with React and styled with Tailwind.",
  //   url: "https://moviedashboard.com",
  // },
  // {
  //   title: "Food Delivery App",
  //   image: "/food-delivery.png",  // Replace with your actual image path
  //   description: "A food delivery app featuring real-time orders and tracking.",
  //   url: "https://fooddeliveryapp.com",
  // },
  // {
  //   title: "E-commerce Site",
  //   image: "/ecommerce.png",  // Replace with your actual image path
  //   description: "An e-commerce platform built using Next.js and integrated payment gateways.",
  //   url: "https://ecommerce.com",
  // },
  // {
  //   title: "Fitness Tracker",
  //   image: "/fitness-tracker.png",  // Replace with your actual image path
  //   description: "A fitness tracker app that helps you track workouts and progress.",
  //   url: "https://fitnesstracker.com",
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white relative">
      {/* Foggy overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl sm:text-6xl font-bold text-center mb-14 text-red-600 animate-pulse z-10 relative"
      >
        My Projects
      </motion.h2>

      <div className="flex justify-center items-center overflow-hidden relative z-10">
        <div
          className="project-carousel flex gap-10"
          style={{
            animation: "moveLeftToRight 60s linear infinite",
            animationDelay: "0s",  // Ensures animation starts immediately
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-gray-900 p-6 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-red-600 hover:text-red-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 font-semibold underline transition-colors"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes moveLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .project-card {
          transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
        }

        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(255, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;
