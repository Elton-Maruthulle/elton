import React from 'react';
import { motion } from 'framer-motion';

export default function Banner() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#6f53a6] to-[#9a7cc2] text-white py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
      
      {/* Logo & Animated Title */}
      <div className="flex items-center gap-3">
        <div className="bg-white/10 p-3 rounded-2xl sparkle">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.6 7.6L19.6 8.4L14.8 12.4L16 18L12 14.8L8 18L9.2 12.4L4.4 8.4L10.4 7.6L12 2Z" fill="#fff"/>
          </svg>
        </div>
        <motion.h1
          className="text-2xl sm:text-4xl font-extrabold tracking-tight text-center sm:text-left"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        >
          🚀 Elton | Portfolio
        </motion.h1>
      </div>

      {/* Navigation & Download */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        {/* Scroll Buttons */}
        <button
          onClick={() => scrollToSection('projects')}
          className="w-full sm:w-auto px-5 py-3 text-sm sm:text-base font-semibold rounded-lg bg-gradient-to-r from-[#ff7eb9] to-[#ff758c] shadow-lg hover:scale-105 transition-transform duration-200"
        >
          ✨ Projects
        </button>

        <button
          onClick={() => scrollToSection('gallery')}
          className="w-full sm:w-auto px-5 py-3 text-sm sm:text-base font-semibold rounded-lg bg-gradient-to-r from-[#7ed6ff] to-[#5eb8ff] shadow-lg hover:scale-105 transition-transform duration-200"
        >
          🖼 Gallery
        </button>

        {/* Special Download Button */}
        <a
          href="./assets/elton-maruthulle-cv-download.pdf"
          download="Elton_Maruthulle_CV.pdf"
          className="w-full sm:w-auto px-5 py-3 text-sm sm:text-base rounded-lg font-semibold bg-gradient-to-r from-[#fffa7e] to-[#ffd36a] text-[#4a3863] shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          ⬇ Download CV
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
          >
            📄
          </motion.span>
        </a>
      </div>
    </div>
  );
}
