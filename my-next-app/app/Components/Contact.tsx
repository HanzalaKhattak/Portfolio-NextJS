'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-24 px-6">
      <motion.h1 
        className="my-20 text-center text-4xl text-white font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>

      <motion.div 
        className="text-center tracking-tight text-neutral-500 space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Phone with WhatsApp link */}
        <motion.p variants={itemVariants}>
          <strong className='text-white'>Phone:</strong>{' '}
          <motion.a
            href="https://wa.me/923219110257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
            whileHover={{ scale: 1.05, color: '#06b6d4' }}
            whileTap={{ scale: 0.95 }}
          >
            +92 321 9110257
          </motion.a>
        </motion.p>

        {/* Email with mailto and Gmail link */}
        <motion.p variants={itemVariants}>
          <strong className='text-white'>Email:</strong>{' '}
          <motion.a
            href="mailto:muhammadhanzalahkhan1@gmail.com?subject=Hello%20Abasit&body=Hi%20there!"
            className="text-cyan-400 hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            muhammadhanzalahkhan1@gmail.com
          </motion.a>
          <span className="mx-2">|</span>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadhanzalahkhan1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Gmail
          </motion.a>
        </motion.p>

        {/* Location */}
        <motion.p variants={itemVariants}>
          <strong className='text-white'>Location:</strong> Peshawar, Pakistan
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;
