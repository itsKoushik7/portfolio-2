/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <motion.section
      className="py-16  text-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Education
      </motion.h2>
      <motion.p
        className="text-lg mb-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        B.Tech in Computer Science & Engineering – Indur Institute of
        Engineering and Technology (2020–2024)
      </motion.p>
      <motion.p
        className="text-gray-600"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        CGPA: 7.54
      </motion.p>
    </motion.section>
  );
}
