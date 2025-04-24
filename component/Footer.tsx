'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Blood-red wave divider */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="#8B0000" d="M0,64L1440,0L1440,320L0,320Z" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-red-700 text-xl font-semibold mb-4 animate-pulse text-shadow">About Me</h3>
          <p className="text-gray-300 text-sm">
            I specialize in creating spooky, fast, and scalable digital experiences. Using technologies like React, Next.js, and Tailwind CSS, I bring dark visions to life.
          </p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-red-700 text-xl font-semibold mb-4 animate-pulse text-shadow">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[ 'MyWork', 'Services', 'About'].map((link, index) => (
              <li key={index}>
                <a href={`${link.toLowerCase()}`} className="hover:text-red-500 transition-all duration-200 text-shadow hover:text-shadow">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-red-700 text-xl font-semibold mb-4 animate-pulse text-shadow">Stay Connected</h3>
          <div className="flex space-x-6 justify-center">
            <a href="https://github.com/1shree1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 text-xl text-white hover:text-red-500 hover:text-shadow">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shree-subedi-b59836284/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 text-xl text-white hover:text-red-500 hover:text-shadow">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Ksubedi306Shree" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 text-xl text-white hover:text-red-500 hover:text-shadow">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/s_h_r_e_e_306/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 text-xl text-white hover:text-red-500 hover:text-shadow">
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-red-900 text-center text-sm text-gray-400 py-6 text-shadow">
        &copy; {new Date().getFullYear()} Shree Subedi. All rights reserved.
      </div>

      {/* Foggy overlay for spooky effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>
    </footer>
  );
}
