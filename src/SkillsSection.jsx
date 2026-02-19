/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaMicrosoft,
  FaCloud,
  FaNpm,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiOpenai,
  SiC,
  SiVite,
} from "react-icons/si";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, label: "JavaScript (ES6)" },
        { icon: <FaJava className="w-8 h-8 text-red-500" />, label: "Java" },
        { icon: <SiC className="w-8 h-8 text-blue-500" />, label: "C" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: <FaReact className="w-8 h-8 text-blue-400" />, label: "React.js" },
        { icon: <FaReact className="w-8 h-8 text-blue-400" />, label: "React Native" },
        { icon: <FaHtml5 className="w-8 h-8 text-orange-600" />, label: "HTML5" },
        { icon: <FaCss3Alt className="w-8 h-8 text-blue-500" />, label: "CSS3" },
        { icon: <SiTailwindcss className="w-8 h-8 text-sky-400" />, label: "Tailwind CSS" },
        { icon: <FaCode className="w-8 h-8 text-blue-600" />, label: "Material UI" },
        { icon: <FaBootstrap className="w-8 h-8 text-purple-600" />, label: "Bootstrap" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs className="w-8 h-8 text-green-600" />, label: "Node.js" },
        { icon: <SiExpress className="w-8 h-8 text-gray-400" />, label: "Express.js" },
        { icon: <FaCode className="w-8 h-8 text-pink-600" />, label: "RESTful APIs" },
      ],
    },
    {
      title: "AI & Cloud",
      skills: [
        { icon: <FaMicrosoft className="w-8 h-8 text-blue-600" />, label: "Azure AI Foundry" },
        { icon: <SiOpenai className="w-8 h-8 text-teal-500" />, label: "Azure OpenAI" },
        { icon: <FaCloud className="w-8 h-8 text-blue-500" />, label: "Azure Speech Services" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { icon: <SiMysql className="w-8 h-8 text-blue-600" />, label: "MySQL" },
        { icon: <SiPostgresql className="w-8 h-8 text-blue-800" />, label: "PostgreSQL" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: <FaGitAlt className="w-8 h-8 text-orange-600" />, label: "Git" },
        { icon: <FaGithub className="w-8 h-8 text-gray-800" />, label: "GitHub" },
        { icon: <SiVite className="w-8 h-8 text-purple-500" />, label: "VS Code" },
        { icon: <SiPostman className="w-8 h-8 text-orange-500" />, label: "Postman" },
        { icon: <FaNpm className="w-8 h-8 text-red-500" />, label: "npm" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Technical Skills
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-gray-300 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2 inline-block">
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: 2,
                    }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-gray-200 cursor-pointer group hover:bg-white/20 transition-colors"
                  >
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900">
                      {skill.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
