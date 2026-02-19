"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ClassPulse – School Management System",
      link: "https://class-pulse-n.vercel.app/",
      desc: "Multi-tenant SaaS platform with RBAC for admins, teachers, and parents. Features attendance tracking, exam analytics, and report cards.",
      tech: "React.js, Tailwind CSS, Drizzle ORM, NeonDB, Clerk Auth, Recharts",
    },
    {
      title: "Casyomax – AI Caregiving Assistant",
      link: "https://jolly-bay-0b0d3440f.2.azurestaticapps.net/",
      desc: "Voice-enabled AI assistant for caregiving. Handles scheduling, email drafting, and context-aware workflows using Azure AI.",
      tech: "React Native, Node.js, PostgreSQL, Azure AI Foundry, Azure OpenAI, Azure Speech Services",
    },
    {
      title: "Study Broo – Student Assistance Platform",
      link: "https://study-broo.vercel.app/",
      desc: "Full-stack app for exam prep and resume building. Features hybrid ML question classification and LLM-powered notes generation.",
      tech: "React.js, Tailwind CSS, Node.js, MySQL, Groq API, PDFKit",
    },
    {
      title: "Fairneft – Loan & Finance Platform",
      link: "https://fairneft.com/",
      desc: "Modular React SPA with response UI for loan management. Features complex forms, data visualization, and PDF generation.",
      tech: "React.js, Vite, Tailwind CSS, Material UI, Formik, Yup, ECharts",
    },
    {
      title: "Learnity – E-Learning Platform",
      desc: "React-based e-learning platform with role-based routing and modular architecture.",
      tech: "React.js, JavaScript, REST APIs, HTML5, CSS3",
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
