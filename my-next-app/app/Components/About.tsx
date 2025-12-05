import React from 'react';
import Image from 'next/image';
import about from '../assets/UpworkProfile.jpg';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl font-bold'>About &nbsp;
        <span className='text-neutral-500'>Me </span></h1>
        <div className='flex flex-wrap justify-center items-center'>
            <div 
            className='w-full lg:w-[40%] lg:py-8'>
                <div className='flex items-center justify-start'>
                    <Image 
                      className='rounded-2xl h-[400px] w-[400px] object-fill' 
                      src={about} 
                      alt="about" 
                      width={400}
                      height={400}
                    />
                </div>
            </div>

            <div
            className='w-full lg:w-[50%]'>
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
                </div>
        </div>
    </div>
  )
}

export default About;
