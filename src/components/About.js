import React from 'react';
// countup
import Countup from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
// images
import Images from '../assets/about.png';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image as background */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 h-[640px] mix-blend-lighten bg-top'
            style={{ backgroundImage: `url(${Images})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
          </motion.div>

          {/* Text */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-3'>
              <span className='text-sm'>I am a <span className='text-accent'>Python</span> and <span className='text-accent'>Web Developer</span> with expertise in <span className='text-accent'>video</span> and <span className='text-accent'>photo editing</span>. Currently, I'm pursuing a <span className='text-accent'>B.Tech in Computer Science</span> at the <span className='text-accent'>Institute of Engineering and Management</span> in Salt Lake, after completing high school at <span className='text-accent'>Springdale High School</span> in Kalyani.</span>
            </h3>
            <p className='mb-6 text-white'>
              <span className='text-accent'>Languages - </span> Bengali (Mother Tongue), English (Fluent), Hindi (Fluent). <br />
              <span className='text-accent'>Coding Skills - </span> Python, HTML, CSS, React, Node.js, Streamlit, Firebase. <br />
              <span className='text-accent'>Video Editing Skills - </span> Adobe Premiere Pro, Adobe After Effects, Final Cut Pro, DaVinci. <br />
              <span className='text-accent'>Photo Editing Skills - </span> Adobe Photoshop, Canva. <br />
              <span className='text-accent'>Audio Editing Skills:</span> Logic Pro X, Audacity. <br /><br /><br />
            </p>

            {/* Stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-4'>
                  {inView ? <Countup start={0} end={12} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-4'>
                  {inView ? <Countup start={0} end={6} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Number of Languages <br />
                  Known
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-4'>
                  {inView ? <Countup start={0} end={1} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Attended Study Abroad Program at NUSS, Singapore
                </div>
              </div>
            </div>

            {/* Download and email buttons */}
            <div className='flex flex-col gap-y-4 gap-x-8 lg:flex-row items-center'>
              <a href="/assets/Resume.pdf" download>
                <button className='btn btn-lg'>Download CV</button>
              </a>
              <a href='mailto:dsrinjoy58@gmail.com' className='text-gradient btn-link'>My Email - dsrinjoy58@gmail.com</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
