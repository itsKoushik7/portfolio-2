// /* eslint-disable no-unused-vars */
// import { useState } from "react";

// import { motion } from "framer-motion";
// export default function AnimatedName() {
//   const name = "Laxmi Koushik Nandikanti".split("");
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Entry animation variants
//   const letterVariants = {
//     initial: { x: 100, y: -50, opacity: 0, scale: 0.5 },
//     animate: (i) => ({
//       x: 0,
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       rotate: [0, 10, -10, 0],
//       transition: {
//         delay: i * 0.08,
//         duration: 0.6,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   return (
//     <h1 className="text-4xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center gap-1 overflow-hidden">
//       {name.map((char, i) => {
//         // Ripple scaling logic
//         let scale = 1;
//         if (hoveredIndex === i) {
//           scale = 1.6; // hovered letter
//         } else if (hoveredIndex === i - 1 || hoveredIndex === i + 1) {
//           scale = 1.3; // immediate neighbors
//         } else if (hoveredIndex === i - 2 || hoveredIndex === i + 2) {
//           scale = 1.15; // second neighbors
//         }

//         return (
//           <motion.span
//             key={i}
//             className="inline-block cursor-pointer"
//             custom={i}
//             variants={letterVariants}
//             initial="initial"
//             animate="animate" // play entry animation
//             whileHover={{}} // keep framer happy, hover is managed manually
//             style={{ display: "inline-block" }}
//             onHoverStart={() => setHoveredIndex(i)}
//             onHoverEnd={() => setHoveredIndex(null)}
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           >
//             <motion.span
//               animate={{ scale }} // ripple scaling layered on top
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="inline-block"
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           </motion.span>
//         );
//       })}
//     </h1>
//   );
// }

/* eslint-disable no-unused-vars */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedName() {
  const name = ["Laxmi", "Koushik", "Nandikanti"]; // split into words
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const letterVariants = {
    initial: { y: -50, opacity: 0, scale: 0.5 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: [0, 10, -10, 0],
      transition: { delay: i * 0.08, duration: 0.6, ease: "easeInOut" },
    }),
  };

  const rainbow = [
    "#ff0000",
    "#ff7f00",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#8b00ff",
    "#ff0000",
  ];

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-2 text-4xl md:text-6xl font-bold overflow-visible text-center">
      {name.map((word, wordIndex) => (
        <span key={wordIndex} className="flex flex-wrap justify-center gap-1">
          {word.split("").map((char, i) => {
            let scale = 1;
            const globalIndex = wordIndex * 10 + i; // for unique scaling ripple
            if (hoveredIndex === globalIndex) scale = 1.6;
            else if (
              hoveredIndex === globalIndex - 1 ||
              hoveredIndex === globalIndex + 1
            )
              scale = 1.3;
            else if (
              hoveredIndex === globalIndex - 2 ||
              hoveredIndex === globalIndex + 2
            )
              scale = 1.15;

            return (
              <motion.span
                key={i}
                className="inline-block cursor-pointer relative overflow-visible"
                custom={globalIndex}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                onHoverStart={() => setHoveredIndex(globalIndex)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.span
                  style={{
                    display: "inline-block",
                    background: `linear-gradient(270deg, ${rainbow.join(
                      ", "
                    )})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "200% 200%",
                    filter:
                      hoveredIndex === globalIndex
                        ? "brightness(1.2)"
                        : "brightness(0.85)",
                  }}
                  animate={{
                    scale,
                    y:
                      hoveredIndex === globalIndex
                        ? [0, -8, 0, -5, 0]
                        : [0, -2, 0],
                    backgroundPosition:
                      hoveredIndex === globalIndex
                        ? ["0% 50%", "100% 50%"]
                        : "0% 50%",
                  }}
                  transition={{
                    y: {
                      duration: hoveredIndex === globalIndex ? 1.2 : 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                    scale: { type: "spring", stiffness: 300, damping: 15 },
                    backgroundPosition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </motion.span>
            );
          })}
        </span>
      ))}
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function AnimatedName() {
//   const name = ["Laxmi", "Koushik", "Nandikanti"];
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const letterVariants = {
//     initial: { y: -50, opacity: 0, scale: 0.5 },
//     animate: (i) => ({
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       rotate: [0, 10, -10, 0],
//       transition: { delay: i * 0.08, duration: 0.6, ease: "easeInOut" },
//     }),
//   };

//   const rainbow = [
//     "#ff0000",
//     "#ff7f00",
//     "#ffff00",
//     "#00ff00",
//     "#0000ff",
//     "#4b0082",
//     "#8b00ff",
//     "#ff0000",
//   ];

//   return (
//     <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-2 text-4xl md:text-6xl font-bold overflow-visible text-center">
//       {name.map((word, wordIndex) => (
//         <span key={wordIndex} className="flex flex-wrap justify-center gap-1">
//           {word.split("").map((char, i) => {
//             let scale = 1;
//             const globalIndex = wordIndex * 10 + i;
//             if (hoveredIndex === globalIndex) scale = 1.6;
//             else if (
//               hoveredIndex === globalIndex - 1 ||
//               hoveredIndex === globalIndex + 1
//             )
//               scale = 1.3;
//             else if (
//               hoveredIndex === globalIndex - 2 ||
//               hoveredIndex === globalIndex + 2
//             )
//               scale = 1.15;

//             return (
//               <motion.span
//                 key={i}
//                 className="inline-block cursor-pointer relative overflow-visible"
//                 custom={globalIndex}
//                 variants={letterVariants}
//                 initial="initial"
//                 animate="animate"
//                 onHoverStart={() => setHoveredIndex(globalIndex)}
//                 onHoverEnd={() => setHoveredIndex(null)}
//               >
//                 <motion.span
//                   style={{
//                     display: "inline-block",
//                     color: "#000000", // default black
//                   }}
//                   animate={{
//                     scale,
//                     y:
//                       hoveredIndex === globalIndex
//                         ? [0, -8, 0, -5, 0]
//                         : [0, -2, 0],
//                     background:
//                       hoveredIndex === globalIndex
//                         ? `linear-gradient(270deg, ${rainbow.join(", ")})`
//                         : "none",
//                     WebkitBackgroundClip:
//                       hoveredIndex === globalIndex ? "text" : "unset",
//                     WebkitTextFillColor:
//                       hoveredIndex === globalIndex ? "transparent" : "#000000",
//                   }}
//                   transition={{
//                     y: {
//                       duration: hoveredIndex === globalIndex ? 1.2 : 2,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     },
//                     scale: { type: "spring", stiffness: 300, damping: 15 },
//                     background: { duration: 0.5 }, // smooth color transition
//                   }}
//                 >
//                   {char === " " ? "\u00A0" : char}
//                 </motion.span>
//               </motion.span>
//             );
//           })}
//         </span>
//       ))}
//     </div>
//   );
// }
