'use client';

import React from 'react';
import Image from 'next/image';
import about from '../assets/UpworkProfile.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        className='my-20 text-center text-4xl font-bold'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About &nbsp;
        <span className='text-neutral-500'>Me </span>
      </motion.h1>
        <div className='flex flex-wrap justify-center items-center'>
            <motion.div 
            className='w-full lg:w-[40%] lg:py-8'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            >
                <motion.div 
                  className='flex items-center justify-start'
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                    <Image 
                      className='rounded-2xl h-[400px] w-[400px] object-fill' 
                      src={about} 
                      alt="about" 
                      width={400}
                      height={400}
                    />
                </motion.div>
            </motion.div>

            <motion.div
            className='w-full lg:w-[50%]'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
                    <div className='flex justify-center'>
                        <p className='my-2 py-6 text-justify'>
                            As a growth-oriented developer, I bring a proven track record of rapidly adapting to 
                            emerging technologies and implementing industry best practices in full-stack development. 
                            My proactive approach to professional development ensures I remain at the forefront of 
                            web development and software engineering innovations. I excel in dynamic environments 
                            where continuous learning and technical excellence are valued. Currently seeking 
                            opportunities with innovative organizations where I can leverage my comprehensive 
                            skill set to drive impactful solutions and contribute to strategic business objectives. 
                            My work is characterized by meticulous attention to detail, ownership mentality, and 
                            alignment with organizational vision to deliver measurable results.
                        </p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;
