"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialIcons() {
  const socials = [
    {
      icon: <FaEnvelope />,
      href: "mailto:nlaxmikoushik@gmail.com",
      color: "#D44638",
    },
    { icon: <FaPhone />, href: "tel:+919999999999", color: "#34A853" },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/nlkoushik",
      color: "#0077B5",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/itsKoushik7",
      color: "#333333",
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controlsArray = socials.map(() => useAnimation());

  useEffect(() => {
    // Initial rotation on mount
    controlsArray.forEach((controls, index) => {
      controls.start({
        rotate: 360,
        transition: { duration: 0.8, ease: "easeOut", delay: index * 0.1 },
      });
    });
  }, []);

  return (
    <div className="flex gap-6 text-3xl justify-center mt-20">
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20, scale: 0.8, color: "#000" }}
          animate={{ opacity: 1, y: 0, scale: 1, color: "#000" }}
          transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
          whileTap={{ scale: 1.2 }}
          className="cursor-pointer flex items-center justify-center"
        >
          <motion.div
            animate={controlsArray[i]}
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: 360,
              scale: 1.4,
              color: social.color,
              textShadow: `0 0 12px ${social.color}`,
              boxShadow: `0px 4px 15px ${social.color}33`,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            // Animate back to original state smoothly on mouse leave
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {social.icon}
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}
