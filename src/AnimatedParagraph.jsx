/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedParagraph() {
  const text = `Motivated and results-oriented Software Developer with hands-on
  experience in full-stack web development, cloud deployment, and DevOps
  practices. Skilled in JavaScript, Node.js, React, and AWS Cloud.
  Seeking opportunities in Software Development, DevOps, or Cloud
  Engineering.`.split(" ");

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.p
      layout
      className="max-w-2xl text-lg md:text-xl text-gray-700 mb-6 mt-10 leading-relaxed text-center mx-auto flex flex-wrap  justify-center"
    >
      {text.map((wordText, i) => (
        <motion.span
          key={i}
          layout
          initial={{
            x: Math.random() * window.innerWidth - window.innerWidth / 2,
            y: Math.random() * window.innerHeight - window.innerHeight / 2,
            opacity: 0,
            rotate: 0,
            scale: 0.5,
          }}
          animate={
            startAnimation
              ? {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  rotate: [0, 360],
                  scale: 1,
                  transition: {
                    duration: 4,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  },
                }
              : {}
          }
          whileHover={{
            scale: [1, 1.3, 0.95, 1.5, 1],
            color: "#2563eb",
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
          className="inline-block mr-1 cursor-pointer"
        >
          {wordText}
        </motion.span>
      ))}
    </motion.p>
  );
}
