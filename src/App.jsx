/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import AnimatedName from "./AnimatedName";
import AnimatedParagraph from "./AnimatedParagraph";
import SkillsSection from "./SkillsSection";
import SocialIcons from "./SocialIcons";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import FooterSection from "./FooterSection";
import BackgroundAnimation from "./BackgroundAnimation";
import GeometricBackground from "./GeometricBackground";
import ContactSection from "./ContactSection";

function App() {
  return (
    <div className="relative font-sans text-gray-900">
      <GeometricBackground />
      {/* <BackgroundAnimation /> */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <AnimatedName />
        <AnimatedParagraph />
        <div className="flex gap-6 text-2xl">
          <SocialIcons />
        </div>
      </section>

      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
