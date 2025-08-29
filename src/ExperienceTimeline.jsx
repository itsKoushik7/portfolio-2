/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Cognizant Technology, Coimbatore",
      role: "Programmer Analyst",
      period: "May 2025 – June 2025",
      details: ["Hands-on experience in Java and manual testing."],
    },
    {
      company: "Elbert Technology Pvt Ltd, Hyderabad",
      role: "Software Engineer",
      period: "Dec 2024 – May 2025",
      details: [
        "Developed scalable, responsive UIs with React.js.",
        "Ensured clean code, API integration, and performance optimization.",
      ],
    },
    {
      company: "Zemoso Technologies, Hyderabad",
      role: "Developer Intern",
      period: "Aug 2024 – Oct 2024",
      details: ["Worked on software development projects as an intern."],
    },
  ];
  return (
    <section className="py-16 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Professional Experience
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 w-1 bg-blue-500 h-full"></div>

        <ul className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              className="relative pl-12"
            >
              {/* Timeline marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white"
              >
                <FaCircle className="w-3 h-3" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 bg-white rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold">
                  {exp.role} – {exp.company}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <ul className="list-disc ml-6 text-gray-700">
                  {exp.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
