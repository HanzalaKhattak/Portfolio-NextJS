'use client';

import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { SiUpwork } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-20 pt-6 relative'>
      <div className='flex items-center justify-between px-4'>
        {/* Logo */}
        {/* <div className='text-white flex items-center'>
          <Image src={logo} alt="logo" width={150} height={100} />
        </div> */}

        <div className='hidden md:flex gap-6 text-white'>
          <a href="#about" className='hover:text-cyan-300 transition-colors'>About Me</a>
          <a href="#technologies" className='hover:text-cyan-300 transition-colors'>Technologies</a>
          <a href="#experience" className='hover:text-cyan-300 transition-colors'>Experience</a>
          <a href="#projects" className='hover:text-cyan-300 transition-colors'>Projects</a>
          <a href="#contact" className='hover:text-cyan-300 transition-colors'>Get in Touch</a>
        </div>

        {/* Desktop Icons */}
        <div className='hidden md:flex items-center gap-10 text-3xl text-white'>
          <a href="https://www.linkedin.com/in/mhk47/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/HanzalaKhattak" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          {/* <a href="https://x.com/ba61256888?s=21" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a> */}
          <a href="https://www.upwork.com/freelancers/~01b47bb8f0ec1b58a2" target="_blank" rel="noopener noreferrer">
            <SiUpwork />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className='md:hidden text-white text-3xl' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu - Right Aligned Dropdown */}
      {isOpen && (
        <div className="absolute right-4 mt-2 w-40 rounded-md bg-neutral-900 shadow-lg p-4 flex flex-col gap-3 text-white text-2xl md:hidden z-50">
          <a href="https://www.linkedin.com/in/abdul-basit-1039b522b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tot3110" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/ba61256888?s=21" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
