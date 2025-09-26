import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Gallery media
import topgrad from '../assets/top.mp4';
import Hackethon1 from '../assets/Hackethon1.jpeg';
import Hackethon2 from '../assets/Hackethon2.jpeg';
import Hackethon3 from '../assets/Hackethon3.jpeg';
import Mentor from '../assets/Mentor.jpeg';
import rep from '../assets/rep.mp4';

const galleryItems = [
  
  { id: 2, type: 'image', src: Hackethon1, caption: 'Me with my Hackathon team' },
  { id: 3, type: 'image', src: Mentor, caption: 'Mentoring kids in IoT projects' },
  { id: 4, type: 'video', src: rep, caption: 'Presentation at work' },
  { id: 1, type: 'video', src: topgrad, caption: 'Top student in my Java class' },
  
  { id: 6, type: 'image', src: Hackethon2, caption: 'Me with my Hackathon team' },
  { id: 7, type: 'image', src: Hackethon3, caption: 'Hackathon certs' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const scrollRef = useRef();

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="mt-16 px-4 md:px-10">
      <h3 className="text-3xl font-extrabold text-textPurple mb-3">Gallery</h3>
      <p className="text-sm text-[#7d6a8c] mb-6">
        My Journey...
      </p>

      <div className="relative">
        {/* Scroll Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow p-2 hover:bg-white z-10"
        >
          ‹
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow p-2 hover:bg-white z-10"
        >
          ›
        </button>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id + index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-[250px] rounded-xl overflow-hidden shadow-lg cursor-pointer bg-gradient-to-br from-[#fff1f6] to-[#fbe8f0]"
              onClick={() => openModal(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-48 object-cover rounded-t-xl"
                  muted
                  controls
                />
              )}
              <p className="text-xs text-center text-[#6b5a7c] p-2">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full p-4 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-[#4a3863] font-bold text-2xl"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Previous/Next buttons */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1 text-xl font-bold hover:bg-white transition"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? galleryItems.length - 1 : prev - 1
                  )
                }
              >
                ‹
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1 text-xl font-bold hover:bg-white transition"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === galleryItems.length - 1 ? 0 : prev + 1
                  )
                }
              >
                ›
              </button>

              {/* Media */}
              {galleryItems[currentIndex].type === 'video' ? (
                <video
                  src={galleryItems[currentIndex].src}
                  controls
                  autoPlay
                  className="w-full max-h-[70vh] rounded-xl"
                />
              ) : (
                <img
                  src={galleryItems[currentIndex].src}
                  alt={galleryItems[currentIndex].caption}
                  className="w-full max-h-[70vh] rounded-xl object-cover"
                />
              )}

              <p className="text-sm text-center text-[#6b5a7c] mt-3">
                {galleryItems[currentIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
