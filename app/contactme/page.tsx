'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactMe() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 relative overflow-hidden">
      
      {/* Blood Red Fog Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-6 text-red-600 animate-pulse z-10 relative text-shadow"
      >
        Get in Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg sm:text-xl text-center max-w-xl mb-10 text-gray-300"
      >
        I'd love to connect with you! Whether it's for a project, opportunity, or just to say hi.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-8 z-10 relative"
      >
        {/* Social Media Icons with Bloody Hover Effect */}
        <a href="https://github.com/1shree1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform hover:text-red-600 hover:rotate-2">
          <FaGithub size={40} className="text-white hover:text-red-600 transition-all" />
        </a>
        <a href="https://www.linkedin.com/in/shree-subedi-b59836284/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform hover:text-red-600 hover:rotate-2">
          <FaLinkedin size={40} className="text-white hover:text-red-600 transition-all" />
        </a>
        <a href="https://x.com/Ksubedi306Shree" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform hover:text-red-600 hover:rotate-2">
          <FaTwitter size={40} className="text-white hover:text-red-600 transition-all" />
        </a>
        <a href="mailto:ksubedi306@gmail.com" className="hover:scale-110 transition-transform hover:text-red-600 hover:rotate-2">
          <FaEnvelope size={40} className="text-white hover:text-red-600 transition-all" />
        </a>
        <a href="tel:+977 9862702753" className="hover:scale-110 transition-transform hover:text-red-600 hover:rotate-2">
          <FaPhoneAlt size={40} className="text-white hover:text-red-600 transition-all" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center text-sm sm:text-base z-10 relative"
      >
        <p>Email: <a href="mailto:ksubedi306@gmail.com" className="text-red-600 hover:underline text-shadow">ksubedi306@gmail.com</a></p>
        <p>Phone: <a href="tel:+977 9862702753" className="text-red-600 hover:underline text-shadow">+977 9862702753</a></p>
      </motion.div>
    </div>
  );
}
