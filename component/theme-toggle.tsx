'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

export default function HackAndHorrorPage() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);

  // Handle audio play/pause functionality
  const toggleAudio = () => {
    const audio = document.getElementById("background-audio") as HTMLAudioElement;
    if (audio.paused) {
      audio.play();
      setIsAudioPlaying(true);
    } else {
      audio.pause();
      setIsAudioPlaying(false);
    }
  };

  // Play the audio once the component mounts
  useEffect(() => {
    const audio = document.getElementById("background-audio") as HTMLAudioElement;
    audio.play(); // Start playing the audio
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white relative overflow-hidden">

      {/* Background Glitch Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0c0c0c] opacity-60 z-0 animate-glitch" />

      {/* Centered Glitchy Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-4xl sm:text-6xl font-bold text-red-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="glitch-text animate-pulse">Entering the Dark Mystry world..</h1>
      </motion.div>

      {/* Creeping Scrolling Lines */}
      <motion.div
        className="absolute bottom-5 left-0 text-sm font-mono text-gray-500 z-10 animate-scrollLines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <p className="text-center">Loading hacker data...</p>
        <p className="text-center">Decrypting files...</p>
        <p className="text-center">Finding hidden network...</p>
      </motion.div>

      {/* Faint Static / Flicker Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0 animate-flicker" />

      {/* Glitchy Red Button */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-red-600 rounded-xl cursor-pointer hover:bg-red-800 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 3 }}
      >
        <button className="text-xl text-white font-bold">Start Hacking</button>
      </motion.div>

      {/* Hidden Content that Flickers and Moves */}
      <motion.div
        className="absolute bottom-32 left-1/4 text-lg font-mono text-gray-300 z-10 animate-scrollLines"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 4 }}
      >
        <p className="text-center">Access granted...</p>
        <p className="text-center">Secret files unlocked...</p>
        <p className="text-center">Warning: System corrupted...</p>
      </motion.div>

      {/* Labyrinth-like Passage */}
      <motion.div
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 p-4 bg-red-600 rounded-xl cursor-pointer hover:bg-red-800 transition-all duration-300 animate-zoom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 5 }}
      >
        <button className="text-xl text-white font-bold">Unlock Hidden Data</button>
      </motion.div>

      {/* Background Audio - Play/Pause Button */}
      <div className="absolute top-5 right-5 z-10">
        <button
          onClick={toggleAudio}
          className="text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-800 transition-all duration-300"
        >
          {isAudioPlaying ? 'Mute' : 'Unmute'}
        </button>
      </div>

      {/* Audio element - Add your audio file */}
      <audio
        id="background-audio"
        src="/song.mp3"  // This should be the correct path to your audio file inside the public folder
        loop
        autoPlay
        className="hidden"
      ></audio>

      {/* Glitch animation keyframes in custom styles */}
      <style jsx>{`
        @keyframes glitch {
          0% {
            clip-path: inset(0 0 0 0);
            transform: translateX(0);
          }
          50% {
            clip-path: inset(5px 0 0 0);
            transform: translateX(-10px);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translateX(10px);
          }
        }

        .glitch-text {
          color: white;
          text-shadow: 0 0 3px red, 0 0 5px red, 0 0 7px red;
          animation: glitch 1s linear infinite;
        }

        @keyframes flicker {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-flicker {
          animation: flicker 2s infinite;
        }

        @keyframes scrollLines {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-scrollLines {
          animation: scrollLines 10s linear infinite;
        }

        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-zoom {
          animation: zoom 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
