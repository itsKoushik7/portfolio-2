// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Add your email API integration here
//   };

//   const inputVariant = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
//       {/* Floating geometric shapes */}
//       <motion.div
//         className="absolute w-40 h-40 bg-green-200 rounded-xl opacity-30 top-10 left-10"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute w-32 h-32 bg-green-300 rounded-full opacity-25 bottom-20 right-20"
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
//       />

//       <div className="max-w-3xl mx-auto px-6">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Get in Touch
//         </motion.h2>
//         <motion.p
//           className="text-center text-gray-600 mb-12"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Have a project or idea? Drop a message, and I will get back to you!
//         </motion.p>

//         <motion.form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-2xl p-8 shadow-2xl relative z-10"
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <motion.input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//               variants={inputVariant}
//               initial="initial"
//               animate="animate"
//               transition={{ delay: 0.1, duration: 0.6 }}
//             />
//             <motion.input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//               variants={inputVariant}
//               initial="initial"
//               animate="animate"
//               transition={{ delay: 0.2, duration: 0.6 }}
//             />
//           </div>
//           <motion.input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 mt-6"
//             variants={inputVariant}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: 0.3, duration: 0.6 }}
//           />
//           <motion.textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={5}
//             className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 mt-6 resize-none"
//             variants={inputVariant}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: 0.4, duration: 0.6 }}
//           />
//           <motion.button
//             type="submit"
//             className="mt-6 w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             variants={inputVariant}
//             initial="initial"
//             animate="animate"
//             transition={{ delay: 0.5, duration: 0.6 }}
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show success/error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxeifdtXiWMaKeMYCiz2aQhnJfCdVSH8QMAtIdu2YsxIC9wbGD2m9axoi2d7TJNKwQnnQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send. Try again!");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Try again!");
    }
  };

  return (
    <section className="relative py-20 overflow-hidden ">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have a project or idea? Drop a message, and I will get back to you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-transparent backdrop-blur-md border border-gray-300 rounded-2xl p-8 shadow-lg relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border border-gray-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-600"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 border border-gray-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 mt-6 placeholder-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 border border-gray-400 rounded-xl bg-transparent focus:outline-none focus:ring-2 focus:ring-green-400 mt-6 resize-none placeholder-gray-600"
            required
          />
          <button
            type="submit"
            className="mt-6 w-full md:w-auto border border-green-500 text-green-500 font-bold py-4 px-8 rounded-xl hover:bg-green-500 hover:text-white transition-colors"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
}
