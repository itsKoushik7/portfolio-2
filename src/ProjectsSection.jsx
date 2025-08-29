"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      link: "https://laxmikoushik-n.vercel.app/",
      desc: "My personal portfolio showcasing my skills, projects, and professional experience. Built with React, Framer Motion, and Tailwind CSS with modern animations.",
      tech: "React.js, TailwindCSS, Framer Motion, JavaScript, HTML5, CSS3",
    },
    {
      title: "Node.js App Deployment on AWS EC2",
      desc: "Deployed a full-stack Node.js app on AWS EC2 using SSH, GitHub & PM2 for uptime.",
      tech: "AWS EC2, IAM, S3, PM2, GitHub, Node.js, Linux, Shell Scripting",
    },
    {
      title: "Study Broo – Student Assistance Platform",
      link: "https://study-broo.vercel.app",
      desc: "Full-stack web app for exam prep, resume creation, and project collaboration. Includes ML + LLM features.",
      tech: "Node.js, Express, MySQL, React.js, Tailwind, Groq API, PDFKit",
    },
    {
      title: "Learnity – E-Learning Platform",
      desc: "React-based platform with role-based routing, modular components, and real-time tracking.",
      tech: "React.js, JavaScript ES6, REST APIs, HTML5, CSS3",
    },
  ];
  return (
    <section className="py-16 ">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="relative p-6 rounded-xl shadow-xl overflow-hidden cursor-pointer"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #f0f4ff, #dbeafe)",
              }}
              animate={{
                background: [
                  "linear-gradient(135deg, #f0f4ff, #dbeafe)",
                  "linear-gradient(135deg, #e0f7fa, #ffecb3)",
                  "linear-gradient(135deg, #f0f4ff, #dbeafe)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-2">{proj.desc}</p>
              <motion.div
                className="flex flex-wrap gap-2 mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.2, staggerChildren: 0.1 }}
              >
                {proj.tech.split(",").map((tech, j) => (
                  <motion.span
                    key={j}
                    className="px-2 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-700"
                    whileHover={{ scale: 1.2, backgroundColor: "#bfdbfe" }}
                  >
                    {tech.trim()}
                  </motion.span>
                ))}
              </motion.div>
              {proj.link && (
                <motion.a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-semibold underline inline-block"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 8px #3b82f6",
                    transition: { duration: 0.3 },
                  }}
                >
                  View Project
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
