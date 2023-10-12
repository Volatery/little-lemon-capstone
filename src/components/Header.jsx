import React, { useState } from 'react';
import Logo from "../assets/header-logo.png"
import {FaBars, FaTimes} from 'react-icons/fa'
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className='w-full h-[130px] flex justify-between items-center'>
      <div>
        <img src={Logo} alt='Little lemon logo' style={{minHeight: '100px', height: '100px'}}></img>
      </div>


      <ul className='hidden md:flex gap-4 items-center px-12 text-2xl'>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Order</li>
        <li>Contact</li>
      </ul>

      <div onClick={toggleMobileMenu} className='md:hidden text-2xl px-4 z-20'>
        {mobileMenu ? <FaTimes/> : <FaBars/>}
      </div>

      <ul className={mobileMenu ? 'absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen gap-4 text-4xl bg-[#495d57] z-10 text-white font-semibold' : 'hidden'}>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Order</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
