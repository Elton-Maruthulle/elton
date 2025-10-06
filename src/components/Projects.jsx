import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Local assets
import img1 from '../assets/HotelApp.jpeg';
import img2 from '../assets/unidev.jpeg';
import img3 from '../assets/ChatApp.png';
import img4 from '../assets/studenthelpapp.png';
import demo3 from '../assets/demo.mp4';

const projects = [
  {
    id: 3,
    title: "ChatApp",
    desc: "Real-time chat application built with React and Spring Boot backend.",
    tech: ["React", "Spring Boot", "WebSocket"],
    img: img3,
    demo: demo3,
    codeLink: "https://github.com/Elton-Maruthulle/ChatApp",
  },
  {
    id: 1,
    title: "React Firebase Hotel App",
    desc: "Modern hotel booking app with React, Firebase, user authentication, and interactive maps.",
    tech: ["React", "Firebase", "Leaflet"],
    img: img1,
    viewLink: "https://elton-maruthulle.github.io/React_Js_Firebase_leaflet_Hotell_App",
    codeLink: "https://github.com/Elton-Maruthulle/React_Js_Firebase_leaflet_Hotell_App",
  },
  {
    id: 2,
    title: "UniDevSociety",
    desc: "Responsive website for UniDevSociety allowing students to access resources, submit materials, and explore society activities.",
    tech: ["React", "Tailwind CSS", "Lottie-Files"],
    img: img2,
    viewLink: "https://unisadevsociety.github.io/site/",
    codeLink: "https://github.com/unisadevsociety/site",
  },
  {
    id: 4,
    title: "Student Helper",
    desc: "A simple full-stack test project showcasing API integration, authentication, and frontend-backend interaction.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "JavaScript", "Cloudinary"],
    img: img4,
    viewLink: "https://elton-maruthulle.github.io/test/",
    codeLink: "https://github.com/Elton-Maruthulle/test",
  },
  
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

export default function Projects() {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <section className="mt-10 px-4 md:px-10">
      <h3 className="text-3xl font-extrabold text-textPurple mb-2">MY PROJECTS</h3>
      <p className="text-sm text-[#7d6a8c] mb-6">
        Click "View", "Code", or "View Demo" to explore.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-6 justify-start"
      >
        {projects.map((p) => (
          <motion.article
            key={p.id}
            variants={card}
            whileHover="hover"
            className="w-full sm:w-[48%] lg:w-[30%] rounded-2xl overflow-hidden relative"
          >
            <div className="bg-gradient-to-br from-[#fff1f6] to-[#fbe8f0] border-2 border-[#f6c6db] rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="rounded-xl overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-52 object-cover rounded-lg mb-3" />
              </div>

              <h4 className="font-bold text-[#4d3e6a]">{p.title}</h4>
              <p className="text-sm text-[#6b5a7c] mt-1">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-white/80 text-[#5b3f87] shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.viewLink && (
                  <a
                    className="text-xs px-3 py-1 rounded-full bg-[#f7d6e1] text-[#4a3863] font-medium shadow-sm hover:scale-105 transition-transform"
                    href={p.viewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                )}
                {p.codeLink && (
                  <a
                    className="text-xs px-3 py-1 rounded-full bg-white text-[#7d6a8c] shadow-sm opacity-90 hover:opacity-100 transition"
                    href={p.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                )}
                {p.demo && (
                  <button
                    className="text-xs px-3 py-1 rounded-full bg-[#d1c4f0] text-[#4a3863] font-medium shadow-sm hover:scale-105 transition-transform"
                    onClick={() => setModalSrc(p.demo)}
                  >
                    View Demo
                  </button>
                )}
              </div>
            </div>

            <div className="absolute -top-3 -left-3">
              <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-sm shadow-md">
                ★
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Modal */}
      {modalSrc && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalSrc(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-2xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-[#4a3863] font-bold text-lg"
              onClick={() => setModalSrc(null)}
            >
              ✕
            </button>
            <video src={modalSrc} controls autoPlay className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}
