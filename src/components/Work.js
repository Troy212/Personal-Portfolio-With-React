import React from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Images
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';
import img4 from '../assets/portfolio-img4.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text Section */}
          <motion.div
            className='flex-1 mb-8 lg:mb-0'
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className='h2 leading-tight text-accent mb-4'>
              My Latest <br />
              Work.
            </h2>
            <p className='max-w-sm mb-8'>
              A showcase of my recent projects that highlight my skills in Streamlit , React , Js , HTML , Tailwind CSS etc,
            </p>
            <a href="https://github.com/Troy212" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-lg'>
                View All Projects
              </button>
            </a>
          </motion.div>

          {/* Image Section */}
          <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Project 1 */}
            <motion.div
              className='relative group border border-gray-300 overflow-hidden rounded-lg'
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Overlay for Tint */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image with Link */}
              <a href="https://github.com/Troy212/ChatGPT-Clone-Using-Streamlit/tree/main" target="_blank" rel="noopener noreferrer">
                <img src={img1} alt="Project 1" className='w-full h-[200px] object-cover group-hover:scale-125 transition-all duration-500' />
              </a>
              {/* Project Details */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <h4 className='font-semibold'>
                  <a href="https://github.com/Troy212/ChatGPT-Clone-Using-Streamlit/tree/main" target="_blank" rel="noopener noreferrer">
                  <span className='text-gradient'>ChatGPT Clone</span>
                  </a>
                </h4>
                <span className='block'>
                  <a href="https://github.com/Troy212/ChatGPT-Clone-Using-Streamlit/tree/main" target="_blank" rel="noopener noreferrer">
                    Python, Streamlit
                  </a>
                </span>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className='relative group border border-gray-300 overflow-hidden rounded-lg'
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Overlay for Tint */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image with Link */}
              <a href="https://github.com/Troy212/Movie-Recommendation-System" target="_blank" rel="noopener noreferrer">
                <img src={img2} alt="Project 2" className='w-full h-[200px] object-cover group-hover:scale-125 transition-all duration-500' />
              </a>
              {/* Project Details */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <h4 className='font-semibold'>
                  <a href="https://github.com/Troy212/Movie-Recommendation-System" target="_blank" rel="noopener noreferrer">
                    <span className='text-gradient'>Movie Rec. System</span>
                  </a>
                </h4>
                <span className='block'>
                  <a href="https://github.com/Troy212/Movie-Recommendation-System" target="_blank" rel="noopener noreferrer">
                    Machine Learning , Flask , Python
                  </a>
                </span>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className='relative group border border-gray-300 overflow-hidden rounded-lg'
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Overlay for Tint */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image with Link */}
              <a href="https://github.com/Troy212/UPI-Fraud" target="_blank" rel="noopener noreferrer">
                <img src={img3} alt="Project 3" className='w-full h-[200px] object-cover group-hover:scale-125 transition-all duration-500' />
              </a>
              {/* Project Details */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <h4 className='font-semibold'>
                  <a href="https://github.com/Troy212/UPI-Fraud" target="_blank" rel="noopener noreferrer">
                  <span className='text-gradient'>UPI Fraud Detector</span>
                  </a>
                </h4>
                <span className='block'>
                  <a href="https://github.com/Troy212/UPI-Fraud" target="_blank" rel="noopener noreferrer">
                    Streamlit , Python
                  </a>
                </span>
              </div>
            </motion.div>
            {/* Project 4 */}
            <motion.div
              className='relative group border border-gray-300 overflow-hidden rounded-lg'
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Overlay for Tint */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image with Link */}
              <a href="https://github.com/Troy212/Personal-Portfolio-With-React" target="_blank" rel="noopener noreferrer">
                <img src={img4} alt="Project 4" className='w-full h-[200px] object-cover group-hover:scale-125 transition-all duration-500' />
              </a>
              {/* Project Details */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <h4 className='font-semibold'>
                  <a href="https://github.com/Troy212/Personal-Portfolio-With-React" target="_blank" rel="noopener noreferrer">
                    <span className='text-gradient'>Personal Portfolio</span>
                  </a>
                </h4>
                <span className='block'>
                  <a href="https://github.com/Troy212/Personal-Portfolio-With-React" target="_blank" rel="noopener noreferrer">
                    React , JavaScript , Firebase
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
