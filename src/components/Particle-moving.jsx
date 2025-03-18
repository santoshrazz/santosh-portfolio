"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 50; // Adjust this number to increase/decrease particles
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1, // Random size between 1 and 4
        speedX: (Math.random() - 0.5) * 2, // Random speed in X direction
        speedY: (Math.random() - 0.5) * 2, // Random speed in Y direction
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-green-500 opacity-30"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{ x: particle.x, y: particle.y }}
          animate={{
            x: [particle.x, particle.x + particle.speedX * 100, particle.x],
            y: [particle.y, particle.y + particle.speedY * 100, particle.y],
          }}
          transition={{
            duration: Math.random() * 5 + 5, // Random duration between 5 and 10 seconds
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
