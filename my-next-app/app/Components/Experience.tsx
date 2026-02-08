'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
        className="my-20 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h1>

      <div className="p-6 rounded-lg mx-auto">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white">Full Stack Developer</h2>
          <p className="text-sm">November 2025 - Present</p>
          <h3 className="text-lg mb-4">Encova Solutions Pvt Ltd, Peshawar</h3>

          <p className="mb-4">
          I am working at Evcova Solutions as a Full Stack Developer, contributing to client-focused digital solutions and supporting business growth. My responsibilities included building web interfaces, collaborating with clients to refine requirements, managing digital operations, and assisting with strategic planning to improve service delivery and client engagement.

I am dedicated to creating real-world applications with smooth user experiences, reliable performance, and scalable architecture. From UI design to backend development, testing, and deployment, I prioritize clean code, performance optimization, and high-quality results aligned with both technical and business goals.
        </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white pt-10">MERN Stack Development Trainee and  Intern</h2>
          <p className="text-sm">Mar 2025 - Oct 2025</p>
          <h3 className="text-lg mb-4">Encoder Bytes Pvt Limited</h3>

          <p className="mb-4">
          I was a MERN Stack Developer with 7 months of hands-on experience while learning and building full-stack web applications. Over this period, I gained practical skills in JavaScript, React, Next.js, and Tailwind CSS to create responsive, modern, and user-friendly interfaces.

On the backend, I worked with Node.js, Express.js, MongoDB and MySQL to develop secure APIs, manage databases, and build scalable server-side logic. I learned authentication, API integration, state management, and performance optimization while following clean-code and best development practices.

My focus has been on creating real-world solutions with smooth user experiences, strong functionality, and reliable performance across the full development lifecycle.
        </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-white pt-10">Web Development Trainee</h2>
          <p className="text-sm">Dec 2023 - Mar 2025</p>
          <h3 className="text-lg mb-4">Saylani Mass IT Training Center, Peshawar</h3>

          <p className="mb-4">
           I was the trainee of Web Development at SMIT. During this time I learned the basics of HTML, CSS, JavaScript and React.js. I also Learned the basics of Node.js and Express.js.

        </p>
        </motion.div>
        </div>
      </div>
  );
};

export default Experience;
