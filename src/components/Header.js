import React from 'react';
import { Link } from 'react-scroll';
// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="Logo" className="w-40 h-auto lg:w-48" />
          </a>
          {/* button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="btn btn-sm flex justify-center items-center text-center cursor-pointer"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
