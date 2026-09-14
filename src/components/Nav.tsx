// import React from 'react';
import Logo from '../assets/logo-text.png';
import Hamburger from '../assets/hamburger.png'

const Nav = () => {
  return (
    <nav className="border-b-2 border-gray-200 bg-white sticky top-0 z-50">
      <div className='flex justify-between items-center container mx-auto py-5 px-5'>

        <button className="lg:hidden w-6 h-6 mr-4">
          <img src={Hamburger} alt="menu" className="w-full h-full object-contain" />
        </button>

        <img className='h-full w-auto mx-auto lg:mx-0' src={Logo} alt="Logo-Name" />

        <ul className="hidden lg:flex items-center gap-7">
          <li className='text-[#db2777]'>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex items-center gap-6">
          <button>Sign In</button>
          <button className='text-white bg-[#D91B7E] rounded-full px-5 py-2'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;