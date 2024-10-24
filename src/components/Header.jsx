import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = () => {
    setMenu(!menu); // Toggle the menu state
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header className={`h-20 fixed w-full z-50 shadow-lg transition-colors duration-100 ${isScrolled ? 'bg-white text-black' : 'bg-transparent'}`}>
      <div className='h-full mx-auto flex items-center justify-between px-4 md:px-20'>
        {/* Logo Section */}
        <div className='text-3xl font-bold cursor-pointer montserrat-Italic' onClick={() => navigate("/")}>
          <img src='https://res.cloudinary.com/df8vrgj1b/image/upload/v1729770076/assets/bcuovhpp0ixqutluidlb.png' className='h-24 md:h-24' alt="Logo" />
        </div>

        <div className={`text-2xl cursor-pointer relative ml-40 md:hidden transition-colors duration-100 ${isScrolled ? 'text-black' : 'text-white'}`}>
          <FaRegCircleUser />
        </div>
        <div className='md:hidden cursor-pointer' onClick={handleMenu}>
          <div className={`h-1 w-8 mb-1 transition-colors duration-100 ${isScrolled ? 'bg-black ' : 'bg-white'}`}></div>
          <div className={`h-1 w-8 mb-1 transition-colors duration-100 ${isScrolled ? 'bg-black ' : 'bg-white'}`}></div>
          <div className={`h-1 w-8 transition-colors duration-100 ${isScrolled ? 'bg-black ' : 'bg-white'}`}></div>
        </div>

        {/* Navigation Section */}
        <nav className='hidden md:flex items-center gap-5 md:gap-7'>
          <ul className='flex space-x-5 md:space-x-10'>
            <li className='uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105'
              onClick={() => navigate('/')}>
              Home
            </li>
            <li className='uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105'
              onClick={() => navigate('/createYourDesign')}>
              Create your Design
            </li>
            <li className='uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105'
              onClick={() => navigate('../pages/CreateYourDesign')}>
              Designers Section
            </li>
            <li className='uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105'
              onClick={() => navigate('/tailors')}>
              Tailors
            </li>
            <li className='uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105'
              onClick={() => navigate('/creative-mugs')}>
              Creative Mugs
            </li>
            <li>
              <div className='text-2xl cursor-pointer relative flex justify-center'>
                <FaRegCircleUser />
              </div>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {menu && (
        <div className='md:hidden'>
          {/* Toggle visibility of mobile menu based on state */}
          <div className='bg-white opacity-45 h-44'></div>
          <ul className='absolute top-20 left-0 w-full p-4 text-black font-bold font-serif'>
            <li className=' bg-blue-200 uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105 flex justify-center mt-1'
              onClick={() => navigate('/')}>
              Home
            </li>
            <li className='bg-blue-200 uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105 flex justify-center mt-1'
              onClick={() => navigate('/createYourDesign')}>
              Create your Design
            </li>
            <li className='bg-blue-200 uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105 flex justify-center mt-1'
              onClick={() => navigate('../pages/CreateYourDesign')}>
              Designers Section
            </li>
            <li className='bg-blue-200 uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105 flex justify-center mt-1'
              onClick={() => navigate('/tailors')}>
              Tailors
            </li>
            <li className='bg-blue-200 uppercase cursor-pointer transition transform duration-300 ease-in-out hover:text-yellow-300 hover:scale-105 flex justify-center mt-1'
              onClick={() => navigate('/creative-mugs')}>
              Creative Mugs
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
