'use client';

import React from 'react';
import Image from 'next/image';
import project1 from '../assets/MUI.png';
import project2 from '../assets/EB.png';
import project3 from '../assets/SMH.png';
import project4 from '../assets/Project4.png';
import project5 from '../assets/ECOM.png';
import project6 from '../assets/IM.png';
import { motion, easeOut } from 'framer-motion';

const projectData = [
  {
    title: 'Material UI Wireframe',
    description:
      'This is an E-commerce Project Wireframe completely made with Material UI.',
    image: project1,
    alt: 'MUI Project',
    // link: 'https://avicennaenterprise.com/',
  },
  // {
  //   title: 'EncoderBytes Pvt Ltd',
  //   description: `Enhanced the company website of EncoderBytes Pvt Ltd.`,
  //   image: project2,
  //   alt: 'EncoerBytes',
  //   // link: 'https://aitoolfind.co/',
  // },
  {
    title: 'Smart HealthConnect',
    description:
      'Developed an AI and Location based Doctor Finding and Appointent System.',
    image: project3,
    alt: 'SMH',
    // link: 'https://studystudio.jerrizz.com/',
  },
  {
    title: 'Planto Website',
    description: `Plant-store eCommerce site with cart, checkout, and admin dashboard.`,
    image: project4,
    alt: 'Planto Project',
    // link: 'https://planto-project-9814.vercel.app/',
  },
  {
    title: 'HBK',
    description: `E-commerce website with user authentication and product management.`,
    image: project5,
    alt: 'ECOM',
    // link: 'https://jkd-organization.vercel.app/',
  },
  {
    title: 'Insider Mediator',
    description:
      'Pakistan First Cyber Mediation Platform.',
    image: project6,
    alt: 'IM',
    // link: 'https://limelight.trionex.pk/dashboard-1',
  },
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: easeOut
      }
    })
  };

  return (
    <div className='border-neutral-900 pb-24'>
      <motion.h2 
        className='my-20 text-center text-4xl font-bold'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-4'>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className='bg-white text-white rounded-2xl shadow-lg p-4 w-full mx-auto flex flex-col justify-between h-full'
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <div>
              <motion.div 
                className=' flex items-center justify-center'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={600}
                  className='border-black h-auto w-full object-contain'
                />
              </motion.div>

              <h3 className='text-xl text-black font-semibold mb-2'>{project.title}</h3>

              <p className='text-sm text-gray-400 mb-4'>{project.description}</p>
            </div>

            {/* View Button */}
            {/* <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-green-600 text-white px-5 py-2 text-sm rounded-lg font-medium hover:bg-green-800 transition mt-4'
            >
              Opens the live project in a new tab.
            </a> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
