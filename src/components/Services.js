import React from 'react';
// Icons
import { BsArrowUpRight } from 'react-icons/bs';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

// Services data
const services = [
  {
    name: 'Movie Recommendation System',
    description: 'A Movie Recommendation System created using a custom dataset derived from the 5000 TMDB dataset, and it is deployed on Vercel.',
    link: 'https://github.com/Troy212/Movie-Recommendation-System',
  },
  {
    name: 'UPI Fraud Detector',
    description: 'An UPI Fraud Detector System built with Streamlit that detects fraudulent transactions using transaction IDs.',
    link: 'https://github.com/Troy212/UPI-Fraud',
  },
  {
    name: 'Waste Management System',
    description: 'A Waste Management System created with HTML, Java, CSS, and JavaScript, utilizing Firebase Realtime Database to store user-submitted data from the website.',
    link: 'https://github.com/Troy212/Waste',
  },
];

const Services = () => {
  return (
    <section className='section mt-96 md:mt-0' id='services'> {/* Significantly increased margin-top for mobile */}
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text & Image */}
          <motion.div
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-12'>
              I am a Python Developer, Web Developer, Video Editor, and Photo Editor with a passion for creating engaging and user-friendly experiences.
            </h3>
            <a href="https://github.com/Troy212" className='btn btn-sm px-6 py-3 text-lg'>
              My Github Repository
            </a>
          </motion.div>
          {/* Services */}
          <div className='flex-1'>
            {/* Services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <motion.div
                    key={index}
                    className='mb-8' // Increased margin-bottom for additional spacing between items
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {/* Service content */}
                    <div className='pb-4 mb-4'> {/* Added more padding-bottom */}
                      <h4 className='font-bold'>{name}</h4>
                      <p>{description}</p>
                    </div>
                    {/* Link to the specified URL */}
                    <a href={link} className='text-gradient flex items-center'>
                      Learn more <BsArrowUpRight className='inline-block ml-1' />
                    </a>
                    {/* Border line under the Learn more link */}
                    <div className='border-b border-white/20 pb-4 mb-8' /> {/* Added more padding-bottom */}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
