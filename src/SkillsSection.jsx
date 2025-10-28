// /* eslint-disable no-unused-vars */
// "use client";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaAws,
//   FaDocker,
//   FaLinux,
//   FaJava,
//   FaPython,
//   FaGitAlt,
//   FaHtml5,
//   FaCss3Alt,
//   FaBootstrap,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiMysql,
//   SiJenkins,
//   SiGoland,
//   SiPostman,
//   SiRedux,
//   SiTailwindcss,
//   //   SiVscode,
//   SiVite,
//   SiExpress,
//   SiPostgresql,
//   SiOpenai,
// } from "react-icons/si";

// export default function SkillsSection() {
//   const skills = [
//     { icon: <FaHtml5 className="w-10 h-10 text-orange-600" />, label: "HTML5" },
//     { icon: <FaCss3Alt className="w-10 h-10 text-blue-500" />, label: "CSS3" },
//     {
//       icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
//       label: "JavaScript",
//     },
//     {
//       icon: <FaReact className="w-10 h-10 text-blue-500" />,
//       label: "React.js",
//     },
//     { icon: <SiRedux className="w-10 h-10 text-purple-500" />, label: "Redux" },
//     {
//       icon: <SiTailwindcss className="w-10 h-10 text-sky-400" />,
//       label: "TailwindCSS",
//     },
//     {
//       icon: <FaBootstrap className="w-10 h-10 text-purple-600" />,
//       label: "Bootstrap",
//     },
//     {
//       icon: <FaNodeJs className="w-10 h-10 text-green-600" />,
//       label: "Node.js",
//     },
//     {
//       icon: <SiExpress className="w-10 h-10 text-gray-600" />,
//       label: "Express.js",
//     },
//     { icon: <FaJava className="w-10 h-10 text-red-500" />, label: "Java" },
//     {
//       icon: <FaPython className="w-10 h-10 text-yellow-500" />,
//       label: "Python",
//     },
//     { icon: <SiGoland className="w-10 h-10 text-teal-500" />, label: "Golang" },
//     { icon: <SiMysql className="w-10 h-10 text-blue-600" />, label: "MySQL" },
//     {
//       icon: <SiPostgresql className="w-10 h-10 text-blue-800" />,
//       label: "PostgreSQL",
//     },
//     { icon: <FaAws className="w-10 h-10 text-orange-500" />, label: "AWS" },
//     { icon: <FaDocker className="w-10 h-10 text-blue-400" />, label: "Docker" },
//     {
//       icon: <SiJenkins className="w-10 h-10 text-red-600" />,
//       label: "Jenkins",
//     },
//     { icon: <FaLinux className="w-10 h-10 text-black" />, label: "Linux" },
//     { icon: <FaGitAlt className="w-10 h-10 text-orange-600" />, label: "Git" },
//     {
//       icon: <SiPostman className="w-10 h-10 text-orange-500" />,
//       label: "Postman",
//     },
//     // { icon: <SiVscode className="w-10 h-10 text-blue-600" />, label: "VSCode" },
//     { icon: <SiVite className="w-10 h-10 text-purple-400" />, label: "Vite" },
//     {
//       icon: <SiOpenai className="w-10 h-10 text-teal-500" />,
//       label: "GPT/AI Tools",
//     },
//   ];

//   return (
//     <section className="min-h-screen py-16 flex flex-col mx-50">
//       <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>

//       <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8 justify-items-center content-evenly">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             className="flex flex-col items-center cursor-pointer p-2 rounded-lg"
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{
//               delay: i * 0.1,
//               duration: 0.5,
//               ease: "easeOut",
//             }}
//             whileHover={{
//               scale: 1.3,
//               rotate: 360,
//               transition: { duration: 0.6, ease: "easeOut" },
//             }}
//           >
//             <motion.div
//               animate={{
//                 y: [0, -5, 0],
//                 rotate: [0, 10, -10, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//               }}
//             >
//               {skill.icon}
//             </motion.div>
//             <p className="text-sm mt-2">{skill.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
/* eslint-disable no-unused-vars */
// "use client";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaAws,
//   FaDocker,
//   FaLinux,
//   FaJava,
//   FaPython,
//   FaGitAlt,
//   FaHtml5,
//   FaCss3Alt,
//   FaBootstrap,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiMysql,
//   SiJenkins,
//   SiGoland,
//   SiPostman,
//   SiRedux,
//   SiTailwindcss,
//   SiVite,
//   SiExpress,
//   SiPostgresql,
//   SiOpenai,
// } from "react-icons/si";

// export default function SkillsSection() {
//   const skills = [
//     { icon: <FaHtml5 className="w-10 h-10 text-orange-600" />, label: "HTML5" },
//     { icon: <FaCss3Alt className="w-10 h-10 text-blue-500" />, label: "CSS3" },
//     {
//       icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
//       label: "JavaScript",
//     },
//     {
//       icon: <FaReact className="w-10 h-10 text-blue-500" />,
//       label: "React.js",
//     },
//     { icon: <SiRedux className="w-10 h-10 text-purple-500" />, label: "Redux" },
//     {
//       icon: <SiTailwindcss className="w-10 h-10 text-sky-400" />,
//       label: "TailwindCSS",
//     },
//     {
//       icon: <FaBootstrap className="w-10 h-10 text-purple-600" />,
//       label: "Bootstrap",
//     },
//     {
//       icon: <FaNodeJs className="w-10 h-10 text-green-600" />,
//       label: "Node.js",
//     },
//     {
//       icon: <SiExpress className="w-10 h-10 text-gray-600" />,
//       label: "Express.js",
//     },
//     { icon: <FaJava className="w-10 h-10 text-red-500" />, label: "Java" },
//     {
//       icon: <FaPython className="w-10 h-10 text-yellow-500" />,
//       label: "Python",
//     },
//     { icon: <SiGoland className="w-10 h-10 text-teal-500" />, label: "Golang" },
//     { icon: <SiMysql className="w-10 h-10 text-blue-600" />, label: "MySQL" },
//     {
//       icon: <SiPostgresql className="w-10 h-10 text-blue-800" />,
//       label: "PostgreSQL",
//     },
//     { icon: <FaAws className="w-10 h-10 text-orange-500" />, label: "AWS" },
//     { icon: <FaDocker className="w-10 h-10 text-blue-400" />, label: "Docker" },
//     {
//       icon: <SiJenkins className="w-10 h-10 text-red-600" />,
//       label: "Jenkins",
//     },
//     { icon: <FaLinux className="w-10 h-10 text-black" />, label: "Linux" },
//     { icon: <FaGitAlt className="w-10 h-10 text-orange-600" />, label: "Git" },
//     {
//       icon: <SiPostman className="w-10 h-10 text-orange-500" />,
//       label: "Postman",
//     },
//     { icon: <SiVite className="w-10 h-10 text-purple-400" />, label: "Vite" },
//     {
//       icon: <SiOpenai className="w-10 h-10 text-teal-500" />,
//       label: "GPT/AI Tools",
//     },
//   ];

//   return (
//     <section className="min-h-screen py-16 px-4 md:px-16 flex flex-col items-center bg-transparent backdrop-blur-md border border-gray-300 rounded-2xl p-8 shadow-lg relative z-10">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//         Technical Skills
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center w-full max-w-6xl">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             className="flex flex-col items-center cursor-pointer p-2 rounded-lg"
//             initial={{ opacity: 0, y: 20, scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
//             whileHover={{
//               scale: 1.3,
//               rotate: 360,
//               transition: { duration: 0.6, ease: "easeOut" },
//             }}
//           >
//             <motion.div
//               animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 ease: "easeInOut",
//               }}
//             >
//               {skill.icon}
//             </motion.div>
//             <p className="text-sm mt-2 text-center">{skill.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaLinux,
  FaJava,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiJenkins,
  SiGoland,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { icon: <FaHtml5 className="w-10 h-10 text-orange-600" />, label: "HTML5" },
    { icon: <FaCss3Alt className="w-10 h-10 text-blue-500" />, label: "CSS3" },
    {
      icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
      label: "JavaScript",
    },
    {
      icon: <FaReact className="w-10 h-10 text-blue-500" />,
      label: "React.js",
    },
    { icon: <SiRedux className="w-10 h-10 text-purple-500" />, label: "Redux" },
    {
      icon: <SiTailwindcss className="w-10 h-10 text-sky-400" />,
      label: "TailwindCSS",
    },
    {
      icon: <FaBootstrap className="w-10 h-10 text-purple-600" />,
      label: "Bootstrap",
    },
    {
      icon: <FaNodeJs className="w-10 h-10 text-green-600" />,
      label: "Node.js",
    },
    {
      icon: <SiExpress className="w-10 h-10 text-gray-600" />,
      label: "Express.js",
    },
    { icon: <FaJava className="w-10 h-10 text-red-500" />, label: "Java" },
    // {
    //   icon: <FaPython className="w-10 h-10 text-yellow-500" />,
    //   label: "Python",
    // },
    // { icon: <SiGoland className="w-10 h-10 text-teal-500" />, label: "Golang" },
    { icon: <SiMysql className="w-10 h-10 text-blue-600" />, label: "MySQL" },
    {
      icon: <SiPostgresql className="w-10 h-10 text-blue-800" />,
      label: "PostgreSQL",
    },
    { icon: <FaAws className="w-10 h-10 text-orange-500" />, label: "AWS" },
    { icon: <FaDocker className="w-10 h-10 text-blue-400" />, label: "Docker" },
    // {
    //   icon: <SiJenkins className="w-10 h-10 text-red-600" />,
    //   label: "Jenkins",
    // },
    { icon: <FaLinux className="w-10 h-10 text-black" />, label: "Linux" },
    { icon: <FaGitAlt className="w-10 h-10 text-orange-600" />, label: "Git" },
    {
      icon: <SiPostman className="w-10 h-10 text-orange-500" />,
      label: "Postman",
    },
    { icon: <SiVite className="w-10 h-10 text-purple-400" />, label: "Vite" },
    {
      icon: <SiOpenai className="w-10 h-10 text-teal-500" />,
      label: "GPT/AI Tools",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-16 ">
      {/* Centered translucent container */}
      {/* <div className="w-full max-w-5xl bg-white/20 backdrop-blur-md border border-gray-300 rounded-3xl p-10 shadow-lg"> */}
      <div className="bg-transparent backdrop-blur-md border border-gray-300 rounded-2xl p-8 shadow-lg relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center w-full">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center cursor-pointer p-2 rounded-lg"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            >
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-sm mt-2 text-center">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
