import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const random = (min, max) => Math.random() * (max - min) + min;

export default function FloatingBubbles({ count = 20 }) {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: random(20, 60), // size in px
      left: random(0, 100), // horizontal position in %
      duration: random(8, 16), // speed
      delay: random(0, 6), // staggered spawn
      color: pastelColor(),
    }));
    setBubbles(newBubbles);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div 
          key={bubble.id}
          initial={{
            y: "100vh",
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: "-120vh",
            opacity: [0.6, 1, 0],
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeOut",
          }}
          className="absolute rounded-full bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            background: bubble.color,
            boxShadow: `0 0 15px ${bubble.color}66`,
          }}
        />
      ))}
    </div>
  );
}

function pastelColor() {
  const pastelPalette = [
    "#f8d7f0", // pink
    "#e4d1ff", // lavender
    "#d3e0ff", // soft blue
    "#fce4ec", // light rose
    "#e8f5e9", // mint
  ];
  return pastelPalette[Math.floor(Math.random() * pastelPalette.length)];
}
