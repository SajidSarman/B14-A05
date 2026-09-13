// import React from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className="border-b-2 border-gray-200 bg-white sticky top-0 z-50">
      <div className='flex justify-between container mx-auto py-5'>

        <img className='h-full w-auto' src={Logo} alt="Logo-Name" />
        <ul className="flex items-center gap-7">
          <li>Home</li>
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