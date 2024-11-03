import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText, BsFillChatSquareTextFill, BsFillChatSquareQuoteFill, BsChatSquareFill } from 'react-icons/bs';
// links
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full z-50">
      <div className="container mx-auto flex justify-center">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">

          <Link to="home" activeClass = 'active' spy={true} smooth={true} duration={500} offset={-200} className="cursor-pointer">
            <BiHomeAlt />
          </Link>

          <Link to="about" activeClass = 'active' spy={true} smooth={true} duration={500} className="cursor-pointer">
            <BiUser />
          </Link>

          <Link to="services" activeClass = 'active' spy={true} smooth={true} duration={500} className="cursor-pointer">
            <BsClipboardData />
          </Link>

          <Link to="work" activeClass = 'active' spy={true} smooth={true} duration={500} className="cursor-pointer">
            <BsBriefcase />
          </Link>

          <Link to="contact" activeClass = 'active' spy={true} smooth={true} duration={500} className="cursor-pointer">
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
