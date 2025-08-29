/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const shapesList = ["circle", "square", "triangle", "pentagon", "hexagon"];

export default function GeometricBackground() {
  const [shapes, setShapes] = useState([]);

  // Continuous random shapes
  useEffect(() => {
    const interval = setInterval(() => {
      createRandomShape();
    }, 800); // new shape every 0.8s

    return () => clearInterval(interval);
  }, []);

  const createRandomShape = (x = null, y = null) => {
    const shapeType = shapesList[Math.floor(Math.random() * shapesList.length)];
    const size = Math.random() * 80 + 40;
    const shape = {
      id: Date.now() + Math.random(),
      x: x !== null ? x : Math.random() * window.innerWidth,
      y: y !== null ? y : Math.random() * window.innerHeight,
      size,
      rotation: Math.random() * 360,
      type: shapeType,
      color: `hsl(${100 + Math.random() * 40}, 30%, 35%)`, // darker olive edges
    };
    setShapes((prev) => [...prev, shape]);

    // Remove after 6s
    setTimeout(() => {
      setShapes((prev) => prev.filter((s) => s.id !== shape.id));
    }, 6000);
  };

  const getShapeStyle = (shape) => {
    const s = shape.size;
    switch (shape.type) {
      case "circle":
        return {
          borderRadius: "50%",
          border: `2px solid ${shape.color}`,
          background: "transparent",
        };
      case "square":
        return {
          border: `2px solid ${shape.color}`,
          background: "transparent",
        };
      case "triangle":
        return {
          width: 0,
          height: 0,
          borderLeft: `${s / 2}px solid transparent`,
          borderRight: `${s / 2}px solid transparent`,
          borderBottom: `${s}px solid ${shape.color}`,
          background: "transparent",
        };
      case "pentagon":
        return {
          clipPath: "polygon(50% 0%, 95% 35%, 77% 95%, 23% 95%, 5% 35%)",
          border: `2px solid ${shape.color}`,
          background: "transparent",
        };
      case "hexagon":
        return {
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          border: `2px solid ${shape.color}`,
          background: "transparent",
        };
      default:
        return {
          border: `2px solid ${shape.color}`,
          background: "transparent",
        };
    }
  };

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", // gradient matching contact section
      }}
      onClick={(e) => createRandomShape(e.clientX, e.clientY)}
    >
      <AnimatePresence>
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            initial={{ scale: 0, rotate: shape.rotation, opacity: 0.7 }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [shape.rotation, shape.rotation + 360],
              opacity: [0.7, 0.4, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: shape.x - shape.size / 2,
              top: shape.y - shape.size / 2,
              width: shape.type === "triangle" ? 0 : shape.size,
              height: shape.type === "triangle" ? 0 : shape.size,
              mixBlendMode: "multiply",
              ...getShapeStyle(shape),
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
