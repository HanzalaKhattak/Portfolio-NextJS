import React from 'react';
import Image from 'next/image';
import project1 from '../assets/MUI.png';
import project2 from '../assets/EB.png';
import project3 from '../assets/SMH.png';
import project4 from '../assets/Project4.png';
import project5 from '../assets/ECOM.png';
import project6 from '../assets/IM.png';

const projectData = [
  {
    title: 'Material UI Project',
    description:
      'This is an E-commerce Project completely made with Material UI.',
    image: project1,
    alt: 'MUI Project',
    link: 'https://avicennaenterprise.com/',
  },
  {
    title: 'EncoderBytes Pvt Ltd',
    description: `Enhanced the company website of EncoderBytes Pvt Ltd.`,
    image: project2,
    alt: 'EncoerBytes',
    link: 'https://aitoolfind.co/',
  },
  {
    title: 'Smart HealthConnect',
    description:
      'Developed an AI and Location based Doctor Finding and Appointent System.',
    image: project3,
    alt: 'SMH',
    link: 'https://studystudio.jerrizz.com/',
  },
  {
    title: 'Planto Website',
    description: `Plant-store eCommerce site with cart, checkout, and admin dashboard.`,
    image: project4,
    alt: 'Planto Project',
    link: 'https://planto-project-9814.vercel.app/',
  },
  {
    title: 'HBK',
    description: `E-Commerce Website for HBK, Pakistan.`,
    image: project5,
    alt: 'ECOM',
    link: 'https://jkd-organization.vercel.app/',
  },
  {
    title: 'Insider Mediator',
    description:
      'Pakistan First Cyber Mediation Platform.',
    image: project6,
    alt: 'IM',
    link: 'https://limelight.trionex.pk/dashboard-1',
  },
];

const Projects = () => {
  return (
    <div className='border-neutral-900 pb-24'>
      <h2 className='my-20   text-center text-4xl font-bold'>Projects</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 px-4'>
        {projectData.map((project, index) => (
          <div
            key={index}
            className='bg-white text-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 w-full mx-auto flex flex-col justify-between h-full'
          >
            <div>
              <div className=' flex items-center justify-center'>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={600}
                  className='border-black h-auto w-full object-contain'
                />
              </div>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
