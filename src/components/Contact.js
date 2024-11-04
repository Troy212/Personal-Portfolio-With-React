import React, { useState } from 'react';
// Firebase imports
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhVegCR_rdiy-D791qrMuaYio8n1C2t18",
  authDomain: "portfolio-form-4856b.firebaseapp.com",
  databaseURL: "https://portfolio-form-4856b-default-rtdb.firebaseio.com",
  projectId: "portfolio-form-4856b",
  storageBucket: "portfolio-form-4856b.firebasestorage.app",
  messagingSenderId: "427539967320",
  appId: "1:427539967320:web:3e4cc65cdb8629e7c6892d",
  measurementId: "G-WLX4TLEKYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Contact = () => {
  const [userData, setUserData] = useState({
    YourName: '',
    YourEmail: '',
    YourMessage: '',
  });

  const postUserData = (event) => {
    event.preventDefault();
    const { YourName, YourEmail, YourMessage } = userData;

    // Reference to the database with a unique key
    const dbRef = ref(database, 'contacts/');

    // Save the data to Firebase with a unique key using push
    push(dbRef, {
      name: YourName,
      email: YourEmail,
      message: YourMessage,
    })
      .then(() => {
        alert('Message sent successfully!');
        setUserData({
          YourName: '',
          YourEmail: '',
          YourMessage: '',
        });
      })
      .catch((error) => {
        alert('Error sending message: ' + error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className='py-16 lg:py-20' id='contact'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row items-start h-full'>
          {/* Text */}
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex justify-start'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-8'>
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          {/* Form */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 h-full'>
            <form onSubmit={postUserData}>
              <input 
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
                type='text' 
                name='YourName'
                placeholder='Your Name'
                value={userData.YourName}
                onChange={handleChange}
                required
              />
              <input 
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
                type='email'
                name='YourEmail' 
                placeholder='Your Email'
                value={userData.YourEmail}
                onChange={handleChange}
                required
              />
              <textarea 
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-8' 
                name='YourMessage'
                placeholder='Your Message'
                value={userData.YourMessage}
                onChange={handleChange}
                required
              />
              <button className='btn btn-lg'>Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
