import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaLinux,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiJenkins,
  SiGoland,
  SiPostman,
  SiRedux,
} from "react-icons/si";

function App() {
  const skills = [
    {
      icon: <SiJavascript className="w-10 h-10 text-yellow-400" />,
      label: "JavaScript",
    },
    {
      icon: <FaReact className="w-10 h-10 text-blue-500" />,
      label: "React.js",
    },
    {
      icon: <FaNodeJs className="w-10 h-10 text-green-600" />,
      label: "Node.js",
    },
    {
      icon: <SiRedux className="w-10 h-10 text-purple-500" />,
      label: "Redux",
    },
    {
      icon: <SiPostman className="w-10 h-10 text-orange-500" />,
      label: "Postman",
    },
    { icon: <FaAws className="w-10 h-10 text-orange-500" />, label: "AWS" },
    { icon: <FaDocker className="w-10 h-10 text-blue-400" />, label: "Docker" },
    {
      icon: <SiJenkins className="w-10 h-10 text-red-600" />,
      label: "Jenkins",
    },
    { icon: <FaLinux className="w-10 h-10 text-black" />, label: "Linux" },
    { icon: <FaGitAlt className="w-10 h-10 text-orange-600" />, label: "Git" },
    { icon: <SiMysql className="w-10 h-10 text-blue-600" />, label: "MySQL" },
    { icon: <FaJava className="w-10 h-10 text-red-500" />, label: "Java" },
    {
      icon: <FaPython className="w-10 h-10 text-yellow-500" />,
      label: "Python",
    },
    { icon: <SiGoland className="w-10 h-10 text-teal-500" />, label: "Golang" },
  ];

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

  const projects = [
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
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Laxmi Koushik Nandikanti
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-700 mb-6">
          Motivated and results-oriented Software Developer with hands-on
          experience in full-stack web development, cloud deployment, and DevOps
          practices. Skilled in JavaScript, Node.js, React, and AWS Cloud.
          Seeking opportunities in Software Development, DevOps, or Cloud
          Engineering.
        </p>
        <div className="flex gap-6 text-2xl">
          <a
            href="mailto:nlaxmikoushik@gmail.com"
            className="hover:text-blue-600"
          >
            <FaEnvelope />
          </a>
          <a href="tel:+917672020709" className="hover:text-green-600">
            <FaPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/nlkoushik"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/itsKoushik7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-800"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center">
              {skill.icon}
              <p className="text-sm mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Professional Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-xl font-semibold">
                {exp.role} – {exp.company}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
              <ul className="list-disc ml-6 text-gray-700">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {projects.map((proj, i) => (
            <div key={i} className="p-6 bg-gray-50 border rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-2">{proj.desc}</p>
              <p className="text-sm text-gray-500 mb-3">{proj.tech}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <p className="text-lg">
          B.Tech in Computer Science & Engineering – Indur Institute of
          Engineering and Technology (2020–2024)
        </p>
        <p className="text-gray-600">CGPA: 7.54</p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-indigo-600 text-white text-center">
        <p>© {new Date().getFullYear()} Laxmi Koushik Nandikanti</p>
      </footer>
    </div>
  );
}

export default App;
