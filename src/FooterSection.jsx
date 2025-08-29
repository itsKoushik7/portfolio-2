/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <motion.footer
      className="py-6  text-black text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        © {new Date().getFullYear()} Laxmi Koushik Nandikanti
      </motion.p>
    </motion.footer>
  );
}
