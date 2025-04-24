'use client';

import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-white" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black overflow-hidden min-h-screen"
    >
      {/* Background Grid Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] dark:bg-grid-slate-600/[0.05] pointer-events-none z-0" />

      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-red-600 mb-16 z-10 relative animate-pulse"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Dark Superpowers
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-gray-800/50 dark:bg-gray-800/70 backdrop-blur-lg border border-red-600 dark:border-red-500 shadow-2xl rounded-2xl transition-transform hover:scale-110 hover:rotate-2 hover:bg-red-600 hover:text-black cursor-pointer"
              variants={itemVariants}
              whileHover={{ rotate: [0, 2, -2, 2, 0] }}
            >
              <Icon className={`text-5xl ${skill.color} transition-all`} />
              <p className="text-base font-medium text-center text-gray-800 dark:text-gray-200 group-hover:text-black transition-colors duration-300">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
