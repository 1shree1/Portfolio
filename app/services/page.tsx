'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Creation (Next.js)',
    description: 'From idea to launch, I build custom, scalable websites tailored to your needs using Next.js, creating fast and dynamic user experiences.',
  },
  {
    title: 'Fullstack Web Development (PHP)',
    description: 'I design and develop fullstack web applications with PHP, MySQL, and modern frontend tools to create interactive, data-driven websites.',
  },
  {
    title: 'UI/UX Design & Prototyping',
    description: 'I design engaging and user-friendly interfaces with attention to detail and focus on usability.',
  },
  {
    title: 'Responsive Web Development',
    description: 'Your site will look and perform beautifully on all devices — mobile, tablet, and desktop.',
  },
  {
    title: 'Website Optimization & SEO Readiness',
    description: 'I optimize websites for performance and search engines, ensuring fast load times and discoverability.',
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-6 py-12 bg-black text-white relative">
      {/* Exit Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-sm bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-2xl shadow-lg"
      >
        Exit
      </button>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-red-700 mb-10 animate-pulse"
      >
        My Services
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 transition-all hover:shadow-red-700/30"
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
