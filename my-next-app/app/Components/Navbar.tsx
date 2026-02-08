'use client';

import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { SiUpwork } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-20 pt-6 relative'>
      <div className='flex items-center justify-between px-4'>
        {/* Logo */}
        {/* <div className='text-white flex items-center'>
          <Image src={logo} alt="logo" width={150} height={100} />
        </div> */}

        <motion.div 
          className='hidden md:flex gap-6 text-white'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <motion.a href="#about" className='hover:text-cyan-300 transition-colors' whileHover={{ scale: 1.1 }}>About Me</motion.a>
          <motion.a href="#technologies" className='hover:text-cyan-300 transition-colors' whileHover={{ scale: 1.1 }}>Technologies</motion.a>
          <motion.a href="#experience" className='hover:text-cyan-300 transition-colors' whileHover={{ scale: 1.1 }}>Experience</motion.a>
          <motion.a href="#projects" className='hover:text-cyan-300 transition-colors' whileHover={{ scale: 1.1 }}>Projects</motion.a>
          <motion.a href="#contact" className='hover:text-cyan-300 transition-colors' whileHover={{ scale: 1.1 }}>Get in Touch</motion.a>
        </motion.div>

        {/* Desktop Icons */}
        <motion.div 
          className='hidden md:flex items-center gap-10 text-3xl text-white'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/mhk47/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="https://github.com/HanzalaKhattak" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          {/* <a href="https://x.com/ba61256888?s=21" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a> */}
          <motion.a 
            href="https://www.upwork.com/freelancers/~01b47bb8f0ec1b58a2" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiUpwork />
          </motion.a>
        </motion.div>

        {/* Hamburger Icon (Mobile) */}
        <div className='md:hidden text-white text-3xl' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu - Right Aligned Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute right-4 mt-2 w-40 rounded-md bg-neutral-900 shadow-lg p-4 flex flex-col gap-3 text-white text-2xl md:hidden z-50"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/abdul-basit-1039b522b/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, x: 5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/tot3110" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, x: 5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://x.com/ba61256888?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, x: 5 }}
            >
              <FaSquareXTwitter />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
