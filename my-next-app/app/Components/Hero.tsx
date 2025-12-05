import React from 'react';
import Image from 'next/image';
import bgmain from '../assets/bgmain.webp';

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap justify-center items-center'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-wrap items-center lg:items-start'>
                    <h1 className='pb-5 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight'>
                        M. Hanzala Dawood</h1>
                   <span 
                    className='bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-4xl tracking-tight text-transparent font-bold'>MERN Stack Developer</span>
                    <p
                    className='my-2 max-w-xl py-4 tracking-tighter'>A results-driven Full Stack Developer specializing in the MERN stack, 
                    with proven expertise in architecting and delivering scalable, high-performance web applications. 
                    Proficient in modern frontend technologies including React.js, Tailwind CSS, and Bootstrap, alongside 
                    robust backend development using Node.js, Express.js, and MongoDB. Demonstrated ability to create 
                    seamless user experiences through responsive UI/UX design while implementing secure RESTful APIs and 
                    optimized database architectures. Known for strong problem-solving capabilities, collaborative teamwork, 
                    and a commitment to clean, maintainable code. Actively engaged in continuous learning and open-source 
                    contributions to stay at the forefront of emerging web technologies.
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 lg:py-8 '>
            <div className='flex justify-end'>
                <Image
                    src={bgmain} 
                    alt="M. Hanzala Dawood" 
                    width={400}
                    height={400}
                    className='w-[400px] h-[400px]'
                />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
