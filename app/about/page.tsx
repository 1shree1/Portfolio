'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-red-700 mb-6 animate-pulse"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl text-lg sm:text-xl text-center mb-10"
      >
        Hi, I&apos;m <span className="text-red-500 font-semibold">Shree</span>, a
        passionate Frontend Developer who loves building beautiful and
        interactive web interfaces. I have worked on multiple projects using{" "}
        <span className="text-red-500 font-medium">HTML, CSS, JavaScript</span>{" "}
        and modern libraries like{" "}
        <span className="text-red-500 font-medium">React</span> and{" "}
        <span className="text-red-500 font-medium">Next.js</span>. I also have
        experience with <span className="text-red-500 font-medium">Java</span>,{" "}
        <span className="text-red-500 font-medium">PHP</span>,{" "}
        <span className="text-red-500 font-medium">SQL</span>, and tools like{" "}
        <span className="text-red-500 font-medium">Framer Motion</span> and{" "}
        <span className="text-red-500 font-medium">Tailwind CSS</span>. I enjoy
        turning complex problems into simple, user-friendly experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xl text-sm sm:text-base border border-red-700"
      >
        <p>
          <strong>Name:</strong> Shree Subedi
        </p>
        <p>
          <strong>Title:</strong> Full Stack Developer
        </p>
        <p>
          <strong>Tech Stack:</strong> HTML, CSS, JavaScript, React, Next.js,
          Tailwind CSS, Framer Motion, Php, Java, MySql
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:shree@gmail.com"
            className="text-red-500 hover:underline"
          >
            ksubedi306@gmail.com
          </a>
        </p>
        <p>
          <strong>Current Role:</strong> Frontend Intern @ topnepal Company
        </p>
      </motion.div>
    </div>
  );
}
