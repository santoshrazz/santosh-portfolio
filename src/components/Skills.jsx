"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Web Development", percentage: 80 },
  { name: "Hardware Development", percentage: 95 },
  { name: "Software Development", percentage: 90 },
  { name: "System Application", percentage: 75 },
  { name: "Project Management", percentage: 60 },
  { name: "Data Administration", percentage: 85 },
];

const CircularProgress = ({ skill }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (skill.percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4" ref={ref}>
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="stroke-muted fill-none"
            strokeWidth="4"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            className="stroke-primary fill-none"
            strokeWidth="4"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={controls}
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {skill.percentage}%
          </motion.span>
        </div>
      </div>
      <motion.span
        className="text-center font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {skill.name}
      </motion.span>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      id="skills"
    >
      <div className="space-y-4 mb-12">
        <h3 className="text-sm font-medium uppercase tracking-wider text-primary">
          MY SKILL
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold">Growing Over Times</h2>
        <p className="text-muted-foreground max-w-2xl">
          Always learning, Santosh Kumar stays up-to-date with the latest trends
          in web development and software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((skill) => (
          <CircularProgress key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
